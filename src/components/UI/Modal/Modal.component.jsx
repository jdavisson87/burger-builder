import React, { Component } from 'react';
import { ModalContainer } from './Modal.styles';
import Aux from '../../../hoc/Aux/Aux.container';
import Backdrop from '../Backdrop/Backdrop.component';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }
  render() {
    const { show, children, modalClosed } = this.props;
    return (
      <Aux>
        <Backdrop show={show} clicked={modalClosed} />
        <ModalContainer show={show}>{children}</ModalContainer>
      </Aux>
    );
  }
}
export default Modal;
