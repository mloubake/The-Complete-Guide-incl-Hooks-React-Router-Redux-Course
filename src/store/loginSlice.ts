import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILoginState {
  email: string;
  password: string;
}
const INITIAL_STATE: ILoginState = {
  email: "",
  password: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState: INITIAL_STATE,
  reducers: {
    getEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    getPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { getEmail, getPassword } = loginSlice.actions;

export default loginSlice.reducer;
