import React from 'react';
import { NavLink } from 'react-router-dom';
import Footerimg from '../../assets/logo.png';
import Appstore from '../../assets/appstore.png';
import Googleplay from '../../assets/googleplay.png';
export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer_top">
          <div className="footer_logo">
            <img src={Footerimg} alt="" />
          </div>
          <div className="footer_icons">
            <div className="icon_youtube">
              <i class="fa-brands fa-youtube"></i>
            </div>
            <div className="icon_fb">
              <i class="fa-brands fa-facebook"></i>
            </div>
            <div className="icon_insta">
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <div className="footer_center">
          <div className="footer_li1">
            <ul>
              <li>
                <NavLink to="#">About Us</NavLink>
              </li>
              <li>
                <NavLink to="#">Mithao Bhook</NavLink>
              </li>
              <li>
                <NavLink to="#">Mithao Bhook-Scholership</NavLink>
              </li>
              <li>
                <NavLink to="#">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="#">Career</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer_li2">
            <ul>
              <li>
                <NavLink to="#">Contact Us</NavLink>
              </li>

              <li>
                <NavLink to="#">Store locater</NavLink>
              </li>
              <li>
                <NavLink to="#">Track Order</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer_li3">
            <ul>
              <li>
                <NavLink to="#">Terms & Conditions</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer_li4">
            <div className="li4_imgone">
              <img src={Appstore} alt="" />
            </div>
            <div className="li4_imgtwo">
              <img src={Googleplay} alt="" />
            </div>
          </div>
        </div>
        <div className="footer_end">
          <div className="footer_end_detail">
            <div className="footer_end1">
              <p>2023 KFC.All rights Reserved</p>
            </div>
            <div className="footer_end2">
              <h3>POWERED BY</h3>
              <p>Simple X Technlogy Solution</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
