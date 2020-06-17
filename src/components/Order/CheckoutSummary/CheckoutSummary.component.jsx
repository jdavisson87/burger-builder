import React from 'react';
import Burger from '../../Burger/Burger.component';
import {
  CheckoutSummaryContainer,
  BurgerContainer,
} from './CheckoutSummary.styles';
import CustomButton from '../../UI/CustomButton/CustomButton.component';

const CheckoutSummary = ({
  ingredients,
  checkoutCancelled,
  checkoutContinued,
}) => {
  return (
    <CheckoutSummaryContainer>
      <h1>We hope it tastes well!</h1>
      <BurgerContainer>
        <Burger ingredients={ingredients} />
      </BurgerContainer>
      <CustomButton btnType="danger" clicked={checkoutCancelled}>
        CANCEL
      </CustomButton>
      <CustomButton btnType="success" clicked={checkoutContinued}>
        PROCEED
      </CustomButton>
    </CheckoutSummaryContainer>
  );
};

export default CheckoutSummary;
