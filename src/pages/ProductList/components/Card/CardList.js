import React from 'react';
import Card from './Card';
import '../../ProductList.scss';

function CardList({ productlist }) {
  return (
    <div className="productlist-cardlist">
      {productlist.map(product => {
        return (
          <Card
            key={product.id}
            id={product.id}
            image_url={product.image_url}
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
