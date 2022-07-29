import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/Card/CardList';
import Buttons from './components/Buttons/Buttons';

import './ProductList.scss';
import API from '../../config';

const limit = 9;

function ProductList() {
  const [totalItems, setTotalItems] = useState(0);
  const [productlist, setProductlist] = useState([]);
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const urlCategory = params.get('category');
  const urlMaterial = params.get('material');
  const categoryString = `category=${urlCategory}`;
  const materialString = `material=${urlMaterial}`;

  useEffect(() => {
    const queryString = location.search;

    fetch(`${API.product}${queryString}`)
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

  const updateUserInput = e => {
    setUserInput(e.target.value);
  };

  const searchedProductlist = productlist.filter(product => {
    return product.name.toLowerCase().includes(userInput.toLowerCase());
  });

  const switchPage = page => {
    const offset = (page - 1) * limit;
    const queryString = `offset=${offset}&limit=${limit}`;
    const categories = 'speakers';
    const main_category = `main_category=${categories}`;

    navigate(`?${main_category}&${queryString}`);
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
              <p>ALL</p>
            </div>
          </div>
          <div className="category-container">
            <div className="container-img">
              <img alt="img1" src="images/productlist/categoryimg1.jpeg" />
            </div>
            <div className="container-text">
              <p>SPEAKERS</p>
            </div>
          </div>
          <div className="category-container">
            <div className="container-img">
              <img alt="img2" src="images/productlist/categoryimg2.jpeg" />
            </div>
            <div className="container-text">
              <p>PORTABLE SPEAKERS</p>
            </div>
          </div>
          <div className="category-container">
            <div className="container-img">
              <img alt="img3" src="images/productlist/categoryimg3.jpeg" />
            </div>
            <div className="container-text">
              <p>HEADPHONES</p>
            </div>
          </div>
        </div>
      </div>
      <div className="productlist-middle">
        <div className="sidebar">
          <div className="sidebar-img">
            <Link to="/">
              <img alt="logo" src="/images/Nav/W_O_Black.svg" />
            </Link>
          </div>
          <div className="text-box">
            <div className="title">
              <p>W & O</p>
            </div>
            <div className="description">
              <p>
                Soul-stirring sound wherever you want it. Pick up a portable
                speaker for your next adventure, furnish your home with a full
                entertainment setup or find the flexible Bang & Olufsen speaker
                that matches your busy lifestyle. Designed to fit into your
                day-to-day, our speakers are easy to control. From changing the
                volume to setting up your own sound profile, our intuitive
                interfaces ensure your interactions are joyful. You can also
                make every moment your own, with our app – skip tracks, take
                calls or change your listening mode, all from your phone or
                tablet.
              </p>
            </div>
          </div>
          <SearchBox
            handleChange={updateUserInput}
            onSubmit={searchedProductlist}
          />
          <div className="item-sort-category">
            <div className="item-sort">
              <button onClick={sortNewest}>NEW</button>
              <button onClick={sortName}>NAME</button>
              <button onClick={sortHighPrice}>LOW PRICE</button>
              <button onClick={sortLowPrice}>HIGH PRICE</button>
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
