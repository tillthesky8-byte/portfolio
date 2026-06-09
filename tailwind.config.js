/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-violet': '#7c3aed',
        'brand-cyan': '#06b6d4',
        'bg-deep': '#0b1220',
        'muted-1': '#94a3b8',
        'muted-2': '#64748b'
      }
    },
  },
  plugins: [],
}