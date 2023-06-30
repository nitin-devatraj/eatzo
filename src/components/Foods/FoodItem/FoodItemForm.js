import React, { useRef } from "react";
import classes from "./FoodItemForm.module.css";
import Input from "../../UI/Input";

function FoodItemForm(props) {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +amountInputRef.current.value;
    if (enteredAmount === 0 || enteredAmount < 1 || enteredAmount > 10) {
      return;
    }
    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default FoodItemForm;
