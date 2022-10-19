import React, { ReactNode } from "react";
import classes from "./Section.module.css";

interface ISection {
  children: ReactNode;
}

const Section: React.FC<ISection> = ({ children }) => {
  return <section className={classes.section}>{children}</section>;
};

export default Section;
