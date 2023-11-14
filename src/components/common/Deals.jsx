import React from 'react';
// Component
export default function Bestsellercard(props) {
  const { images, heading, subheading } = props;
  return (
    <div className="deals">
      <div className="deals_top">
        <div className="icons_deals"></div>
        <div className="icons_deals"></div>
        <div className="icons_deals"></div>
      </div>
      <div className="deal_heart_icon">
        <i class="fa-regular fa-heart"></i>
      </div>
      <div className="box1_deal_img">
        <img src={images} alt="" />
      </div>

      <div className="deals_details">
        <h3>{heading}</h3>
        <p>{subheading}</p>

        <div className="deal-price">
          <h3>Rs400</h3>
        </div>
      </div>

      <div className="deal_button">
        <button className="deal_btn1">
          <i class="fa-solid fa-plus"></i>ADD TO BUCKET
        </button>
      </div>
    </div>
  );
}
