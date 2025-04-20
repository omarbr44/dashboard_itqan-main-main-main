/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
        colors:{
        "site-primary": "#fe4c25",
        "site-secondary": "#0d0e13",
        "site-section": "#f5f5f5",
        "site-p": "#364152",
        }
    },
    fontFamily:{
        Roboto: ["Roboto, sans-serif"],
    },
    container: {
        padding: "0.5rem",
        center: true,
    },
    screens:{
        sm: {'max': '640px'},
        md: {'max': '1024px',
            'min': '640px'} ,
        lg: '1024px',
    }
},
  plugins: [],
}

