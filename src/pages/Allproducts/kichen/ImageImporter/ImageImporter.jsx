// ImageImporter.js
const productDetails = [
    {"title": "Thermostat 30-120°C, 50-300°C, 50-320°C Temperature Italy and Turkey Brands", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652083/kitchen/hh8hfxorbadf6suuvyaz.jpg"},
    {"title": "Magnetron Coil Ignition Wire Heating Ignitor", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652083/kitchen/vzyhlytn1jzdobqzkqmv.jpg"},
    {"title": "Blower Motor for Heating", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652083/kitchen/of8ndxitgkn5cvsmchbh.jpg"},
    {"title": "U-Type Heater 1000W, 2000W, 3000W, 4000W", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652083/kitchen/gxualzduwuexchoovm3b.jpg"},
    {"title": "Thermocouple 90cm, 120cm, 150cm", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652082/kitchen/xxke3os1sw8zi8ajek7f.jpg"},
    {"title": "Selector Switches", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652082/kitchen/h4xh6cxxnw883eyghbyk.jpg"},
    {"title": "Oven Door Hinges", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652082/kitchen/gedyxyaqmileftt9kr1j.jpg"},
    {"title": "Heaters Round Type", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652082/kitchen/xx2lqpsen3ve7lh6podx.jpg"},
    {"title": "Oven Sheet", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652082/kitchen/bgfvqn9k1epmpabx2k4f.jpg"},
    {"title": "Ice Maker Timer", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652082/kitchen/xcgs7hespz8noygjkir1.jpg"},
    {"title": "Jet Nozzle from 45 to 150", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652082/kitchen/lbiq3idpd7igcrbf0vka.jpg"},
    {"title": "Magnetron or Heating Gun", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652081/kitchen/q4gyhrcrj2xoiocsopl2.jpg"},
    {"title": "Heaters Big", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652081/kitchen/cfat5sxdqprhyyrlv6e0.jpg"},
    {"title": "Gas Valve S-21, S-22", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726652080/kitchen/qglity0tzvndbnl8znij.jpg"},
    {"title": "On-Off Switches", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651846/kitchen/zxw3dt7qtlssfjj0dfkg.jpg"},
    {"title": "Gas Valve", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651743/kitchen/uy2hklwpovruj5sl1rqw.jpg"},
    {"title": "Ignition Wire, Ignition Latter and Gas Connector Valves", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651716/kitchen/h781hr7m8pvheiqswxqw.jpg"},
    {"title": "Oven Thermostats", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651715/kitchen/vdmzq3zihhtmq9x87wav.jpg"},
    {"title": "Knobs", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651715/kitchen/vand64ayzuub4gcsqxb7.jpg"},
    {"title": "Burners", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651715/kitchen/gj5yra6ukiahnnhbo6vt.jpg"},
    {"title": "Heaters", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651715/kitchen/fkp64twvpdpgorxe3bqh.jpg"},
    {"title": "Hot Plate Ceramic", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651715/kitchen/p2nqfsdsrng3b8ntbu1c.jpg"},
    {"title": "Selector Switches Single and Double", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651715/kitchen/yydm3gzdhener7vt0nfa.jpg"},
    {"title": "Oven Capacitor", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651714/kitchen/v7harxc0v9ku4yzapfsm.jpg"},
    {"title": "Hot Plate", "description": "", "image": "https://res.cloudinary.com/dvf9mmcww/image/upload/v1726651714/kitchen/vz4gmlqiekmcj0ftx8ct.jpg"},
  ];
  
  export const ImageImporter = () => {
    return productDetails.map((card) => ({
      image: card.image,
      title: card.title,
      
    }));
  };
  