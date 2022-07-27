import React from 'react';
import './Modal.scss';

const Modal = props => {
  const { modalRef, isModalOpen, closeModal, header, children, moveItem } =
    props;

  return (
    <div className={`modal ${isModalOpen && `openModal`}`} ref={modalRef}>
      {isModalOpen && (
        <section>
          <header>
            {header}
            <button className="close" onClick={closeModal}>
              &times;
            </button>
          </header>
          <main>{children}</main>
          <footer>
            <button className="goToCart" onClick={moveItem}>
              장바구니로 이동
            </button>
          </footer>
        </section>
      )}
    </div>
  );
};

export default Modal;
