import styled from 'styled-components';

export const BuildControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;

  > button {
    display: block;
    font-family: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #aa6817;
    cursor: pointer;
    outline: none;

    &:disabled {
      background-color: #ac9980;
      border: 1px solid #7e7365;
      color: #ccc;
      cursor: default;
      &:hover {
        background-color: #ac9980;
        color: #ccc;
        cursor: not-allowed;
      }
    }
  }
`;

export const Label = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`;

export const LessButton = styled.button`
  background-color: #d39952;
  color: white;
  &:hover,
  &:active {
    background-color: #daa972;
    color: white;
  }
`;

export const MoreButton = styled.button`
  background-color: #8f5e1e;
  color: white;
  &:hover,
  &:active {
    background-color: #99703f;
    color: white;
  }
`;
