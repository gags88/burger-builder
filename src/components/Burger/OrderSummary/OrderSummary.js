import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.total.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType='Danger' clicked={props.cancel}>
        CANCEL
      </Button>
      <Button btnType='Success' clicked={props.continue}>
        CONTINUE
      </Button>
    </>
  );
};

export default orderSummary;
