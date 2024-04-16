/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundImage: {
        'half-highlight': 'linear-gradient(180deg, transparent 60%, rgb(191 219 254) 60%)'
      }
    },
  },
  plugins: [],
};
