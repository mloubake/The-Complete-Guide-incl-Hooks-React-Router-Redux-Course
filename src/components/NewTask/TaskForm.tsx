import React, { useRef } from "react";

import classes from "./TaskForm.module.css";

interface ITaskForm {
  loading: boolean;
  onEnterTask: (args0: any) => void;
}

const TaskForm: React.FC<ITaskForm> = ({ onEnterTask, loading }) => {
  const taskInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: any) => {
    event.preventDefault();

    const enteredValue: string = taskInputRef.current?.value || "";

    if (enteredValue.trim().length > 0) {
      onEnterTask(enteredValue);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>{loading ? "Sending..." : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
