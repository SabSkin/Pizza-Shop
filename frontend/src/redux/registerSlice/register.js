import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: "admin",
  password: "0000",
  access: false,
};

const registerSlice = createSlice({
  name: "registerSlice",
  initialState: initialState,
  reducers: {
    changeLoginPass: (state, action) => {
      const { login, password } = action.payload;
      state.login = login;
      state.password = password;
    },
    changeAccess: (state, action) => {
      state.access = action.payload;
    },
  },
});

export const { changeLoginPass, changeAccess } = registerSlice.actions;

export const selectInitialState = (state) => state.registerSlice;
export const selectAccess = (state) => state.registerSlice.access;

export default registerSlice.reducer;
