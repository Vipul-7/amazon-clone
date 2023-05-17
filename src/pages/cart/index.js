import CartPageComponents from "@/components/Cart page components";
import Head from "next/head";
import React from "react";

const cart = () => {
  return (
    <div>
      <Head>
        <title>My Cart</title>
      </Head>
      <CartPageComponents />
    </div>
  );
};

export default cart;
