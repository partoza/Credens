/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#ffffff',
        foreground: '#171717',
        muted: '#fafafa',
        'muted-foreground': '#666666',
        border: '#eaeaea',
      },
    },
  },
  plugins: [],
}
