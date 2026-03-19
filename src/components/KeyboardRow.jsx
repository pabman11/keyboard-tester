import Key from './Key'

export default function KeyboardRow({ keys, pressedKeys, testedKeys }) {
  return (
    <div className="flex gap-[4px]">
      {keys.map((key, i) => (
        <Key
          key={key.code ?? `spacer-${i}`}
          keyData={key}
          isPressed={key.code ? pressedKeys.has(key.code) : false}
          isTested={key.code ? testedKeys.has(key.code) : false}
        />
      ))}
    </div>
  )
}
