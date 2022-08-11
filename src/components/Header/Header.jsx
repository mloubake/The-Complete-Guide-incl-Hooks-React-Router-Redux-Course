import React from "react";
import Button from "../Button/Button";

import classes from "./styles.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <label>A Typical Page</label>{" "}
      {true && (
        <div>
          <Button text={"Users"} type={"primary"} />
          <Button text={"Admin"} type={"primary"} />
          <Button text={"Logout"} type={"secondary"} />
        </div>
      )}
    </header>
  );
}

export default Header;
