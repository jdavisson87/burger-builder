import React, { Component } from 'react';

import Aux from '../../hoc/Aux.container';
import Burger from '../../components/Burger/Burger.component';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.component';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    prices: {
      salad: 0.5,
      cheese: 0.4,
      meat: 1.3,
      bacon: 0.7,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const updatedPrice = this.state.totalPrice + this.state.prices[type];
    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients,
    });
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    } else {
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients,
      };
      updatedIngredients[type] = updatedCount;
      const updatedPrice = this.state.totalPrice - this.state.prices[type];
      this.setState({
        totalPrice: updatedPrice,
        ingredients: updatedIngredients,
      });
    }
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <div>Burger</div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
