import React from 'react';

import './CartCard.scss';

const CartCard = ({
  item,
  handleDecreaseItem,
  handleIncreaseItem,
  handleRemoveItem,
}) => {
  const { id, product_name, price, images, quantity } = item;

  return (
    <div className="cart-card-container">
      <div className="cart-item">
        <div className="cart-remove-btn">
          <button onClick={() => handleRemoveItem(id)}>✕</button>
        </div>
        <div className="cart-row-box">
          <div className="cart-row-img-box">
            <img className="cart-row-img" alt="item" src={images[0]} />
          </div>
          <div className="cart-row-expln">
            <div>
              <h3 className="expln-title">{product_name}</h3>
            </div>
            <div className="cart-row-price">
              <div className="cart-row-count">
                <button onClick={() => handleDecreaseItem(id)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleIncreaseItem(id)}>+</button>
              </div>
              <div className="item-price">{`₩${(
                price * quantity
              ).toLocaleString()}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
