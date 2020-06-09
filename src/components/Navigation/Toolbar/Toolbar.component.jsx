import React from 'react';
import { ToolbarContainer } from './Toolebar.styles';
import Logo from '../../Logo/Logo.component';

const Toolbar = (props) => (
  <ToolbarContainer>
    <div>MENU</div>
    <Logo />
    <nav>...</nav>
  </ToolbarContainer>
);

export default Toolbar;
