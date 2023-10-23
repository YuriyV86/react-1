import "./index.css";

import Heading from "../heading";

export default function Contact({ name, avatar, rate, responce, info, phone }) {
  return (
    <div className="title">
      <div className="heading__block">
        <img className="heading__avatar" src={avatar}></img>

        <div className="heading__sub-block">
          <Heading>Господар – {name}</Heading>

          <div className="heading__sub-block-info">
            <span className="heading__sub-value">{phone}</span>

            <span className="heading__sub-value">{responce}</span>

            <span className="heading__sub-value">
              {rate}% відсотків швидкості відгуку
            </span>
          </div>
        </div>
      </div>

      <span className="heading__info">{info}</span>
    </div>
  );
}
