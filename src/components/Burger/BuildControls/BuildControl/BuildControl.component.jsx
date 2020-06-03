import React from 'react';
import {
  BuildControlContainer,
  Label,
  MoreButton,
  LessButton,
} from './BuildControl.styles';

const BuildControl = ({ label }) => (
  <BuildControlContainer>
    <Label>{label}</Label>
    <LessButton>Less</LessButton>
    <MoreButton>More</MoreButton>
  </BuildControlContainer>
);

export default BuildControl;
