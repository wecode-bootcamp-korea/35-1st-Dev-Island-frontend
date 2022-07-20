import React from 'react';
import '../../ProductList/ProductList.scss';

function Card({ id, name, email, city }) {
  return (
    <div className="productlist-card-container">
      <div className="productlist-card-img">
        <img
          className="img"
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt="Product"
        />
      </div>
      <div className="card-info">
        <h2>{name}</h2>
        {/* <p>{description}</p>
      <p>{price}</p> */}
        <p>{email}</p>
        <p>{city}</p>
      </div>
    </div>
  );
}

export default Card;
