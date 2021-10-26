// API de React.
import React, { useState } from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Material Componentes del form
import TextField from '@material-ui/core/TextField';

const ComponenteField = ({
  input,
  label,
  meta: { touched, error },
  children,
  select,
  type,
  multiline,
  defaultValue,
  onChange,
}) => {
  const [valor, setValor] = useState(defaultValue);

  return (
    <TextField
      className="material-form__field"
      label={label}
      type={type}
      error={touched && error}
      value={valor}
      select={select}
      multiline={multiline}
      onChange={(e) => {
        setValor(e.target.value);
        input.onChange(e.target.value);
        onChange(e.target.value);
      }}
      onBlur={() => {
        if (!input.value) {
          setValor(defaultValue);
        }
      }}
    >
      {children}
    </TextField>
  );
};

ComponenteField.propTypes = {
  onChange: PropTypes.func,
  input: PropTypes.shape().isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  select: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
  type: PropTypes.string,
  multiline: PropTypes.bool,
  defaultValue: PropTypes.string,
};

ComponenteField.defaultProps = {
  onChange:() => {},
  meta: null,
  select: false,
  children: [],
  type: 'text',
  multiline: false,
  defaultValue: '',
};

export default ComponenteField;
