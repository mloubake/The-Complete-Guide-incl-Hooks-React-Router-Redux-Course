import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

interface IProps {
  onClose: () => void;
}

interface ICartContext {
  items: never[];
  totalAmount: number;
  addItem: (item: ItemType) => void;
  removeItem: (id: string) => void;
}

type ItemType = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

const Cart: React.FC<IProps> = ({ onClose }) => {
  const cartContext = useContext<ICartContext>(CartContext);

  const totalAmpount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItem = cartContext.items.length > 0;

  const cartItemAddHandler = (item: ItemType) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id: string) => {
    cartContext.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item: ItemType) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmpount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--all"]} onClick={onClose}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
