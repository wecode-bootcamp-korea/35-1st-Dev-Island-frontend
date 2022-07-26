/* eslint-disable react/jsx-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './OrderListDetail.scss';

const OrderListDetail = props => {
  return (
    <div>
      {props.products.map(product => {
        return (
          <div className="orderlist-box-after">
            <div className="orderlist-box_orderinfo-detail">
              <div className="orderlist-box_orderinfo-detail_img">
                <img src={product.product_img} />
              </div>
              <div className="orderlist-box_orderinfo-detail_info">
                <p className="orderlist-box_orderinfo-detail_name">
                  {product.product_name}
                </p>
                <p className="orderlist-box_orderinfo-detail_quantity">
                  수량 : {product.quantity}
                </p>
                <p className="orderlist-box_orderinfo-detail_price">
                  ₩ {product.price.toLocalString()}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="orderlist-box_orderinfo_total">
        <p>
          <span>total</span> ₩ 2,398,000
        </p>
      </div>
    </div>
  );
};

export default OrderListDetail;
