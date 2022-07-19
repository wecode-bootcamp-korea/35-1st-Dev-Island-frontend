import React from 'react';
import { Link } from 'react-router-dom';

import './SignIn.scss';

function SignIn() {
  return (
    <main className="sign-in-container">
      <div className="sign-in-inner">
        <div className="inner-left">
          <h1>로그인</h1>
          <form>
            <input type="email" placeholder="Email address *" />
            <input type="password" placeholder="Password *" />
            <p>
              이 사이트는 보호되며 We & Olufsen 개인 정보 취급 정책 및 서비스
              약관이 적용됩니다.
            </p>
            <button type="submit">로그인</button>
          </form>
          <div className="inner-left-icon">
            <p>또는 다른 서비스로 로그인</p>
            <div>
              <img alt="logo" src="images/sns_black/twitter.svg" />
              <img alt="logo" src="images/sns_black/insta.svg" />
              <img alt="logo" src="images/sns_black/pinter.svg" />
              <img alt="logo" src="images/sns_black/twitter.svg" />
            </div>
            <Link to="/signup">
              <p>계정이 없으신가요? 가입하기</p>
            </Link>
          </div>
        </div>
        <div className="inner-right" />
      </div>
    </main>
  );
}

export default SignIn;
