import React from 'react';
import { CustomButtonContainer } from './CustomButton.styles';

const CustomButton = ({ btnType, clicked, children }) => (
  <CustomButtonContainer btnType={btnType} onClick={clicked}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
