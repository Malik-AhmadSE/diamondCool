// ImageImporter.js
const productDetails = [
  {"title": "Kitchen Image 1", "description": "Description for kitchen image 1", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652083/kitchen/hh8hfxorbadf6suuvyaz.jpg"},
  {"title": "Kitchen Image 2", "description": "Description for kitchen image 2", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652083/kitchen/vzyhlytn1jzdobqzkqmv.jpg"},
  {"title": "Kitchen Image 3", "description": "Description for kitchen image 3", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652083/kitchen/of8ndxitgkn5cvsmchbh.jpg"},
  {"title": "Kitchen Image 4", "description": "Description for kitchen image 4", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652083/kitchen/gxualzduwuexchoovm3b.jpg"},
  {"title": "Kitchen Image 5", "description": "Description for kitchen image 5", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652082/kitchen/xxke3os1sw8zi8ajek7f.jpg"},
  {"title": "Kitchen Image 6", "description": "Description for kitchen image 6", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652082/kitchen/h4xh6cxxnw883eyghbyk.jpg"},
  {"title": "Kitchen Image 7", "description": "Description for kitchen image 7", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652082/kitchen/gedyxyaqmileftt9kr1j.jpg"},
  {"title": "Kitchen Image 8", "description": "Description for kitchen image 8", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652082/kitchen/xx2lqpsen3ve7lh6podx.jpg"},
  {"title": "Kitchen Image 9", "description": "Description for kitchen image 9", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652082/kitchen/bgfvqn9k1epmpabx2k4f.jpg"},
  {"title": "Kitchen Image 10", "description": "Description for kitchen image 10", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652082/kitchen/xcgs7hespz8noygjkir1.jpg"},
  {"title": "Kitchen Image 11", "description": "Description for kitchen image 11", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652082/kitchen/lbiq3idpd7igcrbf0vka.jpg"},
  {"title": "Kitchen Image 12", "description": "Description for kitchen image 12", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652081/kitchen/q4gyhrcrj2xoiocsopl2.jpg"},
  {"title": "Kitchen Image 13", "description": "Description for kitchen image 13", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652081/kitchen/cfat5sxdqprhyyrlv6e0.jpg"},
  {"title": "Kitchen Image 14", "description": "Description for kitchen image 14", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652080/kitchen/qglity0tzvndbnl8znij.jpg"},
  {"title": "Kitchen Image 15", "description": "Description for kitchen image 15", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651846/kitchen/zxw3dt7qtlssfjj0dfkg.jpg"},
  {"title": "Kitchen Image 16", "description": "Description for kitchen image 16", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651743/kitchen/uy2hklwpovruj5sl1rqw.jpg"},
  {"title": "Kitchen Image 17", "description": "Description for kitchen image 17", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651716/kitchen/h781hr7m8pvheiqswxqw.jpg"},
  {"title": "Kitchen Image 18", "description": "Description for kitchen image 18", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651715/kitchen/vdmzq3zihhtmq9x87wav.jpg"},
  {"title": "Kitchen Image 19", "description": "Description for kitchen image 19", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651715/kitchen/vand64ayzuub4gcsqxb7.jpg"},
  {"title": "Kitchen Image 20", "description": "Description for kitchen image 20", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651715/kitchen/gj5yra6ukiahnnhbo6vt.jpg"},
  {"title": "Kitchen Image 21", "description": "Description for kitchen image 21", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651715/kitchen/fkp64twvpdpgorxe3bqh.jpg"},
  {"title": "Kitchen Image 22", "description": "Description for kitchen image 22", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651715/kitchen/p2nqfsdsrng3b8ntbu1c.jpg"},
  {"title": "Kitchen Image 23", "description": "Description for kitchen image 23", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651715/kitchen/yydm3gzdhener7vt0nfa.jpg"},
  {"title": "Kitchen Image 24", "description": "Description for kitchen image 24", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651714/kitchen/v7harxc0v9ku4yzapfsm.jpg"},
  {"title": "Kitchen Image 25", "description": "Description for kitchen image 25", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651714/kitchen/vz4gmlqiekmcj0ftx8ct.jpg"},
];

export const ImageImporter = () => {
  return productDetails.map((card) => ({
    image: card.image,
    title: card.title,
    description: card.description,
  }));
};
