export default function Stats({ testedKeys, lastKey, pressedKeys, onReset, totalKeys }) {
  const pct = Math.round((testedKeys.size / totalKeys) * 100)

  return (
    <div className="flex items-center gap-6 px-4 py-3 rounded-xl bg-[#1a1c22] border border-[#2e3040] font-mono text-sm">
      {/* Progress bar */}
      <div className="flex-1 min-w-[160px]">
        <div className="flex justify-between text-xs text-slate-500 mb-1">
          <span>keys tested</span>
          <span className="text-emerald-400 font-medium">{testedKeys.size} / {totalKeys}</span>
        </div>
        <div className="h-[4px] rounded-full bg-[#2e3040] overflow-hidden">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all duration-300"
            style={{ width: pct + '%' }}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="w-px h-8 bg-[#2e3040]" />

      {/* Last key */}
      <div className="text-center min-w-[90px]">
        <div className="text-xs text-slate-500 mb-0.5">last key</div>
        <div className="text-emerald-400 text-sm font-semibold tracking-wide truncate">
          {lastKey ?? '—'}
        </div>
      </div>

      {/* Divider */}
      <div className="w-px h-8 bg-[#2e3040]" />

      {/* Active count */}
      <div className="text-center min-w-[60px]">
        <div className="text-xs text-slate-500 mb-0.5">held</div>
        <div className="text-slate-200 text-sm font-semibold">
          {pressedKeys.size}
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={onReset}
        className="ml-auto px-3 py-1.5 rounded-lg bg-[#2e3040] hover:bg-[#3a3d50] text-slate-400 hover:text-slate-200 text-xs transition-colors active:scale-95"
      >
        reset
      </button>
    </div>
  )
}
