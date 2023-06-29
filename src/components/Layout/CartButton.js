import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";

function CartButton(props) {
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default CartButton;
