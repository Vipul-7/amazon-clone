import React from "react";
import Header from "../Header";
import ImageCard from "../ImageCard";
import CarouselBlock from "../CarouselBlock";
import SlidersMainBlock from "../SlidersMainBlock";

const RelatedToViewed = () => {
  return (
    <SlidersMainBlock>
      <Header title="Related to items you've viewed" linkText="See more" />
      <CarouselBlock>
        <ImageCard image="https://m.media-amazon.com/images/I/71hlfovzbzL._AC_SY400_.jpg" />
        <ImageCard image="https://m.media-amazon.com/images/I/61uyI13adyL._AC_SY400_.jpg" />
        <ImageCard image="https://m.media-amazon.com/images/I/61cVtmitWgL._AC_SY400_.jpg" />
        <ImageCard image="https://m.media-amazon.com/images/I/61DGt0DE7kL._AC_SY400_.jpg" />
        <ImageCard image="https://m.media-amazon.com/images/I/81VmVdfnA2S._AC_SY400_.jpg" />
        <ImageCard image="https://m.media-amazon.com/images/I/51hY85g8ELL._AC_SY400_.jpg" />
        <ImageCard image="https://m.media-amazon.com/images/I/71lQR-+yZrL._AC_SY400_.jpg" />
      </CarouselBlock>
    </SlidersMainBlock>
  );
};

export default RelatedToViewed;
