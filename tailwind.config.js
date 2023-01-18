/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      cursive: '"Great Vibes", cursive',
      sans: ['"Roboto"', "sans-serif"],
    },
    extend: {
      height: {
        495: "495px",
        200: "200px",
        "90%": "90%",
        "10px": "10px",
      },
      width: {
        495: "495px",
        "72%": "72%",
        "80%": "80%",
        89: "89px",
        "87%": "87%",
        "83%": "83%",
        "75%": "75%",
        "90%": "90%",
        657: "657px",
        "10px": "10px",
        128: "128px",
        400: "400px",
        420: "420px",
        430: "430px",
        700: "700px",
        800: "800px",
      },
      spacing: {
        300: "300px",
        "5%": "5%",
        400: "400px",
        540: "540px",
      },
      lineHeight: {
        14: "14px",
      },
    },
  },
  plugins: [],
};
