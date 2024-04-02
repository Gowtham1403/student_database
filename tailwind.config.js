/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: { 
      screens: {
      'xs': '320px',
      },
      fontFamily: {
        content: ["Merriweather"],
      },
    },
  },
  plugins: [],
};
