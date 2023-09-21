import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();

export const addToCart = async ({ cartData, Token }) => {
  const response = await fetch("/api/cart/addToCart", {
    method: "POST",
    body: JSON.stringify(cartData),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + Token,
    },
  });

  if (!response.ok) {
    const error = new Error("An error occurred while adding to cart!");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();
  return data;
};

export const getCart = async ({ signal, Token }) => {
  const response = await fetch("/api/cart/getCart", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + Token,
    },
    signal,
  });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching cart!");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();
  return data.cart;
};
