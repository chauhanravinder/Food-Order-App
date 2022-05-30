import styles from "./AvailableMeals.module.css";
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
      <ul>
        {AVAILABLE_MEALS.map((meal, index) => (
          <li>{meal.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default AvailableMeals;
