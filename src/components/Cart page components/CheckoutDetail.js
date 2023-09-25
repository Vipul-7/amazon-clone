import React, { useState } from "react";
import styles from "./CheckoutDetail.module.scss";
import CorrectIcon from "../Icons/CorrectIcon";
import YellowButton from "../Layouts/YellowButton";
import ChevronDownIcon from "../Icons/ChevronDownIcon";
import Button from "../Layouts/Button";
import { useDispatch, useSelector } from "react-redux";
import CheckoutForm from "./CheckoutForm";
// import { cartSliceActions } from "@/store/cart-slice";
import { modalsActions } from "@/store/modals-slice";
import { useMutation } from "@tanstack/react-query";
import { clearCart, createOrder, queryClient } from "@/util/http";

const CheckoutDetail = (props) => {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const dispatch = useDispatch();

  const showCheckoutFormHandler = () => {
    setShowCheckoutForm(true);
  };

  const { mutate: clearCartMutate } = useMutation({
    mutationFn: clearCart,
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
      dispatch(modalsActions.orderPlaced());
      setTimeout(() => {
        dispatch(modalsActions.orderPlaced());
      }, 4000);
    },
  });

  const { mutate, isError, isLoading, error } = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      clearCartMutate({
        Token: localStorage.getItem("token"),
      });
    },
  });

  const checkoutHandler = (values) => {
    mutate({
      Token: localStorage.getItem("token"),
      data: {
        items: props.cartData.items,
        totalQuantity: props.cartData.totalQuantity,
        subTotal: props.cartData.subTotal,
        address: values,
      },
    });
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
            Subtotal ({props.cartData.totalQuantity} items):
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
            {props.cartData.subTotal}
          </span>
        </div>
        <div className={styles.gift}>
          <input type="checkbox" />
          <label>This order contains gift</label>
        </div>
      </section>

      {showCheckoutForm && (
        <section className={styles["checkout-form"]}>
          <CheckoutForm
            onSubmit={checkoutHandler}
            isSending={isLoading}
            isError={isError}
            error={error}
          />
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
