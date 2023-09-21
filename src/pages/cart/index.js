import CartPageComponents from "@/components/Cart page components";
import Head from "next/head";
import React from "react";

const cart = () => {
  return (
    <div>
      <Head>
        <title>My Cart</title>
        <link rel="icon" href="/amazon.png" />
      </Head>
      <CartPageComponents />
    </div>
  );
};

export default cart;
