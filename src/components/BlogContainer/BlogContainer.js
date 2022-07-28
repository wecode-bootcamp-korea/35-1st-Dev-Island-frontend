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
                  Discover more
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
    src: 'images/main/pexels-charlotte-may-5824519.jpeg',
    alt: 'BEOPLAY A9_img',
    category: 'BEOPLAY A9',
    title: 'Love it when it’s on & off.',
    sentence:
      'Rich, detailed sound and presence for any room. Beoplay A9 is a feast for eyes and ears alike.',
  },
  {
    id: 2,
    src: 'images/main/pexels-ketut-subiyanto-4559978.jpeg',
    alt: 'BEOLIT 20_img',
    category: 'BEOLIT 20',
    title: 'Grab it. And brace for impact.',
    sentence:
      'Big, crowd-pleasing sound. Deceptively versatile. Beolit 20 brings the heat without missing a beat.',
  },
];
