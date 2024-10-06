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
        'ContactHeroImage': "url('https://res.cloudinary.com/dvf9mmcww/image/upload/v1727838142/contact_g5wcrd.jpg')",
        'ServiceImage': "url('https://res.cloudinary.com/dvf9mmcww/image/upload/v1725982995/MainImages/kwkhxkwbdwo6vcvb2lgo.png')",
        'QoutesImage': "url('https://res.cloudinary.com/dvf9mmcww/image/upload/v1725983009/MainImages/ahynwouaiagqs9ueophr.png')",
        'Nav':"url('https://res.cloudinary.com/dvf9mmcww/image/upload/v1728177840/WhatsApp_Image_2024-10-04_at_12.31.15_748cb110_mtjueo.jpg')",
        'logo':"url('https://res.cloudinary.com/dvf9mmcww/image/upload/v1728190039/25_z9icov.png')"
      },
      colors:{
        construction:"#9aff81",
        navcolor:"#74fa1b",
        col:"#fbdb24"
      }
    },
  },
  plugins: [],
}

