// // eslint-disable-next-line no-undef
// const flowbite = require("flowbite-react/tailwind");
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
//   theme: {
//     extend: {},
//   },
//   plugins: [flowbite.plugin()],
// }

// tailwind.config.js
import flowbite from "flowbite/plugin";


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Update if different
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite],
};