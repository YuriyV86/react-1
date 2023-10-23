import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import pool from "./pool.svg";
import gym from "./gym.svg";
import breakfast from "./breakfast.svg";
import wifi from "./wifi.svg";
import parking from "./parking.svg";
import pets from "./pets.svg";
import transfer from "./transfer.svg";
import concierge from "./concierge.svg";
import service from "./service.svg";
import kids from "./kids.svg";

export default function Amenities({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <Box className="amenities-props" shadow={true}>
      <Heading border={true}>Зручності:</Heading>

      <List
        hasPool={hasPool}
        hasGym={hasGym}
        hasFreeBreakfast={hasFreeBreakfast}
        hasFreeWiFi={hasFreeWiFi}
        hasParking={hasParking}
        hasPetsAllowed={hasPetsAllowed}
        hasAirportShuttle={hasAirportShuttle}
        hasConciergeService={hasConciergeService}
        hasRoomService={hasRoomService}
        hasChildFriendly={hasChildFriendly}
      />
    </Box>
  );
}

function List({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <ul className="amenities__list">
      <ListItem imageSrc={pool} disabled={Boolean(!hasPool)}>
        <span>Басейн</span>
      </ListItem>

      <ListItem imageSrc={gym} disabled={Boolean(!hasGym)}>
        <span>Спортивний зал</span>
      </ListItem>

      <ListItem imageSrc={breakfast} disabled={Boolean(!hasFreeBreakfast)}>
        <span>Безкоштовний сніданок</span>
      </ListItem>

      <ListItem imageSrc={wifi} disabled={Boolean(!hasFreeWiFi)}>
        <span>Безкоштовний Wi-Fi</span>
      </ListItem>

      <ListItem imageSrc={parking} disabled={Boolean(!hasParking)}>
        <span>Безкоштовний вуличний паркінг</span>
      </ListItem>

      <ListItem imageSrc={pets} disabled={Boolean(!hasPetsAllowed)}>
        <span>Дозволено розміщення з домашніми тваринами</span>
      </ListItem>

      <ListItem imageSrc={transfer} disabled={Boolean(!hasAirportShuttle)}>
        <span>Трансфер до/з аеропорту</span>
      </ListItem>

      <ListItem imageSrc={concierge} disabled={Boolean(!hasConciergeService)}>
        <span>Консьєрж-сервіс</span>
      </ListItem>

      <ListItem imageSrc={service} disabled={Boolean(!hasRoomService)}>
        <span>Обслуговування номерів</span>
      </ListItem>

      <ListItem imageSrc={kids} disabled={Boolean(!hasChildFriendly)}>
        <span>Підходить для дітей</span>
      </ListItem>
    </ul>
  );
}
