import React from "react";
import mealsImage from "../../assets/images/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        {/* <button>Cart</button> */}
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="a table" />
      </div>
    </React.Fragment>
  );
};

export default Header;
