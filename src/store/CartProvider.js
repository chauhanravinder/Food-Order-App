import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (prevState, action) => {
  if (action.type === "ADD_CART_ITEM") {
    const existingCartItemIndex = prevState.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = prevState.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      let updatedItem;
      updatedItem = {
        ...existingCartItem,
        // amount: existingCartItem.amount + action.item.amount,
        amount: existingCartItem.amount + 1,
      };

      updatedItems = [...prevState.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = prevState.items.concat(action.item);
    }

    // const updatedTotalAmount =
    //   prevState.totalAmount + action.item.amount * action.item.price;
    const updatedTotalAmount = prevState.totalAmount + action.item.price;

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "REMOVE_CART_ITEM") {
    const existingCartItemIndex = prevState.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = prevState.items[existingCartItemIndex];

    const updatedTotalAmount = prevState.totalAmount - existingCartItem.price;

    let updatedItem;
    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = prevState.items.filter((item, index) => {
        return item.id !== action.id;
      });
    } else {
      updatedItems = [...prevState.items];
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };

      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_CART_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_CART_ITEM", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
