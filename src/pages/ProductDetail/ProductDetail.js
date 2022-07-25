import React, { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import ProductDetailContents from '../../components/ProductDetailContents/ProductDetailContents';
import './ProductDetail.scss';

function ProductDetail() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    const escKeyModalClose = e => {
      console.log(e);
      if (e.keyCode === 27) {
        setModalOpen(false);
      }
    };
    window.addEventListener('keydown', escKeyModalClose);
    window.addEventListener('click', ClickOutsideHandler);
    return () => {
      window.removeEventListener('keydown', escKeyModalClose);
      window.removeEventListener('click', ClickOutsideHandler);
    };
  }, []);

  function ClickOutsideHandler(event) {
    if (modal.current === event.target) {
      console.log('modal close');
      setModalOpen(false);
    }
  }

  const [product, setProduct] = useState({});

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const modal = useRef(null);

  const scrollToElement = () => {
    ref1.current.scrollIntoView();
  };

  const handleButton = () => {
    ref2.current.scrollIntoView();
  };
  // const params = useParams();
  useEffect(() => {
    // const productId = 24;
    fetch('http://10.58.1.160:8000/products/10')
      .then(res => res.json())
      .then(data => setProduct(data.result));
  }, []);

  const navigate = useNavigate();
  const goToProductList = () => {
    navigate('/productlist');
  };
  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="product-detail">
      <div className="product-detail-wrap" ref={ref1}>
        <div className="product-detail-wrap-left">
          <div className="product-detail-wrap-left__photo">
            <img src={product.product_image} alt="product" />

            <button type="button" onClick={goToProductList}>
              <img src="/images/ProductDetail/left-arrow.png" alt="arrow" />
              <span>스피커</span>
            </button>
          </div>
        </div>

        <Modal
          modal={modal}
          open={modalOpen}
          close={closeModal}
          header="상품이 장바구니에 추가됨"
          product={product}
          goToCart={goToCart}
        >
          <div className="modal-wrap">
            <div className="modal-wrap-top">
              <img src={product.product_image} alt="product" />
              <div className="modal-wrap-top-name">
                <p>{product.name}</p>
                <p>Natural Oak</p>
              </div>
              <div className="modal-wrap-top-price">{product.price}</div>
            </div>
            <div className="modal-wrap-bottom">
              <p>관련 제품</p>
              <div className="modal-wrap-bottom-detail">
                <img
                  src="/images/ProductDetail/portablespeaker.jpg"
                  alt="product"
                />
                <div className="modal-wrap-bottom-detail-text">
                  <p>Beosound Level</p>
                  <p>
                    언제나 나와 함께하는 레벨. 언제 어디서나 성능, 휴대성,
                    연결성을 제공합니다. 세워서, 또는...
                  </p>
                  <a href="#!">자세히 보기</a>
                </div>
              </div>
            </div>
          </div>
        </Modal>

        <div className="product-detail-wrap-right">
          <div className="product-detail-wrap-right__name">{product.name}</div>
          <div className="product-detail-wrap-right__short-desc">
            <h2>{product.description}</h2>
          </div>
          <div className="product-detail-wrap-right__long-desc">
            언제나 나와 함께하는 레벨. 언제 어디서나 성능, 휴대성, 연결성을
            제공합니다. 세워서, 또는 눕혀서, 내가 좋아하는 노래를 항상 내 곁에.
          </div>
          <div className="product-detail-wrap-right__price">
            <h4>{product.price}</h4>
          </div>
          <button onClick={openModal} className="buttontop">
            구매 하기
          </button>
          <button className="buttonbottom">매장에서 체험하기</button>
        </div>
      </div>

      <ul className="product-detail-nav">
        <li onClick={scrollToElement}>개요</li>
        <li onClick={handleButton}>특장점</li>
        <li>기술 사양</li>
        <li>비교</li>
        <li>리뷰</li>
      </ul>

      <div className="product-detail-container" ref={ref2}>
        <div className="product-detail-container__main-image">
          <img src={product.content_url} alt="mainimage" />
        </div>
        <div className="product-detail-container__keyword">
          <p>최고의 휴대성</p>
          <p>어디든 잘 어울립니다.</p>
          <p>오래 지속되도록 제작</p>
        </div>
        <ProductDetailContents />
      </div>
    </div>
  );
}

export default ProductDetail;
