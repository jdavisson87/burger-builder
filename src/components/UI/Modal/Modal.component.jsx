import React, { useEffect } from 'react';
import { ModalContainer } from './Modal.styles';
import Aux from '../../../hoc/Aux/Aux.container';
import Backdrop from '../Backdrop/Backdrop.component';

const Modal = (props) => {
  const { show, children, modalClosed } = props;

  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     nextProps.show !== show ||
  //     nextProps.children !== children
  //   );
  // }

  useEffect(() => {});
  return (
    <Aux>
      <Backdrop show={show} clicked={modalClosed} />
      <ModalContainer show={show}>{children}</ModalContainer>
    </Aux>
  );
};
export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
