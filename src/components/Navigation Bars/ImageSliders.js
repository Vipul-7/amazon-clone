/* eslint-disable @next/next/no-img-element */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./ImageSliders.module.scss";
import SliderRightIcon from "../Icons/SliderRightIcon";
import SliderLeftIcon from "../Icons/SliderLeftIcon";

const ImageSliders = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={styles.sliders}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71pODxLznmL._SX3000_.jpg"
            alt="image"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71N37NXMCcL._SX3000_.jpg"
            alt="image"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71fPNxKK-SL._SX3000_.jpg"
            alt="image"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71EfhbrV6LL._SX3000_.jpg"
            alt="image"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71cg2WJjGVL._SX3000_.jpg"
            alt="image"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71U98vaQGYL._SX3000_.jpg"
            alt="image"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/51O45Sl0WLL._SX3000_.jpg"
            alt="image"
          />
        </div>
      </Carousel>
    </div>
  );
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <div className={styles["slider-arrow-right"]}>
      <button onClick={() => onClick()}>
        <SliderRightIcon />
      </button>
    </div>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <div className={styles["slider-arrow-left"]}>
      <button onClick={() => onClick()}>
        <SliderLeftIcon />
      </button>
    </div>
  );
};

export default ImageSliders;
