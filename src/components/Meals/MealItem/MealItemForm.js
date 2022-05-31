import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const entredAmount = amountInputRef.current.value;
    const entredAmountNumber = +entredAmount; /* for convert string to number */

    if (
      entredAmount.trim().length === 0 ||
      entredAmountNumber < 1 ||
      entredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(entredAmountNumber);
    console.log(entredAmountNumber, "entredAmount");
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {/* <input /> */}
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
