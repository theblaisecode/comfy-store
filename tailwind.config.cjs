/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "19.5vh": "19.5vh", // Custom height for 90% of the viewport height
      },
    },
  },
  daisyui: {
    themes: ["dim", "winter"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
