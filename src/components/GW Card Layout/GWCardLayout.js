import React from "react";
import CardFourItems from "./CardFourItems";
import CardOneItem from "./CardOneItem";
import CardButtonAndAdItem from "./CardButtonAndAdItem";

import styles from "./GWCardLayout.module.scss";

const GWCardLayout = () => {
  return (
    <main className={styles.main}>
      <CardFourItems
        title="Home appliances | Up to 55% off"
        image1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg"
        imageTitle1="Air conditioners"
        image2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg"
        imageTitle2="Refreigerators"
        image3="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg"
        imageTitle3="Microwaves"
        image4="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg"
        imageTitle4="Washing machines"
        bottomText="See more"
      />
      <CardFourItems
        title="Automotive essentials | Up to 60% off"
        image1="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare2x._SY232_CB410830552_.jpg"
        imageTitle1="Cleaning Accessories"
        image2="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare2x._SY232_CB410830552_.jpg"
        imageTitle2="Tyre & rim care"
        image3="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_372x232._SY232_CB405083904_.jpg"
        imageTitle3="Helmets"
        image4="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum2x._SY232_CB410830555_.jpg"
        imageTitle4="Vacuum cleaner"
        bottomText="See more"
      />
      <CardOneItem
        title="Bluetooth Calling Smartwatch starts at ₹1,999
      "
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_758X608_1._SY608_CB614835787_.jpg"
        bottomText="Shop now"
      />
      <CardButtonAndAdItem
        title="Sign in for your best experience"
        buttonText="Sign in securely"
        image="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
      />
      <CardOneItem
        title="Up to 50% off | Monitor blood sugar at home
      "
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pharmacy/CC_high_3._SY608_CB592656736_.jpg"
        bottomText="Visit the store"
      />
      <CardFourItems
        title="Up to 70% off | Styles for women"
        image1="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-372-232._SY232_CB636048992_.jpg"
        imageTitle1="Women's Clothing"
        image2="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-372-232._SY232_CB636048992_.jpg"
        imageTitle2="Footwear+Handbags"
        image3="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-372-232._SY232_CB636048992_.jpg"
        imageTitle3="Watches"
        image4="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-372-232._SY232_CB636048992_.jpg"
        imageTitle4="Fashion Jewellery"
        bottomText="See more"
      />
      <CardFourItems
        title="Up to 60% off | Professional tools, testing & more"
        image1="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools2x._SY232_CB424026090_.jpg"
        imageTitle1="Professional tools"
        image2="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/372X2322._SY232_CB643952553_.jpg"
        imageTitle2="Measuring instruments"
        image3="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/372X2321._SY232_CB643952553_.jpg"
        imageTitle3="Cleaning supplies"
        image4="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med2x._SY232_CB424026091_.jpg"
        imageTitle4="Medical supplies"
        bottomText="See more"
      />
      <CardFourItems
        title="Starting ₹87 | Amazon Brands & more"
        image1="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools2x._SY232_CB424026090_.jpg"
        imageTitle1="Starting ₹149 | Choppers & more"
        image2="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile3-home_372x232_in-en._SY232_CB612501076_.jpg"
        imageTitle2="Starting ₹87 | String lights  & more"
        image3="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile1-kitchen_372x232_in-en._SY232_CB595325195_.jpg"
        imageTitle3="Starting ₹239 | Kitchen storage & containers"
        image4="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile4-home_372x232_in-en._SY232_CB612501081_.jpg"
        imageTitle4="Starting ₹189 | Wall stickers & more"
        bottomText="See more"
      />
    </main>
  );
};

export default GWCardLayout;
