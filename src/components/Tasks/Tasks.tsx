import React from "react";
import { ITask } from "../../App";
import { IError, IRequestConfig } from "../../hooks/use-http";
import Section from "../UI/Section";
import TaskItem from "./TaskItem";
import classes from "./Tasks.module.css";

export interface ITasks {
  items: any[];
  error: boolean | null | IError;

  loading: boolean;
  onFetch: (
    requestConfig: IRequestConfig,
    applyData: (taskObj: ITask[]) => void
  ) => void;
}

const Tasks: React.FC<ITasks> = ({ items, error, onFetch, loading }) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (items.length > 0) {
    taskList = (
      <ul>
        {items.map((task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content: String | JSX.Element = taskList;

  if (error) {
    content = <button onClick={onFetch}>Try again</button>;
  }

  if (loading) {
    content = "Loading tasks...";
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
