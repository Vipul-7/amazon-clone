import CartPageComponents from "@/components/Cart page components";
import ProtecteRoute from "@/components/auth/ProtecteRoute";
import Head from "next/head";
import React from "react";

const cart = () => {
  return (
    <ProtecteRoute>
      <div>
        <Head>
          <title>My Cart</title>
          <link rel="icon" href="/amazon.png" />
        </Head>
        <CartPageComponents />
      </div>
    </ProtecteRoute>
  );
};

export default cart;
