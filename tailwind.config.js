/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary
        'soft-red': 'hsl(7, 99%, 70%)',
        'yellow': 'hsl(51, 100%, 49%)',
        'dark-desat-cyan': 'hsl(167, 40%, 24%)', // gd text
        'dark-blue': 'hsl(198, 62%, 26%)', // photography text
        'dark-mod-cyan': 'hsl(168, 34% 41%)', // footer
        'light-mod-cyan': 'hsl(169, 35%, 72%)',
        // neutral
        'very-dark-desat-blue': 'hsl(212, 27%, 19%)',
        'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
        'dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'grayish-blue': 'hsl(210, 4%, 67%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      fontSize: {
        'main': '18px',
      },
      fontFamily: {
        'fraunces': ['Fraunces', 'sans-serif'], // 700, 900
        'barlow': ['Barlow', 'sans-serif'] // 600
      }
    },
  },
  plugins: [],
}

