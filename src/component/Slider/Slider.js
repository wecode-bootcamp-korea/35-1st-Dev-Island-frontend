import React, { useState, useRef, useEffect } from 'react';
import './Slider.scss';

function Slider() {
  //container-beige-title__slide가 (340px)만큼 왼쪽으로 이동
  // container-beige-title__slide의 끝 지점에 도달하면 오른쪽 화살표버튼 비활성화

  const [currentSlide, setCurrentSlide] = useState(0);

  const slideRef = useRef(null);
  const slides = SLIDER_NAV_DATA.length / 3; // 데이터 갯수/3으로 제한

  const NextSlide = () => {
    if (currentSlide < slides) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${currentSlide * 340}px)`;
    slideRef.current.style.transition = 'all 0.5s ease-out';
  }, [currentSlide]);

  return (
    <div className="container-beige-title__slidebox">
      <div ref={slideRef} className="container-beige-title__slide">
        {SLIDER_NAV_DATA.map(navdata => {
          return (
            <div
              key={navdata.id}
              className="container-beige-title__slide-imgbox"
            >
              <img alt={navdata.alt} src={navdata.src} />
              <label>{navdata.name}</label>
            </div>
          );
        })}
      </div>
      <button className="slideButton" onClick={NextSlide}>
        <img alt="arrow" src="images/main/arrow.svg" />
      </button>
    </div>
  );
}

const SLIDER_NAV_DATA = [
  {
    id: 1,
    src: 'images/main/pexels-tima-miroshnichenko-6827396.jpeg',
    name: '홈 비디오',
    alt: '홈 비디오 제품 보러가기',
  },
  {
    id: 2,
    src: 'images/main/pexels-peter-fazekas-880864.jpeg',
    name: '휴대용 스피커',
    alt: '휴대용 스피커 제품 보러가기',
  },
  {
    id: 3,
    src: 'images/main/pexels-josh-sorenson-1714433.jpeg',
    name: 'TV',
    alt: 'TV 제품 보러가기',
  },
  {
    id: 4,
    src: 'images/main/pexels-ketut-subiyanto-4559978.jpeg',
    name: '이어폰',
    alt: '이어폰 제품 보러가기',
  },
  {
    id: 5,
    src: 'images/main/pexels-sound-on-3756909.jpeg',
    name: '오버이어 헤드폰',
    alt: '오버이어 헤드폰 제품 보러가기',
  },
  {
    id: 6,
    src: 'images/main/pexels-cottonbro-6322724.jpeg',
    name: '스피커 액세서리',
    alt: '스피커 액세서리 제품 보러가기',
  },
  {
    id: 7,
    src: 'images/main/pexels-cottonbro-6322724.jpeg',
    name: '스피커 액세서리',
    alt: '스피커 액세서리 제품 보러가기',
  },
];

export default Slider;
