import React from "react";
import styles from "./EmptyCart.module.scss";
import Button from "../Layouts/Button";
import { useRouter } from "next/router";

const EmptyCart = () => {
  const router = useRouter();

  const homePageNavigateHandler = () => {
    router.push("/");
  };

  return (
    <div className={styles.main}>
      <h1>Your Amazon Cart is empty.</h1>
      <p>
        Your shopping cart is waiting. Give it purpose – fill it with groceries,
        clothing, household supplies, electronics and more. Continue shopping on
        the{" "}
        <span>
          {" "}
          <Button
            text="Amazon.in homepage"
            onClick={homePageNavigateHandler}
          />{" "}
        </span>
        , learn about{" "}
        <span>
          {" "}
          <Button text="today's deals" />{" "}
        </span>{" "}
        today&apos;s deals, or visit your{" "}
        <span>
          {" "}
          <Button text="Wish List" />{" "}
        </span>{" "}
        .
      </p>
    </div>
  );
};

export default EmptyCart;
