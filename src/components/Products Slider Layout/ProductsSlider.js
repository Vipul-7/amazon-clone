import React from "react";
import styles from "./ProductsSlider.module.scss";

import Carousel from "react-multi-carousel";
import SliderCard from "./SliderCard";

const ProductsSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={styles.main}>
      <section className={styles["box-detail"]}>
        <h2>Today&apos;s Deals</h2>
        <p>See all deals</p>
      </section>
      <section className={styles["slider-box"]}>
        <Carousel responsive={responsive}>
          <SliderCard
            image="https://m.media-amazon.com/images/I/51lM-Aap4CL._AC_SY400_.jpg"
            offerNum="41"
            descriptionText="Budget Laptops under INR 45000; Me..."
          />
          <SliderCard
            image="https://m.media-amazon.com/images/I/31ilq3hPhEL._AC_SY400_.jpg"
            offerText="30"
            descriptionText="Hign Performance Thin and Light Lapt..."
          />
          <SliderCard
            image="https://m.media-amazon.com/images/I/31ilq3hPhEL._AC_SY400_.jpg"
            offerText="29"
            descriptionText="Intel Core i5 and i7 Laptops; Mega Ele..."
          />
          <SliderCard
            image="https://m.media-amazon.com/images/I/31pAe23ncfL._AC_SY400_.jpg"
            offerText="38"
            descriptionText="Crazy Deals on OnePlus headsets and..."
          />
          <SliderCard
            image="https://m.media-amazon.com/images/I/41xNB9WGLDL._AC_SY400_.jpg"
            offerText="65"
            descriptionText="Newly Launched Fastrack Limitless FS..."
          />
          <SliderCard
            image="https://m.media-amazon.com/images/I/31+KEhn35VL._AC_SY400_.jpg"
            offerText="11"
            descriptionText="Grab or Gone: Apple iPads on Limited..."
          />
        </Carousel>
      </section>
    </div>
  );
};

export default ProductsSlider;
