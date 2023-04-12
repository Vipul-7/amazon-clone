import React from "react";
import styles from "./SliderCard.module.scss";

const SliderCard = (props) => {
  return (
    <div className={styles.main}>
      <section className={styles.image}>
        <img src={props.image} alt="product" />
      </section>
      <section className={styles.offerDetail}>
        <span className={styles["offerDetail__offer"]}>Up to {props.offerNum}% off</span>
        <span className={styles["offerDetail__cate"]}>Deal of the day</span>
      </section>
      <section className={styles.description}>{props.descriptionText}</section>
    </div>
  );
};

export default SliderCard;
