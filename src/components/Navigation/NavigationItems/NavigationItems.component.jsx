import React from 'react';
import { NavigationItemsContainer } from './NavigationItems.styles';
import NavigationItem from './NavigationItem/NavigationItem.component';

const NavigationItems = (props) => (
  <NavigationItemsContainer>
    <NavigationItem link="/">Burger Builder</NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/orders">Orders</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link="/auth">Authenticate</NavigationItem>
    ) : (
      <NavigationItem link="/logout">Logout</NavigationItem>
    )}
  </NavigationItemsContainer>
);

export default NavigationItems;
