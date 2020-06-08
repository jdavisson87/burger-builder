import React from 'react';
import { ModalContainer } from './Modal.styles';
import Aux from '../../../hoc/Aux.container';
import Backdrop from '../Backdrop/Backdrop.component';

const Modal = ({ show, children, modalClosed }) => (
  <Aux>
    <Backdrop show={show} clicked={modalClosed} />
    <ModalContainer show={show}>{children}</ModalContainer>
  </Aux>
);

export default Modal;
