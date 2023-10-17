/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        magenta: "#662a37",
        primary: {
          DEFAULT: "#e85476",
          border: "#382c5e",
          transparency: "#382c5e40",
        },
        secondary: {
          DEFAULT: "#151e4b",
        },
        background: {
          DEFAULT: "#05091d",
        },
      },
      rotate: {
        135: "135deg",
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', "sans-serif"],
        tilt: ['"Tilt Neon"', "cursive"],
      },
    },
  },
  plugins: [],
};
