import "./index.css";

import Heading from "../heading";
import { Fragment } from "react";
import Box from "../box";

export default function GuestReviews({ list }) {
  return (
    <div className="review__block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="review__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className={"review"}>
      <div className="review__title-block">
        <span className="review__title">{guestName}</span>
        <span className="review__rate">Рейтинг: {rating} </span>
      </div>

      <span className="review__info">{review}</span>
    </Box>
  );
}
