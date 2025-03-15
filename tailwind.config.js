// @ts-check
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
    theme: {
      extend: {
        backgroundImage: {
          'home-img': "url('/images/home-img.jpeg')",
        },
      },
    },
    plugins: [],
  };
  