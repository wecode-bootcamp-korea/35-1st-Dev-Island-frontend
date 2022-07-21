import React from 'react';
// import ProductList from "../../ProductList";
import Card from './Card';
import '../../ProductList/ProductList.scss';

function CardList({ productlist }) {
  return (
    <div className="productlist-card-list">
      {productlist.map(product => {
        return (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            email={product.email}
            city={product.city}
          />
        );
      })}
    </div>
  );
}

export default CardList;
