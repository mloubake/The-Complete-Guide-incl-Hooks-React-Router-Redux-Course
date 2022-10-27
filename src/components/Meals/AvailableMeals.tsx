import React, { useEffect, useState } from "react";

import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals: React.FC = () => {
  const [meals, setMeals] = useState<
    Array<{ id: string; name: string; description: string; price: number }>
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [httpError, setHttpError] = useState<string>();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-course-udemy-fb04b-default-rtdb.firebaseio.com/meals.json"
      ).then();

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map(
    (meal: {
      id: string;
      name: string;
      description: string;
      price: number;
    }) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    )
  );

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
