const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  showSideNavigation: false,
  isOrderPlaced: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    showSideNavigation(state) {
      state.showSideNavigation = !state.showSideNavigation;
    },
    orderPlaced(state) {
      state.isOrderPlaced = !state.isOrderPlaced;
    },
  },
});

export const modalsActions = modalsSlice.actions;
export default modalsSlice;
