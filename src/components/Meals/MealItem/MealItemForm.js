import { useRef } from "react";

import classes from "./MealItemForm.module.css";

import Input from "./Input";

function MealItemForm(props) {


const amountInputRef = useRef();

const addButtonClickHandler = (event) =>{
  event.preventDefault();
  const inputAmount = amountInputRef.current.value;
  props.onAddItem(inputAmount);
}

  return (
    <form className={classes.form} onSubmit={addButtonClickHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;
