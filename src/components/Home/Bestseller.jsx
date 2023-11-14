import React from 'react';
import Boxes from '../common/Bestsellercard';
import Krunch from '../../assets/Krunch.png';
import Mighty from '../../assets/mighty.png';
import Wings from '../../assets/Wings.png';
import Combo from '../../assets/Combo.png';

// Component
export default function Topdeal() {
  return (
    <>
      <div className="best_seller_heading">
        <h1>BEST SELLERS</h1>
        <div className="best_seller_line" />
      </div>

      <div className="best_seller_main">
        <div className="best_seller_dev">
          <div className="box_div">
            <Boxes image={Krunch} heading="KRUNCH BURGER" price="270" />
          </div>
          <div className="box_div">
            <Boxes heading="MIGHTY ZINGER" image={Mighty} price="700" />
          </div>
          <div className="box_div">
            <Boxes heading="HOT WINGS BUCKET" image={Wings} price="610" />
          </div>
          <div className="box_div">
            <Boxes heading="KRUNCH COMBO" image={Combo} price="520" />
          </div>
        </div>
      </div>
    </>
  );
}
