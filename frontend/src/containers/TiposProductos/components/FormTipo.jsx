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

const FormTipo = ({
    idTipo,
    defaultTipo,
    defaultDescripcion,
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

        <Field
          name="tipo"
          component={ComponenteField}
          label="Tipo del producto"
          defaultValue={defaultTipo}
        />

        <Field
          name="descripcion"
          component={ComponenteField}
          multiline={true}
          label="Descripción del tipo"
          defaultValue={defaultDescripcion}
        />
    </Col>
    );
};

FormTipo.propTypes = {
  idTipo: PropTypes.number,
  defaultTipo: PropTypes.string,
  defaultDescripcion: PropTypes.string,
};

FormTipo.defaultProps = {
    idTipo: '',
    defaultTipo: '',
    defaultDescripcion: '',
};

export default reduxForm({
  form: 'formTipo', // a unique identifier for this form
})(FormTipo);
