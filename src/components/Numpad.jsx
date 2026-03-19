import Key from './Key'

const UNIT = 52

// Numpad is rendered manually due to the tall +/Enter keys
export default function Numpad({ pressedKeys, testedKeys }) {
  const rows = [
    ['NumLock', 'NumpadDivide', 'NumpadMultiply', 'NumpadSubtract'],
    ['Numpad7', 'Numpad8', 'Numpad9'],      // + spans rows 1-2
    ['Numpad4', 'Numpad5', 'Numpad6'],
    ['Numpad1', 'Numpad2', 'Numpad3'],      // Enter spans rows 3-4
    ['Numpad0', 'NumpadDecimal'],
  ]

  const keyMap = {
    NumLock:         { code: 'NumLock',         label: 'Num' },
    NumpadDivide:    { code: 'NumpadDivide',    label: '/' },
    NumpadMultiply:  { code: 'NumpadMultiply',  label: '*' },
    NumpadSubtract:  { code: 'NumpadSubtract',  label: '-' },
    Numpad7:         { code: 'Numpad7',         label: '7', topLabel: 'Home' },
    Numpad8:         { code: 'Numpad8',         label: '8', topLabel: '\u2191' },
    Numpad9:         { code: 'Numpad9',         label: '9', topLabel: 'PgUp' },
    NumpadAdd:       { code: 'NumpadAdd',       label: '+' },
    Numpad4:         { code: 'Numpad4',         label: '4', topLabel: '\u2190' },
    Numpad5:         { code: 'Numpad5',         label: '5' },
    Numpad6:         { code: 'Numpad6',         label: '6', topLabel: '\u2192' },
    Numpad1:         { code: 'Numpad1',         label: '1', topLabel: 'End' },
    Numpad2:         { code: 'Numpad2',         label: '2', topLabel: '\u2193' },
    Numpad3:         { code: 'Numpad3',         label: '3', topLabel: 'PgDn' },
    NumpadEnter:     { code: 'NumpadEnter',     label: 'Enter' },
    Numpad0:         { code: 'Numpad0',         label: '0', topLabel: 'Ins', width: 2 },
    NumpadDecimal:   { code: 'NumpadDecimal',   label: '.', topLabel: 'Del' },
  }

  const unit = UNIT
  const gap = 4
  const keySize = unit - gap

  function renderKey(code, extraStyle = {}) {
    const k = keyMap[code]
    if (!k) return null
    const isPressed = pressedKeys.has(code)
    const isTested  = testedKeys.has(code)

    let bg = '#1e2028', border = '#2e3040', textColor = '#94a3b8'
    let shadow = '0 3px 0 #0d0e12'
    let ty = 0
    if (isPressed)       { bg = '#10b981'; border = '#34d399'; textColor = '#fff'; shadow = '0 1px 0 #064e3b'; ty = 2 }
    else if (isTested)   { bg = '#1a2a22'; border = '#064e3b'; textColor = '#34d399' }

    const w = (k.width ?? 1) * unit - gap
    const h = (k.height ?? 1) * unit - gap

    return (
      <div
        key={code}
        style={{
          width: w,
          height: h,
          background: bg,
          border: `1px solid ${border}`,
          color: textColor,
          boxShadow: shadow,
          transform: `translateY(${ty}px)`,
          borderRadius: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          padding: '5px 6px',
          position: 'relative',
          flexShrink: 0,
          transition: 'all 75ms',
          cursor: 'default',
          userSelect: 'none',
        }}
      >
        {k.topLabel && (
          <span style={{ position:'absolute', top:4, left:6, fontSize:9, opacity:0.6, fontFamily:'monospace', lineHeight:1 }}>
            {k.topLabel}
          </span>
        )}
        <span style={{ fontSize:11, lineHeight:1, fontFamily:'monospace', fontWeight:500 }}>
          {k.label}
        </span>
      </div>
    )
  }

  return (
    <div style={{ display:'flex', flexDirection:'column', gap: gap }}>
      {/* Row 0 */}
      <div style={{ display:'flex', gap }}>
        {['NumLock','NumpadDivide','NumpadMultiply','NumpadSubtract'].map(renderKey)}
      </div>

      {/* Rows 1+2 with tall + */}
      <div style={{ display:'flex', gap }}>
        <div style={{ display:'flex', flexDirection:'column', gap }}>
          <div style={{ display:'flex', gap }}>
            {['Numpad7','Numpad8','Numpad9'].map(renderKey)}
          </div>
          <div style={{ display:'flex', gap }}>
            {['Numpad4','Numpad5','Numpad6'].map(renderKey)}
          </div>
        </div>
        {/* Tall + key: height = 2*keySize + gap */}
        {renderKey('NumpadAdd', { height: 2 * keySize + gap })}
      </div>

      {/* Rows 3+4 with tall Enter */}
      <div style={{ display:'flex', gap }}>
        <div style={{ display:'flex', flexDirection:'column', gap }}>
          <div style={{ display:'flex', gap }}>
            {['Numpad1','Numpad2','Numpad3'].map(renderKey)}
          </div>
          <div style={{ display:'flex', gap }}>
            {renderKey('Numpad0')}
            {renderKey('NumpadDecimal')}
          </div>
        </div>
        {/* Tall Enter */}
        {renderKey('NumpadEnter', { height: 2 * keySize + gap })}
      </div>
    </div>
  )
}
