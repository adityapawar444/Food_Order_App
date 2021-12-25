import React from 'react';

import classes from './Header.module.css'
import backgroundImage from '../../assets/meals.jpg';

import HeaderCartButton from './HeaderCartButton';

function Header (props) {

    return (
      <React.Fragment>
        <header className={classes.header}>
          <h1>React Meals</h1>
          <HeaderCartButton label="Cart" onClick={props.onShowCartEvent} />
        </header>
        <div className={classes["main-image"]}>
          <img src={backgroundImage} alt="" />
        </div>
      </React.Fragment>
    );
}

export default Header;