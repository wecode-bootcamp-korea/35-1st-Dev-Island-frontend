import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/Card/CardList';
import CompareCard from './components/Card/CompareCard';
import { useNavigate, useLocation } from 'react-router-dom';
import Buttons from './components/Buttons/Buttons';
import { IoGridSharp, IoAppsSharp } from 'react-icons/io5';
import './ProductList.scss';

function ProductList() {
  const [totalItems, setTotalItems] = useState(0);
  const [productlist, setProductlist] = useState([]);
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [sort, setSort] = useState();
  // const [limit, setLimit] = useState(9);
  const [listType, setListType] = useState('small');

  const params = new URLSearchParams(location.search);
  const urlCategory = params.get('category');
  const urlMaterial = params.get('material');
  const urlOffset = params.get('offset');
  const categoryString = `category=${urlCategory}`;
  const materialString = `material=${urlMaterial}`;

  useEffect(() => {
    const queryString = location.search;

    fetch(`http://10.58.5.145:8000/products${queryString}`)
      .then(res => res.json())
      .then(result => {
        setTotalItems(result);
        setProductlist(result.RESULT);
      });
  }, [location.search]);

  const handleURL = name => {
    if (urlMaterial) {
      navigate(`?${categoryString}&${materialString}&${name}`);
    }
    if (!urlMaterial && urlCategory) {
      navigate(`?${categoryString}&${name}`);
    }
    if (!urlMaterial && !urlCategory) {
      navigate(`?${name}`);
    }
  };

  const sortNewest = () => {
    const newestString = 'sort_method=-id';
    handleURL(newestString);
  };

  const sortName = () => {
    const nameString = 'sort_method=name';
    handleURL(nameString);
  };

  const sortHighPrice = () => {
    const highPriceString = 'sort_method=price';
    handleURL(highPriceString);
  };

  const sortLowPrice = () => {
    const lowPriceString = 'sort_method=-price';
    handleURL(lowPriceString);
  };

  const changeBigList = () => {
    setListType('big');
  };

  const changeSmallList = () => {
    setListType('small');
  };

  const updateUserInput = e => {
    setUserInput(e.target.value);
  };

  const searchedProductlist = productlist.filter(product => {
    return product.name.toLowerCase().includes(userInput.toLowerCase());
  });

  const switchPage = index => {
    const limit = 9;
    const offset = index * limit;
    const queryString = `offset=${offset}&limit=${limit}&sort=${sort}`;
    const categories = 'speakers';
    const main_category = `main_category=${categories}`;

    navigate(`/products?${main_category}&${queryString}`);
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
          <div className="category-container">
            <div className="container-img">
              <img alt="img1" src="images/productlist/categoryimg1.jpeg" />
            </div>
            <div className="container-text">
              <p>스피커</p>
            </div>
          </div>
          <div className="category-container">
            <div className="container-img">
              <img alt="img2" src="images/productlist/categoryimg2.jpeg" />
            </div>
            <div className="container-text">
              <p>이어폰</p>
            </div>
          </div>
          <div className="category-container">
            <div className="container-img">
              <img alt="img3" src="images/productlist/categoryimg3.jpeg" />
            </div>
            <div className="container-text">
              <p>그 외 장비</p>
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
          <SearchBox
            handleChange={updateUserInput}
            onSubmit={searchedProductlist}
          />
          <div className="item-sort-category">
            <div className="item-sort">
              <button onClick={sortNewest}>신상품</button>
              <button onClick={sortName}>상품명</button>
              <button onClick={sortHighPrice}>낮은가격</button>
              <button onClick={sortLowPrice}>높은가격</button>
            </div>

            <div className="item-change">
              <button onClick={changeSmallList} className="icon">
                <IoGridSharp />
              </button>
              <button onClick={changeBigList} className="icon">
                <IoAppsSharp />
              </button>
            </div>
          </div>
        </div>
        <div className="cardlist-layout">
          <CardList productlist={searchedProductlist} />
        </div>
      </div>
      <Buttons switchPage={switchPage} totalItems={totalItems} />
    </div>
  );
}
export default ProductList;
