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
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {AVAILABLE_MEALS.map((meal, index) => (
            <MealItem
              name={meal.name}
              description={meal.description}
              price={meal.price}
              key={index}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
