// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

import axios from "axios";
import Swal from "sweetalert2";

// Componentes de reactstrap.
import {
  ButtonToolbar, Button, Col,
} from 'reactstrap';

import MenuItem from '@material-ui/core/MenuItem';

// Componentes de reduxForm.
import { Field, reduxForm } from 'redux-form';
// import MenuItem from '@material-ui/core/MenuItem';

// Componente de field.
import ComponenteField from './ComponenteField';

// Nose.
// import { useTranslation } from 'react-i18next';

const FormProducto = ({
  defaultNumero,
  defaultCosto,
  defaultMedidas,
  defaultCantidad,
  defaultProveedor,
  defaultTipo,
  proveedores,
  tiposProductos,
}) => {
  // Valores del form.
  const[numero_serie, setNumero] = React.useState("");
  const[costo, setCosto] = React.useState("");
  const[medidas, setMedidas] = React.useState("");
  const[cantidad_stock, setCantidad] = React.useState("");
  const[id_proveedor, setProveedor] = React.useState("");
  const[id_tipo, setTipo] = React.useState("");

  const handleSubmit = (event, target) => {
    const data = {
      numero_serie: numero_serie,
      costo: costo,
      medidas: medidas,
      cantidad_stock: cantidad_stock,
      id_proveedor: id_proveedor,
      id_tipo: id_tipo,
    };

    const apiRequest = axios.create({
      baseURL: 'http://localhost:3001/api',
    });

    event.preventDefault();

    apiRequest.post(
      '/producto/add/',
      data
    ).then((respuesta) => {
      Swal.fire({
        title: "Producto Registrado!",
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
          name="numero_serie"
          component={ComponenteField}
          label="Numero de serie"
          defaultValue={defaultNumero}
          onChange={(dato) => {
            setNumero(dato);
          }}
        />

        <Field
          name="costo"
          component={ComponenteField}
          label="Costo"
          defaultValue={defaultCosto}
          onChange={(dato) => {
            setCosto(dato);
          }}
        />

        <Field
          name="medidas"
          component={ComponenteField}
          label="Medidas"
          defaultValue={defaultMedidas}
          onChange={(dato) => {
            setMedidas(dato);
          }}
        />

        <Field
          name="cantidad_stock"
          component={ComponenteField}
          label="Cantidad en stock"
          defaultValue={defaultCantidad}
          onChange={(dato) => {
            setCantidad(dato);
          }}
        />

        <Field
          name="id_proveedor"
          component={ComponenteField}
          select
          label="Proveedor"
          defaultValue={defaultProveedor}
          onChange={(dato) => {
            setProveedor(dato);
          }}
        >
          {proveedores.map((proveedor) => {
            return(
              <MenuItem className="material-form__option" value={proveedor.id}>
                {proveedor.nombre}
              </MenuItem>
            );
          })}
        </Field>

        <Field
          name="id_tipo"
          component={ComponenteField}
          select
          label="Tipo de producto"
          defaultValue={defaultTipo}
          onChange={(dato) => {
            setTipo(dato);
          }}
        >
          {tiposProductos.map((tipo) => {
            return(
              <MenuItem className="material-form__option" value={tipo.id}>
                {tipo.tipo}
              </MenuItem>
            );
          })}
        </Field>

        <ButtonToolbar className="form__button-toolbar">
          <Button color="primary" type="submit">Submit</Button>
        </ButtonToolbar>
      </form>
    </Col>
    );
};

FormProducto.propTypes = {
  defaultNumero: PropTypes.string,
  defaultCosto: PropTypes.string,
  defaultMedidas: PropTypes.string,
  defaultCantidad: PropTypes.string,
  defaultProveedor: PropTypes.string,
  defaultTipo: PropTypes.string,
  proveedores: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
  tiposProductos: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

FormProducto.defaultProps = {
  defaultNumero: '',
  defaultCosto: '',
  defaultMedidas: '',
  defaultCantidad: '',
  defaultProveedor: '',
  defaultTipo: '',
};

export default reduxForm({
  form: 'formProducto', // a unique identifier for this form
})(FormProducto);
