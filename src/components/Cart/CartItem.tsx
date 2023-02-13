import { useDispatch } from "react-redux/es/hooks/useDispatch";
import classes from "./CartItem.module.css";
import { cartActions } from "./store/cart-slice";

interface IItem {
  id: string;
  name: string;
  quantity: number;
  total: number;
  price: number;
}

const CartItem = ({ id, name, quantity, total, price }: IItem) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({ id, name, price }));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart({ id, price }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
