import React from 'react';
import './ProductDetailContents.scss';

const ProductBox = () => {
  return (
    <div className="product-detail-container__middle">
      <div className="product-detail-container__middle-wrap">
        <div className="product-detail-container__middle-wrap-text">
          <p>POWERFUL PLAYBACK</p>
          <p>Note perfect. No compromise.</p>
          <p>
            Smart. Loud. Beautiful. With every crisp note and beat, Balance
            builds a soundscape. Seven uniquely placed drivers disperse music in
            360 degrees – clear acoustics up front, powerful enhancers at the
            back. From the table to the wall, your music fills the room. With
            punchy bass, clear mids, and pure acoustic bliss.
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
