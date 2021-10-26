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

const FormProveedor = ({
  defaultNombre,
  defaultDireccion,
  defaultPagina,
  defaultNumero,
  defaultCorreo,
}) => {
  // Valores del form.
  const [nombre, setNombre] = React.useState("");
  const [locacion, setDireccion] = React.useState("");
  const [pagina_web, setPaginaWeb] = React.useState("");
  const [numero_telefonico, setTelefono] = React.useState("");
  const [correo_electronico, setCorreo] = React.useState("");

  const handleSubmit = (event, target) => {
    const data = {
      nombre: nombre,
      locacion: locacion,
      pagina_web: pagina_web,
      numero_telefonico: numero_telefonico,
      correo_electronico: correo_electronico,
    };

    const apiRequest = axios.create({
      baseURL: 'http://localhost:3001/api',
    });

    event.preventDefault();

    apiRequest.post(
      '/proveedores/add/',
      data
    ).then((respuesta) => {
      Swal.fire({
        title: "Proveedor Registrado!",
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
          name="nombre"
          component={ComponenteField}
          label="Nombre del proveedor"
          defaultValue={defaultNombre}
          onChange={(dato) => {
            setNombre(dato);
          }}
        />

        <Field
          name="direccion"
          component={ComponenteField}
          label="Dirección física"
          defaultValue={defaultDireccion}
          onChange={(dato) => {
            setDireccion(dato);
          }}
        />

        <Field
          name="pagina"
          component={ComponenteField}
          label="Pagina Web"
          defaultValue={defaultPagina}
          onChange={(dato) => {
            setPaginaWeb(dato);
          }}
        />

        <Field
          name="numero"
          component={ComponenteField}
          label="Numero Telefónico"
          defaultValue={defaultNumero}
          onChange={(dato) => {
            setTelefono(dato);
          }}
        />

        <Field
          name="correo"
          component={ComponenteField}
          label="Correo Electrónico"
          defaultValue={defaultCorreo}
          onChange={(dato) => {
            setCorreo(dato);
          }}
        />

        <ButtonToolbar className="form__button-toolbar">
          <Button color="primary" type="submit">Submit</Button>
        </ButtonToolbar>
      </form>
    </Col>
    );
};

FormProveedor.propTypes = {
  defaultNombre: PropTypes.string,
  defaultDireccion: PropTypes.string,
  defaultPagina: PropTypes.string,
  defaultNumero: PropTypes.string,
  defaultCorreo: PropTypes.string,
};

FormProveedor.defaultProps = {
  defaultNombre: '',
  defaultDireccion: '',
  defaultPagina: '',
  defaultNumero: '',
  defaultCorreo: '',
};

export default reduxForm({
  form: 'formProveedor', // a unique identifier for this form
})(FormProveedor);
