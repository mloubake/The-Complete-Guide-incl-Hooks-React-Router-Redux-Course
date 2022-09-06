import React from "react";

import { Container } from "./styles";

interface IProps {
  type: "submit";
  onClick?: () => void;
  children: JSX.Element | string;
}

const Button: React.FC<IProps> = ({ type, onClick, children }) => {
  return (
    <Container type={type} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;
