import { FormEvent } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = ({}) => {
  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value: string) => value.trim() != "");

  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value: string) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionEventHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    if (!enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionEventHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputref}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
        />
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your E-mail</label>
        <input
          // ref={nameInputref}
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>

      {nameInputHasError && !emailInputHasError && (
        <p className="error-text">Name must not be empty.</p>
      )}
      {emailInputHasError && !nameInputHasError && (
        <p className="error-text">
          E-mail must not be empty and must have a valid format.
        </p>
      )}
      {emailInputHasError && nameInputHasError && (
        <p className="error-text">Name and E-mail must not be empty.</p>
      )}

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
