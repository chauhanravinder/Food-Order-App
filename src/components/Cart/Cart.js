import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = [{ id: 1, name: "Rice", amount: 2, price: 22 }].map(
    (item, index) => <li key={item.id}>{item.name}</li>
  );
  return (
    <Modal onClose={props.onClose}>
      <div>
        <ul>{cartItems}</ul>
        <div className={styles.total}>
          <span>Amount</span>
          <span>20</span>
        </div>
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          <button className={styles.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
