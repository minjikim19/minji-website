/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "half-highlight":
          "linear-gradient(180deg, transparent 60%, rgb(191 219 254) 60%)",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
