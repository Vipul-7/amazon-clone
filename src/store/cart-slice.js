const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
  totalQuantity: 0,
  subTotal: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.subTotal = action.payload.subTotal;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          colour: newItem.colour,
        });
      } else {
        existingItem.quantity++;
      }

      state.subTotal = state.subTotal + newItem.price;
      state.totalQuantity++;

      // changes in local storage

      const cartItems = JSON.parse(localStorage.getItem("cartItems"));
      const cartItemsArray = cartItems ? cartItems : [];

      const existingItemInLocalStorage = cartItemsArray.find(
        (item) => item.id === newItem.id
      );

      if (!existingItemInLocalStorage) {
        cartItemsArray.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          colour: newItem.colour,
        });
      } else {
        existingItemInLocalStorage.quantity++;
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItemsArray));

      const totalQuantity = JSON.parse(localStorage.getItem("totalQuantity"));
      const totalQuantityNumber = totalQuantity ? totalQuantity : 0;

      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(totalQuantityNumber + 1)
      );

      const subTotal = JSON.parse(localStorage.getItem("subTotal"));
      const subTotalNumber = subTotal ? subTotal : 0;

      localStorage.setItem(
        "subTotal",
        JSON.stringify(subTotalNumber + newItem.price)
      );
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }

      state.subTotal = state.subTotal - existingItem.price;
      state.totalQuantity--;

      // changes in local storage

      const cartItems = JSON.parse(localStorage.getItem("cartItems"));
      let cartItemsArray = cartItems ? cartItems : [];

      const existingItemInLocalStorage = cartItemsArray.find(
        (item) => item.id === id
      );

      if (existingItemInLocalStorage.quantity === 1) {
        cartItemsArray = cartItemsArray.filter((item) => item.id !== id);
      } else {
        existingItemInLocalStorage.quantity--;
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItemsArray));

      const totalQuantity = JSON.parse(localStorage.getItem("totalQuantity"));
      const totalQuantityNumber = totalQuantity ? totalQuantity : 0;

      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(totalQuantityNumber - 1)
      );

      const subTotal = JSON.parse(localStorage.getItem("subTotal"));
      const subTotalNumber = subTotal ? subTotal : 0;

      localStorage.setItem(
        "subTotal",
        JSON.stringify(subTotalNumber - existingItem.price)
      );
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.subTotal = 0;

      // changes in local storage

      localStorage.removeItem("cartItems");
      localStorage.removeItem("totalQuantity");
      localStorage.removeItem("subTotal");
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice;
