/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        'custom': '4px 4px 8px 3px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
}
