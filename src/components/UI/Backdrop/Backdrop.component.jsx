import React from 'react';
import { BackdropContainer } from './Backdrop.styles';

const Backdrop = ({ show, clicked }) =>
  show ? <BackdropContainer onClick={clicked} /> : null;

export default Backdrop;
