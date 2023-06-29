import React from "react";
import classes from "./FoodItem.module.css";
import FoodItemForm from "./FoodItemForm";

function FoodItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div className={classes.form}>
        <FoodItemForm />
      </div>
    </li>
  );
}

export default FoodItem;
