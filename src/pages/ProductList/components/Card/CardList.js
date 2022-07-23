import React from 'react';
// import ProductList from "../../ProductList";
import Card from './Card';
import '../../ProductList.scss';
import CompareCard from './CompareCard';

function CardList({ productlist }) {
  return (
    <div className="productlist-cardlist">
      {productlist.map(product => {
        return (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default CardList;
