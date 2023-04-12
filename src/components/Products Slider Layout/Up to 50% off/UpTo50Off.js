import React from "react";
import SlidersMainBlock from "../SlidersMainBlock";
import Header from "../Header";
import CarouselBlock from "../CarouselBlock";
import ImageCard from "../ImageCard";

const UpTo50Off = () => {
  return (
    <SlidersMainBlock>
      <Header
        title="Up to 50% off | Kitchen appliances, cookware & more"
        linkText="See all offers"
      />
      <CarouselBlock>
        <ImageCard image="https://m.media-amazon.com/images/I/51XYypoxnmL._AC_SY400_.jpg" />
        <ImageCard image="https://m.media-amazon.com/images/I/71V1LrY1MSL._AC_SY400_.jpg" />
        <ImageCard image="https://m.media-amazon.com/images/I/71xcGKPaiyL._AC_SY400_.jpg" />
        <ImageCard image="https://m.media-amazon.com/images/I/81lk7-7LejL._AC_SY400_.jpg" />
        <ImageCard image="https://m.media-amazon.com/images/I/71D0-rvuNNL._AC_SY400_.jpg" />
        <ImageCard image="https://m.media-amazon.com/images/I/71RZGpkAodL._AC_SY400_.jpg" />
      </CarouselBlock>
    </SlidersMainBlock>
  );
};

export default UpTo50Off;
