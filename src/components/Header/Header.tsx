import React from "react";
import Button from "../Button/Button";

import classes from "./styles.module.css";

interface IProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Header: React.FC<IProps> = ({ isAuthenticated, onLogout }) => {
  return (
    <header className={classes.header}>
      <label>A Typical Page</label>
      {isAuthenticated && (
        <div>
          <Button text={"Users"} button_class={"primary"} onClick={null} />
          <Button text={"Admin"} button_class={"primary"} onClick={null} />
          <Button
            text={"Logout"}
            button_class={"secondary"}
            onClick={onLogout}
          />
        </div>
      )}
      {!isAuthenticated && <></>}
    </header>
  );
};

export default Header;
