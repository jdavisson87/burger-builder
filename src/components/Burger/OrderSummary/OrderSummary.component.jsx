import React from 'react';
import { IngredientName } from './OrderSummary.styles';
import Aux from '../../../hoc/Aux.container';

const OrderSummary = ({ ingredients }) => {
  const ingredientSummary = Object.keys(ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <IngredientName>{igKey}</IngredientName> : {ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default OrderSummary;
