/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroImage': "url('https://res.cloudinary.com/dvf9mmcww/image/upload/v1725969053/MainImages/cugu6t9feamhonq9i7j3.jpg')",
        'ProductImage': "url('https://res.cloudinary.com/dvf9mmcww/image/upload/v1725983019/MainImages/ddulcxa3c3o3pq9qdyov.png')",
        'ContactHeroImage': "url('https://res.cloudinary.com/dvf9mmcww/image/upload/v1725983011/MainImages/lx8gj0w090hezy7hre0s.png')",
        'ServiceImage': "url('https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982995/MainImages/kwkhxkwbdwo6vcvb2lgo.png')",
        'QoutesImage': "url('https://res.cloudinary.com/dvf9mmcww/image/upload/v1725983009/MainImages/ahynwouaiagqs9ueophr.png')",
      },
      colors:{
        construction:"#9aff81",
        navcolor:"#74fa1b",
      }
    },
  },
  plugins: [],
}

