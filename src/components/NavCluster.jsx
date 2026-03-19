import Key from './Key'

const NAV_ROWS = [
  [
    { code: 'Insert',    label: 'Ins' },
    { code: 'Home',      label: 'Home' },
    { code: 'PageUp',    label: 'PgUp' },
  ],
  [
    { code: 'Delete',    label: 'Del' },
    { code: 'End',       label: 'End' },
    { code: 'PageDown',  label: 'PgDn' },
  ],
  [
    { code: null, spacer: true },
    { code: 'ArrowUp',   label: '\u2191' },
    { code: null, spacer: true },
  ],
  [
    { code: 'ArrowLeft', label: '\u2190' },
    { code: 'ArrowDown', label: '\u2193' },
    { code: 'ArrowRight',label: '\u2192' },
  ],
]

export default function NavCluster({ pressedKeys, testedKeys }) {
  return (
    <div className="flex flex-col gap-[4px]">
      {NAV_ROWS.map((row, ri) => (
        <div key={ri} className="flex gap-[4px]">
          {row.map((key, ki) => (
            <Key
              key={key.code ?? `sp-${ri}-${ki}`}
              keyData={key}
              isPressed={key.code ? pressedKeys.has(key.code) : false}
              isTested={key.code ? testedKeys.has(key.code) : false}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
