/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        beige: "#9E7E44",
      },
      width: {
        13: "3.25rem",
        30: "30px",
      },
      maxWidth: {
        1440: "1440px",
      },
      margin: {
        22: "22px",
      },
      height: {
        504: "504px",
        30: "30px",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      fontFamily: {
        Mayek: ["Noto Sans Meetei Mayek", "sans-serif"],
        Proxima: ["proxima-nova", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        domek: "url('obrazky/barak.png')",
      },
    },
  },
  plugins: [
    {
      plugins: ["prettier-plugin-tailwindcss"],
    },
  ],
};
