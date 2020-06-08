import React from 'react';
import { BuildControlsContainer, OrderNowButton } from './BuildControls.styles';
import BuildControl from './BuildControl/BuildControl.component';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  price,
  purchasable,
}) => (
  <BuildControlsContainer>
    <p>
      Current Price: <strong>${price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => ingredientAdded(ctrl.type)}
        removed={() => ingredientRemoved(ctrl.type)}
        disabled={disabled[ctrl.type]}
      />
    ))}
    <OrderNowButton disabled={!purchasable}>ORDER NOW</OrderNowButton>
  </BuildControlsContainer>
);

export default BuildControls;
