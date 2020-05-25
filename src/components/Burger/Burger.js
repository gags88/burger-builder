import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {
  const ingredients = Object.keys(props.ingredients);

  const burgerIngredients = ingredients.map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, index) => {
      return <BurgerIngredient key={igKey + index} type={igKey} />;
    });
  });

  const ingredientsPresent = burgerIngredients.reduce((a, b) => {
    return a + b.length;
  }, 0);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {!ingredientsPresent && <p>Please start adding ingredients</p>}
      {burgerIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
