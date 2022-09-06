import React from "react";

interface IProps {
  id: string;
  children: JSX.Element | Array<JSX.Element>;
}

const Section: React.FC<IProps> = ({ id, children }) => {
  return <section id={id}>{children}</section>;
};

export default Section;
