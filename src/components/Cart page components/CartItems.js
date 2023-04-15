import React from "react";
import styles from "./CartItems.module.scss";
import Button from "../Layouts/Button";

const CartItems = (props) => {
  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <h2>Shopping Cart</h2>
        <Button text="Deselect all items" />
        <p>Price</p>
      </section>
      <section>hello</section>
      <section className={styles.subtotal}>
        SubTotal (8{props.TotalItemsCount} items): 
        <span>₹{props.subTotal}1,698.00</span>{" "}
      </section>
    </div>
  );
};

export default CartItems;
