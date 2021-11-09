// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes de reactstrap.
import { Col } from 'reactstrap';

// Componentes de reduxForm.
import { Field, reduxForm } from 'redux-form';
import MenuItem from '@material-ui/core/MenuItem';

// Componente de field.
import ComponenteField from './ComponenteField';

// Nose.
// import { useTranslation } from 'react-i18next';

const FormProducto = ({
    idProducto,
    defaultNumero,
    defaultCosto,
    defaultMedidas,
    defaultCantidad,
    defaultProveedor,
    defaultTipo,
    proveedores,
    tiposProductos,
}) => (
    <Col>
        <Field
          name="id"
          defaultValue={idProducto}
          component={ComponenteField}
          label=""
          type="hidden"
        />

        <Field
          name="numero_serie"
          defaultValue={defaultNumero}
          component={ComponenteField}
          label="Numero de serie"
        />

        <Field
          name="costo"
          defaultValue={defaultCosto}
          component={ComponenteField}
          label="Costo"
        />

        <Field
          name="medidas"
          defaultValue={defaultMedidas}
          component={ComponenteField}
          label="Medidas"
        />

        <Field
          name="cantidad_stock"
          defaultValue={defaultCantidad}
          component={ComponenteField}
          label="Cantidad en stock"
        />

        <Field
          name="id_proveedor"
          defaultValue={defaultProveedor}
          component={ComponenteField}
          select
          label="Proveedor"
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
          defaultValue={defaultTipo}
          component={ComponenteField}
          select
          label="Tipo de producto"
        >
          {tiposProductos.map((tipo) => {
            return(
              <MenuItem className="material-form__option" value={tipo.id}>
                {tipo.tipo}
              </MenuItem>
            );
          })}
        </Field>
    </Col>
);

FormProducto.propTypes = {
    idProducto: PropTypes.number,
    defaultNumero: PropTypes.string,
    defaultCosto: PropTypes.string,
    defaultMedidas: PropTypes.string,
    defaultCantidad: PropTypes.string,
    defaultProveedor: PropTypes.string,
    defaultTipo: PropTypes.string,
    proveedores: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    tiposProductos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

FormProducto.defaultProps = {
    idProducto: '',
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
