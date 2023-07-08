import React, { useEffect, useState } from "react";
import classes from "./FoodsList.module.css";
import Card from "../UI/Card";
import FoodItem from "./FoodItem/FoodItem";

function FoodsList() {
  const [foodsList, setFoodsList] = useState([]);
  useEffect(() => {
    const fetchFoodsList = async () => {
      const response = await fetch(
        "https://eatzo-ac631-default-rtdb.europe-west1.firebasedatabase.app/foods.json"
      );
      const data = await response.json();
      const loadedItems = [];
      for (const key in data) {
        loadedItems.push({
          id: key,
          ...data[key],
        });
      }
      setFoodsList(loadedItems);
    };
    fetchFoodsList();
  }, []);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {foodsList.map((item) => (
            <FoodItem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default FoodsList;
