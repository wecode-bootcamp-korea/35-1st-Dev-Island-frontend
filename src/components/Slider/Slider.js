import React, { useState, useRef, useEffect } from 'react';
import SliderButton from '../SliderButton/SliderButton';
import './Slider.scss';

const IMG_WIDTH = 320;
const IMG_MARGIN = 20;

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const slides = SLIDER_NAV_DATA.length - 4;
  // (데이터 갯수)-(보여지는이미지 개수)로 slides 가능 횟수 제한
  const movingRange =
    currentSlide === slides
      ? IMG_WIDTH - IMG_MARGIN / 2
      : IMG_WIDTH + IMG_MARGIN;

  const nextSlide = () => {
    if (currentSlide < slides) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide && currentSlide <= slides) {
      //핵답답한거 풀었다 와우
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${
      currentSlide * movingRange
    }px)`;
    slideRef.current.style.transition = 'all 0.5s ease-out';
  }, [currentSlide, movingRange]);

  return (
    <div className="container-beige-title__slidebox">
      <SliderButton direction="prev" onClick={prevSlide} />
      <SliderButton direction="next" onClick={nextSlide} />
      <div ref={slideRef} className="container-beige-title__slide">
        {SLIDER_NAV_DATA.map(navdata => {
          const { id, alt, src, name } = navdata;
          return (
            <div key={id} className="container-beige-title__slide-imgbox">
              <img alt={alt} src={src} />
              <label>{name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const SLIDER_NAV_DATA = [
  {
    id: 1,
    src: 'images/main/pexels-tima-miroshnichenko-6827396.jpeg',
    name: '전 제품',
    alt: '전 제품 보러가기',
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
    src: 'images/main/pexels-peter-fazekas-880864.jpeg',
    name: '홈 비디오',
    alt: '홈 비디오 제품 보러가기',
  },
  {
    id: 8,
    src: 'images/main/pexels-ketut-subiyanto-4559978.jpeg',
    name: 'Theater',
    alt: 'Theater 제품 보러가기',
  },
];

export default Slider;
