import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Button, ButtonToolbar, Modal } from 'reactstrap';

import classNames from 'classnames';

import { RTLProps } from '../../../shared/prop-types/ReducerProps';

import PrettyButton from '../../../shared/components/extendedButtons/PrettyButton';

const ButtonModal = ({
  // Propiedades del componente.
  dir, children, color, icono, handleSubmit,

  // Propiedades del modal.
  colored, header, rtl, titulo,

  outline, tooltip, tooltipLabel, tooltipPlacement,
}) => {
  // Estado del Form.
  const [modal, setModal] = useState(false);

  const handleCancel = () => {
    setModal((prevState) => !prevState);
  };

  const modalClass = classNames({
    'modal-dialog--colored': colored,
    'modal-dialog--header': header,
  });

  return (
    <>
      <PrettyButton
          dir={dir}
          className="icon"
          color={color}
          outline={outline}
          tooltip={tooltip}
          tooltipLabel={tooltipLabel}
          tooltipPlacement={tooltipPlacement}
          funcion={handleCancel}
      >
          {icono}
      </PrettyButton>

      <Modal
        isOpen={modal}
        handleCancel={handleCancel}
        modalClassName={`${rtl.direction}-support`}
        className={`modal-dialog--${color} ${modalClass}`}
      >
        <div className="modal__header">
          <button
            className="lnr lnr-cross modal__close-btn"
            aria-label="modal__close-btn"
            type="button"
            onClick={handleCancel}
          />
          <h4 className="text-modal  modal__title">{titulo}</h4>
        </div>

        <form className="material-form" onSubmit={handleSubmit}>
            <div className="modal__body">
                {children}
            </div>

            <ButtonToolbar className="modal__footer">
                <Button className="modal_cancel" onClick={handleCancel}>
                    Cancelar
                </Button>

                <Button
                    className="modal_ok"
                    outline={colored}
                    color={color}
                    type="submit"
                >
                    Ok
                </Button>
            </ButtonToolbar>
        </form>
      </Modal>
    </>
  );
};

ButtonModal.propTypes = {
  // Propiedades del componente.
  handleSubmit: PropTypes.func,
  children: PropTypes.element,
  icono: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  dir: PropTypes.string,

  outline: PropTypes.bool,
  tooltip: PropTypes.bool,
  tooltipLabel: PropTypes.string,
  tooltipPlacement: PropTypes.string,

  // Propiedades del modal.
  colored: PropTypes.bool,
  header: PropTypes.bool,
  rtl: RTLProps.isRequired,
  titulo: PropTypes.string,
};

ButtonModal.defaultProps = {
  // Propiedades del componente.
  dir: '',
  children: '',
  handleSubmit: () => {},

  outline: false,
  tooltip: false,
  tooltipLabel: 'Boton',
  tooltipPlacement: '',

  // Propiedades del modal.
  colored: false,
  header: false,
  titulo: 'Titulo Modal',
};

export default connect((state) => ({
  rtl: state.rtl,
}))(ButtonModal);
