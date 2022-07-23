import React from 'react';
import './BlogContainer.scss';

const BlogContainer = () => {
  return (
    <section className="container-gray">
      <div className="container-gray-article">
        {BLOG_DATA.map(blogdata => {
          const { id, src, alt, category, title, sentence } = blogdata;
          return (
            <div key={id} className="container-gray-article__box">
              <div className="container-gray-article__imgbox">
                <img alt={alt} src={src} />
              </div>
              <div className="container-gray-article__textbox">
                <label>{category}</label>
                <h2>{title}</h2>
                <p>{sentence}</p>
                <button className="container-gray-article__button">
                  자세히 보기
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogContainer;

const BLOG_DATA = [
  {
    id: 1,
    src: 'images/main/pexels-ketut-subiyanto-4559978.jpeg',
    alt: 'BEOPLAY A9_img',
    category: 'BEOPLAY A9',
    title: '켜져 있을 때도, 꺼져 있을 때도 멋집니다.',
    sentence:
      '풍성하고 정교한 사운드와 어느 방에서나 빛나는 존재감! Beoplay A9는 한마디로 눈과 귀를 위한 연회와도 같습니다.',
  },
  {
    id: 2,
    src: 'images/main/pexels-ketut-subiyanto-4559978.jpeg',
    alt: 'BEOLIT 20_img',
    category: 'BEOLIT 20',
    title: '손에 들고 강렬한 사운드를 느껴보세요.',
    sentence:
      '군중을 열광시키는 빅 사운드. 믿을 수 없을 정도로 다재다능합니다. Beolit 20은 한 순간도 놓치지 않고 열기를 분출합니다.',
  },
];
