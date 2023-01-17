/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./node_modules/flowbite/*.js"],
  theme: {
    fontFamily: {
      Fraunces: ['Fraunces', 'serif'],
      Barlow: ['Barlow', 'sans-serif'],
    },
    screens: {
      'sm': '375px',
      // => @media (min-width: 375px) { ... }

      'md': '760px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        // primary
        'Soft-red': 'hsl(7,99%,70%)',
        'Yellow': 'hsl(51,100%,49%)',
        'Dark-desaturated-cyan-graphic-design-text': 'hsl(167,40%,24%)',
        'Dark-blue-photographytext': 'hsl(198,62%,26%)',
        'Dark-moderate-cyan-footer': 'hsl(168,34%,71%)',
        'blue-border': 'hsl(200,100%,62%)',
  
        // neutral
        'Very-dark-desaturated-blue': 'hsl(212,27%,19%)',
        'Very-dark-grayish-blue': 'hsl(213,9%,39%)',
        'Dark-grayish-blue': 'hsl(232,10%,55%)',
        'Grayish-blue': 'hsl(210,4%,67%)',
        'White': 'hsl(0,0%,100%)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
