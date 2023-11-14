import React from 'react';

export default function Explorecard(props) {
  const { img, title } = props;

  return (
    <>
      <div className="card1">
        <div className="card1_img">
          <img src={img} alt="Burger" />
        </div>
        <div className="card_1_text">{title}</div>
        <div className="cards_lines"></div>
        <div className="card_circle">
          <span></span>
        </div>
      </div>
    </>
  );
}
