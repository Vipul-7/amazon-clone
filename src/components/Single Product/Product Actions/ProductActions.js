import React, { useRef } from "react";
import styles from "./ProductActions.module.scss";
import Button from "@/components/Layouts/Button";
import LocationIcon from "@/components/Icons/LocationIcon";
import YellowButton from "@/components/Layouts/YellowButton";

const ProductActions = (props) => {
  const quantityInput = useRef();

  const addToCartHandler = () => {
    props.onClick(quantityInput.current.value);
  };

  return (
    <main className={styles.main}>
      <section className="offer-price">
        <span className={styles["offer-price__price"]}>
          <span className={styles["offer-price__price--rupee"]}>₹</span>
          {props.price}
        </span>
      </section>

      <div className={styles["fullfilled-image"]}>
        <img
          src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
          alt="amazon fulfillment"
        />
      </div>
      <section className={styles.freeDel}>
        <Button text="FREE delivery" />
        <span className={styles.one}>Monday, </span>
        <p>
          Order within <span>21 hrs 39 mins.</span>
        </p>
      </section>
      <Button text="Details" />
      <section className={styles.address}>
        <LocationIcon />
        <span>Deliver to Your City - XYZ XXXXXX</span>
      </section>

      <h3 className={styles.stockAvailability}>In Stock</h3>

      <p className={styles.seller}>
        Sold by <span>{props.brandName}</span> and{" "}
        <span>Fulfilled by Amazon</span>
      </p>

      <section className={styles.warranty}>
        <p>Add a Protection Plan:</p>
        <input type="checkbox" id="warranty" />
        <label htmlFor="warranty">
          1 Year Extended Warranty for <span>₹299.00</span>
        </label>
      </section>

      <section className={styles.quantity}>
        <label>Quantity: </label>
        <select name="quantity" id="quantity" ref={quantityInput}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </section>

      <section className={styles.addToCart}>
        <YellowButton text="Add to Cart" onClick={addToCartHandler} />
      </section>
      <section className={styles.buyNow}>
        <YellowButton text="Buy Now" />
      </section>
    </main>
  );
};

export default ProductActions;
