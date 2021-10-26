import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, ButtonToolbar, Modal } from 'reactstrap';
import classNames from 'classnames';
import { RTLProps } from '../../prop-types/ReducerProps';

import PrettyButton from './PrettyButton';

const PrettyModal = ({
  // Propiedades del componente.
  dir, children, color,

  // Propiedades del boton que muestra el modal.
  className, idButton, outline,
  tooltip, tooltipLabel, tooltipPlacement,

  // Propiedades del modal.
  btn, colored, header, rtl, titulo, funcionOk, botonesOk,
}) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal((prevState) => !prevState);
    funcionOk();
  };

  const modalClass = classNames({
    'modal-dialog--colored': colored,
    'modal-dialog--header': header,
  });

  let Botones;

  if (botonesOk) {
    Botones = (
      <ButtonToolbar className="modal__footer">
        <Button className="modal_cancel" onClick={toggle}>Cancel</Button>{' '}

        <Button className="modal_ok" outline={colored} color={color} onClick={toggle}>Ok</Button>
      </ButtonToolbar>
    );
  } else {
    Botones = '';
  }

  return (
    <>
      <PrettyButton
        dir={dir}
        className={className}
        color={color}
        outline={outline}
        idButton={idButton}
        tooltip={tooltip}
        tooltipLabel={tooltipLabel}
        tooltipPlacement={tooltipPlacement}
        funcion={toggle}
      >
        {btn}
      </PrettyButton>

      <Modal
        isOpen={modal}
        toggle={toggle}
        modalClassName={`${rtl.direction}-support`}
        className={`modal-dialog--${color} ${modalClass}`}
      >
        <div className="modal__header">
          <button
            className="lnr lnr-cross modal__close-btn"
            aria-label="modal__close-btn"
            type="button"
            onClick={toggle}
          />
          <h4 className="text-modal  modal__title">{titulo}</h4>
        </div>

        <div className="modal__body">
          {children}
        </div>

        {Botones}
      </Modal>
    </>
  );
};

PrettyModal.propTypes = {
  // Propiedades del componente.
  children: PropTypes.element.isRequired,
  dir: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,

  // Propiedades del boton que muestra el modal.
  className: PropTypes.string,
  idButton: PropTypes.string,
  tooltip: PropTypes.bool,
  tooltipLabel: PropTypes.string,
  outline: PropTypes.bool,
  tooltipPlacement: PropTypes.string,

  // Propiedades del modal.
  colored: PropTypes.bool,
  header: PropTypes.bool,
  btn: PropTypes.string.isRequired,
  rtl: RTLProps.isRequired,
  titulo: PropTypes.string,
  funcionOk: PropTypes.func,
  botonesOk: PropTypes.bool,
};

PrettyModal.defaultProps = {
  // Propiedades del boton que muestra el modal.
  className: '',
  idButton: 'prettyButton',
  tooltip: false,
  tooltipLabel: 'prettyButton',
  outline: false,
  tooltipPlacement: 'right',

  // Propiedades del modal.
  colored: false,
  header: false,
  titulo: 'Titulo Modal',
  funcionOk: () => {},
  botonesOk: true,
};

export default connect((state) => ({
  rtl: state.rtl,
}))(PrettyModal);
