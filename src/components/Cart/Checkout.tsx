import React, { FormEvent, useRef, useState } from "react";

import classes from "./Checkout.module.css";

interface IProps {
  onConfirm: (arg0: {
    name: string | undefined;
    street: string | undefined;
    city: string | undefined;
    postalCode: string | undefined;
  }) => void;
  onCancel: () => void;
}

const isEmpty = (value: string | undefined) => value?.trim() === "";
const isFiveChars = (value: string | undefined) => value?.trim().length !== 5;

const Checkout: React.FC<IProps> = ({ onConfirm, onCancel }) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  const confirmHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredUserInformation = {
      name: nameInputRef.current?.value,
      street: streetInputRef.current?.value,
      postalCode: postalInputRef.current?.value,
      city: cityInputRef.current?.value,
    };

    const enteredNameIsValid = !isEmpty(enteredUserInformation.name);
    const enteredStreetIsValid = !isEmpty(enteredUserInformation.street);
    const enteredCityIsValid = !isEmpty(enteredUserInformation.city);
    const enteredPostalCodeIsValid = !isFiveChars(
      enteredUserInformation.postalCode
    );

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    onConfirm({
      name: enteredUserInformation.name,
      street: enteredUserInformation.street,
      city: enteredUserInformation.city,
      postalCode: enteredUserInformation.postalCode,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;

  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code (5 characters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
