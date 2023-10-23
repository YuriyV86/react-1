import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function AddProps({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
  checkin_instructions,
}) {
  return (
    <Box className="add-props" shadow={true}>
      <Heading border={true}>Додаткові властивості:</Heading>

      <List
        house_rules={house_rules}
        cancellation_policy={cancellation_policy}
        local_transportation={local_transportation}
        host_languages={host_languages}
        special_offers={special_offers}
        checkin_instructions={checkin_instructions}
      />
    </Box>
  );
}

function List({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
  checkin_instructions,
}) {
  return (
    <ul className="add-props__list">
      <ListItem title={"Правила дому"}>
        <span>{house_rules}</span>
      </ListItem>

      <ListItem title={"Політика скасування"}>
        <span>{cancellation_policy}</span>
      </ListItem>

      <ListItem title={"Місцевий транспорт"}>
        <span>{local_transportation}</span>
      </ListItem>

      <ListItem title={"Мови хоста"}>
        <span>{host_languages.join(", ")}</span>
      </ListItem>

      <ListItem title={"Спеціальні пропозиції:"}>
        <span>{special_offers}</span>
      </ListItem>

      <ListItem title={"Інструкції щодо реєстрації"}>
        <span>{checkin_instructions}</span>
      </ListItem>
    </ul>
  );
}
