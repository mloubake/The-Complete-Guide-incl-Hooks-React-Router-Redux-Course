import React from "react";

import { Container } from "./styles.js";

interface IProps {
  text: string;
  style?: {};
}

const Label: React.FC<IProps> = ({ text, style }) => {
  return <Container style={{ textAlign: "center" }}>{text}</Container>;
};

export default Label;
