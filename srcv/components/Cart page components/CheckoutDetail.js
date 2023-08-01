import React, { useState } from "react";
import styles from "./CheckoutDetail.module.scss";
import CorrectIcon from "../Icons/CorrectIcon";
import YellowButton from "../Layouts/YellowButton";
import ChevronDownIcon from "../Icons/ChevronDownIcon";
import Button from "../Layouts/Button";
import { useDispatch, useSelector } from "react-redux";
import CheckoutForm from "./CheckoutForm";
import { cartSliceActions } from "@/store/cart-slice";
import { modalsActions } from "@/store/modals-slice";

const CheckoutDetail = (props) => {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [isSendingData, setIsSendingData] = useState(false);

  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);
  const TotalItemsCount = useSelector((state) => state.cart.totalQuantity);
  const subTotal = useSelector((state) => state.cart.subTotal);

  const showCheckoutFormHandler = () => {
    setShowCheckoutForm(true);
  };

  const checkoutHandler = async (values) => {
    setIsSendingData(true);
    const data = {
      ...values,
      items: items,
      totalQuantity: TotalItemsCount,
      subTotal,
    };

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      // const data = await response.json();

      dispatch(cartSliceActions.clearCart());
    } catch (error) {
      console.log(error);
    }
    setIsSendingData(false);

    dispatch(modalsActions.orderPlaced());
    setTimeout(() => {
      dispatch(modalsActions.orderPlaced());
    }, 4000);
  };

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
            Subtotal ({TotalItemsCount} items):
          </span>
          <span className={styles["subTotal__amount"]}>
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
          </span>
        </div>
        <div className={styles.gift}>
          <input type="checkbox" />
          <label>This order contains gift</label>
        </div>
      </section>

      {showCheckoutForm && (
        <section className={styles["checkout-form"]}>
          <CheckoutForm onSubmit={checkoutHandler} isSending={isSendingData} />
        </section>
      )}

      {!showCheckoutForm && (
        <section className={styles.button}>
          <YellowButton
            text="Proceed to Buy"
            onClick={showCheckoutFormHandler}
          />
        </section>
      )}
      <section className={styles.emi}>
        <h5>EMI Available</h5>
        <ChevronDownIcon />
      </section>
    </div>
  );
};

export default CheckoutDetail;
