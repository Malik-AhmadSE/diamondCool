// Array of product titles and descriptions
const productDetails = [
    {"title": "Cleaning Elements", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648837/airproducts/fv5lrwc9jgdok0bz2qrn.jpg"},
    {"title": "HCFC 141b 13.6kg ", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648837/airproducts/kwx0gowcalhlkgksfvqs.jpg"},
    {"title": "Capacitors", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648837/airproducts/azdjgclq4rzjmnvugus3.jpg"},
    {"title": "Thermostat Honeywell", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648836/airproducts/tmvdhlndw5ph9hqns0hb.jpg"},
    {"title": "R-134 Frostberg 13.6kg", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648836/airproducts/ytvogjswoizp4udpv6tu.jpg"},
    {"title": "Indoor motors", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648836/airproducts/jai487caqnwka02mwgpz.jpg"},
    {"title": "R-134 Honeywell 13.6kg USA standard", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648836/airproducts/wtgk0vq6hrj9pmbks92w.jpg"},
    {"title": "R-410 refron 11.6kg made in India", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648836/airproducts/lllyxtpkqdckv7rbbvmt.jpg"},
    {"title": "AC filters", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648836/airproducts/tf0swnxs8niagw7ii9ey.jpg"},
    {"title": "Air conditioning stand 500*500, 550*550 and 600*600 Indoor stand and vibration pad", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648835/airproducts/vkvq0briuwjirygmzzn8.jpg"},
    {"title": "Elbows union flare nut and flaring accessories", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648835/airproducts/ydyvllio7qxcwybhxzel.jpg"},
    {"title": "Outdoor fan motors", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648835/airproducts/cbnwnhy8njlzbnl3awrp.jpg"},
    {"title": "temperature controller", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648835/airproducts/csjyda4pkrftflogj1ie.jpg"},
    {"title": "Motors For Air-condition Units ", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648835/airproducts/wiwqtnzd1cxuwcnfmqe2.jpg"},
    {"title": "copper ¼, ½, 3/8, 5/8, 3/4, 7/8 ", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648835/airproducts/uzvgq33kkh4eq5vaghqe.jpg"},
    {"title": "R-22 Maxref 13.6kg ", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648835/airproducts/k0eb6hhmizqj8c5wadvo.jpg"},
    {"title": "Remote of All brands ", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648834/airproducts/c1fw3dxfewbrqgfqicqj.jpg"},
    {"title": "R-22 mafron 13.6kg made in India", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648834/airproducts/obhmailhpaudpmbe3rah.jpg"},
    {"title": "Axial fans of different sizes blowers ", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648834/airproducts/xpi22g0y33iu6binkmck.jpg"},
    {"title": "Manifold Gauge and quick coupler valve ", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648834/airproducts/dezu70uidry685wmsrqg.jpg"},
    {"title": "compressors ", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648834/airproducts/ppz4hs4zxibrhgzvxlk8.jpg"},
    {"title": "R-22 Refron 13.6kg made in India ", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648834/airproducts/mkpeovfxsqh707lmkf9a.jpg"},
    {"title": "flaring accessories Mapp gas, brass aluminum and copper rad, flare nut and hand torch ", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648834/airproducts/relgw8vy6fqy27qwki3j.jpg"},
    {"title": "fan blades", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648833/airproducts/tsepi9tchku0ypliagdw.jpg"},
    {"title": "universal kit U03 relay 1 - 4 pins overload contactors 2 poles 3 poles ", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648833/airproducts/kj4cncixh4twnpt9qbtm.jpg"},
    {"title": "compressor Small and Big ", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648833/airproducts/ou6lypt2vhzasybgjqjj.jpg"},
    {"title": "insulations accessories ", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648833/airproducts/hdojxujnzwphqjlswosn.jpg"},
    {"title": "Manifold Gauge and quick coupler valve access valves", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726648833/airproducts/tlszzhqwjwfkhsgwzaid.jpg"},
  ];
  
  export const ImageImporter = () => {
    return productDetails.map((card) => ({
      image: card.image,
      title: card.title || `Product ${index + 1}`,
    }));
  };
  