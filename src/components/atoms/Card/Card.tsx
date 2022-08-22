import React from "react";

import "./styles.css";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Card: React.FC<IProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
