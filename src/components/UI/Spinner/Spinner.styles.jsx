import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 11em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.svg`
  animation: ${rotate} 2s linear infinite;
  margin: 0;
  width: 7em;
  height: 7em;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;
