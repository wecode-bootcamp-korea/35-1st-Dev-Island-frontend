import React from 'react';
import FullBannerSlider from '../../components/FullBannerSlider/FullBannerSlider';
import Slider from '../../components/Slider/Slider';
import BlogContainer from '../../components/BlogContainer/BlogContainer';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <FullBannerSlider />
      <section className="container-beige">
        <div className="container-beige-article">
          <div className="container-beige-title">
            <h2>Sound. Vision. It’s your pick.</h2>
          </div>
          <Slider />
          <div className="container-beige-mv">
            <div className="container-beige-mv__title">
              <p>SINCE 1925.</p>
              <h2>Your senses. Set free.</h2>
            </div>
            <div className="container-beige-mv__video">
              <video
                src="images/main/pexels-cottonbro-6688144.mp4"
                type="video/mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </section>
      <BlogContainer />
      <section className="container-white">
        <div className="container-white-title">
          <p>STORIES OF SOUND AND VISION</p>
          <h2>On the Record.</h2>
        </div>
        <div className="container-white-article">
          <div className="container-white-article__img">
            <img
              alt="article_img"
              src="images/main/pexels-anna-shvets-5231306.jpeg"
            />
          </div>
          <div className="container-white-article__textbox">
            <h2>Haute Couture HI-FI</h2>
            <p>
              Our new collaboration with Balenciaga, the Speaker Bag, is an
              example of the ideals and values we share with the legendary
              fashion house
            </p>
            <button className="container-white-article__button" type="button">
              Discover more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
