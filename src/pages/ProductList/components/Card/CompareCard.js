import React from 'react';
import '../../ProductList.scss';

function CompareCard() {
  return (
    <div className="productlist-card-list">
      <div className="productlist-comparecard-container">
        <div className="productlist-comparecard-img">
          <img src="https://cdn-icons-png.flaticon.com/512/2038/2038806.png" />
        </div>
        <div className="productlist-comparecard-text">
          <p>고객님께 어떤 스피커가 적합할까요?</p>
          <p>
            스피커를 비교하고 완벽하게 어울리는 제품을 찾을 수 있게
            도와드립니다.
          </p>
          <button className="button">비교</button>
        </div>
      </div>
    </div>
  );
}
export default CompareCard;
