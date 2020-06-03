import React from 'react';
import Aux from '../../hoc/Aux.container';

import { Content } from './Layout.styles';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <Content>{props.children}</Content>
  </Aux>
);

export default layout;
