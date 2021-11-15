import React from "react";

// Componentes react-bootstrap.
import { Col, Button } from 'reactstrap';

// Componentes de reduxForm.
import { Field, reduxForm } from 'redux-form';

// Componente del field.
import ComponenteField from './ComponenteField';

import { registrar, login } from '../logic/FuncionesRegistros';

const LogInForm = () => {
  // Valores del form.
  const [username, setUserName] = React.useState();
  const [password, setPassword] = React.useState();
  const [passwordConfirmacion, setPasswordConfirmacion] = React.useState();

  return (
      <form className="material-form">
          <Field
            name="username"
            component={ComponenteField}
            label="Nombre de usuario"
            onChange={(valor) => {
                setUserName(valor);
            }}
          />

          <Field
            name="password"
            type="password"
            component={ComponenteField}
            label="Constraseña"
            onChange={(valor) => {
                setPassword(valor);
            }}
          />

          <Button
              color="success"
              onClick={(event) => {
                  login(event, username, password);
              }}
          >
            Iniciar Seción
          </Button>

          <Button
              outline
              onClick={(event) => {
                  registrar(event, username, password);
              }}
          >
            Registrarse
          </Button>
      </form>
  );
};

export default reduxForm({
  form: 'loginUser', // a unique identifier for this form
})(LogInForm);
