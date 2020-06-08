import React from 'react';
import {
  BuildControlContainer,
  Label,
  MoreButton,
  LessButton,
} from './BuildControl.styles';

const BuildControl = ({ label, added, removed, disabled }) => (
  <BuildControlContainer>
    <Label>{label}</Label>
    <LessButton onClick={removed} disabled={disabled}>
      Less
    </LessButton>
    <MoreButton onClick={added}>More</MoreButton>
  </BuildControlContainer>
);

export default BuildControl;
