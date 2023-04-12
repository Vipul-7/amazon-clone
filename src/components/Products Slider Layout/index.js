import React from "react";
import TodaysDeals from "./Today's Deals/TodaysDeals";
import RelatedToViewed from "./Related to you viewed/RelatedToViewed";
import UpTo50Off from "./Up to 50% off/UpTo50Off";
import StartingAt169 from "./Starting at 169/StartingAt169";
import GWcards from "./GW Cards/GWcards";

const ProductsSlider = () => {
  return (
    <div>
      <TodaysDeals />
      <RelatedToViewed />
      <UpTo50Off />
      {/* <GWcards/> */}
      <StartingAt169/>
    </div>
  );
};

export default ProductsSlider;
