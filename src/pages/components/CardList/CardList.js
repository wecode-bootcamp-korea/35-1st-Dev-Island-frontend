import React from 'react';
// import ProductList from "../../ProductList";
import Card from '../Card/Card';
import './CardList.scss';

function CardList({ ProductList }) {
  return (
    <div className="cardList">
      {ProductList.map(Product => {
        return (
          <Card
            key={Product.id}
            id={Product.id}
            name={Product.name}
            description={Product.description}
            price={Product.price}
          />
        );
      })}
    </div>
  );
}

export default CardList;
