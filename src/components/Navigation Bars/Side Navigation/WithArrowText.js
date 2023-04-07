import RightArrowIcon from "@/components/Icons/RightArrowIcon";
import React from "react";

import styles from "./WithArrowText.module.scss";

const WithArrowText = (props) => {
  return (
    <div className={styles.main}>
      <p>{props.text}</p>
      <RightArrowIcon />
    </div>
  );
};

export default WithArrowText;
