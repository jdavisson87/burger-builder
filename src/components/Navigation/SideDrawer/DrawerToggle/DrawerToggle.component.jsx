import React from 'react';
import { HamburgerIcon } from './DrawerToggle.styles';

const DrawerToggle = (props) => (
  <HamburgerIcon onClick={props.clickHandler}>
    <div />
    <div />
    <div />
  </HamburgerIcon>
);

export default DrawerToggle;
