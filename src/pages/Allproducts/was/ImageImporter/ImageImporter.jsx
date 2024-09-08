// ImageImporter.js
import air1 from '../../../../assets/images/airproducts/air1.png';
import air2 from '../../../../assets/images/airproducts/air2.png';


const images = [air1, air2];

// Array of product titles and descriptions
const productDetails = [
  { title: "Air Conditioner Part 1", description: "High-quality compressor for efficient cooling" },
  { title: "Air Conditioner Part 2", description: "Durable condenser for long-lasting performance" },
  { title: "Air Conditioner Part 3", description: "Energy-efficient evaporator coil" },
  { title: "Air Conditioner Part 4", description: "Precision thermostat for accurate temperature control" },
  { title: "Air Conditioner Part 5", description: "Noise-reducing fan motor" },
  { title: "Air Conditioner Part 6", description: "Premium air filters for cleaner air" },
  { title: "Air Conditioner Part 7", description: "High-capacity refrigerant tank" },
  { title: "Air Conditioner Part 8", description: "Advanced control board for smart home integration" },
  { title: "Air Conditioner Part 9", description: "Vibration-dampening mounts" },
  { title: "Air Conditioner Part 10", description: "Quick-connect tubing for easy installation" },

];


export const ImageImporter = () => {
  // Combine the images array with product details
  return images.map((image, index) => ({
    src: image,
    title: productDetails[index]?.title || `Product ${index + 1}`,
    description: productDetails[index]?.description || `Description for product ${index + 1}`,
  }));
};
