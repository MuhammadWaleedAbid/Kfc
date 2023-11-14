import React from 'react';
import Pickup1 from '../../assets/pick1up.png';
import Pickup2 from '../../assets/pick2up.png';
import Pickup3 from '../../assets/pick3up.jpg';
import Pickup4 from '../../assets/pick4up.png';
// Component
export default function Pickup() {
  return (
    <>
      <div className="pickup">
        <div className="pickup_inner">
          <div className="Pickup1_images">
            <div className="pickup1_img">
              <img src={Pickup1} alt="" />
            </div>
            <div className="pickup2_img">
              <img src={Pickup2} alt="" />
            </div>
          </div>
          <div className="pickup2_images">
            <div className="pickup3_img">
              <img src={Pickup3} alt="" />
            </div>
            <div className="pickup4_img">
              <div className="pick4up_img">
                <img src={Pickup4} alt="" />
              </div>
              <div className="pick4up_details">
                <p>Adding 11 herbs and spices, Explore our menu and add items to your cart.</p>
              </div>
              <div className="pick4up_button">
                <button>EXPLORE MENU</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
