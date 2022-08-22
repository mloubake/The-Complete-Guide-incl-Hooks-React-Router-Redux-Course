import React from "react";

interface IProps {
  text: string;
}

const Label: React.FC<IProps> = ({ text }) => {
  return <label>{text}</label>;
};

export default Label;
