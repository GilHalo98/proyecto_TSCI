// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes de reactstrap.
import { Col } from 'reactstrap';

// Componentes de reduxForm.
import { Field, reduxForm } from 'redux-form';
// import MenuItem from '@material-ui/core/MenuItem';

// Componente de field.
import ComponenteField from './ComponenteField';

// Nose.
// import { useTranslation } from 'react-i18next';

const FormProveedor = ({
  idProveedor,
  defaultNombre,
  defaultDireccion,
  defaultPagina,
  defaultNumero,
  defaultCorreo,
}) => {
  return (
    <Col>
        <Field
            name="id"
            defaultValue={idProveedor}
            component={ComponenteField}
            label=""
            type="hidden"
        />

        <Field
          name="nombre"
          component={ComponenteField}
          label="Nombre del proveedor"
          defaultValue={defaultNombre}
        />

        <Field
          name="direccion"
          component={ComponenteField}
          label="Dirección física"
          defaultValue={defaultDireccion}
        />

        <Field
          name="pagina"
          component={ComponenteField}
          label="Pagina Web"
          defaultValue={defaultPagina}
        />

        <Field
          name="numero"
          component={ComponenteField}
          label="Numero Telefónico"
          defaultValue={defaultNumero}
        />

        <Field
          name="correo"
          component={ComponenteField}
          label="Correo Electrónico"
          defaultValue={defaultCorreo}
        />
    </Col>
    );
};

FormProveedor.propTypes = {
  idProveedor: PropTypes.number,
  defaultNombre: PropTypes.string,
  defaultDireccion: PropTypes.string,
  defaultPagina: PropTypes.string,
  defaultNumero: PropTypes.string,
  defaultCorreo: PropTypes.string,
};

FormProveedor.defaultProps = {
  idProveedor: '',
  defaultNombre: '',
  defaultDireccion: '',
  defaultPagina: '',
  defaultNumero: '',
  defaultCorreo: '',
};

export default reduxForm({
  form: 'formProveedor', // a unique identifier for this form
})(FormProveedor);
