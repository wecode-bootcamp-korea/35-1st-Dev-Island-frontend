/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import OrderList from '../../components/OrderList/OrderList';
import './MyOrder.scss';

const MyOrder = () => {
  return (
    <div className="myorder">
      <div className="myorder-title">
        <h1>user_name님의 주문 내역</h1>
        <h3>RECENT ORDER LIST</h3>
      </div>
      <ul className="orderlistup">
        <OrderList />
      </ul>
    </div>
  );
};

export default MyOrder;
