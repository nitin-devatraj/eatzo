import React, { useContext } from "react";
import classes from "./FoodItem.module.css";
import FoodItemForm from "./FoodItemForm";
import CartContext from "../../../store/cart-context";

function FoodItem(props) {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  const price = `$${parseInt(props.price).toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div className={classes.form}>
        <FoodItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default FoodItem;
