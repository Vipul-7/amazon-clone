import React from "react";
import styles from "./CartItems.module.scss";
import Button from "../Layouts/Button";

import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const TotalItemsCount = useSelector((state) => state.cart.totalQuantity);
  const subTotal = useSelector((state) => state.cart.subTotal);

  
  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <h2>Shopping Cart</h2>
        <Button text="Deselect all items" />
        <p>Price</p>
      </section>
      <section>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            colour={item.colour}
            price={item.price}
          />
        ))}
      </section>
      <section className={styles.subtotal}>
        SubTotal ({TotalItemsCount} items):
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
          {subTotal}
        </span>{" "}
      </section>
    </div>
  );
};

export default CartItems;
