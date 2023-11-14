import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Component
export default function Menu() {
  return (
    <>
      <div className="sidebar_menu">
        <div className="side_bar_button">
          <button className="side_button">LOGIN</button>
        </div>
        <div className="side_sub_menu">
          <div className="side_first_line"></div>
          <div className="side_first_li">
            <ul>
              <li>
                <i class="fa-solid fa-location-dot"></i>

                <NavLink to="#">Store Locator</NavLink>
              </li>
              <li>
                <i class="fa-brands fa-wpexplorer"></i>

                <NavLink to="#">Track Order</NavLink>
              </li>
              <li>
                <i class="fa-solid fa-bars"></i>

                <NavLink to="#">Explore Menu</NavLink>
              </li>
            </ul>
          </div>
          <div className="side_second_line"></div>
          <div className="side_second_li">
            <ul>
              <li>
                <NavLink to="#">About Us</NavLink>
              </li>
              <li>
                <NavLink to="#">Contact Us</NavLink>
              </li>

              <li>
                <NavLink to="#">Feedback</NavLink>
              </li>

              <li>
                <NavLink to="#">Mithao Bhook</NavLink>
              </li>
              <li>
                <NavLink to="#">Terms & Conditions</NavLink>
              </li>
              <li>
                <NavLink to="#">Privacy Policy</NavLink>
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
        </div>
      </div>
    </>
  );
}
