import { configureStore } from "@reduxjs/toolkit";
import modalsSlice from "./modals-slice";

const store = configureStore({
    reducer:{modals: modalsSlice.reducer}
});

export default store;
