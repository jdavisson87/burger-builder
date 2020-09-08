import React, { useState } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux/Aux.container';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar.component';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer.component';

import { Content } from './Layout.styles';

const Layout = (props) => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  return (
    <Aux>
      <Toolbar
        isAuth={props.isAuthenticated}
        clickHandler={sideDrawerToggleHandler}
      />
      <SideDrawer
        isAuth={props.isAuthenticated}
        open={sideDrawerIsVisible}
        closed={sideDrawerClosedHandler}
      />
      <Content>{props.children}</Content>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
