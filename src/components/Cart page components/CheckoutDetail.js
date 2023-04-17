import React from "react";
import styles from "./CheckoutDetail.module.scss";
import CorrectIcon from "../Icons/CorrectIcon";
import YellowButton from "../Layouts/YellowButton";
import ChevronDownIcon from "../Icons/ChevronDownIcon";
import Button from "../Layouts/Button";

const CheckoutDetail = (props) => {
  return (
    <div className={styles.main}>
      <section className={styles["upper-text"]}>
        {/* <div> */}
        <CorrectIcon />
        <div>
          <p className={styles.delivery}>
            Your order is eligible for FREE delivery.
          </p>
          <section>
            <p>Select this option at checkout.</p>
            <Button text="Details" />
          </section>
        </div>
      </section>
      <section className={styles["second-division"]}>
        <div className={styles.subTotal}>
          <span className={styles["subTotal__text"]}>
            Subtotal ({props.totalItems} items):
          </span>
          <span className={styles["subTotal__amount"]}>
            <span
              style={{
                fontSize: "14px",
              }}
            >
              ₹
            </span>
            {props.subTotal}
          </span>
        </div>
        <div className={styles.gift}>
          <input type="checkbox" />
          <label>This order contains gift</label>
        </div>
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
