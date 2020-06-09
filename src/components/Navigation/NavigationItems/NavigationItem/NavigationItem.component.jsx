import React from 'react';
import { NavigationItemContainer } from './NavigationItem.styles';

const NavigationItem = (props) => (
  <NavigationItemContainer>
    <a href={props.link} className={props.active ? 'active' : null}>
      {props.children}
    </a>
  </NavigationItemContainer>
);

export default NavigationItem;
