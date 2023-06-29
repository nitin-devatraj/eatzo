import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../store/cart-context";

function CartButton(props) {
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((acculumator, item) => {
    return acculumator + item.amount;
  }, 0);
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
}

export default CartButton;
