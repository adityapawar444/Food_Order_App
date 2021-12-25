import classes from "./HeaderCartButton.module.css";
import { useState, useContext, useEffect } from "react";

import CartIcon from "./CartIcon";
import CartContext from "./../../store/cart-context";

function HeaderCartButton(props) {
  const [isAnimation,setIsAnimation] = useState(false);
  const cartContext = useContext(CartContext);
  const { items: cartItems } = cartContext;
   const buttonClass = `${classes.button} ${isAnimation ? classes.bump : ''}`;

  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    setIsAnimation(true);

    const timer = setTimeout(() =>{
      setIsAnimation(false);
    },300)
  
    return ()=>{
      clearTimeout(timer);
    }
  
  }, [cartItems]);
  

  const itemsInCart = cartItems.reduce((currVal, item) => {
    return currVal + item.amount;
  }, 0);

  const buttonClickHandler = () => {
    props.onClick();
  };

  return (
    <button className={buttonClass} onClick={buttonClickHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{props.label}</span>
      <span className={classes.badge}>{itemsInCart}</span>
    </button>
  );
}

export default HeaderCartButton;
