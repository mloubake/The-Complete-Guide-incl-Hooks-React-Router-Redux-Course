import { FormEvent } from "react";
import useInput from "../hooks/use-input";

const isNotEmpty = (value: string) => value.trim() !== "";
const isEmail = (value: string) => value.includes("@");

const BasicForm = ({}) => {
  const {
    value: firstNameValue,
    valueIsValid: firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    hasError: firstNameHasError,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    valueIsValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    hasError: lastNameHasError,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    valueIsValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    hasError: emailHasError,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(firstNameValue, lastNameValue, emailValue);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">Please enter a first name.</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Please enter a last name.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a e-mail address.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
