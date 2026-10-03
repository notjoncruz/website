/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#f4f1ea",
          dark: "#1c1b19",
        },
      },
      keyframes: {
        enter: { from: { opacity: "0", transform: "translateY(8px)" } },
        fade: { from: { opacity: "0" } },
      },
      animation: {
        enter: "enter 500ms cubic-bezier(0.23, 1, 0.32, 1) both",
        fade: "fade 200ms cubic-bezier(0.23, 1, 0.32, 1) both",
      },
    },
  },
};
