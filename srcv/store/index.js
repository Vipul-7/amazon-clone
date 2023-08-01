import { configureStore } from "@reduxjs/toolkit";
import modalsSlice from "./modals-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { modals: modalsSlice.reducer, cart: cartSlice.reducer },
});

export default store;
