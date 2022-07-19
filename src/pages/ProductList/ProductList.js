import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.scss';
// import SearchBox from './SearchBox.js';

function ProductList() {
  return (
    <div className="prductlist">
      <div className="productlist-layout">
        <div className="productlist-category">
          <div className="productlist-category-container">
            <div className="productlist-category-img">
              <img
                alt="img"
                src="https://images.ctfassets.net/8cd2csgvqd3m/IfG0QW5D4ndMEVUrCXIrI/1d030333fc36b06f44bbe7aa5196242a/Beolab_28__Beoplay_A9_4th_Gen.__Beolit_20__Beosound_Level__Beosound_2_0002.png?q=65&w=640&fit=fill"
              />
            </div>
            <div className="productlist-category-img-text">
              <p>상품 전체보기</p>
            </div>
          </div>
          <div className="productlist-category-container">
            <div className="productlist-category-img">
              <img
                alt="img"
                src="https://images.ctfassets.net/8cd2csgvqd3m/IfG0QW5D4ndMEVUrCXIrI/1d030333fc36b06f44bbe7aa5196242a/Beolab_28__Beoplay_A9_4th_Gen.__Beolit_20__Beosound_Level__Beosound_2_0002.png?q=65&w=640&fit=fill"
              />
            </div>
            <div className="productlist-category-img-text">
              <p>무선 스피커</p>
            </div>
          </div>
          <div className="productlist-category-container">
            <div className="productlist-category-img">
              <img
                alt="img"
                src="https://images.ctfassets.net/8cd2csgvqd3m/IfG0QW5D4ndMEVUrCXIrI/1d030333fc36b06f44bbe7aa5196242a/Beolab_28__Beoplay_A9_4th_Gen.__Beolit_20__Beosound_Level__Beosound_2_0002.png?q=65&w=640&fit=fill"
              />
            </div>
            <div className="productlist-category-img-text">
              <p>홈 스피커</p>
            </div>
          </div>
          <div className="productlist-category-container">
            <div className="productlist-category-img">
              <img
                alt="img"
                src="https://images.ctfassets.net/8cd2csgvqd3m/IfG0QW5D4ndMEVUrCXIrI/1d030333fc36b06f44bbe7aa5196242a/Beolab_28__Beoplay_A9_4th_Gen.__Beolit_20__Beosound_Level__Beosound_2_0002.png?q=65&w=640&fit=fill"
              />
            </div>
            <div className="productlist-category-img-text">
              <p>스피커세트</p>
            </div>
          </div>
        </div>
      </div>
      <div className="productlist-description-layout">
        <div className="productlist-description-title">
          <div className="productlist-search-box">
            <input className="search-bar" type="text" placeholder="검색" />
          </div>
          <p>모든 스피커</p>
          <div className="productlist-description-ex">
            <p>
              "뱅앤올룹슨 home speaker sets와 함께 라이프스타일에 따라 진화하는
              사운드 경험을 창조해보세요. 모양과 사운드의 모든 면에서 강점을
              두루 갖춘 뱅앤올룹슨의 하이엔드 스피커는 함께, 멋지게 작동합니다.
              홈 시어터 경험, 방에서 즐기는 음악, 무엇이든 나만의 엔터테인먼트
              경험에 맞춰진 연결된 스피커 에코시스템을 만들어보세요."
            </p>
          </div>
        </div>
      </div>
      <div className="productlist-card-layout">
        <div className="productlist-card-list">
          <div className="productlist-card-container">
            <div className="productlist-card-img">
              <img src="https://images.ctfassets.net/8cd2csgvqd3m/IfG0QW5D4ndMEVUrCXIrI/1d030333fc36b06f44bbe7aa5196242a/Beolab_28__Beoplay_A9_4th_Gen.__Beolit_20__Beosound_Level__Beosound_2_0002.png?q=65&w=640&fit=fill" />
              <li>쓰리룸 스피커 세트</li>
              <li>간단한 커넥티드 스피커 세트</li>
              <li>1,999,000</li>
            </div>
          </div>
          <div className="productlist-card-container">
            <div className="productlist-card-img">
              <img src="https://images.ctfassets.net/8cd2csgvqd3m/IfG0QW5D4ndMEVUrCXIrI/1d030333fc36b06f44bbe7aa5196242a/Beolab_28__Beoplay_A9_4th_Gen.__Beolit_20__Beosound_Level__Beosound_2_0002.png?q=65&w=640&fit=fill" />
              <li>쓰리룸 스피커 세트</li>
              <li>간단한 커넥티드 스피커 세트</li>
              <li>1,999,000</li>
            </div>
          </div>
          <div className="productlist-card-container2">
            <div className="productlist-card-img">
              <img src="https://cdn-icons-png.flaticon.com/512/2038/2038806.png" />
            </div>
            <div className="productlist-card-text">
              <p>고객님께 어떤 스피커가 적합할까요?</p>
              <p>
                스피커를 비교하고 완벽하게 어울리는 제품을 찾을 수 있게
                도와드립니다.
              </p>
              <button className="button">비교</button>
            </div>
          </div>
          <div className="productlist-card-container">
            <div className="productlist-card-img">
              <img src="https://images.ctfassets.net/8cd2csgvqd3m/IfG0QW5D4ndMEVUrCXIrI/1d030333fc36b06f44bbe7aa5196242a/Beolab_28__Beoplay_A9_4th_Gen.__Beolit_20__Beosound_Level__Beosound_2_0002.png?q=65&w=640&fit=fill" />
              <li>쓰리룸 스피커 세트</li>
              <li>간단한 커넥티드 스피커 세트</li>
              <li>1,999,000</li>
            </div>
          </div>
          <div className="productlist-card-container">
            <div className="productlist-card-img">
              <img src="https://images.ctfassets.net/8cd2csgvqd3m/IfG0QW5D4ndMEVUrCXIrI/1d030333fc36b06f44bbe7aa5196242a/Beolab_28__Beoplay_A9_4th_Gen.__Beolit_20__Beosound_Level__Beosound_2_0002.png?q=65&w=640&fit=fill" />
              <li>쓰리룸 스피커 세트</li>
              <li>간단한 커넥티드 스피커 세트</li>
              <li>1,999,000</li>
            </div>
          </div>
          <div className="productlist-card-container">
            <div className="productlist-card-img">
              <img src="https://images.ctfassets.net/8cd2csgvqd3m/IfG0QW5D4ndMEVUrCXIrI/1d030333fc36b06f44bbe7aa5196242a/Beolab_28__Beoplay_A9_4th_Gen.__Beolit_20__Beosound_Level__Beosound_2_0002.png?q=65&w=640&fit=fill" />
              <li>쓰리룸 스피커 세트</li>
              <li>간단한 커넥티드 스피커 세트</li>
              <li>1,999,000</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
