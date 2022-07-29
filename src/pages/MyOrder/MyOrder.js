import React, { useState, useEffect } from 'react';
import OrderList from '../../components/OrderList/OrderList';
import './MyOrder.scss';
import API from '../../config';

const MyOrder = () => {
  const ACCESS_TOKEN = sessionStorage.getItem('ACCESS_TOKEN');
  const [userdata, setUserdata] = useState({});

  useEffect(() => {
    fetch(`${API.order}`, {
      headers: {
        Authorization: ACCESS_TOKEN,
      },
    })
      .then(res => res.json())
      .then(data => setUserdata(data.RESULT));
  }, []);

  const isData = Object.keys(userdata).length !== 0;

  if (!isData) return <>loading...</>;

  return (
    <div className="myorder">
      <div className="myorder-title">
        <h1>{userdata.user_name}님의 주문 내역</h1>
        <h3>RECENT ORDER LIST</h3>
      </div>
      <ul className="orderlistup">
        {userdata.orders_list.map(item => {
          return <OrderList key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default MyOrder;
