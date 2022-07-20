import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-inner__logo">WE & OLUFSEN</div>
        <div className="footer-inner__row">
          <div className="footer-inner__row-left">
            {ROW_CATEGORY.map((x, i) => (
              <div className="footer-inner__row-title" key={i}>
                {x.title}
                <ul>
                  {x.content.map((x, i) => (
                    <li className="footer-inner__row-content" key={i}>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-inner__row-right">
            <div className="footer-inner__icon">
              <span>
                <img alt="icon" src="/images/Footer/fb.svg" />
              </span>
              <span>
                <img alt="icon" src="/images/Footer/insta.svg" />
              </span>
              <span>
                <img alt="icon" src="/images/Footer/twitter.svg" />
              </span>
              <span>
                <img alt="icon" src="/images/Footer/youtube.svg" />
              </span>
              <span>
                <img alt="icon" src="/images/Footer/pinter.svg" />
              </span>
              <div className="footer-inner__text">
                <p>앱 살펴보기 </p>
                <p>The House of WE & Olufsen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const ROW_CATEGORY = [
  {
    title: '국가 선택',
    content: ['South Korea'],
  },
  {
    title: '고객 관리',
    content: [
      '로그인/계정 만들기',
      '온라인 전용 서비스',
      'FAQ',
      '고객 지원',
      '문의',
      '매장 찾기',
    ],
  },
  {
    title: '회사 정책',
    content: ['접근성', '위조', '쿠키', '개인 정보 정책', '이용 약관'],
  },
  {
    title: '회사 소개',
    content: [
      '회사 소개',
      '보도 자료',
      '투자자 정보',
      '매장 가맹 신청',
      '산업 전문가용',
      'Partners & B2B',
      '구인 정보',
      'WE & Olufsen Collective',
      'CEO에게 피드백 제출',
    ],
  },
];
