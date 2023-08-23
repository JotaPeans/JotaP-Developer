/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelViolet: "#353353",
        darkPastelViolet: "#141320",
        pastelCyan: "#89A3B2",
        darkPastelCyan: "#6B7F8A",
        pastelPink: "#ff4c60",
        darkPastelPink: "#cc3c4c",
        pastelGreen: "#B2D3BE",
        pastelYellow: "#f9d74c"
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        changa: ["Changa", "sans-serif"],
      },

      keyframes: {
        bounceLite: {
          '0%, 100%': { transform: "translate(0, 3px)" },
          '50%': { transform: "translate(0, -3px)" },
        }
      },

      animation: {
        bounceLite: 'bounceLite 4s ease-in-out infinite',
      },

      screens: {
        "tablet": "830px"
      }
    }
  },
  darkMode: "class",
  plugins: [],
}