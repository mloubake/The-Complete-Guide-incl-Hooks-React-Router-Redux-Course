import React, { FormEvent, FormEventHandler } from "react";

// import { Container } from './styles';

interface IProps {
  children: JSX.Element | Array<JSX.Element>;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<IProps> = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
