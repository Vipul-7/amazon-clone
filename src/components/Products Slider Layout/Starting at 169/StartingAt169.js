import React from "react";
import ProductsSlider from "..";
import Header from "../Header";
import CarouselBlock from "../CarouselBlock";
import ImageCard from "../ImageCard";

const StartingAt169 = () => {
  return (
    <ProductsSlider>
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
    </ProductsSlider>
  );
};

export default StartingAt169;
