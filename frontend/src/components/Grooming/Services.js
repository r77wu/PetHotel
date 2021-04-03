import bathing from "../../assets/image/dogBathing.jpg";
import grooming from "../../assets/image/petGrooming.jpg";

const services = [
  {
    id: 1,
    title: "Bath & Brush",
    description:
      "For dogs that do not need a haircut or for dogs in-between full haircut appointments. Service includes Oxygen-Infused Bath, Tangerine Shampoo, Blow Dry, Up to 15-Minute Brushing, Sanitary Trim, Nail Trim, Ear Cleaning or Flushing, Anal Gland Cleaning, Scissoring Feet & Shaving Pads.",
    price: 40.99,
    photo: bathing,
  },
  {
    id: 2,
    title: "Bath & Full Haircut",
    description:
      "Helps reduce shedding. Package includes Bath and Haircut services plus Low-Shed Shampoo, DeShedding Solution and Up to 20 Minutes Brushing with FURminator tool.",
    price: 70.99,
    photo: grooming,
  },
];

export default services;
