import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from './component/modal.js';
import './ProductDetail.scss';

function ProductDetail() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  let { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch('/data/ProductDetail/productDetailData.json')
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);
  console.log(product.name);
  return (
    <div className="product-detail">
      <div className="product-detail-wrap">
        <div className="product-detail-wrap-left">
          <div className="product-detail-wrap-left__photo">
            <img
              src="/images/ProductDetail/portablespeaker.jpg"
              alt="product"
            />
          </div>
        </div>
        <Modal
          open={modalOpen}
          close={closeModal}
          header="상품이 장바구니에 추가됨"
        >
          <div className="modal-box">
            <img src="" alt="productimage" />
            <div className="modal-box-name">
              <p>{product.name}</p>
              <p>Gold Tone</p>
            </div>
            <div className="modal-box-price">{product.price}</div>
          </div>
        </Modal>
        <div className="product-detail-wrap-right">
          <div className="product-detail-wrap-right__name">{product.name}</div>
          <div className="product-detail-wrap-right__desc">
            <h2>{product.description}</h2>
          </div>
          <div className="product-detail-wrap-right__price">
            <h4>{product.price}</h4>
          </div>
          <button onClick={openModal}>구매 하기</button>
        </div>
      </div>

      <ul className="product-detail-nav">
        <a href="">
          <li>개요</li>
        </a>
        <a href="">
          <li>특장점</li>
        </a>
        <li>기술 사양</li>
        <li>비교</li>
        <li>리뷰</li>
      </ul>

      <div className="product-detail-container">
        <div className="product-detail-container__main-image">
          <img src="/images/ProductDetail/mainimage.jpg" alt="mainimage" />
        </div>
        <div className="product-detail-container__keyword">
          <p>최고의 휴대성</p>
          <p>어디든 잘 어울립니다.</p>
          <p>오래 지속되도록 제작</p>
        </div>
        <div className="product-detail-container__middle">
          <div className="product-detail-container__middle-wrap">
            <div className="product-detail-container__middle-wrap-text">
              <p>자유롭게 움직일 수 있도록 고안되었습니다.</p>
              <p>모든 공간에 음악을 채우고 싶나요? 함께하세요.</p>
              <p>
                커피 테이블, 업무용 책장-어디든 딱 들어맞는 베오사운드
                레벨입니다. 어디서나 멋진 외관과 소리가 돋보이는 설계로 WiFi에
                원활하게 연결되며 자유롭게 옮길 수 있습니다. 좀 긴 하루인가요?
                16시간의 배터리 수명이 보장됩니다. 주방에서 음악을? 물이 튀어도
                방수가 가능합니다. 동기화하세요. 집어드세요. 움직이세요.
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
      </div>
    </div>
  );
}

export default ProductDetail;
