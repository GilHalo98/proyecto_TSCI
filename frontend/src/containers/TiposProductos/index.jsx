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
import ViewGridPlusOutlineIcon from 'mdi-react/ViewGridPlusOutlineIcon';

// Componentes de la vista.
import TablaDatos from './components/TablaDatos';

// transcripciones, aun no se como se usa.
// import { useTranslation } from 'react-i18next';

// Componente PrettyButton.
import PrettyModal from '../../shared/components/extendedButtons/PrettyModal';

import FormTipos from './components/FormTipos';

const ListaTiposProductos = ({ dir }) => {
  const [listaTipos, setListaTipos] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const proveedoresResult = await axios(
        "http://localhost:3001/api/tiposProductos/"
      );
      setListaTipos(proveedoresResult.data);
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
                <h3 className="page-title">Tipos de productos.</h3>
              </Col>

              <Col xs="auto">
                <PrettyModal
                  btn={<ViewGridPlusOutlineIcon style={{ width: '100%', height: '100%' }} />}
                  className="icon"
                  dir={dir}
                  color="success"
                  outline
                  idButton="agregar_nuevo_tipo"
                  tooltip
                  tooltipLabel="Agregar un Tipo de producto"
                  tooltipPlacement="right"
                  titulo="Agrega un Tipo de producto"
                  botonesOk={false}
                >
                  <FormTipos />
                </PrettyModal>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      <Row>
        <TablaDatos
          tiposProductos={listaTipos}
        />
      </Row>
    </Container>
  );
};

ListaTiposProductos.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default ListaTiposProductos;
