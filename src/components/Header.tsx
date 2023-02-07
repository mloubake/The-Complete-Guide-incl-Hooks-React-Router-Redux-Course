import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { RootState } from "../store";
import { setAuthentication } from "../store/authenticateSlice";

const Header = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authenticate.isAuthenticated
  );

  const dispath = useDispatch();

  const logoutSession = () => {
    dispath(setAuthentication(false));
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button
                onClick={() => {
                  logoutSession();
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
