const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  token: null,
  expirationTime: null,
  userId: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.isLoggedIn = true;
      state.expirationTime = Date.now() + 3600 * 1000;
    },
    clearToken: (state, action) => {
      state.token = null;
      state.expirationTime = null;
      state.userId = null;
      state.isLoggedIn = false;
    },
  },
});

export const authSliceActions = authSlice.actions;
export default authSlice;
