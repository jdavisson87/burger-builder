import React from 'react';
import { InputContainer, InputLabel, InputElement } from './CustomInput.styles';

const CustomInput = (props) => {
  let { label, elementType, elementConfig, value, changed } = props;
  let inputElement = null;

  switch (elementType) {
    case 'input':
      inputElement = (
        <InputElement {...elementConfig} value={value} onChange={changed} />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea {...elementConfig} value={value} onChange={changed} />
      );
      break;
    case 'select':
      inputElement = (
        <select value={value} onChange={changed}>
          {elementConfig.options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <InputElement {...elementConfig} value={value} />;
  }
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      {inputElement}
    </InputContainer>
  );
};

export default CustomInput;
