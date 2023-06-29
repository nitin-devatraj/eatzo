import React from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (prevState, action) => {
  if (action.type === "ADD") {
    const updatedItems = prevState.items.concat(action.payload);
    const updatedTotalAmount =
      prevState.totalAmount + action.payload.price * action.payload.amount;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } else if (action.type === "REMOVE") {
  } else {
    return defaultCartState;
  }
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", payload: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.provider value={cartContext}>
      {props.children}
    </CartContext.provider>
  );
}

export default CartProvider;
