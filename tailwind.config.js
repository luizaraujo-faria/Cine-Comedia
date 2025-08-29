/** @type {import('tailwindcss').Config} */

export default {
  // Não precisa mais de "content"
  darkMode: 'class',
  theme: {
    extend: {
        colors: {
          primary: '#ffd33b',
          secondary: '#0a0a0a'
        },
        fontFamily: {
          anton: 'Anton SC, serif',
          afacad: 'Afacad Flux, sans-serif'
        }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        
      });
    },
  ],
};