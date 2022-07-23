import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from './components/SearchBox';
import CardList from './components/Card/CardList';
import CompareCard from './components/Card/CompareCard';
import { useNavigate, useLocation } from 'react-router-dom';
import Buttons from './components/Buttons';

function ProductList() {
  const [productlist, setProductlist] = useState([]);
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [sort, setSort] = useState();

  useEffect(() => {
    // fetch(`http://10.58.3.103:8000/products${location.search}`)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(result => setProductlist(result));
  }, [location.search]);
  const updateUserInput = e => {
    setUserInput(e.target.value);
  };

  const sortedProductlist = productlist.filter(product => {
    return product.name.toLowerCase().includes(userInput.toLowerCase());
  });
  const LIMIT = 9;
  const switchPage = index => {
    const offset = index * LIMIT;
    const queryString = `?offset=${offset}&limit=${LIMIT}`;
    navigate(`/productlist${queryString}`);
  };

  return (
    <div className="productlist">
      <div className="productlist-top">
        <div className="category">
          <div className="category-container">
            <div className="container-img">
              <img
                alt="img"
                src="https://images.ctfassets.net/8cd2csgvqd3m/IfG0QW5D4ndMEVUrCXIrI/1d030333fc36b06f44bbe7aa5196242a/Beolab_28__Beoplay_A9_4th_Gen.__Beolit_20__Beosound_Level__Beosound_2_0002.png?q=65&w=640&fit=fill"
              />
            </div>
            <div className="container-text">
              <p>상품 전체보기</p>
            </div>
          </div>
        </div>
      </div>
      <div className="productlist-middle">
        <div className="sidebar">
          <div className="sidebar-img">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/lomad/lomad2/images/brand/1068/129wmR2AMULUuYNWQuU11yWr9NO3Z9UXZ7bktmFs.png"
              alt="img"
            ></img>
          </div>
          <div className="text-box">
            <div className="title">
              <p>뱅앤올룹슨</p>
            </div>
            <div className="description">
              <p>
                B&O는 1925년 덴마크에서 설립되었습니다. Peter Bang과 Svend
                Olufsen이 세운 이후 97년이 지나도록 럭셔리 오디오 시장에서
                압도적인 위치를 점하고 있습니다. B&O는 뛰어난 디자인 감각과
                끊임없는 신기술 개발로 오랜 시간 전세계에서 큰 사랑을 받고
                있습니다.
              </p>
            </div>
          </div>
          <SearchBox handleChange={updateUserInput} />
          <div className="sidebar-sorted-price"></div>
        </div>
        <div className="cardlist-layout">
          <CardList productlist={sortedProductlist} />
        </div>
      </div>
      <Buttons switchPage={switchPage} />
    </div>
  );
}
export default ProductList;
