import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartStateReducer = (state, action) => {
  let upatedItemsArray = state.items;
  let updatedTotalAmount;
  if (action.type === "ADD_ITEM") {
    const orderItemIndex = state.items.findIndex((item) => {
      return item.id === action.targetItem.id;
    });

    const existingOrderItem = state.items[orderItemIndex];

    if (!existingOrderItem) {
      upatedItemsArray = state.items.concat(action.targetItem);
    } else {
      let updatedItem = {
        ...existingOrderItem,
        amount: existingOrderItem.amount + action.targetItem.amount,
      };
      upatedItemsArray = [...state.items];
      upatedItemsArray[orderItemIndex] = updatedItem;
    }
    updatedTotalAmount =
      state.totalAmount + action.targetItem.price * action.targetItem.amount;

    return {
      items: upatedItemsArray,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const orderItemIndex = state.items.findIndex((item) => {
      return item.id === action.targetItemId;
    });

    const existingOrderItem = state.items[orderItemIndex];
    updatedTotalAmount = Math.abs(state.totalAmount - existingOrderItem.price);

    if (existingOrderItem.amount === 1) {
      upatedItemsArray = state.items.filter((item) => {
        return item.id !== action.targetItemId;
      });
    } else {
      let updatedItem = {
        ...existingOrderItem,
        amount: existingOrderItem.amount - 1,
      };
      upatedItemsArray = [...state.items];
      upatedItemsArray[orderItemIndex] = updatedItem;
    }

    return {
      items: upatedItemsArray,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

function CardContextProvider(props) {
  const [cartState, dispatchCartState] = useReducer(
    CartStateReducer,
    defaultCartState
  );

  const addItemhandler = (item) => {
    //console.log(item);
    dispatchCartState({ type: "ADD_ITEM", targetItem: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartState({ type: "REMOVE_ITEM", targetItemId: id });
  };

  const CartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemhandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={CartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CardContextProvider;
