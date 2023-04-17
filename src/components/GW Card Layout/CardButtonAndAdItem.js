import React from "react";
import styles from "./CardButtonAndAdItem.module.scss";
import Button from "../Layouts/Button";
import YellowButton from "../Layouts/YellowButton";

const CardButtonAndAdItem = (props) => {
  return (
    <section className={styles.main}>
      <section className={styles.container}>
        <h2>{props.title}</h2>
        {/* <button>{props.buttonText}</button> */}
        <YellowButton text={props.buttonText} />
      </section>
      <section className={styles["ad-item"]}>
        <img src={props.image} />
      </section>
    </section>
  );
};

export default CardButtonAndAdItem;
