// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

import axios from "axios";
import Swal from "sweetalert2";

// Componentes de reactstrap.
import {
  ButtonToolbar, Button,
  Col,
} from 'reactstrap';

// Componentes de reduxForm.
import { Field, reduxForm } from 'redux-form';
// import MenuItem from '@material-ui/core/MenuItem';

// Componente de field.
import ComponenteField from './ComponenteField';

// Nose.
// import { useTranslation } from 'react-i18next';

const FormTipo = ({
  defaultTipo,
  defaultDescripción
}) => {
  // Valores del form.
  const [tipo, setTipo] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");

  const handleSubmit = (event, target) => {
    const data = {
      tipo: tipo,
      descripcion: descripcion,
    };

    const apiRequest = axios.create({
      baseURL: 'http://localhost:3001/api',
    });

    event.preventDefault();

    apiRequest.post(
      '/tiposProductos/add/',
      data
    ).then((respuesta) => {
      Swal.fire({
        title: "Tipo de producto Registrado!",
        text: respuesta.data.message,
        icon: "success",
        confirmButtonText: "Ok!",
      }).then(function() {
        window.location.reload();
      });

    }).catch((error) => {
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "Intenta Nuevamente",
      });
    });
  };

  return (
    <Col>
      <form className="material-form" onSubmit={handleSubmit}>
        <Field
          name="tipo"
          component={ComponenteField}
          label="Tipo del producto"
          defaultValue={defaultTipo}
          onChange={(dato) => {
            setTipo(dato);
          }}
        />

        <Field
          name="descripcion"
          component={ComponenteField}
          label="Descripción del tipo"
          defaultValue={defaultDescripción}
          onChange={(dato) => {
            setDescripcion(dato);
          }}
        />

        <ButtonToolbar className="form__button-toolbar">
          <Button color="primary" type="submit">Submit</Button>
        </ButtonToolbar>
      </form>
    </Col>
    );
};

FormTipo.propTypes = {
  defaultTipo: PropTypes.string,
  defaultDescripción: PropTypes.string,
};

FormTipo.defaultProps = {
  defaultTipo: '',
  defaultDescripción: '',
};

export default reduxForm({
  form: 'formTipo', // a unique identifier for this form
})(FormTipo);
