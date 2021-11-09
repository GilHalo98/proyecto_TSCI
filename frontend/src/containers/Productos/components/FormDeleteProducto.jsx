// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes de reactstrap.
import { Col } from 'reactstrap';

// Componentes de reduxForm.
import { Field, reduxForm } from 'redux-form';

// Componente de field.
import ComponenteField from './ComponenteField';

// Nose.
// import { useTranslation } from 'react-i18next';

const FormDeleteProducto = ({
    idProducto,
}) => (
    <Col>
        <Field
          name="id"
          defaultValue={idProducto}
          component={ComponenteField}
          label=""
          type="hidden"
        />

        <p style={{ 'textAlign':'center' }}>
          Al eliminar este elemento no habra manera de recuperarlo
        </p>
    </Col>
);

FormDeleteProducto.propTypes = {
    idProducto: PropTypes.number.isRequired,
};

export default reduxForm({
  form: 'formDeleteProducto', // a unique identifier for this form
})(FormDeleteProducto);
