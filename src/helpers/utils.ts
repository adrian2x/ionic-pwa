export function sayHello() {
  return Math.random() < 0.5 ? 'Hello' : 'Hola'
}

export function isDarkMode() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}