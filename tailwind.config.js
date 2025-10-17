/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kpop-pink': 'rgb(255, 128, 191)',
        'kpop-blue': 'rgb(141, 141, 242)',
        'kpop-light-pink': '#ffdae7',
        'kpop-light-blue': '#d1d1ff',
        'kpop-bg': '#f7f0f8',
        'kpop-text': '#333',
        'kpop-accent': '#ff4081',
      },
      fontFamily: {
        'Pixelify_Sans': ['"Pixelify Sans"', 'sans-serif'],
        'Kalam': ['Kalam', 'cursive'],
        'Bebas_Neue': ['"Bebas Neue"', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
      },
      keyframes: {
        sparkleFade: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '50%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
      animation: {
        'sparkle-fade': 'sparkleFade 1.5s forwards',
      },
      backgroundImage: {
        'kpop-gradient': 'linear-gradient(to bottom right, rgb(255, 128, 191), rgb(141, 141, 242))',
      },
    },
  },
  plugins: [],
};
