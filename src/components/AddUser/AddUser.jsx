import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";

import classes from "./styles.module.css";

function AddUser({ onChangeList }) {
  let [username, setUsername] = useState("");
  let [age, setAge] = useState("");

  let [error, setError] = useState();

  let handleGetUsername = (event) => {
    setUsername(event.target.value);
  };

  let handleGetAge = (event) => {
    setAge(event.target.value);
  };

  const handleCreateUser = (event) => {
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

        <Button type="submit" text={"Add User"} onClick={handleCreateUser} />
      </form>
      {error && <ErrorModal error={error} onCloseModal={handleError} />}
    </div>
  );
}

export default AddUser;
