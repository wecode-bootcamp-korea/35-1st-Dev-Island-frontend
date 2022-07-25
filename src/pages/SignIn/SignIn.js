import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './SignIn.scss';

function SignIn() {
  const navigate = useNavigate();
  const [isMember, setIsMember] = useState(true);
  const [isExist, setIsExist] = useState(true);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const { email, password } = values;
  const isEmailValid = email && !emailRegExp.test(email);
  const isPasswordValid = password && !passwordRegExp.test(password);

  const handleInput = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (emailRegExp.test(email) && passwordRegExp.test(password)) {
      const url = 'http://10.58.1.160:8000/users/login';
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
          }),
        });

        const result = await response.json();

        if (result.message === 'DoesNotExist') {
          setIsExist(false);
        }

        if (result.message === 'INVALID_USER') {
          setIsMember(false);
        }

        if (result.message === 'SUCCESS') {
          sessionStorage.setItem('ACCESS_TOKEN', result.ACCESS_TOKEN);
          navigate('/');
        }
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <main className="sign-in-container">
      <div className="sign-in-inner">
        <div className="inner-left">
          {!isExist && (
            <label className="input-label">존재하지 않는 계정 입니다.</label>
          )}
          {!isMember && (
            <label className="input-label">
              이메일 혹은 패스워드를 확인해주세요.
            </label>
          )}
          <h1>로그인</h1>
          <form onSubmit={onSubmit}>
            {isEmailValid && (
              <label className="input-label">이메일 형식을 확인하세요.</label>
            )}
            <input
              onChange={handleInput}
              name="email"
              type="email"
              placeholder="Email address *"
            />
            {isPasswordValid && (
              <label className="input-label">비밀번호를 확인하세요.</label>
            )}
            <input
              onChange={handleInput}
              name="password"
              type="password"
              placeholder="Password *"
            />
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

const emailRegExp =
  /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const passwordRegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
