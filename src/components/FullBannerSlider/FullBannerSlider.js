/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import './FullBannerSlider.scss';

const FullBannerSlider = () => {
  const [moving, setMoving] = useState([]);
  const moveRange = moving + 'vw';

  useEffect(() => {
    const cycleImg = () => {
      moving === (MAIN_BANNER.length - 1) * -100
        ? setMoving(moving + 200)
        : setMoving(moving - 100);
    };

    const autoSlide = setInterval(cycleImg, 3000);
    return () => {
      clearInterval(autoSlide);
    };
  }, [moving]);

  return (
    <div className="main-banner">
      <header moving={moving} moveRange={moveRange} className="main-banner-box">
        {MAIN_BANNER.map(mainimg => {
          const { id, title, content, alt, src } = mainimg;
          return (
            <div
              key={id}
              className="main-banner-box-set"
              style={{ left: moveRange }}
            >
              <div className="main-banner__title">
                <h1>{title}</h1>
                <p>{content}</p>
                <button className="main-banner__button" type="button">
                  자세히 살펴보기
                </button>
              </div>
              <div className="main-banner__image">
                <img alt={alt} src={src} />
              </div>
            </div>
          );
        })}
      </header>
    </div>
  );
};

export default FullBannerSlider;

const MAIN_BANNER = [
  {
    id: 1,
    src: 'images/main/pexels-grzegorz-4336587.jpeg',
    alt: 'main-image',
    title: '최적의 사운드',
    content:
      '지금까지 가장 편안하고 다재다능한 Beoplay EX를 소개합니다. 큰 헤드폰과 성능은 동일하면서 크기는 주머니 안에 쏙 들어갈 정도로 작습니다.',
  },
  {
    id: 2,
    src: 'images/main/pexels-josh-sorenson-1714433.jpeg',
    alt: 'main-image',
    title: 'Beosound Balance',
    content:
      '간결하면서도 묵직한 저음, 깨끗한 중음, 순수한 어쿠스틱의 환희를 선물합니다.',
  },
  {
    id: 3,
    src: 'images/main/pexels-andrea-piacquadio-3776557.jpeg',
    alt: 'main-image',
    title: '소리와 디자인의 경계',
    content:
      '뱅앤올룹슨은 1925년부터 사운드의 미래와 비전을 설계해 왔습니다. 이 여정은 아직 끝나지 않았습니다. 지나간 이야기의 자취를 따라가 보고, 다가올 미래는 어떨지도 알아보세요.',
  },
];
