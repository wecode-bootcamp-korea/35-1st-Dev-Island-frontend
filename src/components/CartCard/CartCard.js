import React from 'react';

import './CartCard.scss';

const CartCard = ({
  item,
  index,
  handleDecreaseItem,
  handleIncreaseItem,
  handleRemoveItem,
}) => {
  const { title, option, price, img, amount } = item;

  return (
    <div className="cart-card-container">
      <div className="cart-item">
        <div className="cart-remove-btn">
          <button onClick={() => handleRemoveItem(index)}>✕</button>
        </div>
        <div className="cart-row-box">
          <img className="cart-row-img" alt="item" src={img} />
          <div className="cart-row-expln">
            <div>
              <h3 className="expln-title">{title}</h3>
              <p className="expln-color">{option}</p>
            </div>
            <div className="cart-row-price">
              <div className="cart-row-count">
                <button onClick={() => handleDecreaseItem(index)}>-</button>
                <span>{amount}</span>
                <button onClick={() => handleIncreaseItem(index)}>+</button>
              </div>
              <div className="item-price">{`₩${(
                price * amount
              ).toLocaleString()}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
