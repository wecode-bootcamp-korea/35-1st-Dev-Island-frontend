import React, { useState, useEffect } from 'react';
import OrderList from '../../components/OrderList/OrderList';
import './MyOrder.scss';

const MyOrder = () => {
  const [userdata, setUserdata] = useState({});

  useEffect(() => {
    fetch('http://10.58.0.48:8000/myorder', {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.iei1OnJ0YzOCAAJAwgOWsjBMeid87K09NcXIS-z4lkM',
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
