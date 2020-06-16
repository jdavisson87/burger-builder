import React from 'react';
import { IngredientName } from './OrderSummary.styles';
import CustomButton from '../../UI/CustomButton/CustomButton.component';
import Aux from '../../../hoc/Aux/Aux.container';

const OrderSummary = ({ ingredients, onCancel, onContinue, totalPrice }) => {
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

      <p>
        <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>

      <CustomButton btnType={'danger'} clicked={onCancel}>
        CANCEL
      </CustomButton>
      <CustomButton btnType={'success'} clicked={onContinue}>
        CONTINUE
      </CustomButton>
    </Aux>
  );
};

export default OrderSummary;
