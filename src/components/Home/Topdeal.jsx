import React from 'react';
import Deal from '../common/Deals';
import Duo from '../../assets/Duo.png';
import Stacker from '../../assets/Stacker.png';
import Festival from '../../assets/Festival.png';
import Twister from '../../assets/Twister.png';


// Component
export default function Topdeal() {
  return (
    <>
    <div className="deal_heading">
         <h1>TOP DEALS</h1>
        <div className="deal_line"></div>
    </div>
    
   <div className="deal_main">
    <div className="deal_dev">
    <div className="deal_box_div">
                <Deal images={Duo} heading="Crispy Duo Box" subheading ="Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regulr"/>
              </div>
              <div className="deal_box_div">
                <Deal images={Stacker} heading="Zinger Stacker Combo" subheading ="1 Zinger Stacker + 1 Regular fries + 1 Regular drink"/>
              </div>
              <div className="deal_box_div">
                <Deal images={Twister} heading="Twister Combo" subheading ="Twister + 1 Regular fries + 1 Regular drink"/>
              </div>
              <div className="deal_box_div">
                <Deal images={Festival} heading="Family Featival 3" subheading ="An ultimate meal for the fam. It includes Zinger burgers + 4 pieces "/>
              </div>
    </div>
   </div>
    </>
  );
}