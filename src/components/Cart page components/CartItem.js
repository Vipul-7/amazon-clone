import Link from "next/link";
import React, { useEffect } from "react";
import styles from "./CartItem.module.scss";
import Button from "../Layouts/Button";
import { useMutation } from "@tanstack/react-query";
import { deleteItem, queryClient, updateItem } from "@/util/http";

const CartItem = (props) => {
  const [quantity, setQuantity] = React.useState(props.quantity);

  const {
    mutate: deleteMutate,
    isLoading: deleteIsLoading,
    isError: deleteIsError,
    error: deleteError,
  } = useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    },
  });

  const {
    mutate: updateMutate,
    data: updateData,
    isLoading: updateIsLoading,
    isError: updateIsError,
    error: updateError,
  } = useMutation({
    mutationFn: updateItem,
    onSuccess: (data) => {
      // data is the response from the server
      setQuantity(data.updatedQuantity);
      queryClient.invalidateQueries("cart");
    },
  });

  const deleteHandler = () => {
    deleteMutate({
      Token: localStorage.getItem("token"),
      productId: props.id,
    });
  };

  const selectHandler = (e) => {
    updateMutate({
      Token: localStorage.getItem("token"),
      productId: props.id,
      quantity: e.target.value,
    });
  };

  return (
    <div className={styles.main}>
      <section className={styles["select-item"]}>
        <input type="checkbox" id="select-item" />
      </section>
      <section className={styles.imageLink}>
        <Link href={props.id}>
          <img src={props.image} alt="image" />
        </Link>
      </section>
      <section className={styles.details}>
        <Link href={props.id}>
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
        {deleteIsError && <h3>{deleteError.message}</h3>}
        {updateIsError && <h3>{updateError.message}</h3>}
        {updateIsLoading && <p>Updating...</p>}
        <div className={styles.actions}>
          {!updateIsLoading && (
            <select
              prefix="Qty:"
              name="quantity"
              id="quantity"
              defaultValue={quantity}
              onChange={selectHandler}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
          {!deleteIsLoading && <Button text="Delete" onClick={deleteHandler} />}
          {deleteIsLoading && <Button text="Deleting..." />}
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
