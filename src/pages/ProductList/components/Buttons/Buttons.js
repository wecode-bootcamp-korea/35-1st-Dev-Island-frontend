import React from 'react';
import './Buttons.scss';

export default function Buttons({ switchPage, totalItems }) {
  const buttonMaker = () => {
    const result = [];
    for (let i = 0; i < Math.ceil(totalItems.totalItems / 9); i++) {
      result.push(
        <button div className="pageBtn" onClick={() => switchPage(i + 1)}>
          {i + 1}
        </button>
      );
    }
    return result;
  };
  return <div className="pageBtn">{buttonMaker()}</div>;
}
