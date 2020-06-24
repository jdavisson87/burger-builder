import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux/Aux.container';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar.component';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer.component';

import { Content } from './Layout.styles';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar
          clickHandler={this.sideDrawerToggleHandler}
          isAuth={this.props.isAuthenticated}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerToggleHandler}
          isAuth={this.props.isAuthenticated}
        />
        <Content>{this.props.children}</Content>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
