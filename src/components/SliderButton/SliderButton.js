import React from 'react';
import './SliderButton.scss';

const SliderButton = ({ direction, onClick }) => {
  return (
    <button onClick={onClick} className={`slideButton ${direction}`}>
      <img alt="arrow" src="images/main/arrow.svg" />
    </button>
  );
};

export default SliderButton;
