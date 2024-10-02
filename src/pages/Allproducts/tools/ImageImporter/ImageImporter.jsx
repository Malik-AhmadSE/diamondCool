
const productDetails = [
    {"title": "Image 1", "description": "Description for image 1", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676563/tools/bw0mikikxguaurmtbgiw.jpg"},
    {"title": "Image 2", "description": "Description for image 2", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676563/tools/tkykvibpfnzbe3rko4uf.jpg"},
    {"title": "Image 3", "description": "Description for image 3", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676563/tools/an7b04hutdtim4dfiwto.jpg"},
    {"title": "Image 4", "description": "Description for image 4", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676562/tools/gdbqjw0wzuucfkncrxlx.jpg"},
    {"title": "Image 5", "description": "Description for image 5", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676562/tools/atynyeqasuef9auauxl4.jpg"},
    {"title": "Image 6", "description": "Description for image 6", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676562/tools/rbtnnbep1sctiws9gsmk.jpg"},
    {"title": "Image 7", "description": "Description for image 7", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676562/tools/egi2wxmwfb7z1jurpxzo.jpg"},
    {"title": "Image 8", "description": "Description for image 8", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676562/tools/wvwqkaiqruntmtum0vbu.jpg"},
    {"title": "Image 9", "description": "Description for image 9", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676562/tools/mquveca7wemf90kgfll5.jpg"},
    {"title": "Image 10", "description": "Description for image 10", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676562/tools/v5r290xnve2r7ngcjraw.jpg"},
    {"title": "Image 11", "description": "Description for image 11", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676561/tools/nyhb5f93wrhqydzhjonl.jpg"},
    {"title": "Image 12", "description": "Description for image 12", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676561/tools/cvipuiuyr00dtq7jnlgv.jpg"},
    {"title": "Image 13", "description": "Description for image 13", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676561/tools/an7b04hutdtim4dfiwto.jpg"},
    {"title": "Image 14", "description": "Description for image 14", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676561/tools/gdbqjw0wzuucfkncrxlx.jpg"},
    {"title": "Image 15", "description": "Description for image 15", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676561/tools/atynyeqasuef9auauxl4.jpg"},
    {"title": "Image 16", "description": "Description for image 16", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726676561/tools/rbtnnbep1sctiws9gsmk.jpg"},
  ];
  

export const ImageImporter = () => {
  return productDetails.map((card) => ({
    image: card.image,
    title: card.title,
    description: card.description,
  }));
};
