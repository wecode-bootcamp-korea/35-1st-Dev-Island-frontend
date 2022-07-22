import React from 'react';
import './Modal.scss';

const Modal = props => {
  const { open, close, header, children } = props;

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open && (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{children}</main>
          <footer>
            <button className="gotocart" onClick={close}>
              장바구니로 이동
            </button>
          </footer>
        </section>
      )}
    </div>
  );
};

export default Modal;
