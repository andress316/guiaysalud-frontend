import flowbite from "flowbite-react/tailwind"

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    flowbite.content(),

  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'slide-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide-left-infinite': 'slide-left 25s linear infinite',
      }
    },
    fontFamily:{
      poppins:["poppins"]
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    flowbite.plugin(),
  ],
}
