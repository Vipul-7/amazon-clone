import React from "react";
import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <section className={styles["box-detail"]}>
      <h2>{props.title}</h2>
      <p>{props.linkText}</p>
    </section>
  );
};

export default Header;
