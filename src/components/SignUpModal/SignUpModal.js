import React from 'react';

import './SignUpModal.scss';

const SignupModal = ({ name }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-text">
          <p>환영합니다 !</p>
          <p>{name}</p>
        </div>
        <button className="modal-text-box">잠시후 이동 합니다.</button>
      </div>
    </div>
  );
};
export default SignupModal;
