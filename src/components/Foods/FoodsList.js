import React, { useEffect, useState } from "react";
import classes from "./FoodsList.module.css";
import Card from "../UI/Card";
import Spinner from "../UI/Spinner";
import FoodItem from "./FoodItem/FoodItem";

function FoodsList() {
  const [foodsList, setFoodsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchFoodsList = async () => {
      const response = await fetch(
        "https://eatzo-ac631-default-rtdb.europe-west1.firebasedatabase.app/foods.json"
      );

      if (!response.ok) {
        throw new Error("something went wrong, try again!");
      }

      const data = await response.json();
      const loadedItems = [];
      for (const key in data) {
        loadedItems.push({
          id: key,
          ...data[key],
        });
      }
      setFoodsList(loadedItems);
      setIsLoading(false);
    };

    fetchFoodsList().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (error) {
    return (
      <section className={classes.meals}>
        <Card>
          <p className={classes.error}>{error}</p>
        </Card>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading ? (
          <Spinner />
        ) : (
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
        )}
      </Card>
    </section>
  );
}

export default FoodsList;
