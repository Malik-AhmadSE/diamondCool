// Array of product titles
const productDetails = [
    {"title": "Glass heater for fridge 10”, 12, 14, 16, 18, 20, 22 and 24 inches", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649140/Refrigerator/xnvebqtwgp95b9mv4zik.jpg"},
    {"title": "Refrigerator gases in 1 kg packing R-22, R-134a, R-404, R-410, R-407 and R-600", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649140/Refrigerator/ct952nuzwrzgmmv151uz.jpg"},
    {"title": "Fridge door switches", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/glilzgoeakvssbbq2rsu.jpg"},
    {"title": "Door Handle", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/mcmwcxy4wsmj3x5eza0b.jpg"},
    {"title": "Charging Accessories", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/ll9brrz97n7evdbep89y.jpg"},
    {"title": "Timers", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/jsa5lgyxhqivkcdpklvs.jpg"},
    {"title": "Kodama transformer 150w, 200w, 250w, 500w and 700w", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/svfomvhud8q1u17l735e.jpg"},
    {"title": "Cooling fan round DC 12V", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/nfeumi7kxlfqojcwwzu1.jpg"},
    {"title": "Fridge door gasket of all models", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/fyien2bfgjozioxaqtyl.jpg"},
    {"title": "Condenser", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649139/Refrigerator/oypzkqlfyygjbgvlg0jp.jpg"},
    {"title": "Small fan for cooling B AC and DC", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649138/Refrigerator/gjaz1lshfqwkh6gkivkr.jpg"},
    {"title": "Bio metal 2, 3, 4 wires fuse 2, 5 and 10k sensor ML 45 and 55", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649138/Refrigerator/bfy9hiztyvdovcmwk6hx.jpg"},
    {"title": "Small fan for refrigerant", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649138/Refrigerator/svj1dljtknp60pz7tn9t.jpg"},
    {"title": "Condenser motor 5W, 10W, 16W, 25W", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649137/Refrigerator/imcbko4r9adj3zsdlwcz.jpg"},
    {"title": "Condenser motor", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649137/Refrigerator/dranyvbjd4urhttvouwi.jpg"},
    {"title": "Condenser motor", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726649137/Refrigerator/tr7tnl6jlcfvrkg7cxpv.jpg"},
  ];
  
  export const ImageImporter = () => {
    return productDetails.map((card) => ({
      image: card.image,
      title: card.title,
      
    }));
  };
  