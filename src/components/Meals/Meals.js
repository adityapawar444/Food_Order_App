import { Fragment } from "react/cjs/react.production.min";


import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";


function  Meals(props) {
    return (
      <Fragment>
        <MealsSummary />
        <AvailableMeals />
      </Fragment>
    );
}

export default Meals;