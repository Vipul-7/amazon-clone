import CardFourItems from "@/components/GW Card Layout/CardFourItems";
import CardOneItem from "@/components/GW Card Layout/CardOneItem";
import React from "react";

import styles from '../../GW Card Layout/GWCardLayout.module.scss';

const GWcards = () => {
  return (
    <div className={styles.main} style={{paddingTop:'0.5rem'}}>
      <CardOneItem
        title="Sell on Amazon with 1-Click Launch Support"
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/March23/HR_758X608._SY608_CB595115209_.jpg"
        bottomText="Register now"
      />
      <CardFourItems
        title="Under ₹499 | Pocket-friendly fashion"
        image1="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-1-372-232._SY232_CB636055991_.jpg"
        imageTitle1="Puma Mens Dryflex..."
        image2="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-3-372-232._SY232_CB636055991_.jpg"
        imageTitle2="Puma Unisex-Adult A..."
        image3="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-2-372-232._SY232_CB636055991_.jpg"
        imageTitle3="Puma Unisex-Adult A..."
        image4="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-4-372-232._SY232_CB636055991_.jpg"
        imageTitle4="Puma Unisex-Adult R..."
        bottomText="See all offers"
      />
      <CardOneItem
        title="Relive Your First Love only on miniTV"
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Desktop/DeskCC-GuturGu-758x608_V4._SY608_CB591872322_.jpg"
        bottomText="Watch for Free | miniTV"
      />
      <CardFourItems
        title="Up to 60% off | Styles for men"
        image1="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-372-232._SY232_CB636110853_.jpg"
        imageTitle1="Clothing"
        image2="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-372-232._SY232_CB636110853_.jpg"
        imageTitle2="Footwear"
        image3="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg"
        imageTitle3="Watches"
        image4="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF_4-372-232._SY232_CB636110853_.jpg"
        imageTitle4="Bags & luggage"
        bottomText="See all offers"
      />
    </div>
  );
};

export default GWcards;
