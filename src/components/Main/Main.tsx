import React from "react";

import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";

import classes from "./styles.module.css";

interface IProps {
  onLogout: () => void;
}

const Main: React.FC<IProps> = ({ onLogout }) => {
  return (
    <div className={classes.main}>
      <Container className={classes.container}>
        <h1>Welcome Back</h1>
      </Container>
    </div>
  );
};

export default Main;
