import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import CartCard from '../../components/CartCard/CartCard';

import './Cart.scss';

function Cart() {
  const ACCESS_TOKEN = sessionStorage.getItem('ACCESS_TOKEN');
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const getItems = async () => {
    const url = 'http://10.58.1.160:8000/carts';
    const respone = await fetch(url, {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.bd9JCUK-PC6dAZc4WyRjjEw6zwaqw2YtsaANRY6YKjo',
      },
    });
    const result = await respone.json();
    setItems(result.cart);
    setTotal(
      result.cart.reduce((previousValue, currentValue) => {
        return (
          parseInt(previousValue) +
          parseInt(currentValue.price * currentValue.quantity)
        );
      }, 0)
    );
  };

  const handleDecreaseItem = async e => {
    if (items[e].quantity > 1) {
      const url = 'http://10.58.1.160:8000/carts';
      const respone = await fetch(url, {
        method: 'PATCH',
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.bd9JCUK-PC6dAZc4WyRjjEw6zwaqw2YtsaANRY6YKjo',
        },
        body: JSON.stringify({
          cart_id: items[e].id,
          quantity: -1,
        }),
      });
      const result = await respone.json();
      if (result.message === 'UPDATE_SUCCESS') {
        const newQuantity = [...items];
        items[e].quantity--;
        setItems(newQuantity);
        setTotal(a => a - parseInt(items[e].price));
      }
    }
  };

  const handleIncreaseItem = async e => {
    const url = 'http://10.58.1.160:8000/carts';
    const respone = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.bd9JCUK-PC6dAZc4WyRjjEw6zwaqw2YtsaANRY6YKjo',
      },
      body: JSON.stringify({
        cart_id: items[e].id,
        quantity: +1,
      }),
    });
    const result = await respone.json();
    if (result.message === 'OUT_OF_STOCK') {
      alert(`현재 구매 가능 수량 최대 입니다.`);
      return;
    }
    const newQuantity = [...items];
    items[e].quantity++;
    setItems(newQuantity);
    setTotal(a => a + parseInt(items[e].price));
  };

  const handleRemoveItem = async e => {
    const url = 'http://10.58.1.160:8000/carts';
    const respone = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.bd9JCUK-PC6dAZc4WyRjjEw6zwaqw2YtsaANRY6YKjo',
      },
      body: JSON.stringify({
        cart_ids: [items[e].id],
      }),
    });
    const result = await respone.json();
    if (result.message === 'DELETE_SUCCESS') {
      const filtered = items
        .map((item, index) => {
          if (e !== index) {
            return item;
          }
          return null;
        })
        .filter(n => n);
      setItems(filtered);
      setTotal(a => a - items[e].price * items[e].quantity);
    }
  };

  useEffect(() => {
    // if (!ACCESS_TOKEN) {
    //   alert('로그인 해주세요.');
    //   navigate('/signin');
    // }
    getItems();
  }, []);

  return (
    <div className="cart-container">
      {items.length > 0 ? (
        <div className="cart-inner">
          <h3>장바구니에 담긴 품목</h3>
          <div className="cart-wap">
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
        </div>
      ) : (
        <div className="not-items">
          <div className="background">
            <div className="box">
              <Link to="/productlist">
                <img alt="icon" src="/images/Cart/W_O_Black.svg" />
              </Link>
            </div>
          </div>
          <h1>장바구니가 비었습니다.</h1>
          <h3>다양한 제품을 살펴보시고 원하는 모델을 찾아보세요.</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
