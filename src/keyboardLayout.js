// Standard 104-key ANSI keyboard layout
// Each key: { code, label, topLabel?, width? (in units), flex? }

export const KEYBOARD_LAYOUT = [
  // Row 0 — Function row
  [
    { code: 'Escape', label: 'Esc', width: 1 },
    { code: null, label: '', width: 0.5, spacer: true },
    { code: 'F1', label: 'F1' },
    { code: 'F2', label: 'F2' },
    { code: 'F3', label: 'F3' },
    { code: 'F4', label: 'F4' },
    { code: null, label: '', width: 0.5, spacer: true },
    { code: 'F5', label: 'F5' },
    { code: 'F6', label: 'F6' },
    { code: 'F7', label: 'F7' },
    { code: 'F8', label: 'F8' },
    { code: null, label: '', width: 0.5, spacer: true },
    { code: 'F9', label: 'F9' },
    { code: 'F10', label: 'F10' },
    { code: 'F11', label: 'F11' },
    { code: 'F12', label: 'F12' },
  ],

  // Row 1 — Number row
  [
    { code: 'Backquote', label: '`', topLabel: '~' },
    { code: 'Digit1', label: '1', topLabel: '!' },
    { code: 'Digit2', label: '2', topLabel: '@' },
    { code: 'Digit3', label: '3', topLabel: '#' },
    { code: 'Digit4', label: '4', topLabel: '$' },
    { code: 'Digit5', label: '5', topLabel: '%' },
    { code: 'Digit6', label: '6', topLabel: '^' },
    { code: 'Digit7', label: '7', topLabel: '&' },
    { code: 'Digit8', label: '8', topLabel: '*' },
    { code: 'Digit9', label: '9', topLabel: '(' },
    { code: 'Digit0', label: '0', topLabel: ')' },
    { code: 'Minus', label: '-', topLabel: '_' },
    { code: 'Equal', label: '=', topLabel: '+' },
    { code: 'Backspace', label: 'Backspace', width: 2 },
  ],

  // Row 2 — QWERTY
  [
    { code: 'Tab', label: 'Tab', width: 1.5 },
    { code: 'KeyQ', label: 'Q' },
    { code: 'KeyW', label: 'W' },
    { code: 'KeyE', label: 'E' },
    { code: 'KeyR', label: 'R' },
    { code: 'KeyT', label: 'T' },
    { code: 'KeyY', label: 'Y' },
    { code: 'KeyU', label: 'U' },
    { code: 'KeyI', label: 'I' },
    { code: 'KeyO', label: 'O' },
    { code: 'KeyP', label: 'P' },
    { code: 'BracketLeft', label: '[', topLabel: '{' },
    { code: 'BracketRight', label: ']', topLabel: '}' },
    { code: 'Backslash', label: '\\', topLabel: '|', width: 1.5 },
  ],

  // Row 3 — Home row
  [
    { code: 'CapsLock', label: 'Caps Lock', width: 1.75 },
    { code: 'KeyA', label: 'A' },
    { code: 'KeyS', label: 'S' },
    { code: 'KeyD', label: 'D' },
    { code: 'KeyF', label: 'F' },
    { code: 'KeyG', label: 'G' },
    { code: 'KeyH', label: 'H' },
    { code: 'KeyJ', label: 'J' },
    { code: 'KeyK', label: 'K' },
    { code: 'KeyL', label: 'L' },
    { code: 'Semicolon', label: ';', topLabel: ':' },
    { code: 'Quote', label: "'", topLabel: '"' },
    { code: 'Enter', label: 'Enter', width: 2.25 },
  ],

  // Row 4 — Shift row
  [
    { code: 'ShiftLeft', label: 'Shift', width: 2.25 },
    { code: 'KeyZ', label: 'Z' },
    { code: 'KeyX', label: 'X' },
    { code: 'KeyC', label: 'C' },
    { code: 'KeyV', label: 'V' },
    { code: 'KeyB', label: 'B' },
    { code: 'KeyN', label: 'N' },
    { code: 'KeyM', label: 'M' },
    { code: 'Comma', label: ',', topLabel: '<' },
    { code: 'Period', label: '.', topLabel: '>' },
    { code: 'Slash', label: '/', topLabel: '?' },
    { code: 'ShiftRight', label: 'Shift', width: 2.75 },
  ],

  // Row 5 — Bottom row
  [
    { code: 'ControlLeft', label: 'Ctrl', width: 1.25 },
    { code: 'MetaLeft', label: 'Win', width: 1.25 },
    { code: 'AltLeft', label: 'Alt', width: 1.25 },
    { code: 'Space', label: '', width: 6.25 },
    { code: 'AltRight', label: 'Alt', width: 1.25 },
    { code: 'MetaRight', label: 'Win', width: 1.25 },
    { code: 'ContextMenu', label: 'Menu', width: 1.25 },
    { code: 'ControlRight', label: 'Ctrl', width: 1.25 },
  ],
]

