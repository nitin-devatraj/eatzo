import React from "react";
import classes from "./FoodSummary.module.css";

function FoodSummary() {
  return (
    <section className={classes.summary}>
      <h2>Remarkable culinary experience, right at your doorstep</h2>
      <p>
        Discover an extensive menu featuring delectable meals cooked by
        experienced chefs using top-notch ingredients.
      </p>
      <p>
        With convenient delivery, indulge in the pleasure of savoring delicious
        food, brought to you with care and passion.
      </p>
    </section>
  );
}

export default FoodSummary;
