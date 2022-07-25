/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import OrderListDetail from '../OrderListDetail/OrderListDetail';
import './OrderList.scss';

const OrderList = () => {
  return (
    <div>
      <li className="orderlist">
        <div className="orderlist-box-before">
          <div className="orderlist-box">
            <div className="orderlist-box_orderinfo-date">
              <p>7월 25일</p>
            </div>
            <div className="orderlist-box_orderinfo">
              <p className="orderlist-box_ordernumber">
                주문번호 : 00000000000
              </p>
              <p className="orderlist-box_product">
                BEOSOUND LEVEL 외 length-1건
              </p>
            </div>
          </div>
          <button className="orderlist-box_detailbtn">자세히 보기</button>
        </div>
        <OrderListDetail />
      </li>
    </div>
  );
};

export default OrderList;
