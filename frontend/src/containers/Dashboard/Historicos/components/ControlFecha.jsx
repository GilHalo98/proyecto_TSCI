// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes de reduxForm.
import { Field, reduxForm } from 'redux-form';

// Componente de field.
import ComponenteField from './ComponenteField';

const ControlFecha = ({
    fecha, setFecha,
}) => {
    return (
        <form className="material-form">
            <Field
                name="fecha"
                defaultValue={fecha}
                type="number"
                component={ComponenteField}
                label="Fecha de Reportes"
                onChange={(valor) => {
                    setFecha(valor);
                } }
            />
        </form>
    );
};

ControlFecha.propTypes = {
    fecha: PropTypes.number.isRequired,
    setFecha: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'controlFecha', // a unique identifier for this form
})(ControlFecha);
