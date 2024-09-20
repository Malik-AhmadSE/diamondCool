// ImageImporter.js
const productDetails = [
  {"title": "Image 1", "description": "Description for image 1", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649140/Refrigerator/xnvebqtwgp95b9mv4zik.jpg"},
  {"title": "Image 2", "description": "Description for image 2", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649140/Refrigerator/ct952nuzwrzgmmv151uz.jpg"},
  {"title": "Image 3", "description": "Description for image 3", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/glilzgoeakvssbbq2rsu.jpg"},
  {"title": "Image 4", "description": "Description for image 4", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/mcmwcxy4wsmj3x5eza0b.jpg"},
  {"title": "Image 5", "description": "Description for image 5", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/ll9brrz97n7evdbep89y.jpg"},
  {"title": "Image 6", "description": "Description for image 6", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/jsa5lgyxhqivkcdpklvs.jpg"},
  {"title": "Image 7", "description": "Description for image 7", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/svfomvhud8q1u17l735e.jpg"},
  {"title": "Image 8", "description": "Description for image 8", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/nfeumi7kxlfqojcwwzu1.jpg"},
  {"title": "Image 9", "description": "Description for image 9", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/fyien2bfgjozioxaqtyl.jpg"},
  {"title": "Image 10", "description": "Description for image 10", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/oypzkqlfyygjbgvlg0jp.jpg"},
  {"title": "Image 11", "description": "Description for image 11", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649138/Refrigerator/gjaz1lshfqwkh6gkivkr.jpg"},
  {"title": "Image 12", "description": "Description for image 12", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649138/Refrigerator/bfy9hiztyvdovcmwk6hx.jpg"},
  {"title": "Image 13", "description": "Description for image 13", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649138/Refrigerator/svj1dljtknp60pz7tn9t.jpg"},
  {"title": "Image 14", "description": "Description for image 14", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649137/Refrigerator/imcbko4r9adj3zsdlwcz.jpg"},
  {"title": "Image 15", "description": "Description for image 15", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649137/Refrigerator/dranyvbjd4urhttvouwi.jpg"},
  {"title": "Image 16", "description": "Description for image 16", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649137/Refrigerator/tr7tnl6jlcfvrkg7cxpv.jpg"},
];

export const ImageImporter = () => {
  return productDetails.map((card) => ({
    image: card.image,
    title: card.title,
    description: card.description,
  }));
};
