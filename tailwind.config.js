module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // Remove {ts,tsx} since you're using JavaScript
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#10B981",
        dark: "#1F2937",
        light: "#F9FAFB",
      },
    },
  },
  plugins: [],
}