import React from "react";
import Image from "next/image";
import styles from "./ServiceCard.module.scss";

const ServiceCard = (props) => {
  return (
    <div className={styles.main}>
      <img src={props.image} alt={props.serviceName} />
      <p>{props.serviceName}</p>
    </div>
  );
};

export default ServiceCard;
