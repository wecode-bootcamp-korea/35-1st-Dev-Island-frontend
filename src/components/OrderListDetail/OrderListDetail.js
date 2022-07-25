/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './OrderListDetail.scss';

const OrderListDetail = () => {
  return (
    <div>
      <div className="orderlist-box-after">
        <div className="orderlist-box_orderinfo-detail">
          <div className="orderlist-box_orderinfo-detail_img">
            <img src="images/myorder/pexels-anton-4132534.jpeg" />
          </div>
          <div className="orderlist-box_orderinfo-detail_info">
            <p className="orderlist-box_orderinfo-detail_name">
              BEOSOUND LEVEL
            </p>
            <p className="orderlist-box_orderinfo-detail_quantity">
              수량 : quantity
            </p>
            <p className="orderlist-box_orderinfo-detail_price">₩ 2,398,000</p>
          </div>
        </div>
      </div>
      <div className="orderlist-box_orderinfo_total">
        <p>
          <span>total</span> ₩ 2,398,000
        </p>
      </div>
    </div>
  );
};

export default OrderListDetail;
