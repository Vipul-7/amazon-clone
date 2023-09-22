import React from "react";
import styles from "./CartItems.module.scss";
import Button from "../Layouts/Button";

import CartItem from "./CartItem";

const CartItems = (props) => {
  console.log(props.cartData.items[0].quantity);
  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <h2>Shopping Cart</h2>
        <Button text="Deselect all items" />
        <p>Price</p>
      </section>
      <section>
        {props.cartData.items.map((item) => (
          <CartItem
            key={item.productId._id}
            id={item.productId._id}
            image={item.productId.image}
            title={item.productId.title}
            // colour="black"
            price={item.productId.offerPrice}
            quantity={item.quantity}
          />
        ))}
      </section>
      <section className={styles.subtotal}>
        SubTotal ({props.cartData.totalQuantity} items):
        <span>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "400",
              marginRight: "2px",
            }}
          >
            ₹
          </span>
          {props.cartData.subTotal}
        </span>{" "}
      </section>
    </div>
  );
};

export default CartItems;
