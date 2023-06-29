import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

function Cart(props) {
  const cartItems = [
    {
      id: "m1",
      name: "Cheeseburger",
      description: "Classic with melted cheese",
      price: 9.99,
    },
  ];
  return (
    <Modal>
      <div>
        <ul className={classes["cart-items"]}>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$35.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
