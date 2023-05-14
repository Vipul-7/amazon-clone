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

      const quantityInNumber = Number(newItem.quantity);

      // changes in state

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quantity: quantityInNumber,
          colour: newItem.colour,
        });
      } else {
        existingItem.quantity += quantityInNumber;
      }

      state.subTotal = state.subTotal + newItem.price * quantityInNumber;
      state.totalQuantity += quantityInNumber;

      // changes in local storage - cartItems

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
          quantity: quantityInNumber,
          colour: newItem.colour,
        });
      } else {
        existingItemInLocalStorage.quantity += quantityInNumber;
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItemsArray));

      // changes in local storage - totalQuantity

      const totalQuantity = JSON.parse(localStorage.getItem("totalQuantity"));
      const totalQuantityNumber = totalQuantity ? totalQuantity : 0;

      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(totalQuantityNumber + quantityInNumber)
      );

      // changes in local storage - subTotal

      const subTotal = JSON.parse(localStorage.getItem("subTotal"));
      const subTotalNumber = subTotal ? subTotal : 0;

      localStorage.setItem(
        "subTotal",
        JSON.stringify(subTotalNumber + newItem.price * quantityInNumber)
      );
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      // changes in state

      state.items = state.items.filter((item) => item.id !== id);

      state.subTotal =
        state.subTotal - existingItem.price * existingItem.quantity;
      state.totalQuantity -= existingItem.quantity;

      // changes in local storage - cartItems

      const cartItems = JSON.parse(localStorage.getItem("cartItems"));
      let cartItemsArray = cartItems ? cartItems : [];

      cartItemsArray = cartItemsArray.filter((item) => item.id !== id);

      localStorage.setItem("cartItems", JSON.stringify(cartItemsArray));

      // changes in local storage - totalQuantity

      const totalQuantity = JSON.parse(localStorage.getItem("totalQuantity"));
      const totalQuantityNumber = totalQuantity ? totalQuantity : 0;

      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(totalQuantityNumber - existingItem.quantity)
      );

      // changes in local storage - subTotal
      const subTotal = JSON.parse(localStorage.getItem("subTotal"));
      const subTotalNumber = subTotal ? subTotal : 0;

      localStorage.setItem(
        "subTotal",
        JSON.stringify(
          subTotalNumber - existingItem.price * existingItem.quantity
        )
      );
    },

    changesInQuantity(state, action) {
      const { id, quantity } = action.payload;
      const quantityInNumber = Number(quantity);

      const existingItem = state.items.find((item) => item.id === id);

      // changes in state

      state.subTotal =
        state.subTotal -
        existingItem.price * existingItem.quantity +
        existingItem.price * quantityInNumber;
      state.totalQuantity =
        state.totalQuantity - existingItem.quantity + quantityInNumber;

      state.subTotal = state.subTotal;
      existingItem.quantity = quantityInNumber;

      // changes in local storage - cartItems

      const cartItems = JSON.parse(localStorage.getItem("cartItems"));
      const cartItemsArray = cartItems ? cartItems : [];

      const existingItemInLocalStorage = cartItemsArray.find(
        (item) => item.id === id
      );

      existingItemInLocalStorage.quantity = quantityInNumber;

      localStorage.setItem("cartItems", JSON.stringify(cartItemsArray));

      // changes in local storage - totalQuantity

      const totalQuantity = JSON.parse(localStorage.getItem("totalQuantity"));

      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(totalQuantity - existingItem.quantity + quantityInNumber)
      );

      // changes in local storage - subTotal

      const subTotal = JSON.parse(localStorage.getItem("subTotal"));

      localStorage.setItem(
        "subTotal",
        JSON.stringify(
          subTotal -
            existingItem.price * existingItem.quantity +
            existingItem.price * quantityInNumber
        )
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
