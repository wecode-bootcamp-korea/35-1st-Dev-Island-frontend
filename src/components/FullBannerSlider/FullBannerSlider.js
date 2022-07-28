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
      <header className="main-banner-box">
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
                  Discover more
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
    title: 'Ultimate over-ear headphones',
    content:
      'Beoplay EX fits. With your lifestyle and your ears. An all-new ergonomic design gives you complete comfort right out of the case, while soft tips let you listen for hours without fatigue. Whether you are walking, running or jumping, the stick silhouette ensures stability, while staying snug and flush to your ears.',
  },
  {
    id: 2,
    src: 'images/main/pexels-josh-sorenson-1714433.jpeg',
    alt: 'main-image',
    title: 'Sound. Sculpted.',
    content:
      'Turn a loud train ride into a moment of focus. Or make your run a meditative experience. EX monitors ambient outside sound and adapts to cut it out, so you can enjoy distraction-free listening and the highest quality calls - wherever you are. Want to let the world in? Transparency Mode takes care of that in just a tap.',
  },
  {
    id: 3,
    src: 'images/main/pexels-andrea-piacquadio-3776557.jpeg',
    alt: 'main-image',
    title: 'Beosound Balance.',
    content:
      'Form meets function. Fashion meets fidelity. A glass touch surface brings precision and jewel-like beauty, while an aluminium outer ring offers protection and a final aesthetic flourish. Crafted to last, made to be worn.',
  },
];