// 60% keyboard layout — RK61 style (no F-row, no nav cluster, no numpad)
export const KEYBOARD_LAYOUT_60 = [
  // Row 1 — Number row
  [
    { code: 'Escape', label: 'Esc' },
    { code: 'Digit1', label: '1', topLabel: '!' },
    { code: 'Digit2', label: '2', topLabel: '@' },
    { code: 'Digit3', label: '3', topLabel: '#' },
    { code: 'Digit4', label: '4', topLabel: '$' },
    { code: 'Digit5', label: '5', topLabel: '%' },
    { code: 'Digit6', label: '6', topLabel: '^' },
    { code: 'Digit7', label: '7', topLabel: '&' },
    { code: 'Digit8', label: '8', topLabel: '*' },
    { code: 'Digit9', label: '9', topLabel: '(' },
    { code: 'Digit0', label: '0', topLabel: ')' },
    { code: 'Minus', label: '-', topLabel: '_' },
    { code: 'Equal', label: '=', topLabel: '+' },
    { code: 'Backspace', label: 'Backspace', width: 2 },
  ],

  // Row 2 — QWERTY
  [
    { code: 'Tab', label: 'Tab', width: 1.5 },
    { code: 'KeyQ', label: 'Q' },
    { code: 'KeyW', label: 'W' },
    { code: 'KeyE', label: 'E' },
    { code: 'KeyR', label: 'R' },
    { code: 'KeyT', label: 'T' },
    { code: 'KeyY', label: 'Y' },
    { code: 'KeyU', label: 'U' },
    { code: 'KeyI', label: 'I' },
    { code: 'KeyO', label: 'O' },
    { code: 'KeyP', label: 'P' },
    { code: 'BracketLeft', label: '[', topLabel: '{' },
    { code: 'BracketRight', label: ']', topLabel: '}' },
    { code: 'Backslash', label: '\\', topLabel: '|', width: 1.5 },
  ],

  // Row 3 — Home row
  [
    { code: 'CapsLock', label: 'Caps Lock', width: 1.75 },
    { code: 'KeyA', label: 'A' },
    { code: 'KeyS', label: 'S' },
    { code: 'KeyD', label: 'D' },
    { code: 'KeyF', label: 'F' },
    { code: 'KeyG', label: 'G' },
    { code: 'KeyH', label: 'H' },
    { code: 'KeyJ', label: 'J' },
    { code: 'KeyK', label: 'K' },
    { code: 'KeyL', label: 'L' },
    { code: 'Semicolon', label: ';', topLabel: ':' },
    { code: 'Quote', label: "'", topLabel: '"' },
    { code: 'Enter', label: 'Enter', width: 2.25 },
  ],

  // Row 4 — Shift row
  [
    { code: 'ShiftLeft', label: 'Shift', width: 2.25 },
    { code: 'KeyZ', label: 'Z' },
    { code: 'KeyX', label: 'X' },
    { code: 'KeyC', label: 'C' },
    { code: 'KeyV', label: 'V' },
    { code: 'KeyB', label: 'B' },
    { code: 'KeyN', label: 'N' },
    { code: 'KeyM', label: 'M' },
    { code: 'Comma', label: ',', topLabel: '<' },
    { code: 'Period', label: '.', topLabel: '>' },
    { code: 'Slash', label: '/', topLabel: '?' },
    { code: 'ShiftRight', label: 'Shift', width: 2.75 },
  ],

  // Row 5 — Bottom row (RK61: 8 teclas)
  // Fn es una tecla de hardware — no emite keycode al OS
  [
    { code: 'ControlLeft',  label: 'Ctrl',  width: 1.25 },
    { code: 'MetaLeft',     label: 'Win',   width: 1    },
    { code: 'AltLeft',      label: 'Alt',   width: 1.25 },
    { code: 'Space',        label: '',      width: 6.25 },
    { code: 'AltRight',     label: 'Alt',   width: 1.25 },
    { code: null,           label: 'Fn',    width: 1,   hw: true },
    { code: 'ContextMenu',  label: 'Menu',  width: 1    },
    { code: 'ControlRight', label: 'Ctrl',  width: 1.25 },
  ],
]

// Navigation cluster (arrows + ins/del/home/end/pgup/pgdn)
export const NAV_CLUSTER = [
  [
    { code: 'Insert', label: 'Ins' },
    { code: 'Home', label: 'Home' },
    { code: 'PageUp', label: 'PgUp' },
  ],
  [
    { code: 'Delete', label: 'Del' },
    { code: 'End', label: 'End' },
    { code: 'PageDown', label: 'PgDn' },
  ],
  [
    { code: null, spacer: true },
    { code: 'ArrowUp', label: '\u2191' },
    { code: null, spacer: true },
  ],
  [
    { code: 'ArrowLeft', label: '\u2190' },
    { code: 'ArrowDown', label: '\u2193' },
    { code: 'ArrowRight', label: '\u2192' },
  ],
]

// Numpad
export const NUMPAD_LAYOUT = [
  [
    { code: 'NumLock', label: 'Num' },
    { code: 'NumpadDivide', label: '/' },
    { code: 'NumpadMultiply', label: '*' },
    { code: 'NumpadSubtract', label: '-' },
  ],
  [
    { code: 'Numpad7', label: '7', topLabel: 'Home' },
    { code: 'Numpad8', label: '8', topLabel: '\u2191' },
    { code: 'Numpad9', label: '9', topLabel: 'PgUp' },
    { code: 'NumpadAdd', label: '+', height: 2 },
  ],
  [
    { code: 'Numpad4', label: '4', topLabel: '\u2190' },
    { code: 'Numpad5', label: '5' },
    { code: 'Numpad6', label: '6', topLabel: '\u2192' },
  ],
  [
    { code: 'Numpad1', label: '1', topLabel: 'End' },
    { code: 'Numpad2', label: '2', topLabel: '\u2193' },
    { code: 'Numpad3', label: '3', topLabel: 'PgDn' },
    { code: 'NumpadEnter', label: 'Enter', height: 2 },
  ],
  [
    { code: 'Numpad0', label: '0', topLabel: 'Ins', width: 2 },
    { code: 'NumpadDecimal', label: '.', topLabel: 'Del' },
  ],
]
