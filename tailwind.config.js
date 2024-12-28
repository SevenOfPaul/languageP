import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./theme.config.tsx",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        120: "30rem",
        160: "40rem"
      },
      margin: {
        0.5: "0.125rem"
      }
    },
  },
  plugins: [daisyui],
}