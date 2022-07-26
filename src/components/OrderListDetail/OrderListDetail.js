import React from 'react';
import './OrderListDetail.scss';

const OrderListDetail = ({ products, price }) => {
  return (
    <div>
      {products.map(product => {
        return (
          <div className="orderlist-box-after" key={product.product_name}>
            <div className="orderlist-box_orderinfo-detail">
              <div className="orderlist-box_orderinfo-detail_img">
                <img src={product.product_img} alt="product_img" />
              </div>
              <div className="orderlist-box_orderinfo-detail_info">
                <p className="orderlist-box_orderinfo-detail_name">
                  {product.product_name}
                </p>
                <p className="orderlist-box_orderinfo-detail_quantity">
                  수량 : {product.quantity}
                </p>
                <p className="orderlist-box_orderinfo-detail_price">
                  ₩ {parseInt(product.price).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="orderlist-box_orderinfo_total">
        <p>
          <span>total</span> ₩ {parseInt(price).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default OrderListDetail;
