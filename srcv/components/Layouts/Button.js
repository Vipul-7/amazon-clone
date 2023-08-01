import React from "react";
import styles from './Button.module.scss'

const Button = (props) => {
  return <button onClick={props.onClick} className={styles.button}>{props.text}</button>;
};

export default Button;
