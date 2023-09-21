import { configureStore } from "@reduxjs/toolkit";
import modalsSlice from "./modals-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    modals: modalsSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
