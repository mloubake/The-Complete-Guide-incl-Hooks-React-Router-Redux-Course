import React from "react";

import Container from "../../components/Container/Container";

import classes from "./styles.module.css";

const Main: React.FC = () => {
  return (
    <div className={classes.main}>
      <Container className={classes.container}>
        <h1>Welcome Back</h1>
      </Container>
    </div>
  );
};

export default Main;
