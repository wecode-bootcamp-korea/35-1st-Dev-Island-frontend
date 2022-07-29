import React, { useState } from 'react';
import OrderListDetail from '../OrderListDetail/OrderListDetail';
import './OrderList.scss';
import API from '../../config';

const OrderList = ({ item }) => {
  const ACCESS_TOKEN = sessionStorage.getItem('ACCESS_TOKEN');
  const [isShowInfo, setIsShowInfo] = useState(false);
  const [isCancelOrder, setIsCancelOrder] = useState(false);

  //구매날짜 연동
  const today = () => {
    const now = new Date(); // 현재 날짜 및 시간
    const todayMonth = now.getMonth() + 1; // 월
    const todayDate = now.getDate(); // 일

    return todayMonth + '월 ' + todayDate + '일';
  };

  const deleteOrder = () => {
    fetch(API.order, {
      method: 'PATCH',
      headers: {
        Authorization: ACCESS_TOKEN,
      },
      body: JSON.stringify({
        order_id: item.id,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'CANCEL_ORDER') {
          alert('상품 주문이 취소되었습니다.');
          setIsCancelOrder(!isCancelOrder);
        } else {
          alert('다시 시도해주세요!');
        }
      });
  };

  return (
    <li className={isCancelOrder ? 'orderlist_cancel' : 'orderlist'}>
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
            onClick={() => setIsShowInfo(!isShowInfo)}
            className={
              isShowInfo
                ? 'orderlist-box_detailbtn_close'
                : 'orderlist-box_detailbtn'
            }
            type="button"
          >
            {isShowInfo ? 'CLOSE' : 'DETAIL VIEW'}
          </button>
          <button
            onClick={deleteOrder}
            className="orderlist-box_detailbtn_cancel"
            type="button"
          >
            {isCancelOrder ? 'CANCEL ORDER' : 'ORDER DELETE'}
          </button>
        </div>
      </div>
      {isShowInfo && (
        <OrderListDetail products={item.products} price={item.total_price} />
      )}
    </li>
  );
};

export default OrderList;
