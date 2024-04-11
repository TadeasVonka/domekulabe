/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        beige: "#9E7E44",
        lblack: "#231F20",
        extralblack: "#2E2A2B",
      },
      width: {
        13: "3.25rem",
      },
      maxWidth: {
        1440: "1440px",
      },
      margin: {
        22: "22px",
      },
      height: {
        504: "504px",
      },
      fontSize: {
        xxs: "0.625rem",
        xxss: "0.5rem",
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        domek: "url('obrazky/barakk.png')",
      },
    },
  },
  plugins: [
    {
      plugins: ["prettier-plugin-tailwindcss"],
    },
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  ],
};
