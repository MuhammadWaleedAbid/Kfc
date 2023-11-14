import React, { useState, useEffect } from 'react';
import Firstoption from '../../assets/carousalimg.jpg';
import Secondoption from '../../assets/carousal2.jpg';
import Thirdoption from '../../assets/carousal3.jpg';
import Forthoption from '../../assets/carousal4.jpg';
// Component
export default function Carousal() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Firstoption, Secondoption, Thirdoption, Forthoption];
  const [autoPlay, setAutoPlay] = useState(true);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentImage((currentImage + 1) % images.length);
      }, 5000); // Change the interval time (in milliseconds) as needed
    }
    return () => clearInterval(interval);
  }, [autoPlay, currentImage, images.length]); //dependdent array

  return (
    <>
      <div className="image-carousel">
        <div className="carousal_click_buttons">
          <div className="click_one">
            <button className="left_side_button" onClick={nextImage}>
              <i class="fa-solid fa-angle-left"></i>
            </button>
          </div>
          <div className="click_two">
            <button className="right_side_button" onClick={prevImage}>
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <img src={images[currentImage]} alt="Carousel" />
      </div>
      <div className="caro_down_button">
        <button>REORDER</button>
      </div>
    </>
  );
}
