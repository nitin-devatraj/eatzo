import React from "react";
import classes from "./FoodsList.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Cheeseburger",
    description: "Classic with melted cheese",
    price: 9.99,
  },
  {
    id: "m2",
    name: "Pasta Carbonara",
    description: "Creamy Italian delight",
    price: 14.5,
  },
  {
    id: "m3",
    name: "Chicken Tikka Masala",
    description: "Indian favorite with tender chicken",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with dressing",
    price: 8.99,
  },
  {
    id: "m5",
    name: "Fish and Chips",
    description: "British classic with crispy batter",
    price: 16.99,
  },
  {
    id: "m6",
    name: "Margarita Pizza",
    description: "Simple and flavorful Italian pizza",
    price: 11.99,
  },
  {
    id: "m7",
    name: "Sushi Platter",
    description: "Assortment of fresh sushi rolls",
    price: 22.99,
  },
  {
    id: "m8",
    name: "Chicken Shawarma",
    description: "Middle Eastern wrap with tender chicken",
    price: 10.99,
  },
  {
    id: "m9",
    name: "Veggie Burger",
    description: "Plant-based patty with toppings",
    price: 13.99,
  },
  {
    id: "m10",
    name: "Greek Salad",
    description: "Refreshing salad with feta cheese",
    price: 9.99,
  },
  {
    id: "m11",
    name: "Beef Stir-Fry",
    description: "Savory beef and vegetables",
    price: 15.99,
  },
  {
    id: "m12",
    name: "Chocolate Brownie",
    description: "Decadent dessert with rich chocolate",
    price: 6.99,
  },
];

function FoodsList() {
  return (
    <section className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default FoodsList;
