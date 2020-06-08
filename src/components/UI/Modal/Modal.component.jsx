import React from 'react';
import { ModalContainer } from './Modal.styles';

const Modal = (props) => (
  <ModalContainer show={props.show}>{props.children}</ModalContainer>
);

export default Modal;
