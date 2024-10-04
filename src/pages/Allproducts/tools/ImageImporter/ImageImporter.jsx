
const productDetails = [
  {"title": "Brazing Accessories", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676563/tools/bw0mikikxguaurmtbgiw.jpg"},
  {"title": "Service Pump", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676563/tools/tkykvibpfnzbe3rko4uf.jpg"},
  {"title": "Tool Box", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676563/tools/an7b04hutdtim4dfiwto.jpg"},
  {"title": "Hand Tools", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676562/tools/gdbqjw0wzuucfkncrxlx.jpg"},
  {"title": "Big Flaring Tool Box", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676562/tools/atynyeqasuef9auauxl4.jpg"},
  {"title": "Tube Bander", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676562/tools/rbtnnbep1sctiws9gsmk.jpg"},
  {"title": "Flare and Tube Cutter", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676562/tools/egi2wxmwfb7z1jurpxzo.jpg"},
  {"title": "Small Flaring Tool Box", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676562/tools/wvwqkaiqruntmtum0vbu.jpg"},
  {"title": "Flaring Accessories", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676562/tools/mquveca7wemf90kgfll5.jpg"},
  {"title": "Stands", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676561/tools/nyhb5f93wrhqydzhjonl.jpg"},
  {"title": "Clamp Meter", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676561/tools/cvipuiuyr00dtq7jnlgv.jpg"},
];

  

export const ImageImporter = () => {
  return productDetails.map((card) => ({
    image: card.image,
    title: card.title,
  }));
};
