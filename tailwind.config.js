/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary": {
          "900" : "#03045E",
          "800" : "#023E8A",
          "700" : "#0077B6",
          "600" : "#0096C7",
          "500" : "#00B4D8",
          "400" : "#48CAE4",
          "300" : "#90E0EF",
          "200" : "#ADE8F4",
          "100" : "#CAF0F8",
          "50" : "#E0F7FA",
        },
        third : {
          1 : '#F72585',
          2 : '#B5179E',
          3 : '#7209B7',
          4 : '#560BAD',
          5 : '#480CA8',
          6 : '#3A0CA3',
          7 : '#3F37C9',
          8 : '#4361EE',
          9 : '#4895EF',
          10 : '#4CC9F0',
        },
        secondary : {
          1 : '#14213d',
          2 : '#0d1b2a',
          3 : '#1b263b',
          4 : '#415a77',
          5 : '#778da9',
          6 : '#e0e1dd',
        },
        forth : {
          start : '#6F7DFF',
          end : '#7B88FF',

        }
      }
    },
  },
  plugins: [],
}

