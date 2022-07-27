import React, { useState } from 'react';
import OrderListDetail from '../OrderListDetail/OrderListDetail';
import './OrderList.scss';

const OrderList = ({ item }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [cancelOrder, setCancelOrder] = useState(false);

  //구매날짜 연동
  const today = () => {
    const now = new Date(); // 현재 날짜 및 시간
    const todayMonth = now.getMonth() + 1; // 월
    const todayDate = now.getDate(); // 일

    return todayMonth + '월 ' + todayDate + '일';
  };

  const deleteOrder = () => {
    fetch('http://10.58.0.48:8000/myorder', {
      method: 'PATCH',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.iei1OnJ0YzOCAAJAwgOWsjBMeid87K09NcXIS-z4lkM',
      },
      body: JSON.stringify({
        order_id: item.id,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'CANCEL_ORDER') {
          alert('상품 주문이 취소되었습니다.');
          setCancelOrder(!cancelOrder);
        } else {
          alert('다시 시도해주세요!');
        }
      });
  };

  return (
    <li className={cancelOrder ? 'orderlist_cancel' : 'orderlist'}>
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
              {`${item.products[0].product_name} 외
                    ${item.products.length - 1}건`}
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
            onClick={deleteOrder}
            className="orderlist-box_detailbtn_cancel"
            type="button"
          >
            {cancelOrder ? 'CANCEL ORDER' : 'ORDER DELETE'}
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
