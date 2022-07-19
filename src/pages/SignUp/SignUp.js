import React from 'react';
import { Link } from 'react-router-dom';

import './SignUp.scss';

function SignUp() {
  return (
    <main className="sign-in-container">
      <div className="sign-in-inner">
        <div className="inner-left">
          <h1>내 계정</h1>
          <form>
            <input type="text" placeholder="Frist Name *" />
            <input type="text" placeholder="Last Name *" />
            <input type="email" placeholder="Email *" />
            <input type="password" placeholder="Password *" />
            <input type="password" placeholder="Confirm Password *" />
            <p>
              이 사이트는 보호되며 We & Olufsen 개인 정보 취급 정책 및 서비스
              약관이 적용됩니다.
            </p>
            <button type="submit">계정 만들기</button>
          </form>
          <div className="inner-left-icon">
            <Link to="/signin">
              <p>로그인으로 이동</p>
            </Link>
          </div>
        </div>
        <div className="inner-right" />
      </div>
    </main>
  );
}

export default SignUp;
