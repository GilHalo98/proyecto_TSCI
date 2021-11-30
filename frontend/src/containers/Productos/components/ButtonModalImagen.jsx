import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Button, ButtonToolbar, Modal } from 'reactstrap';

import classNames from 'classnames';

import { RTLProps } from '../../../shared/prop-types/ReducerProps';

// Logica del componente.
import { querryImagen } from '../logic/FuncionesRequest';

const ButtonModalImagen = ({
  // Propiedades del componente.
  dir, children, color, icono, handleSubmit,
  id_imagen,

  // Propiedades del modal.
  colored, header, rtl, titulo,
}) => {
  // Estado del Form.
  const [modal, setModal] = useState(false);
  const [imagen, setImagen] = React.useState({tipo: '', data: {data: ''}});

  const handleCancel = () => {
    setModal((prevState) => !prevState);
  };

  const modalClass = classNames({
    'modal-dialog--colored': colored,
    'modal-dialog--header': header,
  });

  React.useEffect(() => {
    querryImagen(
        id_imagen,
        setImagen,
    );

  }, []);

  return (
    <>
      <button
        className="panel__btn"
        aria-label="panel__btn"
        type="button"
        onClick={handleCancel}
      >
        {icono}
      </button>

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

        <img
          alt="image"
          src={`data:${imagen.tipo};base64,${imagen.imagenB64}`}
        />

        <ButtonToolbar className="modal__footer">
            <Button
                className="modal_ok"
                outline={colored}
                color={color}
                type="submit"
                onClick={handleCancel}
            >
                Ok
            </Button>
        </ButtonToolbar>
      </Modal>
    </>
  );
};

ButtonModalImagen.propTypes = {
  // Propiedades del componente.
  id_imagen: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func,
  children: PropTypes.element,
  icono: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  dir: PropTypes.string,

  // Propiedades del modal.
  colored: PropTypes.bool,
  header: PropTypes.bool,
  rtl: RTLProps.isRequired,
  titulo: PropTypes.string,
};

ButtonModalImagen.defaultProps = {
  // Propiedades del componente.
  dir: '',
  children: '',
  handleSubmit: () => {},

  // Propiedades del modal.
  colored: false,
  header: false,
  titulo: 'Titulo Modal',
};

export default connect((state) => ({
  rtl: state.rtl,
}))(ButtonModalImagen);
