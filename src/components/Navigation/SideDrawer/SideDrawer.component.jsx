import React from 'react';
import { SideDrawerContainer, LogoContainer } from './SideDrawer.styles';

import Logo from '../../Logo/Logo.component';
import NavigationItems from '../NavigationItems/NavigationItems.component';
import Backdrop from '../../UI/Backdrop/Backdrop.component';
import Aux from '../../../hoc/Aux/Aux.container';

const SideDrawer = (props) => {
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <SideDrawerContainer
        className={props.open ? 'Open' : 'Closed'}
        onClick={props.closed}
      >
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </SideDrawerContainer>
    </Aux>
  );
};

export default SideDrawer;
