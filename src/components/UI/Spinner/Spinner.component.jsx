import React from 'react';
import { LoaderContainer, Loader } from './Spinner.styles.jsx';

const Spinner = () => (
  <LoaderContainer>
    <Loader viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </Loader>
  </LoaderContainer>
);

export default Spinner;
