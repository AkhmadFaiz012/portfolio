/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        "primary": '#a21caf',
        "secondary": '#701a75',
        "click-btn": '#ef4444',
        "white": '#f7f7f7',
        "gray": '#374151',
        "dark": '#0f172a',
        "dark-2": '#6b7280',
        "dark-3": '#94a3b8',
      },
      fontFamily: {
        Poppins: ["poppins, sans-serif"],
        Montserrat: ["montserrat, sans-serif"],
        Roboto: ["roboto, sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens : {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        },
      },
    },
  },
  plugins: [],
}

