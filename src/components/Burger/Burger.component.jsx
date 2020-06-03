import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.component';

import { BurgerContainer } from './Burger.styles';

const Burger = (props) => {
  return (
    <BurgerContainer>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="salad" />
      <BurgerIngredient type="bacon" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </BurgerContainer>
  );
};

export default Burger;
