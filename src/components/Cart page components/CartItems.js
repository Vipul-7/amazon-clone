import React from "react";
import styles from "./CartItems.module.scss";
import Button from "../Layouts/Button";

import CartItem from "./CartItem";

const CartItems = (props) => {
  const DUMMY_CART_ITEMS = [
    {
      id: "p1",
      image: "https://m.media-amazon.com/images/I/61TmcMQHB+L._AC_AA360_.jpg",
      title:
        "Mivi DuoPods M80 Bluetooth 5.0 Wireless Earbuds with 20H Playtime, IPX5 Water Resistance, Type-C Charging Case, in-Ear Detection, Touch Controls, Dual Mics, (Black)",
      colour: "Black",
      price: 399.00,
    },
    {
      id: "p1",
      image: "https://m.media-amazon.com/images/I/61TmcMQHB+L._AC_AA360_.jpg",
      title:
        "Mivi DuoPods M80 Bluetooth 5.0 Wireless Earbuds with 20H Playtime, IPX5 Water Resistance, Type-C Charging Case, in-Ear Detection, Touch Controls, Dual Mics, (Black)",
      colour: "Black",
      price: 399.00,
    },
  ];
  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <h2>Shopping Cart</h2>
        <Button text="Deselect all items" />
        <p>Price</p>
      </section>
      <section>
        {DUMMY_CART_ITEMS.map((item) => (
          <CartItem
            key={item.id}
            image={item.image}
            title={item.title}
            colour={item.colour}
            price={item.price}
          />
        ))}
      </section>
      <section className={styles.subtotal}>
        SubTotal (8{props.TotalItemsCount} items):
        <span>₹{props.subTotal}1,698.00</span>{" "}
      </section>
    </div>
  );
};

export default CartItems;
