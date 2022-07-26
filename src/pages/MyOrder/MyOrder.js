/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
// import OrderList from '../../components/OrderList/OrderList';
import './MyOrder.scss';

const MyOrder = () => {
  const [userdata, setUserdata] = useState({});

  useEffect(() => {
    fetch('/data/OrderListData.json')
      .then(res => res.json())
      .then(data => setUserdata(data));
  }, []);

  const isData = Object.keys(userdata).length !== 0;

  if (!isData) return <>loading...</>;

  return (
    <div className="myorder">
      <div className="myorder-title">
        <h1>{userdata.user.user_name}님의 주문 내역</h1>
        <h3>RECENT ORDER LIST</h3>
      </div>
      <ul className="orderlistup">
        {/* <OrderList item={userdata.user.order_list} /> */}
      </ul>
    </div>
  );
};

export default MyOrder;

// userData && userData.user

// userData && userData.user && userData.user.user_name

// userData?.user?.user_name
