// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes de reactstrap.
import {
    Col,
} from 'reactstrap';

// Componentes de reduxForm.
import { Field, reduxForm } from 'redux-form';
import MenuItem from '@material-ui/core/MenuItem';

// Componente de field.
import ComponenteField from './ComponenteField';

// Nose.
// import { useTranslation } from 'react-i18next';

const FormReporte = ({
    handleSubmit, productos,
    defaultDescripcion, defaultProducto, defaultTipo,
}) => {
  return (
    <Col>
        <Field
            name="descripcion"
            defaultValue={defaultDescripcion}
            component={ComponenteField}
            multiline={true}
            type="text"
            label="Descripción del tipo"
        />

        <Field
            name="id_producto"
            defaultValue={defaultProducto}
            component={ComponenteField}
            select
            label="Producto"
        >
            {productos.map((producto) => {
              return(
                <MenuItem className="material-form__option" value={producto.id}>
                  {producto.numero_serie}
                </MenuItem>
              );
            })}
        </Field>

        <Field
            name="tipoReporte"
            component={ComponenteField}
            defaultValue={defaultTipo}
            select
            label="Tipo de Reporte"
        >
            <MenuItem className="material-form__option" value={'merma'}>
              Reporte de Merma
            </MenuItem>

            <MenuItem className="material-form__option" value={'entrada'}>
              Reporte de Entrada
            </MenuItem>

            <MenuItem className="material-form__option" value={'salida'}>
              Reporte de Salida
            </MenuItem>
        </Field>
    </Col>
    );
};

FormReporte.propTypes = {
    productos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    defaultDescripcion: PropTypes.string,
    defaultProducto: PropTypes.number,
    defaultTipo: PropTypes.string,
};

FormReporte.defaultProps = {
  // Propiedades del componente.
  defaultDescripcion: '',
  defaultProducto: '',
  defaultTipo: '',
};

export default reduxForm({
  form: 'formReporte', // a unique identifier for this form
})(FormReporte);
