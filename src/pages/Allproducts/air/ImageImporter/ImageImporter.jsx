// ImageImporter.js
import air1 from '../../../../assets/images/airproducts/air1.png';
import air2 from '../../../../assets/images/airproducts/air2.png';
import air4 from '../../../../assets/images/airproducts/air4.png';
import air5 from '../../../../assets/images/airproducts/air5.png';
import air6 from '../../../../assets/images/airproducts/air6.png';
import air7 from '../../../../assets/images/airproducts/air7.png';
import air8 from '../../../../assets/images/airproducts/air8.png';
import air9 from '../../../../assets/images/airproducts/air9.png';
import air10 from '../../../../assets/images/airproducts/air10.png';
import air11 from '../../../../assets/images/airproducts/air11.png';
import air12 from '../../../../assets/images/airproducts/air12.jpg';
import air14 from '../../../../assets/images/airproducts/air14.png';
import air15 from '../../../../assets/images/airproducts/air15.png';
import air16 from '../../../../assets/images/airproducts/air16.png';
import air17 from '../../../../assets/images/airproducts/air17.jpg';
// import air18 from '../../../../assets/images/airproducts/air18.png';
import air19 from '../../../../assets/images/airproducts/air19.png';
import air20 from '../../../../assets/images/airproducts/air20.png';
import air21 from '../../../../assets/images/airproducts/air21.png';
import air22 from '../../../../assets/images/airproducts/air22.png';
import air23 from '../../../../assets/images/airproducts/air23.jpg';
import air24 from '../../../../assets/images/airproducts/air24.png';
import air25 from '../../../../assets/images/airproducts/air25.jpg';
import air26 from '../../../../assets/images/airproducts/air26.png';
import air27 from '../../../../assets/images/airproducts/air27.png';
const images = [air1,air2,air4,air5,air6,air7,air8,air9,air10,air11,air12,air14,air15,air16,air17,air19,air20,air21,air22,air23,air24,air25,air26,air27];

// Array of product titles and descriptions
const productDetails = [
  { title: "Compressors", description: "Available in Rotary Scroll kulthorn and Tecumseh Models" },
  { title: "Compressors", description: "Available in Rotary Scroll kulthorn and Tecumseh Models" },
  { title: "R-22 Refron 13.6kg", description: "" },
  { title: " R-22 Mafron 13.6kg", description: "" },
  { title: "Copper Pipe ", description: "Available in  ¼ , 1/2, 3/8, 5/8, 3/4, and 7/8  sizes " },
  { title: "Copper Pipe ", description: "Available in  ¼ , 1/2, 3/8, 5/8, 3/4, and 7/8  sizes " },
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
    description: productDetails[index]?.description || `This product is Available`,
  }));
};
