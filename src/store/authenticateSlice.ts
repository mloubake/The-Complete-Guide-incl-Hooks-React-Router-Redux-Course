import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthenticateState {
  isAuthenticated: boolean;
}

const INITIAL_STATE: IAuthenticateState = {
  isAuthenticated: false,
};

export const authenticateSlice = createSlice({
  name: "authentication",
  initialState: INITIAL_STATE,
  reducers: {
    setAuthentication: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setAuthentication } = authenticateSlice.actions;

export default authenticateSlice.reducer;
