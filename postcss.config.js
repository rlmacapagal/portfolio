module.exports = {
  plugins: {
    tailwindcss: {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}", //kasi may mga pages and components na nasa loob ng portfolio folder
      ],
      theme: {
        extend: {},
      },
      plugins: [require("tailwind-scrollbar")],
    },
    autoprefixer: {},
  },
};
