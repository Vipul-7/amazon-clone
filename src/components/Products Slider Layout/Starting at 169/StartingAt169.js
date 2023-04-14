import React from "react";
import Header from "../Header";
import CarouselBlock from "../CarouselBlock";
import ImageCard from "../ImageCard";
import SlidersMainBlock from "../SlidersMainBlock";

const StartingAt169 = () => {
  return (
    <SlidersMainBlock>
      <Header title="Starting ₹169 | Amazon Brands & more" />
      <CarouselBlock>
        <ImageCard image="https://m.media-amazon.com/images/I/71an936aKEL._AC_SY400_.jpg"/>
        <ImageCard image="https://m.media-amazon.com/images/I/716GRSUDYdL._AC_SY400_.jpg"/>
        <ImageCard image="https://m.media-amazon.com/images/I/71gjfehMwHL._AC_SY400_.jpg"/>
        <ImageCard image="https://m.media-amazon.com/images/I/91Y8ffbl-YL._AC_SY400_.jpg"/>
        <ImageCard image="https://m.media-amazon.com/images/I/81ZNqotTQTL._AC_SY400_.jpg"/>
        <ImageCard image="https://m.media-amazon.com/images/I/71P5Zvn-3tL._AC_SY400_.jpg"/>
        <ImageCard image="https://m.media-amazon.com/images/I/81MUUiOp1iL._AC_SY200_.jpg"/>
      </CarouselBlock>
    </SlidersMainBlock>
  );
};

export default StartingAt169;
