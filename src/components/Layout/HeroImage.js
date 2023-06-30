import React from "react";
import classes from "./HeroImage.module.css";
import heroImage from "../../assets/hero-image.svg";

function HeroImage(props) {
  return (
    <div className={classes["main-image"]}>
      <img src={heroImage} alt="Food items" />
    </div>
  );
}

export default HeroImage;
