import React from 'react';
import { CustomButtonContainer } from './CustomButton.styles';

const CustomButton = ({ btnType, clicked, children, disabled }) => (
  <CustomButtonContainer
    data-testid="CustomButton"
    btnType={btnType}
    onClick={clicked}
    disabled={disabled}
  >
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
