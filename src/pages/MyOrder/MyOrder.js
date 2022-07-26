import React, { useState, useEffect } from 'react';
import OrderList from '../../components/OrderList/OrderList';
import './MyOrder.scss';

const MyOrder = () => {
  const [userdata, setUserdata] = useState({});

  // header에 token을 넣어서 유저확인 후 그 유저가 가지고 있는 데이터를 가지고 와야해.

  useEffect(() => {
    fetch('http://10.58.5.145:8000/myorder', {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.iei1OnJ0YzOCAAJAwgOWsjBMeid87K09NcXIS-z4lkM',
      },
    })
      .then(res => res.json())
      .then(data => setUserdata(data.RESULT));
  }, []);

  console.log(userdata);

  const isData = Object.keys(userdata).length !== 0;

  if (!isData) return <>loading...</>;

  // console.log(userdata.user.order_list);

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

// userData && userData.user
// userData && userData.user && userData.user.user_name
// userData?.user?.user_name
