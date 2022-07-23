import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../ProductList.scss';
function Card(props) {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`../../../ProductDetail/ProductDetail/${props.id}`);
  };
  return (
    <div className="productlist-card-container" onClick={''}>
      <div className="productlist-card-img">
        <img
          className="img"
          src={`https://robohash.org/${props.id}?set=set2&size=180x180`}
          alt="Product"
        />
      </div>
      <div className="card-info">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default Card;
