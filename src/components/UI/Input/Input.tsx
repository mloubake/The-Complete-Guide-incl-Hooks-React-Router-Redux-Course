import React, { ChangeEvent, FormEvent } from "react";

import { Container } from "./styles";

interface IProps {
  type: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = ({ type, onChange }) => {
  return <Container type={type} onChange={onChange} />;
};

export default Input;
