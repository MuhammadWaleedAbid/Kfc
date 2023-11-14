import React from 'react';
// Component
export default function Bestsellercard(props) {
  const { heading, image, price } = props;
  return (
    <div className="box1_seller">
      <div className="box_top">
        <div className="icons_explore"></div>
        <div className="icons_explore"></div>
        <div className="icons_explore"></div>
      </div>
      <div className="box_1_text">
        <h5>{heading}</h5>
        <div className="boxes_price">
          <div className="price_box">
            <div className="price_detail">
              <h3>Rs</h3> <h2>{price}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="box1_seller_img">
        <img src={image} alt="Burger" />
      </div>
    </div>
  );
}
