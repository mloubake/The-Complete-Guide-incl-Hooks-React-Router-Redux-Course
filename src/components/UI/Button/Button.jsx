import React from "react";

import { Container } from "./styles";

const Button = (props) => {
  return (
    <Container type={props.type} onClick={props.onClick}>
      {props.children}
    </Container>
  );
};

export default Button;
