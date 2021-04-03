import standardPic from "../../assets/image/standardRoom.jpg";
import privatePic from "../../assets/image/privateRoom.jpg";

const Accommodations = [
  {
    id: 0,
    title: "Standard Room",
    description:
      "This room is in an open-air atrium that’s cleaned & sanitized daily & furnished with hypoallergenic bedding.",
    price: 30.99,
    photo: standardPic,
  },
  {
    id: 1,
    title: "Private Suite",
    description:
      "Large suites are separated from the standard rooms for a morepeaceful, private environment & are perfect for multiple pets ina family. Rooms are cleaned & sanitized daily & feature a raised cot & TV tuned to pet-themed shows.",
    price: 50.99,
    photo: privatePic,
  },
];

export default Accommodations;
