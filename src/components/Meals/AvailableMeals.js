import { useEffect, useState } from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const AVAILABLE_MEALS = [
  {
    id: 1,
    name: "Rice Meals",
    description: "Plain Rice, sambhar and salad",
    price: 40,
  },
  {
    id: 2,
    name: "Roti Thali",
    description: "4 Rotis, 1 Dal, Raita, Dry veg and salad",
    price: 85,
  },
  {
    id: 3,
    name: "Egg Fried Rice",
    description: "Double egg fried rice",
    price: 50,
  },
  {
    id: 4,
    name: "Biryani",
    description: "chicken Biryani with Raita",
    price: 300,
  },
];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://food-order-app-c270b-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          description: responseData[key].Description,
          price: responseData[key].Price,
          description: responseData[key].Description,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((err) => {
      setIsLoading(false);
      setHttpError(err.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {meals.map((meal, index) => (
            <MealItem
              name={meal.name}
              description={meal.description}
              price={meal.price}
              key={meal.id}
              id={meal.id}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
