/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        screens:{
          lg:"1400px"
        },
        padding:"20px"
      },
      boxShadow:{
        "custom": "0 10px 100px 10px rgba(255, 255, 255, 0.2)"
      }
    },
  },
  plugins: [],
}