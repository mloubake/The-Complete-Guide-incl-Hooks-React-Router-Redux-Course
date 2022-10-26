import React, { ProviderProps, useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

interface IProps {
  onClick: () => void;
}

interface ICartContext {
  items: never[];
  totalAmount: number;
  addItem: (item: ItemType) => void;
  removeItem: (id: string) => void;
}

type ItemType = {
  name: string;
  price: number;
  amount: number;
};

const HeaderCartButton: React.FC<IProps> = ({ onClick }) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

  const cartContext = useContext<ICartContext>(CartContext);

  const { items } = cartContext;

  const numberofCartItems = items.reduce(
    (currentNumber: number, item: ItemType) => {
      return currentNumber + item.amount;
    },
    0
  );

  const buttonClasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
