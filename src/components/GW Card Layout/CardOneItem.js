import React from "react";
import styles from "./CardOneItem.module.scss";

const CardOneItem = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <section className={styles["show-up"]}>
        <img src={props.image}></img>
      </section>
      <section>
        <h5>{props.bottomText}</h5>
      </section>
    </div>
  );
};

export default CardOneItem;
