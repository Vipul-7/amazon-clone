import React, { useEffect } from "react";
import CartItems from "./CartItems";
import styles from "./index.module.scss";
import CheckoutDetail from "./CheckoutDetail";
import EmptyCart from "./EmptyCart";
import OrderSuccessfull from "./OrderSuccessfull";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "@/util/http";
import { useSelector } from "react-redux";

const CartPageComponents = () => {
  const isOrderPlaced = useSelector((state) => state.modals.isOrderPlaced);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cart"],
    queryFn: ({ signal }) =>
      getCart({ signal, Token: localStorage.getItem("token") }),
    staleTime: 5000,
  });

  return (
    <div className={styles.main}>
      {data?.totalQuantity === 0 && !isOrderPlaced && <EmptyCart />}
      {isOrderPlaced && <OrderSuccessfull />}
      {data?.totalQuantity > 0 && <CartItems cartData={data} />}
      <div>
        {data?.totalQuantity > 0 && (
          <CheckoutDetail
            totalQuantity={data?.totalQuantity}
            subTotal={data?.subTotal}
          />
        )}
      </div>
    </div>
  );
};

export default CartPageComponents;
