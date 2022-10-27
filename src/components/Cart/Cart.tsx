import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

interface IProps {
  onClose: () => void;
}

interface ICartContext {
  items: never[];
  totalAmount: number;
  addItem: (item: ItemType) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

type ItemType = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

const Cart: React.FC<IProps> = ({ onClose }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartContext = useContext<ICartContext>(CartContext);

  const totalAmpount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItem = cartContext.items.length > 0;

  const cartItemAddHandler = (item: ItemType) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id: string) => {
    cartContext.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData: {
    name: string | undefined;
    street: string | undefined;
    city: string | undefined;
    postalCode: string | undefined;
  }) => {
    setIsSubmitting(true);

    await fetch(
      "https://react-course-udemy-fb04b-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartContext.items,
        }),
      }
    );

    setIsSubmitting(false);
    setDidSubmit(true);
    cartContext.clearCart();
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

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--all"]} onClick={onClose}>
        Close
      </button>
      {hasItem && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmpount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={onClose} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
