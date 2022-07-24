/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './MyOrder.scss';

const MyOrder = () => {
  return (
    <div className="myorder">
      <div className="myorder-title">
        <h1>My Order</h1>
        <h2>주문 내역 확인</h2>
      </div>
      <ul className="orderlistup">
        <li className="orderlist">
          <div className="orderlist-box">
            <div className="orderlist-box_img">
              <img src="images/myorder/pexels-anton-4132534.jpeg" />
            </div>
            <div className="orderlist-box_info">
              <h3>제품이름</h3>
              <p>제품설명</p>
              <p>제품가격</p>
            </div>
          </div>
        </li>
        <li className="orderlist">
          <div className="orderlist-box">
            <div className="orderlist-box_img">
              <img src="images/myorder/pexels-anton-4132534.jpeg" />
            </div>
            <div className="orderlist-box_info">
              <h3>제품이름</h3>
              <p>제품설명</p>
              <p>제품가격</p>
            </div>
          </div>
        </li>
        <li className="orderlist">
          <div className="orderlist-box">
            <div className="orderlist-box_img">
              <img src="images/myorder/pexels-anton-4132534.jpeg" />
            </div>
            <div className="orderlist-box_info">
              <h3>제품이름</h3>
              <p>제품설명</p>
              <p>제품가격</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MyOrder;
