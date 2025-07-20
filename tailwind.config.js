/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: 'class', // enable dark mode with .dark class

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        md: '5rem',
      },
    },
    extend:{
       zIndex: {
         '9999': '9999',
                },
          translate: {
                   'full': '100%',
                 },


      fontFamily: {
        openSans: ['OpenSans', 'sans-serif'],
        openSansItalic: ['OpenSansItalic', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      colors: {
        primary: '#03041C',
        secondary: '#FA6490',
        dark: '#0F172A',
        light: '#B7B7BB',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(329deg, #FF91FA 13.55%, #FA6490 48.54%, #F7D86A 86.44%)',
      },
    },
  },
  plugins: [],
};
