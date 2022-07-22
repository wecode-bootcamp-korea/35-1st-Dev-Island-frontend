import React from 'react';

const ProductBox = () => {
  return (
    <div className="product-detail-container__middle">
      <div className="product-detail-container__middle-wrap">
        <div className="product-detail-container__middle-wrap-text">
          <p>자유롭게 움직일 수 있도록 고안되었습니다.</p>
          <p>모든 공간에 음악을 채우고 싶나요? 함께하세요.</p>
          <p>
            커피 테이블, 업무용 책장-어디든 딱 들어맞는 베오사운드 레벨입니다.
            어디서나 멋진 외관과 소리가 돋보이는 설계로 WiFi에 원활하게 연결되며
            자유롭게 옮길 수 있습니다. 좀 긴 하루인가요? 16시간의 배터리 수명이
            보장됩니다. 주방에서 음악을? 물이 튀어도 방수가 가능합니다.
            동기화하세요. 집어드세요. 움직이세요.
          </p>
        </div>
      </div>
      <div className="product-detail-container__middle-image">
        <img
          src="/images/ProductDetail/portablespeaker2.jpg"
          alt="middleimage"
        />
      </div>
    </div>
  );
};

export default ProductBox;
