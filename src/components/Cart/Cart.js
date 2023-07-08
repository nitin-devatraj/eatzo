import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import Spinner from "../UI/Spinner";

function Cart(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [onCheckout, setOnCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setOnCheckout(true);
  };

  const orderSubmitHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://eatzo-ac631-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onCloseCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const modalCartContent = (
    <>
      <div>
        <ul className={classes["cart-items"]}>
          {cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onAdd={cartItemAddHandler.bind(null, item)}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
            />
          ))}
        </ul>
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {onCheckout && (
        <Checkout onConfirm={orderSubmitHandler} onCancel={props.onCloseCart} />
      )}
      {!onCheckout && modalActions}
    </>
  );

  return (
    <Modal>
      {!isSubmitting && !didSubmit && modalCartContent}
      {isSubmitting && <Spinner />}
      {didSubmit && (
        <>
          <p className={classes.successful}>Order Submitted successfully 🎉</p>
          <div className={classes.actions}>
            <button className={classes.button} onClick={props.onCloseCart}>
              Close
            </button>
          </div>
        </>
      )}
    </Modal>
  );
}

export default Cart;
