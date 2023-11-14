import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import Delivery from '../../assets/delivery.png';
import Pickup from '../../assets/Pickup.png';
import Menu from './Menu';
import Order from './Delivery';
import Location from './Location';
import Email from './Email';

// Component
export default function Header() {
  const [menu, setMenu] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);
  const [location, setLocation] = useState(false);
  const [contact, setContact] = useState(false);

  const emailData = () => {
    setContact(true);
    document.body.style.overflow = 'hidden';
  };
  const handleMenu = () => {
    setMenu(!menu);
    document.body.style.overflow = 'hidden';
  };
  const orderPlace = () => {
    setShowDelivery(true);
    document.body.style.overflow = 'hidden';
  };
  const orderLocation = () => {
    setLocation(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      {contact && <Email setContact={setContact} />}
      {contact && (
        <div
          className="side_bar_background"
          onClick={() => {
            setContact(false);
            document.body.style.overflow = 'visible';
          }}
        />
      )}
      {showDelivery && <Order setShowDelivery={setShowDelivery} />}
      {showDelivery && (
        <div
          className="side_bar_background"
          onClick={() => {
            setShowDelivery(false);
            document.body.style.overflow = 'visible';
          }}
        />
      )}
      {location && <Location setLocation={setLocation} />}
      {location && (
        <div
          className="side_bar_background"
          onClick={() => {
            setLocation(false);
            document.body.style.overflow = 'visible';
          }}
        />
      )}
      {menu && <Menu />}
      {menu && (
        <div
          className="side_bar_background"
          onClick={() => {
            setMenu(false);
            document.body.style.overflow = 'visible';
          }}
        />
      )}

      <div className="top_header">
        <div className="center_header">
          <div className="left_side">
            <div className="left_menu" onClick={handleMenu}>
              <i class="fa-solid fa-bars"></i>
            </div>

            <div className="left_logo">
              <img src={Logo} className="logo" alt="" />
            </div>
            <div className="left_header_button">
              <div className="header_button1">
                <button className="headerbtn1" onClick={orderPlace}>
                  <img src={Delivery} className="delivery" alt="" />
                  DELIVERY
                </button>
              </div>
              <div className="header_button1">
                <button className="headerbtn1" onClick={orderLocation}>
                  <img src={Pickup} className="delivery" alt="" />
                  PICKUP
                </button>
              </div>
            </div>
          </div>
          <div className="right_side">
            <div className="Img_dev">
              <img src={Pickup} className="Pickup" alt="" />
            </div>
            <div className="right_header_button">
              <button className="headerbtn3" onClick={emailData}>
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hide_header_button">
        <div className="header_button1">
          <button className="headerbtn1" onClick={orderPlace}>
            <img src={Delivery} className="delivery" alt="" />
            DELIVERY
          </button>
        </div>
        <div className="header_button1">
          <button className="headerbtn1" onClick={orderLocation}>
            <img src={Pickup} className="delivery" alt="" />
            PICKUP
          </button>
        </div>
      </div>
    </>
  );
}
