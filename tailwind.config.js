/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroImage': "url('./assets/images/HeroImage.jpg')",
        'ProductImage': "url('./assets/images/ProductImage.png')",
        'ContactHeroImage': "url('./assets/images/hcontact.png')",
        'ServiceImage': "url('./assets/images/Servicesbg.png')",
        'QoutesImage': "url('./assets/images/qoutesbg.png')",
      },
      colors:{
        construction:"#9aff81",
      }
    },
  },
  plugins: [],
}

