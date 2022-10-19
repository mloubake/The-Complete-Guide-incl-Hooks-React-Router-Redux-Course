import React from "react";
import useHttp from "../../hooks/use-http";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

interface INewTask {
  onAddTask: (arg0: { id: string; text: string }) => void;
}

interface ITaskData {
  name: string;
}

const NewTask: React.FC<INewTask> = ({ onAddTask }) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText: string, taskData: ITaskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText: string) => {
    sendTaskRequest(
      {
        url: "https://react-course-udemy-fb04b-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
