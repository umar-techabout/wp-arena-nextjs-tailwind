/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Open Sans"', 'sans-serif'], // Reference the font by its name
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 70s linear infinite',
      },
    },
    screens: {
      xxs: '360px',
      xs: '576px', 
      sm: '640px',
      md: '768px',
      lg: '991px',
      xl: '1199px',
      '2xl': '1440px',
    },
  },
  plugins: [],
};
