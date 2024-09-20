// Array of product titles and descriptions
const productDetails = [
  {"title": "Image 1", "description": "Description for image 1", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648837/airproducts/fv5lrwc9jgdok0bz2qrn.jpg"},
  {"title": "Image 2", "description": "Description for image 2", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648837/airproducts/kwx0gowcalhlkgksfvqs.jpg"},
  {"title": "Image 3", "description": "Description for image 3", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648837/airproducts/azdjgclq4rzjmnvugus3.jpg"},
  {"title": "Image 4", "description": "Description for image 4", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648836/airproducts/tmvdhlndw5ph9hqns0hb.jpg"},
  {"title": "Image 5", "description": "Description for image 5", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648836/airproducts/ytvogjswoizp4udpv6tu.jpg"},
  {"title": "Image 6", "description": "Description for image 6", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648836/airproducts/jai487caqnwka02mwgpz.jpg"},
  {"title": "Image 7", "description": "Description for image 7", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648836/airproducts/wtgk0vq6hrj9pmbks92w.jpg"},
  {"title": "Image 8", "description": "Description for image 8", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648836/airproducts/lllyxtpkqdckv7rbbvmt.jpg"},
  {"title": "Image 9", "description": "Description for image 9", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648836/airproducts/tf0swnxs8niagw7ii9ey.jpg"},
  {"title": "Image 10", "description": "Description for image 10", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648835/airproducts/vkvq0briuwjirygmzzn8.jpg"},
  {"title": "Image 11", "description": "Description for image 11", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648835/airproducts/ydyvllio7qxcwybhxzel.jpg"},
  {"title": "Image 12", "description": "Description for image 12", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648835/airproducts/cbnwnhy8njlzbnl3awrp.jpg"},
  {"title": "Image 13", "description": "Description for image 13", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648835/airproducts/csjyda4pkrftflogj1ie.jpg"},
  {"title": "Image 14", "description": "Description for image 14", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648835/airproducts/wiwqtnzd1cxuwcnfmqe2.jpg"},
  {"title": "Image 15", "description": "Description for image 15", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648835/airproducts/uzvgq33kkh4eq5vaghqe.jpg"},
  {"title": "Image 16", "description": "Description for image 16", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648835/airproducts/k0eb6hhmizqj8c5wadvo.jpg"},
  {"title": "Image 17", "description": "Description for image 17", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648834/airproducts/c1fw3dxfewbrqgfqicqj.jpg"},
  {"title": "Image 18", "description": "Description for image 18", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648834/airproducts/obhmailhpaudpmbe3rah.jpg"},
  {"title": "Image 19", "description": "Description for image 19", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648834/airproducts/xpi22g0y33iu6binkmck.jpg"},
  {"title": "Image 20", "description": "Description for image 20", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648834/airproducts/dezu70uidry685wmsrqg.jpg"},
  {"title": "Image 21", "description": "Description for image 21", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648834/airproducts/ppz4hs4zxibrhgzvxlk8.jpg"},
  {"title": "Image 22", "description": "Description for image 22", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648834/airproducts/mkpeovfxsqh707lmkf9a.jpg"},
  {"title": "Image 23", "description": "Description for image 23", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648834/airproducts/relgw8vy6fqy27qwki3j.jpg"},
  {"title": "Image 24", "description": "Description for image 24", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648833/airproducts/tsepi9tchku0ypliagdw.jpg"},
  {"title": "Image 25", "description": "Description for image 25", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648833/airproducts/kj4cncixh4twnpt9qbtm.jpg"},
  {"title": "Image 26", "description": "Description for image 26", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648833/airproducts/ou6lypt2vhzasybgjqjj.jpg"},
  {"title": "Image 27", "description": "Description for image 27", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648833/airproducts/hdojxujnzwphqjlswosn.jpg"},
  {"title": "Image 28", "description": "Description for image 28", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648833/airproducts/tlszzhqwjwfkhsgwzaid.jpg"},
  {"title": "Image 29", "description": "Description for image 29", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648833/airproducts/nslssswr7y4aos9azvpl.jpg"},
]



export const ImageImporter = () => {
  return productDetails.map((card) => ({
    image: card.image,
    title: card.title || `Product ${index + 1}`,
    description: card.description || `Description for product ${index + 1}`,
  }));
};
