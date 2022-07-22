<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

=======
import React from 'react';
>>>>>>> caa0e2c7c1a0ed9c998693384b1ea9cf71cdcfdd
import './SignUp.scss';

function SignUp() {
  const navigate = useNavigate();
  const [hasEmail, setHasEmail] = useState(false);
  const [identical, setIdentical] = useState();
  const [Modal, setModal] = useState(false);
  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const { first_name, last_name, email, password, confirm_password } = values;
  const isEmailValid = email && !emailRegExp.test(email);
  const isPasswordValid = password && !passwordRegExp.test(password);
  const isRePasswordValid = confirm_password && password !== confirm_password;

  const openModal = () => {
    setModal(true);
    setTimeout(() => {
      navigate('/signin');
    }, 2000);
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (email === identical) {
      setHasEmail(true);
      return;
    }

    if (emailRegExp.test(email) && passwordRegExp.test(password)) {
      const url = 'http://10.58.5.148:8000/users/signup';
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
          setIdentical(email);
        }

        if (result.message === 'SIGNUP_SUCCESS') {
          openModal();
        }
      } catch (err) {
        alert(err);
      }
    }
  };

  useEffect(() => {
    if (email) {
      setHasEmail(false);
    }
  }, [email]);

  return (
    <main className="sign-in-container">
      {Modal && <SignupModal name={first_name + last_name} />}
      <div className="sign-in-inner">
        <div className="inner-left">
          {hasEmail && (
            <label className="input-label">이미 사용중인 이메일 입니다.</label>
          )}
          <h1>내 계정</h1>
          <form onSubmit={onSubmit}>
            <input
              onChange={handleInput}
              name="first_name"
              type="text"
              placeholder="Frist Name *"
            />
            <input
              onChange={handleInput}
              name="last_name"
              type="text"
              placeholder="Last Name *"
            />
            {isEmailValid && (
              <label className="input-label">이메일 형식을 확인하세요.</label>
            )}
            <input
              onChange={handleInput}
              name="email"
              type="email"
              placeholder="Email *"
            />
            {isPasswordValid && (
              <label className="input-label">
                대 ・ 소문자 특수문자 숫자를 포함 해주세요.
              </label>
            )}
            <input
              onChange={handleInput}
              name="password"
              type="password"
              placeholder="Password *"
            />
            {isRePasswordValid && (
              <label className="input-label">비밀번호를 확인하세요.</label>
            )}
            <input
              onChange={handleInput}
              name="confirm_password"
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

const emailRegExp =
  /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const passwordRegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
