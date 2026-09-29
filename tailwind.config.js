/**
 * Design tokens for ByteSpace.
 * The hex values and font below are read from the Figma screenshot by eye.
 * Replace them with the exact values from Figma (Inspect panel / Variables)
 * and the whole site updates.
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0B3BFF", // primary royal blue
          dark: "#0A2FD0",
          50: "#EEF2FF",
        },
        lime: {
          DEFAULT: "#C8F400", // accent lime
          soft: "#EBFF8A",
          50: "#F7FFD6",
        },
        ink: "#0E1116", // headings
        body: "#6B7280", // paragraph gray
        line: "#E5E7EB", // borders
        surface: "#F2F2F2", // logo strip
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans Variable"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 8px 30px rgba(15, 23, 42, 0.06)",
        float: "0 12px 32px rgba(11, 59, 255, 0.18)",
      },
    },
  },
  plugins: [],
};
