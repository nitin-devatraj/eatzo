import React from "react";
import classes from "./FoodItemForm.module.css";
import Input from "../../UI/Input";

function FoodItemForm(props) {
  return (
    <form className={classes.form}>
      <Input
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          width: "63",
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default FoodItemForm;
