import { createSlice } from "@reduxjs/toolkit";

interface IItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

interface ICart {
  items: Array<IItem>;
  totalQuantity: number;
  changed: boolean;
}

const INITIAL_STATE: ICart = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem: IItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;

      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    removeItemFromCart(state, action) {
      const currentItem: IItem = action.payload;
      let existingItem = state.items.find((item) => item.id === currentItem.id);

      state.totalQuantity--;
      state.changed = true;

      if (existingItem!.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== currentItem.id);
      } else {
        existingItem!.quantity = existingItem!.quantity - 1;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem!.price;
        // existingItem.totalPrice = existingItem.totalPrice - currentItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
