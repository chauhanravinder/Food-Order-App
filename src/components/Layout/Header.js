import React from "react";
import mealsImage from "../../assets/images/meals.jpg";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="a table image" />
      </div>
    </React.Fragment>
  );
};

export default Header;
