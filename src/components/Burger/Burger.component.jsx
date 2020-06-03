import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.component';

import { BurgerContainer } from './Burger.styles';

const Burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map((igKey) => {
      return [...Array(ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .flat();

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p> Please start adding ingredients!</p>;
  }

  return (
    <BurgerContainer>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </BurgerContainer>
  );
};

export default Burger;
