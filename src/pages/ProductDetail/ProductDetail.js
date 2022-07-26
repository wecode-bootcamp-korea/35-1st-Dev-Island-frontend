import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import ProductDetailContents from '../../components/ProductDetailContents/ProductDetailContents';
import './ProductDetail.scss';

function ProductDetail() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [product, setProduct] = useState({});
  const outlineRef = useRef(null);
  const featuresRef = useRef(null);
  const modalRef = useRef(null);
  const { product_image, price, name, content_url, description } = product;
  const { id } = useParams();

  const openPurchaseModal = () => {
    const token = sessionStorage.getItem('login-token');
    token ? setIsOpenModal(true) : navigate('/signin');
  };

  const isCloseModal = () => {
    setIsOpenModal(false);
  };

  const moveItem = async () => {
    const url = 'http://10.58.4.137:8000/carts';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.bd9JCUK-PC6dAZc4WyRjjEw6zwaqw2YtsaANRY6YKjo',
      },
      body: JSON.stringify({
        product_id: `${id}`,
        quantity: 1,
      }),
    });
    const result = await response.json();
    if (result.message === 'PUT_IN_CART_SUCCESS' || 'CART_QUANTITY_CHANGED') {
      navigate('/cart');
    } else {
      alert('에러입니다.');
    }
  };
  const navigate = useNavigate();
  const goToProductList = () => {
    navigate('/products');
  };
  const goToCart = () => {
    navigate('/cart');
  };

  const escKeyModalClose = e => {
    if (e.keyCode === 27) {
      setIsOpenModal(false);
    }
  };

  const clickOutsideHandler = event => {
    if (modalRef.current === event.target) {
      setIsOpenModal(false);
    }
  };
  const scrollToElement = () => {
    outlineRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleButton = () => {
    featuresRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('keydown', escKeyModalClose);
    window.addEventListener('click', clickOutsideHandler);

    return () => {
      window.removeEventListener('keydown', escKeyModalClose);
      window.removeEventListener('click', clickOutsideHandler);
    };
  }, []);

  useEffect(() => {
    fetch(`http://10.58.4.137:8000/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data.result));
  }, []);

  return (
    <div className="product-detail">
      <div className="product-detail-wrap" ref={outlineRef}>
        <div className="product-detail-wrap-left">
          <div className="product-detail-wrap-left__photo">
            <img src={product_image} alt="product" />

            <button type="button" onClick={goToProductList}>
              <img src="/images/ProductDetail/left-arrow.png" alt="arrow" />
              <span>스피커</span>
            </button>
          </div>
        </div>

        <Modal
          modalRef={modalRef}
          modalOpen={isOpenModal}
          modalClose={isCloseModal}
          header="상품이 장바구니에 추가됨"
          product={product}
          goToCart={goToCart}
          moveItem={moveItem}
        >
          <div className="modal-wrap">
            <div className="modal-wrap-top">
              <img src={product_image} alt="product" />
              <div className="modal-wrap-top-name">
                <p>{name}</p>
                <p>Natural Oak</p>
              </div>
              <div className="modal-wrap-top-price">
                ₩{parseInt(price).toLocaleString()}
              </div>
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
          <div className="product-detail-wrap-right__name">{name}</div>
          <div className="product-detail-wrap-right__short-desc">
            <h2>{description}</h2>
          </div>
          <div className="product-detail-wrap-right__long-desc">
            {`언제나 나와 함께하는 레벨. 언제 어디서나 성능, 휴대성, 연결성을 제공합니다. 
            세워서, 또는 눕혀서, 내가 좋아하는 노래를 항상 내곁에.`}
          </div>
          <div className="product-detail-wrap-right__price">
            <h4>₩{parseInt(price).toLocaleString()}</h4>
          </div>
          <button onClick={openPurchaseModal} className="purchase-button">
            구매 하기
          </button>
          <button className="experience-button">매장에서 체험하기</button>
        </div>
      </div>

      <ul className="product-detail-nav">
        <li onClick={scrollToElement}>개요</li>
        <li onClick={handleButton}>특장점</li>
        <li>기술 사양</li>
        <li>비교</li>
        <li>리뷰</li>
      </ul>

      <div className="product-detail-container" ref={featuresRef}>
        <div className="product-detail-container__main-image">
          <img src={content_url} alt="mainimage" />
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
