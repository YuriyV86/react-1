import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import img_guests from "./guests.svg";
import img_bedrooms from "./bedrooms.svg";
import img_beds from "./beds.svg";
import img_baths from "./baths.svg";

export default function DetailProps({ guests, bedrooms, beds, baths }) {
  return (
    <Box className="detail-props" shadow={true}>
      <Heading border={true}>Деталі властивості:</Heading>

      <List guests={guests} bedrooms={bedrooms} beds={beds} baths={baths} />
    </Box>
  );
}

function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="props__list">
      <ListItem imageSrc={img_guests}>
        <span>{guests} гості</span>
      </ListItem>

      <ListItem imageSrc={img_bedrooms}>
        <span>{bedrooms} спальня</span>
      </ListItem>

      <ListItem imageSrc={img_beds}>
        <span>{beds} ліжко</span>
      </ListItem>

      <ListItem imageSrc={img_baths}>
        <span>{baths} ванна кімната</span>
      </ListItem>
    </ul>
  );
}
