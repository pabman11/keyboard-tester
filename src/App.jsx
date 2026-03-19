import { useState, useEffect, useCallback } from 'react'
import { KEYBOARD_LAYOUT, KEYBOARD_LAYOUT_60 } from './keyboardLayout'
import KeyboardRow from './components/KeyboardRow'
import NavCluster from './components/NavCluster'
import Numpad from './components/Numpad'
import Stats from './components/Stats'

const LAYOUTS = [
  { id: 'full', label: '100%', totalKeys: 104 },
  { id: 'tkl',  label: 'TKL',  totalKeys: 87  },
  { id: '60',   label: '60%',  totalKeys: 61  },
]

export default function App() {
  const [layout, setLayout]         = useState('full')
  const [pressedKeys, setPressedKeys] = useState(new Set())
  const [testedKeys, setTestedKeys]   = useState(new Set())
  const [lastKey, setLastKey]         = useState(null)

  const handleKeyDown = useCallback((e) => {
    e.preventDefault()
    const code = e.code
    setPressedKeys(prev => { const s = new Set(prev); s.add(code); return s })
    setTestedKeys(prev  => { const s = new Set(prev); s.add(code); return s })
    setLastKey(code)
  }, [])

  const handleKeyUp = useCallback((e) => {
    e.preventDefault()
    const code = e.code
    setPressedKeys(prev => { const s = new Set(prev); s.delete(code); return s })
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup',   handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup',   handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  const reset = () => {
    setPressedKeys(new Set())
    setTestedKeys(new Set())
    setLastKey(null)
  }

  const switchLayout = (id) => {
    setLayout(id)
    reset()
  }

  const currentLayout = LAYOUTS.find(l => l.id === layout)

  return (
    <div
      className="min-h-[100dvh] flex flex-col items-center justify-center gap-6 px-6 py-10"
      tabIndex={-1}
    >
      {/* Header */}
      <div className="w-full max-w-fit flex items-end justify-between gap-8">
        <div>
          <h1 className="text-left text-xs font-mono text-slate-600 tracking-widest uppercase mb-1">
            keyboard tester
          </h1>
          <div className="h-px bg-gradient-to-r from-emerald-900/60 via-[#2e3040] to-transparent w-full" />
        </div>

        {/* Layout switcher */}
        <div className="flex gap-1 mb-[2px]">
          {LAYOUTS.map(l => (
            <button
              key={l.id}
              onClick={() => switchLayout(l.id)}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                layout === l.id
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-700/50'
                  : 'bg-[#1e2028] text-slate-500 border border-[#2e3040] hover:text-slate-300'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {/* Keyboard + clusters */}
      <div className="flex gap-4 items-end">
        {/* Main keyboard */}
        <div className="flex flex-col gap-[4px]">
          {(layout === '60' ? KEYBOARD_LAYOUT_60 : KEYBOARD_LAYOUT).map((row, ri) => (
            <KeyboardRow
              key={ri}
              keys={row}
              pressedKeys={pressedKeys}
              testedKeys={testedKeys}
            />
          ))}
        </div>

        {/* Nav cluster + arrow keys — oculto en 60% */}
        {layout !== '60' && (
          <>
            <div className="w-6" />
            <div className="self-end mb-[4px]">
              <NavCluster pressedKeys={pressedKeys} testedKeys={testedKeys} />
            </div>
          </>
        )}

        {/* Numpad — solo en full layout */}
        {layout === 'full' && (
          <>
            <div className="w-4" />
            <div className="self-end mb-[4px]">
              <Numpad pressedKeys={pressedKeys} testedKeys={testedKeys} />
            </div>
          </>
        )}
      </div>

      {/* Stats bar */}
      <div className="w-full max-w-fit">
        <Stats
          testedKeys={testedKeys}
          lastKey={lastKey}
          pressedKeys={pressedKeys}
          onReset={reset}
          totalKeys={currentLayout.totalKeys}
        />
      </div>

      {/* Hint */}
      <p className="text-[11px] font-mono text-slate-700 tracking-wide">
        press any key — green = tested, bright green = currently held
      </p>
    </div>
  )
}
