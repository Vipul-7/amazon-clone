import Link from "next/link";
import React from "react";
import styles from "./CartItem.module.scss";
import Button from "../Layouts/Button";

const CartItem = (props) => {
  return (
    <div className={styles.main}>
      <section className={styles["select-item"]}>
        <input type="checkbox" id="select-item" />
      </section>
      <section className={styles.imageLink}>
        <Link href="/product/[id]" as={`/product/${props.id}`}>
          <img src={props.image} alt="image" />
        </Link>
      </section>
      <section className={styles.details}>
        <Link href="/product/[id]" as={`/product/${props.id}`}>
          <h2>{props.title}</h2>
        </Link>
        <p className={styles.stockText}>In stock</p>
        <p className={styles["shipping-text"]}>Eligible for FREE Shipping</p>
        <div className={styles["fulfilled-image"]}>
          <img
            src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
            alt="amazon fulfillment"
          />
        </div>
        <div className={styles.gift}>
          <input type="checkbox" id="gift" />
          <label htmlFor="gift">This will be a gift</label>
          <Button text="Learn more" />
        </div>
        <div className={styles.colour}>
          <h5>Colour:</h5>
          <span>{props.colour}</span>
        </div>
        <div className={styles.actions}>
          <select name="quantity" id="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <Button text="Delete" />
          <Button text="Save for later" />
          <Button text="See more like this" />
          <Button text="Share" />
        </div>
      </section>
      <section className={styles.price}>
        <h3>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "400",
              marginRight: "2px",
            }}
          >
            ₹
          </span>
          {props.price}
        </h3>
      </section>
    </div>
  );
};

export default CartItem;
