import React, { useEffect, useState } from 'react';

import CartCard from '../../components/CartCard/CartCard';

import './Cart.scss';

function Cart() {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const url = 'http://localhost:3000/data/CART_TEST_DATA.json';
    const respone = await fetch(url);
    const result = await respone.json();
    setItems(result.data);
  };

  const handleDecreaseItem = e => {
    if (items[e].amount > 1) {
      const newAmount = [...items];
      items[e].amount--;
      setItems(newAmount);
    }
  };

  const handleIncreaseItem = e => {
    if (items[e].stock <= items[e].amount) {
      alert(`현재 구매 가능한 수량은 ${items[e].stock}개 입니다.`);
      return;
    }
    const newAmount = [...items];
    items[e].amount++;
    setItems(newAmount);
  };

  const handleRemoveItem = e => {
    const filtered = items
      .map((item, index) => {
        if (e !== index) {
          return item;
        }
        return null;
      })
      .filter(n => n);
    setItems(filtered);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="cart-container">
      <div>
        {items ? (
          <>
            <h3>장바구니에 담긴 품목</h3>
            <div className="cart-items">
              {items.map((item, index) => (
                <CartCard
                  key={Math.random()}
                  item={item}
                  index={index}
                  handleDecreaseItem={handleDecreaseItem}
                  handleIncreaseItem={handleIncreaseItem}
                  handleRemoveItem={handleRemoveItem}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className="cart-line" />
      <div className="cart-order">
        <h3>주문 요약</h3>
        <div className="cart-order-inner">
          <div className="cart-order-price">
            <div className="price-tex">
              <p>세금</p>
              <p />
            </div>
            <p>주문 금액 세금 포함</p>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
