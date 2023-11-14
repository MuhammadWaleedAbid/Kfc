import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../common/ExploreCard';
import Burger from '../../assets/burger.png';
import Midnight from '../../assets/midnight.png';
import Snacks from '../../assets/snacks.png';
import Signature from '../../assets/signature.png';
import Sharing from '../../assets/sharing.png';
import Everyday from '../../assets/everyday.png';
import Alacart from '../../assets/alacart.png';

// Component
export default function Explore() {
  // const dataArray = [
  //   {
  //     img: Burger,
  //     title: 'Signature',
  //   },
  //   {
  //     img: Midnight,
  //     title: 'Promotion',
  //   },
  //   {
  //     img: Snacks,
  //     title: 'Sharing',
  //   },
  //   {
  //     img: Signature,
  //     title: 'Snacks',
  //   },
  //   {
  //     img: Sharing,
  //     title: 'MidNight',
  //   },
  //   {
  //     img: Everyday,
  //     title: 'MidNight',
  //   },
  //   {
  //     img: Alacart,
  //     title: 'MidNight',
  //   },
  // ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 800, min: 500 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="explore_heading">
        <h1>EXPLORE MENU</h1>
        <div className="explore_heading_line"></div>
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        arrows={true}
        ssr={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="All .3s"
        transitionDuration={100}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        <div className="card_main">
          <div className="card_sub">
            <div className="card_div">
              <Card title="Signature" img={Burger} />
            </div>
          </div>
        </div>
        <div className="card_main">
          <div className="card_sub">
            <div className="card_div">
              <Card title="Promotion" img={Midnight} />
            </div>
          </div>
        </div>
        <div className="card_main">
          <div className="card_sub">
            <div className="card_div">
              <Card title="Sharing" img={Sharing} />
            </div>
          </div>
        </div>
        <div className="card_main">
          <div className="card_sub">
            <div className="card_div">
              <Card title="signature" img={Snacks} />
            </div>
          </div>
        </div>
        <div className="card_main">
          <div className="card_sub">
            <div className="card_div">
              <Card title="sharing" img={Midnight} />
            </div>
          </div>
        </div>
        <div className="card_main">
          <div className="card_sub">
            <div className="card_div">
              <Card title="midnight" img={Everyday} />
            </div>
          </div>
        </div>
        <div className="card_main">
          <div className="card_sub">
            <div className="card_div">
              <Card title="midnight" img={Signature} />
            </div>
          </div>
        </div>
        <div className="card_main">
          <div className="card_sub">
            <div className="card_div">
              <Card title="midnight" img={Alacart} />
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
}
