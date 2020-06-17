import React from 'react';
import { OrderContainer, IngredientSpan } from './Order.styles';

const Order = ({ ingredients, price }) => {
  const listedIngredients = [];
  for (let ingredientName in ingredients) {
    listedIngredients.push({
      name: ingredientName,
      amount: ingredients[ingredientName],
    });
  }

  const ingredientOutput = listedIngredients.map((ig) => {
    return (
      <IngredientSpan key={ig.name}>
        {ig.name} ({ig.amount})
      </IngredientSpan>
    );
  });

  return (
    <OrderContainer>
      <p>Ingredients: {ingredientOutput} </p>
      <p>
        Price: <strong>USD {price.toFixed(2)}</strong>
      </p>
    </OrderContainer>
  );
};

export default Order;
