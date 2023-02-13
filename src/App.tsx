import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import "./App.css";

import Cart from "./components/Cart/Cart";
import { RootState } from "./components/Cart/store";
import {
  fetchCartData,
  sendCartData,
} from "./components/Cart/store/cart-action";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

function App() {
  let [isInitial, setIsInitial] = useState(true);

  const dispatch = useDispatch<any>();

  const showCart = useSelector((state: RootState) => state.ui.cartIsVisible);
  const cart = useSelector((state: RootState) => state.cart);
  const notification = useSelector((state: RootState) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      setIsInitial(false);
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
