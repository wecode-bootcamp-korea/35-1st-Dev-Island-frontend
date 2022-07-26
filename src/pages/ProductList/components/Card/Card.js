import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../ProductList.scss';

function Card({ id, name, description, price, image_url }) {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`./pages/ProductDetail/ProductDetail${id}`);
  };

  return (
    <div className="productlist-card-container" onClick={goToDetail}>
      <div className="productlist-card-img">
        <img className="img" src={image_url} alt="Product" />
      </div>
      <div className="card-info">
        <h2>{name}</h2>
        <hr />
        <p>{description}</p>
        <hr />
        <p>₩{parseInt(price).toLocaleString()}</p>
      </div>
    </div>
  );
}

export default Card;
