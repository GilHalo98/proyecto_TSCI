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

// Componente de field.
import ComponenteField from './ComponenteField';

// Nose.
// import { useTranslation } from 'react-i18next';

const FormDeleteTipo = ({
    idTipo,
}) => {

  return (
    <Col>
        <Field
            name="id"
            defaultValue={idTipo}
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

FormDeleteTipo.propTypes = {
  idTipo: PropTypes.number.isRequired,
};

export default reduxForm({
  form: 'formDeleteTipo', // a unique identifier for this form
})(FormDeleteTipo);
