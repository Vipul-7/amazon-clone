import React from "react";
import styles from './ImageCard.module.scss'

const ImageCard = (props) => {
  return (
    <div className={styles.image}>
      <img src={props.image} alt="product" />
    </div>
  );
};

export default ImageCard;
