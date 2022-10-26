import React from "react";

import classes from "./CartItem.module.css";

interface IProps {
  name: string;
  price: number;
  amount: number;
  onAdd: React.MouseEventHandler<HTMLButtonElement>;
  onRemove: (id: any) => void;
}

type ItemType = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

const CartItem: React.FC<IProps> = ({
  name,
  price,
  amount,
  onAdd,
  onRemove,
}) => {
  const fixedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{fixedPrice}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
