import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = cartCtx.items.map((item, index) => (
    // <li key={item.id}>{item.name}</li>
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onClose={props.onClose}>
      <div>
        <ul>{cartItems}</ul>
        <div className={styles.total}>
          <span>Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && <button className={styles.button}>Order</button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
