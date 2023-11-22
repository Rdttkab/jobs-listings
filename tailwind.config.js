/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-grayish-cyan": "hsl(180, 52%, 96%)",
        "light-grayish-cyan-tablets": 'hsl(180, 31%, 95%)',
        "desaturated-dark-cyan": "hsl(180, 29%, 50%)",
        "dark-grayish-cyan": "hsl(180, 8%, 52%)",
        "very-dark-grayish-cyan": "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
