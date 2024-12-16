/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: "16px",
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1200px",
      },
    },
    backgroundImage: {
      "hero-image": "url('../public/assets/images/webp/hero-bg-img.webp')",
    },
    extend: {
      colors: {
        darkBlue: "#191A42",
      },
    },
  },
  plugins: [],
};

