import { useContext } from "react";

import classes from "./Cart.module.css";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    //console.log(item);
    cartCtx.addItem({...item,amount:1});
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((orderItem) => {
        return (
          <CartItem
            key={orderItem.id}
            name={orderItem.name}
            price={orderItem.price}
            amount={orderItem.amount}
            onRemove={cartItemRemoveHandler.bind(null, orderItem.id)}
            onAdd={cartItemAddHandler.bind(null, orderItem)}
          />
        );
      })}
    </ul>
  );

  const closeButtonHandler = () => {
    props.onCloseCartView();
  };

  return (
    <Modal onCloseModal={props.onCloseCartView}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeButtonHandler}>
          Add More....
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
