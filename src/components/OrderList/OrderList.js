import React, { useState } from 'react';
import OrderListDetail from '../OrderListDetail/OrderListDetail';
import './OrderList.scss';

const OrderList = ({ item }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [cancleOrder, setCancleOrder] = useState(false);

  //구매날짜 연동
  const today = () => {
    let now = new Date(); // 현재 날짜 및 시간
    let todayMonth = now.getMonth() + 1; // 월
    let todayDate = now.getDate(); // 일

    return todayMonth + '월 ' + todayDate + '일';
  };

  return (
    <li className={cancleOrder ? 'orderlist' : 'orderlist_cancle'}>
      <div className="orderlist-box-before">
        <div className="orderlist-box">
          <div className="orderlist-box_orderinfo-date">
            <p>{today()}</p>
          </div>
          <div className="orderlist-box_orderinfo">
            <p className="orderlist-box_ordernumber">
              주문번호 : {item.order_number}
            </p>
            <p className="orderlist-box_product">
              {`${item?.products[0].product_name} 외
                    ${item?.products.length - 1}건`}
            </p>
          </div>
        </div>
        <div>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className={
              showInfo
                ? 'orderlist-box_detailbtn_close'
                : 'orderlist-box_detailbtn'
            }
            type="button"
          >
            {showInfo ? 'CLOSE' : 'DETAIL VIEW'}
          </button>
          <button
            onClick={() => setCancleOrder(!cancleOrder)}
            className="orderlist-box_detailbtn_cancle"
            type="button"
          >
            {cancleOrder ? 'ORDER CANCLE' : '취소된 주문입니다만?'}
          </button>
        </div>
      </div>
      {showInfo && (
        <OrderListDetail products={item.products} price={item.total_price} />
      )}
    </li>
  );
};

export default OrderList;
