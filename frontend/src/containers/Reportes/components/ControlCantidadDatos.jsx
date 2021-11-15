// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes de reduxForm.
import { Field, reduxForm } from 'redux-form';

// Componente de field.
import ComponenteField from './ComponenteField';

const ControlCantidadDatos = ({
    cantidadDatos, setCantidadDatos,
}) => {
    return (
        <form className="material-form">
            <Field
                name="datos"
                defaultValue={cantidadDatos}
                type="number"
                component={ComponenteField}
                label="Tamaño de tabla por pagina"
                onChange={(valor) => {
                    setCantidadDatos(valor);
                }}
            />
        </form>
    );
};

ControlCantidadDatos.propTypes = {
    fecha: PropTypes.number.isRequired,
    setFecha: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'controlCantidadDatos', // a unique identifier for this form
})(ControlCantidadDatos);
