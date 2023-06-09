import React from "react";
import Button from "@/components/Layouts/Button";
import styles from "./OffersCard.module.scss";
import ChevronDownIcon from "@/components/Icons/ChevronDownIcon";

const OffersCard = (props) => {
  return (
    <section className={styles.main}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <span>
        <Button text={props.offersCount} />
        <ChevronDownIcon />
      </span>
    </section>
  );
};

export default OffersCard;
