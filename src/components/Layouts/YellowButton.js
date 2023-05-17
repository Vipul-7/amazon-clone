import React from "react";
import styles from "./YellowButton.module.scss";

const YellowButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick} type="button">
      {props.text}
    </button>
  );
};

export default YellowButton;