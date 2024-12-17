import "./card.css";

import "./Card.css";

import type { seriesI } from "../../types/programs";

function Card({ title, synopsis, poster }: seriesI) {
  return (
    <figure>
      <figcaption>{title}</figcaption>
      <img src={poster} alt={`Serie named ${title}`} />
      <p>{synopsis}</p>
    </figure>
  );
}

export default Card;
