// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Poppins', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Ensure all paths are included
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Custom font
      },
    },
  },
  plugins: [],
};
