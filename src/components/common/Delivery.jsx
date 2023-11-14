import React from 'react';

// Component
export default function Delivery({ setShowDelivery }) {
  return (
    <>
      <div className="order_delivery">
        <div className="top_div_order">
          <div className="top_div_order_top">
            <div className="order_icon"></div>
            <div className="order_icon"></div>
            <div className="order_icon"></div>
          </div>
          <i
            onClick={() => {
              setShowDelivery(false);
              document.body.style.overflow = 'visible';
            }}
            className="fa-solid fa-xmark"
          ></i>
          <h3>Select Your Location For Delivery</h3>
        </div>
        <div className="order1_line"></div>
        <div className="center_div_order">
          <div class="orderdelivery_box">
            <h3>Enter Full Address</h3>

            <input type="text" className="search-input" placeholder="Search Location" />

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18703.042062057983!2d74.28705065005965!3d31.465257338684825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190515a60654ab%3A0xae3224c7abf4bcc6!2sKFC%20-%20Link%20Road!5e0!3m2!1sen!2s!4v1698992148764!5m2!1sen!2s"></iframe>
          </div>
          <div className="order_button">
            <h2>Building,Lahore,Punjab</h2>

            <button className="confirm">Confirm Location</button>

            <button className="start_order">Start Your Order </button>
          </div>
        </div>
        <div className="order2_line"></div>
        <div className="end_div_order">
          <span className="user">Already a user?</span>
          <span className="login">Login</span>
        </div>
      </div>
    </>
  );
}
