import React from "react";

import classes from "../ErrorModal/styles.module.css";

interface IProps {
  onCloseModal: () => void;
}

const Backdrop: React.FC<IProps> = ({ onCloseModal }) => {
  return <div className={classes.backdrop} onClick={onCloseModal} />;
};

export default Backdrop;
