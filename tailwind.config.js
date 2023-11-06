/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {


  




    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      '3xl': '1750px',
      // => @media (min-width: 1536px) { ... }
    },
    
    extend: {
      






      fontSize: {
        '10xl' : '7rem'
      },
      dropShadow: {
        '4xl': [
            '10px 10px 0px rgba(255, 255, 255, 0.4)',
            '20px 20px 0px rgba(255, 255, 255, 0.5)'
        ]

      },



      animation: {
      marquee: 'marquee 30s linear infinite',
      marquee2: 'marquee2 30s linear infinite',
        fadein1: '0.8s fadeIn 0.1s ease-in-out forwards',
        fadein2: '0.8s fadeIn2 0.3s ease-in-out forwards',
        fadein3: '0.8s fadeIn 0.5s ease-in-out forwards',
        fadein4: '0.8s fadeIn 1.1s ease-in-out forwards',
        fadein5: '0.8s fadeIn 1.2s ease-in-out forwards',
        fadein6: '0.8s fadeIn 1.3s ease-in-out forwards',
        fadein7: '0.8s fadeIn 1.4s ease-in-out forwards',
        fadein8: '0.8s fadeIn 1.5s ease-in-out forwards',
      zoom: 'zoom 6s ease-in-out',
    },


    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      marquee2: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
       zoom: {
        '0%': { transform: 'scale(100%)' },
        '50%': { transform: 'scale(150%)' },
        '100%': { transform: 'scale(100%)' },
      },
      fadeIn: {
        '0%': { opacity: '0' , transform: 'translateY(1rem)'},
        '100%': { opacity: '1' , transform: 'translateY(0)'},
        
      },
            fadeIn2: {
        '0%': { opacity: '0' , transform: 'translatex(10rem)'},
        '100%': { opacity: '1' , transform: 'translateY(0)'},
        
      },
      animationDelay: {
        '0': '0s',
        '1': '1s',
        '2': '2s',
        '3': '3s',
        '4': '4s',
        '5': '5s',
        '6': '6s',
        '7': '7s',
      },
    },
      fontFamily: {
        galaxy: ["galaxy", "sans-serif"],
        galaxy_outline: ["galaxy2", "sans-serif"],
        Abang: ["Abang", "sans-serif"],
        galaxy_outline: ["galaxy2", "sans-serif"],
      },
    },
  },
  plugins: [],
};
