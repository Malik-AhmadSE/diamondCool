// ImageImporter.js
const productDetails = [
    {"title": "Washing Machine Capacitors", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650156/Washinmachines/lsygvc73ilfewe4qek8f.jpg"},
    {"title": "Drain Pump", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650156/Washinmachines/fyr7mfezz5e35rhkxjto.jpg"},
    {"title": "Small Door Switch for Samsung LG Daewoo Haier and many more", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650156/Washinmachines/bdhq5kn3p60wgim4arae.jpg"},
    {"title": "Door Switch for Samsung LG Daewoo Haier and many more", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650155/Washinmachines/yfv3cpuranjbq2gpg7wq.jpg"},
    {"title": "Door Gasket of All Models Samsung LG Daewoo Haier and many more", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650155/Washinmachines/ew7vr22a4qe1wjfaa1fv.jpg"},
    {"title": "Washing Machine Door Gasket", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650155/Washinmachines/qdapk87hqbwopnnna3wf.jpg"},
    {"title": "Solenoid Valve 3, 4, 5 Ways Both AC and DC", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650155/Washinmachines/nz8y2r9sccktxjlfqkxw.jpg"},
    {"title": "Solenoid Valve 3, 4 Ways Both AC and DC and Drain Tractor", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650155/Washinmachines/t0iddnf0bsgj9qmu9cei.jpg"},
    {"title": "Solenoid Valve 1, 2, 3 Ways Both AC and DC", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650155/Washinmachines/d4ixxnnmoosshyttv3wo.jpg"},
    {"title": "Door Lock and Sensor for Samsung LG Daewoo Haier and many more", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650155/Washinmachines/uoywy88bm8ngz8qbpxkk.jpg"},
    {"title": "Door Lock, Handle Sensor for Samsung LG Daewoo Haier and many more", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650154/Washinmachines/hbpoedcyhimnnni54dpx.jpg"},
    {"title": "Washing Machine Balance Shank", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650154/Washinmachines/z4ytj9lyzblm1mkeavge.jpg"},
    {"title": "Motor Carbons", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650154/Washinmachines/w59baanfpcavhm6h8ow3.jpg"},
    {"title": "Washing Machine for Samsung LG Daewoo Haier and many more", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650154/Washinmachines/pgmwtuowklhccrqsxdxl.jpg"},
    {"title": "Washing Machine Both Teeth and Cut Fitting for Samsung LG Daewoo Haier and many more", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650154/Washinmachines/tik0ygeg35beuoik2ge2.jpg"},
    {"title": "Drain Hoses for Inlet and Outlet", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650154/Washinmachines/mud5e6x3zedkqailmwh6.jpg"},
    {"title": "Heater for Washing Machine, Universal PC Board for Washing Machines, Timers 2, 3, 5, 6 and 7 Wires", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650153/Washinmachines/qilfrksft7ro2oy316pj.jpg"},
    {"title": "Washing Machine Motors Both Spin and Wash", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650153/Washinmachines/gdksaqgvjs8kfknkr1a5.jpg"},
    {"title": "Metal and Plastic Gear Box for Samsung LG Daewoo Haier and many more, and Seal 12mm, 14mm, 16mm, Washing Machine Motor Legs", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650153/Washinmachines/rqww2yfovf0spbar3dkf.jpg"},
    {"title": "Washing Machine Drum Spider", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650153/Washinmachines/ra9sqz9ybowwmpevi12u.jpg"},
    {"title": "Washing Machine Spider for Samsung Models", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650153/Washinmachines/fsppvbi4lpykxc51zlp8.jpg"},
    {"title": "Washing Machine Spider for LG Models", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726650153/Washinmachines/uip4zwnmjwklm1jenbth.jpg"},
  ];
  
  export const ImageImporter = () => {
    return productDetails.map((card) => ({
      image: card.image,
      title: card.title,
      // description: card.description, // Excluded from export
    }));
  };
  