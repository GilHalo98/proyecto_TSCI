// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Para realizar llamadas a la API
import axios from "axios";

// Componentes de reactstrap.
import {
  Col, Container, Row,
} from 'reactstrap';

// Iconos.
import StorePlusIcon from 'mdi-react/StorePlusIcon';

// Componentes de la vista.
import TablaDatos from './components/TablaDatos';

// transcripciones, aun no se como se usa.
// import { useTranslation } from 'react-i18next';

// Componente PrettyButton.
import PrettyModal from '../../shared/components/extendedButtons/PrettyModal';

import FormProveedor from './components/FormProveedor';

const ListaProveedores = ({ dir }) => {
  const [listaProveedores, setListaProveedores] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const proveedoresResult = await axios(
        "http://localhost:3001/api/proveedores/"
      );
      setListaProveedores(proveedoresResult.data);
    };
    fetchData();
  }, []);

  return (
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <Container>
            <Row>
              <Col>
                <h3 className="page-title">Proveedores.</h3>
              </Col>

              <Col xs="auto">
                <PrettyModal
                  btn={<StorePlusIcon style={{ width: '100%', height: '100%' }} />}
                  dir={dir}
                  color="success"
                  outline
                  idButton="agregar_nuevo_proveedor"
                  tooltip
                  tooltipLabel="Agregar un Proveedor"
                  tooltipPlacement="right"
                  titulo="Agrega un Proveedor"
                  botonesOk={false}
                >
                  <FormProveedor />
                </PrettyModal>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      <Row>
        <TablaDatos
          proveedores={listaProveedores}
        />
      </Row>
    </Container>
  );
};

ListaProveedores.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default ListaProveedores;
