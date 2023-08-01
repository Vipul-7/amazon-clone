const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  showSideNavigation: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    showSideNavigation(state) {
      state.showSideNavigation = !state.showSideNavigation;
    },
  },
});

export const modalsActions = modalsSlice.actions;
export default modalsSlice;
