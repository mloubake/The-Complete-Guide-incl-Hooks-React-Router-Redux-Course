import React from "react";
import { useState } from "react";

import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";

import classes from "./styles.module.css";

interface IProps {
  onChangeList: (username: string, age: string) => void;
}

interface IError {
  title: string;
  message: string;
}

const AddUser: React.FC<IProps> = ({ onChangeList }) => {
  let [username, setUsername] = useState<string>("");
  let [age, setAge] = useState<string>("");

  let [error, setError] = useState<IError | "">();

  let handleGetUsername = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  let handleGetAge = (event: React.FormEvent<HTMLInputElement>) => {
    setAge(event.currentTarget.value);
  };

  const handleCreateUser = () => {
    event.preventDefault();

    if (username.trim().length <= 0 || age.trim().length <= 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid username and age (non-empty values).",
      });

      return;
    }

    //This '+' converts string to number
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Age must be greater than 0!",
      });

      return;
    }

    onChangeList(username, age);

    setUsername("");
    setAge("");
    setError("");
  };

  const handleError = () => {
    setError(null);
  };

  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(event) => {
            handleGetUsername(event);
          }}
        />

        <label className={classes.age__label}>Age (Years)</label>
        <input
          type="number"
          value={age}
          onChange={(event) => {
            handleGetAge(event);
          }}
        />

        <Button type={"submit"} text={"Add User"} onClick={handleCreateUser} />
      </form>
      {error && <ErrorModal error={error} onCloseModal={handleError} />}
    </div>
  );
};

export { AddUser, IError };
