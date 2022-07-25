import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../ProductList.scss';
function Card({ id, name, description, price, image_url }) {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`../../../ProductDetail/ProductDetail/${id}`);
  };
  return (
    <div className="productlist-card-container" onClick={''}>
      <div className="productlist-card-img">
        <img className="img" src={image_url} alt="Product" />
      </div>
      <div className="card-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{`₩${price.toLocaleString()}`}</p>
      </div>
    </div>
  );
}

export default Card;
