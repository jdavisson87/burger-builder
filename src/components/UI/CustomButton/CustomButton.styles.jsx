import styled from 'styled-components';

const colors = {
  success: '#5C9210',
  danger: '#944317',
  blue: '#0000FF',
};

export const CustomButtonContainer = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }

  color: ${(props) => colors[props.btnType]};
`;
