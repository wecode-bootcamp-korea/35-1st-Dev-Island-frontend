import React from 'react';
import './Buttons.scss';

// export default function Buttons({ switchPage }) {
//   return (
//     <div className="pageBtn">
//       <button
//         onClick={e => {
//           switchPage(e.target.innerHTML - 1);
//         }}
//       >
//         1
//       </button>
//       <button
//         onClick={e => {
//           switchPage(e.target.innerHTML - 1);
//         }}
//       >
//         2
//       </button>
//     </div>
//   );
// }

export default function Buttons({ switchPage, totalItems }) {
  const buttonMaker = () => {
    const result = [];
    // result.push(
    //   <button className="pageBtn" onClick={() => switchPage(1)}></button>
    // );
    for (let i = 0; i < Math.ceil(totalItems.totalItems / 9); i++) {
      result.push(
        <button div className="pageBtn" onClick={() => switchPage(i + 1)}>
          {i + 1}
        </button>
      );
    }
    result.push(
      <button
        className="pageBtn"
        onClick={() => switchPage(Math.ceil(totalItems / 9))}
      ></button>
    );
    return result;
  };
  return <div className="pageBtn">{buttonMaker()}</div>;
}
