import React from "react";
import CartButton from "./CartButton";
import classes from "./MenuBar.module.css";
import icon from "../../assets/icon.png";

function MenuBar(props) {
  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <img src={icon} alt="#" className={classes.icon} />
        <h1>Eatzo</h1>
      </div>
      <CartButton onClick={props.onShowCart} />
    </header>
  );
}

export default MenuBar;
