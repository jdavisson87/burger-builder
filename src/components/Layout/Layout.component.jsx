import React, { Component } from 'react';
import Aux from '../../hoc/Aux.container';
import Toolbar from '../Navigation/Toolbar/Toolbar.component';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.component';

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
        <Toolbar clickHandler={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerToggleHandler}
        />
        <Content>{this.props.children}</Content>
      </Aux>
    );
  }
}

export default Layout;
