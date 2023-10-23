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
        magenta: "#a85566",
      },
      rotate: {
        135: "135deg",
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', "sans-serif"],
        tilt: ['"Tilt Neon"', "cursive"],
        anton: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [],
};
