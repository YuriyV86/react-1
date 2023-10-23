import "./index.css";

import Heading from "../heading";
import { Fragment } from "react";
import Box from "../box";

export default function Attractions({ list }) {
  return (
    <Box className="attractions" shadow>
      <Heading border>Пам'ятки поблизу</Heading>

      <div className="attractions__list">
        {list.map(({ id, name, link }) => (
          <Fragment key={id}>
            {
              <Heading className={"attraction__item"} border>
                <a className="attraction__link" href={link}>
                  {name}
                </a>
              </Heading>
            }
          </Fragment>
        ))}
      </div>
    </Box>
  );
}
