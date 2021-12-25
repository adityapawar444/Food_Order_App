import { useContext } from 'react';

import classes from './MealItem.module.css';

import MealItemForm from './MealItemForm';
import CartContex from '../../../store/cart-context'

function MealItem (props) {

  const cartCtx = useContext(CartContex);

 const addToCartHandler = (inputAmount) => {
   const amountNum = +inputAmount;
    const orderItem = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amountNum,
    };
    cartCtx.addItem(orderItem);
  }

    return (
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <p>{`$${props.price}`}</p>
        </div>
        <div>
            <MealItemForm id={props.id} onAddItem={addToCartHandler}/>
        </div>
      </li>
    );
}

export default MealItem;