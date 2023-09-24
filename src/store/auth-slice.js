const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  token: null,
  expirationTime: null,
  userId: null,
  isLoggedIn: false,
  userName: null,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.isLoggedIn = true;
      state.userName = action.payload.userName;
      state.expirationTime = Date.now() + 3600 * 1000;
    },
    clearToken: (state, action) => {
      state.token = null;
      state.expirationTime = null;
      state.userId = null;
      state.isLoggedIn = false;
      state.userName = null;
    },
  },
});

export const authSliceActions = authSlice.actions;
export default authSlice;
