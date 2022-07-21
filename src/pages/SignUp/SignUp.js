import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './SignUp.scss';

function SignUp() {
  const navigate = useNavigate();

  const [hasEmail, setHasEmail] = useState(false);
  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    cofirm_password: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    if (values.email) {
      setHasEmail(false);
    }
  };

  const { first_name, last_name, email, password } = handleInput;

  const emailRegExp =
    /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const passwordRegExp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const cofirmEmail = values.email && !emailRegExp.test(values.email);
  const cofirmPassword =
    values.cofirm_password && values.password !== values.cofirm_password;
  const cofirmRegPassword =
    values.password && !passwordRegExp.test(values.password);

  const onSubmit = async e => {
    e.preventDefault();

    if (cofirmEmail && cofirmPassword && cofirmRegPassword) {
      const url = 'http://10.58.6.177:8000/users/signup';
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            first_name,
            last_name,
            email,
            password,
          }),
        });

        const result = await response.json();
        if (result.message === 'THIS_EMAIL_ALREADY_EXISTS') {
          setHasEmail(true);
        }

        if (result.message === 'SIGNUP_SUCCESS') {
          navigate('/signin');
          // navigate('/welcome');
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
          {hasEmail ? (
            <label className="input-label">이미 사용중인 이메일 입니다.</label>
          ) : null}
          <h1>내 계정</h1>
          <form onSubmit={onSubmit}>
            <input
              onChange={handleInput}
              name="first_name"
              type="text"
              placeholder="Frist Name *"
              value={values.first_name}
            />
            <input
              onChange={handleInput}
              name="last_name"
              type="text"
              placeholder="Last Name *"
            />
            {cofirmEmail ? (
              <label className="input-label">이메일 형식을 확인하세요.</label>
            ) : null}
            <input
              onChange={handleInput}
              name="email"
              type="email"
              placeholder="Email *"
            />
            {cofirmRegPassword ? (
              <label className="input-label">
                대 ・ 소문자 특수문자 숫자를 포함 해주세요.
              </label>
            ) : null}
            <input
              onChange={handleInput}
              name="password"
              type="password"
              placeholder="Password *"
            />
            {cofirmPassword ? (
              <label className="input-label">비밀번호를 확인하세요.</label>
            ) : null}
            <input
              onChange={handleInput}
              name="cofirm_password"
              type="password"
              placeholder="Confirm Password *"
            />
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
