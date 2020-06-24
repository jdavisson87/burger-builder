import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './containers/Layout/Layout.component';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.container';
import Checkout from './containers/Checkout/Checkout.container';
import Orders from './containers/Orders/Orders.container';
import Auth from './containers/Auth/Auth.container';
import Logout from './containers/Auth/Logout/Logout.container';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/auth" component={Auth} />
            <Route path="/orders" component={Orders} />
            <Route path="/logout" component={Logout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(null, mapDispatchToProps)(App);
