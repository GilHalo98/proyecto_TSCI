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

const FormDeleteProveedor = ({
  idProveedor,
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

        <p style={{ 'textAlign':'center' }}>
          Al eliminar este elemento no habra manera de recuperarlo
        </p>
    </Col>
    );
};

FormDeleteProveedor.propTypes = {
  idProveedor: PropTypes.number.isRequired,
};

export default reduxForm({
  form: 'formDeleteProveedor', // a unique identifier for this form
})(FormDeleteProveedor);
