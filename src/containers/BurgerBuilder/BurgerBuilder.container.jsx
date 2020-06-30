import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux.container';
import Burger from '../../components/Burger/Burger.component';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.component';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.component';
import Modal from '../../components/UI/Modal/Modal.component';
import Spinner from '../../components/UI/Spinner/Spinner.component';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler.container';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';

export class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  updatePurchaseState = () => {
    const sum = Object.keys(this.props.ingredients)
      .map((igKey) => {
        return this.props.ingredients[igKey];
      })
      .reduce((sum, el) => sum + el, 0);

    return sum > 0;
  };

  purchaseHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({ purchasing: true });
    } else {
      this.props.onSetAuthRedirectPath('/checkout');
      this.props.history.push('/auth');
    }
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
  };

  render() {
    const disabledInfo = {
      ...this.props.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.props.error ? (
      <p>Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    if (this.props.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdd}
            ingredientRemoved={this.props.onIngredientRemove}
            disabled={disabledInfo}
            purchasable={this.updatePurchaseState()}
            price={this.props.totalPrice}
            ordered={this.purchaseHandler}
            isAuth={this.props.isAuthenticated}
          />
        </Aux>
      );

      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredients}
          onCancel={this.purchaseCancelHandler}
          onContinue={this.purchaseContinueHandler}
          totalPrice={this.props.totalPrice}
        />
      );
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdd: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemove: (ingName) =>
      dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onSetAuthRedirectPath: (path) =>
      dispatch(actions.setAuthRedirectPath(path)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
