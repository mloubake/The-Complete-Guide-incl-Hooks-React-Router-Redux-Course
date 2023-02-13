import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { cartActions } from "../Cart/store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

interface IItem {
  id: string;
  name: string;
  price: number;
  description: string;
}

const ProductItem = ({ id, name, price, description }: IItem) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        description,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
