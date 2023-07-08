import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

function isNotEmpty(value) {
  return value.trim() !== "";
}

function isFiveChars(value) {
  return value.trim() >= 5;
}

function Checkout(props) {
  const [inputValidity, setInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const postalCodeInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const city = cityInputRef.current.value;
    const postalCode = postalCodeInputRef.current.value;
    const street = streetInputRef.current.value;

    const nameIsValid = isNotEmpty(name);
    const streetIsValid = isNotEmpty(street);
    const cityIsValid = isNotEmpty(city);
    const postalCodeIsValid = isFiveChars(postalCode);

    setInputValidity({
      name: nameIsValid,
      street: streetIsValid,
      city: cityIsValid,
      postalCode: postalCodeIsValid,
    });

    const formIsValid =
      nameIsValid && cityIsValid && streetIsValid && postalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name,
      street,
      city,
      postalCode,
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.container}>
        <div className={classes.control}>
          <label htmlFor="name">Name </label>
          <input type="text" id="name" ref={nameInputRef} />
          {!inputValidity.name && (
            <p className={classes.invalid}>enter a valid name</p>
          )}
        </div>
        <div className={classes.control}>
          <label htmlFor="city">City / Town </label>
          <input type="text" id="city" ref={cityInputRef} />
          {!inputValidity.city && (
            <p className={classes.invalid}>enter a valid city</p>
          )}
        </div>
        <div className={classes.control}>
          <label htmlFor="street">Street </label>
          <input type="text" id="street" ref={streetInputRef} />
          {!inputValidity.street && (
            <p className={classes.invalid}>enter a valid street</p>
          )}
        </div>
        <div className={classes.control}>
          <label htmlFor="pin">Postal code </label>
          <input type="text" id="pin" ref={postalCodeInputRef} />
          {!inputValidity.postalCode && (
            <p className={classes.invalid}>
              enter a valid postal code &gt;= 5 chars
            </p>
          )}
        </div>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button className={classes.button}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
