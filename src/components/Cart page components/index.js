import React, { useEffect } from "react";
import CartItems from "./CartItems";
import styles from "./index.module.scss";
import CheckoutDetail from "./CheckoutDetail";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "@/store/cart-slice";
import EmptyCart from "./EmptyCart";

const CartPageComponents = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      cartSliceActions.replaceCart({
        items: localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : [],
        totalQuantity: localStorage.getItem("totalQuantity")
          ? JSON.parse(localStorage.getItem("totalQuantity"))
          : 0,
        subTotal: localStorage.getItem("subTotal")
          ? JSON.parse(localStorage.getItem("subTotal"))
          : 0,
      })
    );
  }, []);

  return (
    <div className={styles.main}>
      {totalQuantity === 0 && <EmptyCart />}
      {totalQuantity > 0 && <CartItems />}
      <div>{totalQuantity > 0 && <CheckoutDetail />}</div>
    </div>
  );
};

export default CartPageComponents;
