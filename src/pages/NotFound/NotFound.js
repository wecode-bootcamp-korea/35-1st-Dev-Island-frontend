import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.scss';

function NotFound() {
  return (
    <main className="not-found-container">
      <p>404 error</p>
      <h1>어쩌죠...</h1>
      <h4>뭔가 잘못된 것 같습니다. 벌써 8월 이라니요 ?</h4>
      <Link to="/">홈으로 돌아가기</Link>
    </main>
  );
}

export default NotFound;
