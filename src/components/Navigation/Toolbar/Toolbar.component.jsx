import React from 'react';
import { ToolbarContainer } from './Toolebar.styles';
import Logo from '../../Logo/Logo.component';
import NavigationItems from '../NavigationItems/NavigationItems.component';

const Toolbar = (props) => (
  <ToolbarContainer>
    <div>MENU</div>
    <Logo />
    <NavigationItems />
  </ToolbarContainer>
);

export default Toolbar;
