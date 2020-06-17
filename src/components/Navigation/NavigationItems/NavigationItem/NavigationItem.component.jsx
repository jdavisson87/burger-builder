import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationItemContainer } from './NavigationItem.styles';

const NavigationItem = (props) => (
  <NavigationItemContainer>
    <NavLink to={props.link} exact>
      {props.children}
    </NavLink>
  </NavigationItemContainer>
);

export default NavigationItem;
