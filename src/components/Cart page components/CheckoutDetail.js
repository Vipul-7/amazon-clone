import React from "react";
import styles from "./CheckoutDetail.module.scss";
import CorrectIcon from "../Icons/CorrectIcon";
import YellowButton from "../Layouts/YellowButton";
import ChevronDownIcon from "../Icons/ChevronDownIcon";

const CheckoutDetail = (props) => {
  return (
    <div className={styles.main}>
      <section className={styles["upper-text"]}>
        <div>
          <CorrectIcon />
          <p>Your order is eligible for FREE delivery</p>
        </div>
        <p>Select this option at checkout</p>
      </section>
      <section className={styles.subTotal}>
        <span>SubTotal ({props.totalItems}):</span>
        <span>{props.subTotal}</span>
      </section>
      <section className={styles.button}>
        <YellowButton text="Proceed to checkout" />
      </section>
      <section className={styles.emi}>
        <h5>EMI Available</h5>
        <ChevronDownIcon />
      </section>
    </div>
  );
};

export default CheckoutDetail;
