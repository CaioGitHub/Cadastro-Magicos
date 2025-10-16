/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "var(--accent-color)",
          hover: "var(--accent-hover)",
          light: "var(--accent-light)",
        },
        panel: "var(--panel-color)",
        border: "var(--border-color)",
      },
    },
  },
  plugins: [],
};
