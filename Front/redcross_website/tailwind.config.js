module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#000000",
        "secondary": "#000000",
        "error": "#000000",
        "warning": "#000000",
        "success": "#000000",
      },
      backgroundImage: {
        'uncolor': "url('../public/uncolor.svg')",
      }
    },
  },
  variants: {},
  plugins: [],
}
