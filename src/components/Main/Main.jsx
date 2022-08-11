import React from "react";

import Container from "../Container/Container";
import Button from "../Button/Button";

import classes from "./styles.module.css";

function Main() {
  return (
    <div className={classes.main}>
      <Container className={classes.container}>
        <div className={classes.user_inputs}>
          <div id="username">
            <label>Username</label>
            <input text="text" />
          </div>
          <div id="password">
            <label>Password</label>
            <input text="text" />
          </div>
        </div>
        <Button text={"Login"} type={"primary"} />
      </Container>
    </div>
  );
}

export default Main;
