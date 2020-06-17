import React from 'react';
import { NavigationItemsContainer } from './NavigationItems.styles';
import NavigationItem from './NavigationItem/NavigationItem.component';

const NavigationItems = (props) => (
  <NavigationItemsContainer>
    <NavigationItem link="/">Burger Builder</NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
  </NavigationItemsContainer>
);

export default NavigationItems;
