import React from "react";

import "./Card.css";

interface IProps {
  style: any;
  children: React.ReactNode;
}

const Card: React.FC<IProps> = ({ style, children }) => {
  return (
    <div className="card" style={style}>
      {children}
    </div>
  );
};

export default Card;
