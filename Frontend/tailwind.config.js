/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'source-code-pro': ['Source Code Pro', 'Inter', 'sans-serif']
      },
      boxShadow: {
        'sharp-xl':[
          '0 0 0 2px rgba(0, 0, 0, 1)', // Black border
          '11px 11px 0 0 rgba(57, 57, 57, 1)' // Existing shadow
        ],
        'sharp-lg':[
          '0 0 0 2px rgba(0, 0, 0, 1)', // Black border
          '5px 5px 0 0 rgba(57, 57, 57, 1)' // Existing shadow
        ],
        'sharp-md':[
          '0 0 0 2px rgba(0, 0, 0, 1)', // Black border
          '6px 6px 0 0 rgba(57, 57, 57, 1)' 
        ],
        'sharp-sm': [
          '0 0 0 1px rgba(0, 0, 0, 1)', // Black border
          '4px 4px 0 0 rgba(57, 57, 57, 1)' // Existing shadow
        ],
        'sharp': [
          '0 0 0 1px rgba(0, 0, 0, 1)', // Black border
          '7px 7px 0 0 rgba(57, 57, 57, 1)' // Existing shadow
        ],
        
      },
    },
  },
  plugins: [],
}