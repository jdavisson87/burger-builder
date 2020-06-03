import React from 'react';
import { BuildControlsContainer } from './BuildControls.styles';
import BuildControl from './BuildControl/BuildControl.component';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => (
  <BuildControlsContainer>
    {controls.map((ctrl) => (
      <BuildControl key={ctrl.label} label={ctrl.label} />
    ))}
  </BuildControlsContainer>
);

export default BuildControls;
