import React from "react";
import classes from "./FoodSummary.module.css";

function FoodSummary() {
  return (
    <section className={classes.summary}>
      <h2>Your Flavors, Delivered Fast</h2>
      <p>
        Craving a scrumptious meal from your favorite restaurants but don't want
        to step out?
      </p>
      <p>
        EatZo is here to tantalize your taste buds with a swift and convenient
        food delivery experience.
      </p>
    </section>
  );
}

export default FoodSummary;
