import React, { useReducer } from "react";

import CartContext from "./cart-context";

interface IProps {
  children: React.ReactNode;
}

interface IReducer {
  (prevState: any, action: any): any;
}

type State = {
  value: string;
  items: Array<{
    id: string;
    amount: number;
    price: number;
  }>;
  totalAmount: number;
};

type Action = {
  type: string;
  id: string;
  item: {
    id: string;
    name: string;
    price: number;
    amount: number;
  };
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: State, action: Action) => {
  if (action.type === "ADD_CART_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItem;
    let updatedItems;

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];

      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItem = { ...action.item };
      updatedItems = state.items.concat(updatedItem);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_CART_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };

      updatedItems = [...state.items];

      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider: React.FC<IProps> = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer<IReducer>(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: any) => {
    dispatchCartAction({ type: "ADD_CART_ITEM", item: item });
  };

  const removetemToCartHandler = (id: any) => {
    dispatchCartAction({ type: "REMOVE_CART_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removetemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
