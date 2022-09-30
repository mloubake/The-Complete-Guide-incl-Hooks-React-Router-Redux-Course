import React, { useContext } from "react";

import MealItemForm from "./MealItemForm";

import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

interface IProps {
  key: string;
  id: string;
  name: string;
  description: string;
  price: number;
}

const MealItem: React.FC<IProps> = ({ id, name, description, price }) => {
  const cartContext = useContext(CartContext);

  const fixedFormatPrice = `${price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    cartContext.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{fixedFormatPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
