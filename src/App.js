import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout.component';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.container';
import Checkout from './containers/Checkout/Checkout.container';
import Orders from './containers/Orders/Orders.container';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
