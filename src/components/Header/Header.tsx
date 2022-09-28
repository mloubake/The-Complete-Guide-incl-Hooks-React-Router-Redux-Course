import React, { useContext } from "react";
import AuthenticateContext from "../../store/authenticate-context";
import Button from "../Button/Button";

import classes from "./styles.module.css";

const Header: React.FC = () => {
  const authenticateContext = useContext(AuthenticateContext);

  return (
    <header className={classes.header}>
      <label>A Typical Page</label>
      {authenticateContext.isLoggedIn && (
        <div>
          <Button text={"Users"} button_class={"primary"} />
          <Button text={"Admin"} button_class={"primary"} />
          <Button
            text={"Logout"}
            button_class={"secondary"}
            onClick={authenticateContext.onLogout}
          />
        </div>
      )}
      {!authenticateContext.isLoggedIn && <></>}
    </header>
  );
};

export default Header;
