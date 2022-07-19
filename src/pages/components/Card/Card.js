import React from 'react';
import './Card.scss';

function Card({ id, name, description, price }) {
  return (
    <div className="cardContainer">
      <img
        // src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="Product"
      />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default Card;
