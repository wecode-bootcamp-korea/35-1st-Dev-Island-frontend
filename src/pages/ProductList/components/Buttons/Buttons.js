import React from 'react';
import '../Buttons/Buttons.scss';
export default function Buttons({ switchPage }) {
  return (
    <div className="pageBtn">
      <button
        onClick={e => {
          switchPage(e.target.innerHTML - 1);
        }}
      >
        1
      </button>
      <button
        onClick={e => {
          switchPage(e.target.innerHTML - 1);
        }}
      >
        2
      </button>
      <button
        onClick={e => {
          switchPage(e.target.innerHTML - 1);
        }}
      >
        3
      </button>
      <button
        onClick={e => {
          switchPage(e.target.innerHTML - 1);
        }}
      >
        4
      </button>
      <button
        onClick={e => {
          switchPage(e.target.innerHTML - 1);
        }}
      >
        5
      </button>
    </div>
  );
}
