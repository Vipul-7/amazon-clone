import React from "react";
import styles from "./CardOneItem.module.scss";
import Button from "../Layouts/Button";
import Link from "next/link";

const CardOneItem = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <Link href="/watches">
      <section className={styles["show-up"]}>
        <img src={props.image}></img>
      </section>
      </Link>
      <section>
        <Button text={props.buttonText} onClick={props.onClick}/>
      </section>
    </div>
  );
};

export default CardOneItem;
