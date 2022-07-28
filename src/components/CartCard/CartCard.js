import React from 'react';

import './CartCard.scss';

const CartCard = ({
  item,
  index,
  handleDecreaseItem,
  handleIncreaseItem,
  handleRemoveItem,
}) => {
  const { product_name, price, images, quantity } = item;

  return (
    <div className="cart-card-container">
      <div className="cart-item">
        <div className="cart-remove-btn">
          <button onClick={() => handleRemoveItem(index)}>✕</button>
        </div>
        <div className="cart-row-box">
          <img className="cart-row-img" alt="item" src={images[2]} />
          <div className="cart-row-expln">
            <div>
              <h3 className="expln-title">{product_name}</h3>
            </div>
            <div className="cart-row-price">
              <div className="cart-row-count">
                <button onClick={() => handleDecreaseItem(index)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleIncreaseItem(index)}>+</button>
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
