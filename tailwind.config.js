module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    lineClamp: {
      1: 1,
      2: 2,
      3: 3
    }
  },
  plugins: [
    require('tailwindcss-line-clamp')
  ],
}
