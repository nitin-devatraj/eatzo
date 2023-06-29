import React from "react";
import MenuBar from "./MenuBar";
import HeroImage from "./HeroImage";

function Header(props) {
  return (
    <>
      <MenuBar onShowCart={props.onShowCart} />
      <HeroImage />
    </>
  );
}

export default Header;
