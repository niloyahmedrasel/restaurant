/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
    theme: { 
      extend: {
        colors: {
          mytheme: {
            gold: "hsl(38, 61%, 73%)",
            silver: "hsla(0, 0%, 65%, 1)",
            white: "hsla(0, 0%, 100%, 1)",
            crimson:"crimson"
          }
        }
      }
    },
  
  plugins: [require("daisyui")],
}

