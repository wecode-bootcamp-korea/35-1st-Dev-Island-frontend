/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import OrderListDetail from '../OrderListDetail/OrderListDetail';
import './OrderList.scss';

const OrderList = props => {
  // const [orderList, setOrderList] = useState([]);
  const [showInfo, setShowInfo] = useState(false);

  //구매날짜 연동
  const today = () => {
    let now = new Date(); // 현재 날짜 및 시간
    let todayMonth = now.getMonth() + 1; // 월
    let todayDate = now.getDate(); // 일

    return todayMonth + '월 ' + todayDate + '일';
  };

  // const setShowInfo = e => showInfo(e.target.value); ? 버튼 눌렀을 때 왜 다 열려? 검색하니까 e.target.value..어떻게 해야된다는거지...

  // useEffect(() => {
  //   fetch('data/OrderListData.json')
  //     .then(res => res.json())
  //     .then(data => setOrderList(data));
  // }, []);

  return (
    <div>
      {props.item.map(item => {
        return (
          <li key={item.id} className="orderlist">
            <div className="orderlist-box-before">
              <div className="orderlist-box">
                <div className="orderlist-box_orderinfo-date">
                  <p>{today}</p>
                </div>
                <div className="orderlist-box_orderinfo">
                  <p className="orderlist-box_ordernumber">
                    주문번호 :{item.order_number}
                  </p>
                  <p className="orderlist-box_product">
                    {`${item.products[0].product_name} 외
                    ${item.products.length - 1}건`}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowInfo(!showInfo)}
                className={
                  showInfo
                    ? 'orderlist-box_detailbtn'
                    : 'orderlist-box_detailbtn_close'
                }
                type="button"
              >
                {showInfo ? 'CLOSE' : 'OPEN'}
              </button>
            </div>
            {showInfo && <OrderListDetail products={item.products} />}
          </li>
        );
      })}
    </div>
  );
};

export default OrderList;
