import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: {},
    isFetching: false,
    error: false,
  },
  reducers: {
    AUTH: (state, action) => {
      state.error = true;
      const { payload } = action.payload;

      //   console.log(state.auth);
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.auth = payload;
    },
    LOGOUT: (state) => {
      state.auth = "";
      localStorage.clear();
    },
  },
});

export const { AUTH, LOGOUT } = authSlice.actions;
export default authSlice.reducer;
