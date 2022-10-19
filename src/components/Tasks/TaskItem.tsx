import React, { ReactNode } from "react";
import classes from "./TaskItem.module.css";

interface ITaskItem {
  children: ReactNode;
}

const TaskItem: React.FC<ITaskItem> = ({ children }) => {
  return <li className={classes.task}>{children}</li>;
};

export default TaskItem;
