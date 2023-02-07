import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICounterState {
  value: number;
  toggle: boolean;
}

const INITIAL_STATE: ICounterState = {
  value: 0,
  toggle: true,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increase: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },

    decrease: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },

    toggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { increase, decrease, toggle } = counterSlice.actions;

export default counterSlice.reducer;
