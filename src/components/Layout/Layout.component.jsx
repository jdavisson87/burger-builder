import React from 'react';
import Aux from '../../hoc/Aux.container';
import Toolbar from '../Navigation/Toolbar/Toolbar.component';

import { Content } from './Layout.styles';

const layout = (props) => (
  <Aux>
    <Toolbar />
    <Content>{props.children}</Content>
  </Aux>
);

export default layout;
