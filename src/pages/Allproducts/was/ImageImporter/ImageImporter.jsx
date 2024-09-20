// ImageImporter.js
const productDetails = [
  {"title": "Washing Machine 1", "description": "Description for washing machine 1", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650156/Washinmachines/lsygvc73ilfewe4qek8f.jpg"},
  {"title": "Washing Machine 2", "description": "Description for washing machine 2", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650156/Washinmachines/fyr7mfezz5e35rhkxjto.jpg"},
  {"title": "Washing Machine 3", "description": "Description for washing machine 3", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650156/Washinmachines/bdhq5kn3p60wgim4arae.jpg"},
  {"title": "Washing Machine 4", "description": "Description for washing machine 4", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650155/Washinmachines/yfv3cpuranjbq2gpg7wq.jpg"},
  {"title": "Washing Machine 5", "description": "Description for washing machine 5", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650155/Washinmachines/ew7vr22a4qe1wjfaa1fv.jpg"},
  {"title": "Washing Machine 6", "description": "Description for washing machine 6", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650155/Washinmachines/qdapk87hqbwopnnna3wf.jpg"},
  {"title": "Washing Machine 7", "description": "Description for washing machine 7", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650155/Washinmachines/nz8y2r9sccktxjlfqkxw.jpg"},
  {"title": "Washing Machine 8", "description": "Description for washing machine 8", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650155/Washinmachines/t0iddnf0bsgj9qmu9cei.jpg"},
  {"title": "Washing Machine 9", "description": "Description for washing machine 9", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650155/Washinmachines/d4ixxnnmoosshyttv3wo.jpg"},
  {"title": "Washing Machine 10", "description": "Description for washing machine 10", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650155/Washinmachines/uoywy88bm8ngz8qbpxkk.jpg"},
  {"title": "Washing Machine 11", "description": "Description for washing machine 11", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650154/Washinmachines/hbpoedcyhimnnni54dpx.jpg"},
  {"title": "Washing Machine 12", "description": "Description for washing machine 12", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650154/Washinmachines/z4ytj9lyzblm1mkeavge.jpg"},
  {"title": "Washing Machine 13", "description": "Description for washing machine 13", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650154/Washinmachines/w59baanfpcavhm6h8ow3.jpg"},
  {"title": "Washing Machine 14", "description": "Description for washing machine 14", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650154/Washinmachines/pgmwtuowklhccrqsxdxl.jpg"},
  {"title": "Washing Machine 15", "description": "Description for washing machine 15", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650154/Washinmachines/tik0ygeg35beuoik2ge2.jpg"},
  {"title": "Washing Machine 16", "description": "Description for washing machine 16", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650154/Washinmachines/mud5e6x3zedkqailmwh6.jpg"},
  {"title": "Washing Machine 17", "description": "Description for washing machine 17", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650153/Washinmachines/qilfrksft7ro2oy316pj.jpg"},
  {"title": "Washing Machine 18", "description": "Description for washing machine 18", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650153/Washinmachines/gdksaqgvjs8kfknkr1a5.jpg"},
  {"title": "Washing Machine 19", "description": "Description for washing machine 19", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650153/Washinmachines/rqww2yfovf0spbar3dkf.jpg"},
  {"title": "Washing Machine 20", "description": "Description for washing machine 20", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650153/Washinmachines/ra9sqz9ybowwmpevi12u.jpg"},
  {"title": "Washing Machine 21", "description": "Description for washing machine 21", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650153/Washinmachines/fsppvbi4lpykxc51zlp8.jpg"},
  {"title": "Washing Machine 22", "description": "Description for washing machine 22", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650153/Washinmachines/uip4zwnmjwklm1jenbth.jpg"},
];

export const ImageImporter = () => {
  return productDetails.map((card) => ({
    image: card.image,
    title: card.title,
    description: card.description,
  }));
};
