import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import CartCard from '../../components/CartCard/CartCard';
import SignupModal from '../../components/SignUpModal/SignUpModal';

import './Cart.scss';
import API from '../../config';

function Cart() {
  const ACCESS_TOKEN = sessionStorage.getItem('ACCESS_TOKEN');
  const navigate = useNavigate();
  const [pending, setPending] = useState(true);
  const [Modal, setModal] = useState(false);
  const [items, setItems] = useState([]);
  const totalPrice = items.reduce((previousValue, currentValue) => {
    return (
      parseInt(previousValue) +
      parseInt(currentValue.price * currentValue.quantity)
    );
  }, 0);

  const openModal = () => {
    setModal(true);
    setTimeout(() => {
      navigate('/myorder');
    }, 2000);
  };

  const getItems = async () => {
    const response = await fetch(API.cart, {
      headers: {
        Authorization: ACCESS_TOKEN,
      },
    });
    const result = await response.json();
    setItems(result.cart);
  };

  const handleDecreaseItem = async id => {
    const selectedId = items.findIndex(item => item.id === id);
    if (items[selectedId].quantity > 1 && pending) {
      setPending(false);
      const response = await fetch(API.cart, {
        method: 'PATCH',
        headers: {
          Authorization: ACCESS_TOKEN,
        },
        body: JSON.stringify({
          cart_id: items[selectedId].id,
          quantity: -1,
        }),
      });
      const result = await response.json();
      setPending(true);
      if (result.message === 'UPDATE_SUCCESS') {
        const newQuantity = [...items];
        newQuantity[selectedId].quantity--;
        setItems(newQuantity);
      }
    }
  };

  const handleIncreaseItem = async id => {
    const selectedId = items.findIndex(item => item.id === id);
    if (pending) {
      setPending(false);
      const response = await fetch(API.cart, {
        method: 'PATCH',
        headers: {
          Authorization: ACCESS_TOKEN,
        },
        body: JSON.stringify({
          cart_id: items[selectedId].id,
          quantity: 1,
        }),
      });
      const result = await response.json();
      setPending(true);
      if (result.message === 'OUT_OF_STOCK') {
        alert(`최대 구매 가능 수량 입니다.`);
        return;
      }
      const newQuantity = [...items];
      newQuantity[selectedId].quantity++;
      setItems(newQuantity);
    }
  };

  const handleRemoveItem = async id => {
    const selectedId = items.findIndex(item => item.id === id);
    if (pending) {
      setPending(false);
      const response = await fetch(API.cart, {
        method: 'DELETE',
        headers: {
          Authorization: ACCESS_TOKEN,
        },
        body: JSON.stringify({
          cart_ids: [items[selectedId].id],
        }),
      });
      const result = await response.json();
      setPending(true);
      if (result.message === 'DELETE_SUCCESS') {
        const filtered = items.filter(itme => itme.id !== id);
        setItems(filtered);
      }
    }
  };

  const handleMoveOrder = async () => {
    if (pending) {
      setPending(false);
      const response = await fetch(API.order, {
        method: 'POST',
        headers: {
          Authorization: ACCESS_TOKEN,
        },
        body: JSON.stringify({
          cart_ids: items.map(item => item.id),
        }),
      });
      const result = await response.json();
      setPending(true);
      if (result.message === 'NEW_ORDER_CREATED') {
        openModal();
        return;
      }
      alert('잠시후 다시 시도 해주세요.');
    }
  };

  useEffect(() => {
    if (!ACCESS_TOKEN) {
      alert('로그인 해주세요.');
      navigate('/signin');
      return;
    }
    getItems();
  }, []);

  return (
    <div className="cart-container">
      {items.length > 0 ? (
        <div className="cart-inner">
          {Modal && (
            <SignupModal
              text="구매가 완료 되었습니다!"
              name={`총${items.length}건`}
            />
          )}
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
                    <p>
                      ₩{Math.ceil((totalPrice * 10) / 110).toLocaleString()}
                    </p>
                  </div>
                  <div className="price-total">
                    <p>주문 금액 세금 포함</p>
                    <p>₩{totalPrice.toLocaleString()}</p>
                  </div>
                  <div className="order-btn">
                    <button onClick={handleMoveOrder} className="order">
                      주문 하기
                    </button>
                    <button
                      onClick={() => navigate('/productlist')}
                      className="back"
                    >
                      쇼핑 계속 하기
                    </button>
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
