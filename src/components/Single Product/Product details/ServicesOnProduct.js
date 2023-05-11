import React from "react";
import ServiceCard from "./ServiceCard";
import styles from "./ServicesOnProduct.module.scss";

const ServicesOnProduct = () => {
  return (
    <div className={styles.main}>
      {/* <ServiceCard
        image="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"
        serviceName="Free Dellivery"
      /> */}
      <ServiceCard
        image="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png"
        serviceName="Pay on Delivery"
      />
      <ServiceCard
        image="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
        serviceName="7 days Replacement"
      />
      <ServiceCard
        image="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png"
        serviceName="1 Year Warranty
        "
      />
      {/* <ServiceCard
        image="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png"
        serviceName="Top Brand"
      /> */}
      <ServiceCard
        image="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"
        serviceName="Amazon Delivered"
      />
      <ServiceCard
        image="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/Secure-payment._CB650126890_.png"
        serviceName="Secure Transaction"
      />
    </div>
  );
};

export default ServicesOnProduct;
