import React from "react";

interface IProps {
  children: JSX.Element | JSX.Element[] | string;
  className: any | string;
}

const Container: React.FC<IProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Container;
