import React, { useEffect, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './containers/Layout/Layout.component';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.container';
import Logout from './containers/Auth/Logout/Logout.container';
import * as actions from './store/actions/index';

const Checkout = React.lazy(() => {
  return import('./containers/Checkout/Checkout.container');
});

const Orders = React.lazy(() => {
  return import('./containers/Orders/Orders.container');
});

const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth.container');
});

const App = (props) => {
  useEffect(() => {
    props.onTryAutoSignup();
  }, []);

  let routes = (
    <Switch>
      <Route path="/auth" render={() => <Auth />} />
      <Route path="/" exact component={BurgerBuilder} />
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuth) {
    routes = (
      <Switch>
        <Route path="/checkout" render={() => <Checkout />} />
        <Route path="/orders" render={() => <Orders />} />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" render={() => <Auth />} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
