/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: { DEFAULT: '#2dd4bf', dark: '#14b8a6' },
        dark: { DEFAULT: '#0a0a0a', 2: '#111111', 3: '#161616' }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: []
}
