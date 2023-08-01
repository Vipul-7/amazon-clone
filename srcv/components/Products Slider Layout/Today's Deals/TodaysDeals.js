import React from "react";
import styles from "./TodaysDeals.module.scss";

import SliderCard from "./SliderCard";
import Header from "../Header";
import CarouselBlock from "../CarouselBlock";

const TodaysDeals = () => {
  return (
    <div className={styles.main}>
      <Header title="Today's deal" linkText="See all deals" />
      <section className={styles["slider-box"]}>
        <CarouselBlock>
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
        </CarouselBlock>
      </section>
    </div>
  );
};

export default TodaysDeals;
