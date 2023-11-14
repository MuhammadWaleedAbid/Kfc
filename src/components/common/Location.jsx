import React, { useContext } from 'react';
import Detail from '../Home/Locate';
import NoteContext from './NoteContext';

// Component
export default function Location({ setLocation }) {
  const b = useContext(NoteContext);
  return (
    <>
      <div className="order_delivery location_detail">
        <div className="top_div_order">
          <div className="top_div_order_top">
            <div className="order_icon"></div>
            <div className="order_icon"></div>
            <div className="order_icon"></div>
          </div>
          <i
            onClick={() => {
              setLocation(false);
              document.body.style.overflow = 'visible';
            }}
            className="fa-solid fa-xmark"
          ></i>
          <h3>{b.name}</h3>
          <div className="order1_line"></div>
        </div>
        <div className="location_input">
          <input type="text" placeholder="Search Location....." />
        </div>
        <div className="center_location_div">
          <div className="detail_locations">
            <Detail
              Place="Johar town lahore"
              placedetail="Main Boulevard Johar town Near shoukat Khanam"
              timing="12:00pm to 4:00pm"
              distance="Distance to store: 1km"
            />
            <div className="locations_orderbutton">
              <button>GET DIRECTION</button>
            </div>
          </div>
          <div className="locations_ine"></div>
          <div className="detail_locations">
            <Detail
              Place="Johar town lahore"
              placedetail="Main Boulevard Johar town Near shoukat Khanam"
              timing="12:00pm to 4:00pm"
              distance="Distance to store: 1km"
            />
            <div className="locations_orderbutton">
              <button>GET DIRECTION</button>
            </div>
          </div>
          <div className="locations_ine"></div>
          <div className="detail_locations">
            <Detail
              Place="Johar town lahore"
              placedetail="Main Boulevard Johar town Near shoukat Khanam"
              timing="12:00pm to 4:00pm"
              distance="Distance to store: 1km"
            />
            <div className="locations_orderbutton">
              <button>GET DIRECTION</button>
            </div>
          </div>
          <div className="locations_ine"></div>
          <div className="detail_locations">
            <Detail
              Place="Johar town lahore"
              placedetail="Main Boulevard Johar town Near shoukat Khanam"
              timing="12:00pm to 4:00pm"
              distance="Distance to store: 1km"
            />
            <div className="locations_orderbutton">
              <button>GET DIRECTION</button>
            </div>
          </div>
          <div className="locations_ine"></div>
          <div className="detail_locations">
            <Detail
              Place="Johar town lahore"
              placedetail="Main Boulevard Johar town Near shoukat Khanam"
              timing="12:00pm to 4:00pm"
              distance="Distance to store: 1km"
            />
            <div className="locations_orderbutton">
              <button>GET DIRECTION</button>
            </div>
          </div>
          <div className="locations_ine"></div>
          <div className="detail_locations">
            <Detail
              Place="Johar town lahore"
              placedetail="Main Boulevard Johar town Near shoukat Khanam"
              timing="12:00pm to 4:00pm"
              distance="Distance to store: 1km"
            />
            <div className="locations_orderbutton">
              <button>GET DIRECTION</button>
            </div>
          </div>
          <div className="locations_ine"></div>
          <div className="detail_locations">
            <Detail
              Place="Johar town lahore"
              placedetail="Main Boulevard Johar town Near shoukat Khanam"
              timing="12:00pm to 4:00pm"
              distance="Distance to store: 1km"
            />
            <div className="locations_orderbutton">
              <button>GET DIRECTION</button>
            </div>
          </div>
          <div className="locations_ine"></div>
          <div className="detail_locations">
            <Detail
              Place="Johar town lahore"
              placedetail="Main Boulevard Johar town Near shoukat Khanam"
              timing="12:00pm to 4:00pm"
              distance="Distance to store: 1km"
            />
            <div className="locations_orderbutton">
              <button>GET DIRECTION</button>
            </div>
          </div>
          <div className="locations_ine"></div>
        </div>
        <div className="location_end_div">
          <div className="location_endbutton">
            <button>Start Your Order</button>
          </div>
        </div>
      </div>
    </>
  );
}
