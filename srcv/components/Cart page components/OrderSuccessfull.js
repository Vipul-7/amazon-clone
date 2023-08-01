import React from "react";
import Button from "../Layouts/Button";
import styles from "./OrderSuccessfull.module.scss";
import { useRouter } from "next/router";

const OrderSuccessfull = () => {
  const router = useRouter();
  const homePageNavigateHandler = () => {
    router.push("/");
  };
  
  return (
    <div className={styles.main}>
      <h1>Order Placed Successfully :)</h1>
      <p>
        Explore our new products at the{" "}
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

export default OrderSuccessfull;
