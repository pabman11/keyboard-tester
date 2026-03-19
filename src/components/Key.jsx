const UNIT = 52 // px per key unit

export default function Key({ keyData, isPressed, isTested }) {
  if (keyData.spacer) {
    return <div style={{ width: (keyData.width ?? 0.5) * UNIT + 'px', flexShrink: 0 }} />
  }

  const width = (keyData.width ?? 1) * UNIT - 4
  const height = (keyData.height ?? 1) * UNIT - 4

  let bg = 'bg-[#1e2028] border-[#2e3040]'
  let textColor = 'text-slate-400'
  let shadow = 'shadow-[0_3px_0_#0d0e12]'

  // Tecla de hardware (ej. Fn del RK61): no emite keycode al OS
  if (keyData.hw) {
    bg = 'bg-[#181920] border-[#252630]'
    textColor = 'text-slate-600'
  }

  if (isPressed) {
    bg = 'bg-emerald-500 border-emerald-400'
    textColor = 'text-white'
    shadow = 'shadow-[0_1px_0_#064e3b]'
  } else if (isTested) {
    bg = 'bg-[#1a2a22] border-emerald-900'
    textColor = 'text-emerald-400'
    shadow = 'shadow-[0_3px_0_#0d0e12]'
  }

  return (
    <div
      className={`
        relative flex flex-col justify-end items-start
        rounded-[5px] border select-none cursor-default
        transition-all duration-75
        ${bg} ${textColor} ${shadow}
        px-[6px] pb-[5px] pt-[5px]
        ${isPressed ? 'translate-y-[2px]' : ''}
      `}
      style={{ width: width + 'px', height: height + 'px', flexShrink: 0 }}
    >
      {keyData.topLabel && (
        <span className="absolute top-[4px] left-[6px] text-[9px] leading-none opacity-60 font-mono">
          {keyData.topLabel}
        </span>
      )}
      <span className="text-[11px] leading-none font-mono font-medium">
        {keyData.label}
      </span>
    </div>
  )
}
