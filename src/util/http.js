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

export const deleteItem = async ({ productId, Token }) => {
  const response = await fetch("/api/cart/deleteItem", {
    method: "DELETE",
    body: JSON.stringify({ productId }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + Token,
    },
  });

  if (!response.ok) {
    const error = new Error("An error occurred while deleting item!");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();
  return data;
};

export const updateItem = async ({ productId, Token, quantity }) => {
  const response = await fetch("/api/cart/updateQuantity", {
    method: "PATCH",
    body: JSON.stringify({ productId, quantity }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + Token,
    },
  });

  if (!response.ok) {
    const error = new Error("An error occurred while updating item!");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();
  return data;
};

export const clearCart = async ({ Token }) => {
  const response = await fetch("/api/cart/clearCart", {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + Token,
    },
  });

  if (!response.ok) {
    const error = new Error("An error occurred while clearing cart!");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();
  return data;
};

export const createOrder = async ({ data, Token }) => {
  const response = await fetch("/api/order", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + Token,
    },
  });

  if (!response.ok) {
    const error = new Error("An error occurred while creating order!");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const responseData = await response.json();
  return responseData;
};
