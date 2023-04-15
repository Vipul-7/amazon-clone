const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
  totalQuantity: 0,
  SubTotal: 0,
};

const cartSlice = createSlice({ 
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          colour: newItem.colour,
        });
      } else {
        existingItem.quantity++;
      }

      state.SubTotal = state.SubTotal + newItem.price;
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }

      state.SubTotal = state.SubTotal - existingItem.price;
      state.totalQuantity--;
    },
  },
});
