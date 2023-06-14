import React, { Fragment } from "react";

import "./card.css";

const Card = ({ name, rating, release }) => {
  return (
    <Fragment>
      <div className="container">
        <h3>{name}</h3>
        <p>
          Ratting : <strong>{rating} </strong>
        </p>
        <p>
          Release Date : <strong>{release} </strong>
        </p>
      </div>
    </Fragment>
  );
};

export default Card;
