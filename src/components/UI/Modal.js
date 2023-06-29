import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

function BackDrop(props) {
  return <div className={classes.backdrop}></div>;
}

function ModelOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

function Model(props) {
  return (
    <>
      {ReactDom.createPortal(<BackDrop />, document.getElementById("over-lay"))}
      {ReactDom.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        document.getElementById("over-lay")
      )}
      {}
    </>
  );
}

export default Model;
