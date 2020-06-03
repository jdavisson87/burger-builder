import React, { Component } from 'react';
import Aux from '../../hoc/Aux.container';
import Burger from '../../components/Burger/Burger.component';

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <div>Burger</div>
        <div>Build Controls</div>
        <Burger />
      </Aux>
    );
  }
}

export default BurgerBuilder;
