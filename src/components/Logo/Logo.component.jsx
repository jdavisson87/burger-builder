import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import { LogoContainer } from './Logo.styles';

const Logo = (props) => (
  <LogoContainer>
    <img src={burgerLogo} alt="Burger Logo" />
  </LogoContainer>
);

export default Logo;
