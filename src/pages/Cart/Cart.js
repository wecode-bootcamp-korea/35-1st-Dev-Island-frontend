import React, { useEffect, useState } from 'react';

import CartCard from '../../components/CartCard/CartCard';

import './Cart.scss';

function Cart() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const getItems = async () => {
    const url = 'http://localhost:3000/data/CART_TEST_DATA.json';
    const respone = await fetch(url);
    const result = await respone.json();
    setItems(result.data);
    setTotal(
      result.data.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.price;
      }, 0)
    );
  };

  const handleDecreaseItem = e => {
    if (items[e].amount > 1) {
      const newAmount = [...items];
      items[e].amount--;
      setItems(newAmount);
      setTotal(a => a - items[e].price);
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
    setTotal(a => a + items[e].price);
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
              <p>₩{Math.ceil((total * 10) / 110).toLocaleString()}</p>
            </div>
            <div className="price-total">
              <p>주문 금액 세금 포함</p>
              <p>₩{total.toLocaleString()}</p>
            </div>
            <div className="order-btn">
              <button className="order">주문 하기</button>
              <button className="back">쇼핑 계속 하기</button>
            </div>
            <div className="order-text">
              <p>이 주문은 무료 배송이 적용됩니다.</p>
              <div className="order-cupon">
                <p>쿠폰 코드</p>
                <p>Add</p>
              </div>
            </div>
            <div className="order-card">
              <div>
                <img alt="icon" src="/images/Cart/visa.png" />
              </div>
              <div>
                <img alt="icon" src="/images/Cart/mastercard.png" />
              </div>
              <div>
                <img alt="icon" src="/images/Cart/paypal.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
