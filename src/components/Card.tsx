import React, { ReactNode } from "react";

import classes from "./Card.module.css";

interface ICard {
  children: ReactNode;
}

const Card: React.FC<ICard> = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
