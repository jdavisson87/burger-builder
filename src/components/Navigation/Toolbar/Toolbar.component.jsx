import React from 'react';
import {
  ToolbarContainer,
  LogoContainer,
  NavContainer,
} from './Toolebar.styles';
import Logo from '../../Logo/Logo.component';
import NavigationItems from '../NavigationItems/NavigationItems.component';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle.component';

const Toolbar = (props) => (
  <ToolbarContainer>
    <DrawerToggle clickHandler={props.clickHandler} />
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <NavContainer>
      <NavigationItems isAuthenticated={props.isAuth} />
    </NavContainer>
  </ToolbarContainer>
);

export default Toolbar;
