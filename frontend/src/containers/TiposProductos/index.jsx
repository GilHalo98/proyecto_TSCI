// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes de reactstrap.
import {
  Col, Container, Row,
} from 'reactstrap';

// Iconos.
import ViewGridPlusOutlineIcon from 'mdi-react/ViewGridPlusOutlineIcon';

// transcripciones, aun no se como se usa.
// import { useTranslation } from 'react-i18next';

// Componente PrettyButton.
import PrettyButtonModal from './components/PrettyButtonModal';
import FormTipo from './components/FormTipo';
import TablaDatos from './components/TablaDatos';
import Paginacion from './components/Paginacion';
import ControlCantidadDatos from './components/ControlCantidadDatos';

// Logica de la vista.
import { querry } from './logic/FuncionesIndex';
import { registrar } from './logic/FuncionesRegistros';

const ListaTiposProductos = ({ dir }) => {
  const [listaTipos, setListaTipos] = React.useState([]);

  const [paginaTipos, setPaginaTipos] = React.useState(1);
  const [limiteTipos, setLimiteTipos] = React.useState(10);
  const [totalPaginas, setTotalPaginas] = React.useState(0);

  React.useEffect(() => {
    querry(
        limiteTipos,
        paginaTipos,
        setListaTipos,
        setTotalPaginas
    );
  }, [paginaTipos, limiteTipos]);

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
                  <PrettyButtonModal
                    titulo="Agregar un Tipo de Producto"
                    handleSubmit={registrar}
                    icono={<ViewGridPlusOutlineIcon style={{ width: '100%', height: '100%' }} />}
                    color="success"
                    outline
                    tooltip
                    tooltipLabel="Agregar un Tipo de Producto"
                    tooltipPlacement="right"
                  >
                      <FormTipo />
                  </PrettyButtonModal>
              </Col>
            </Row>

            <Row>
                <Col />
                <Col md={3}>
                  <ControlCantidadDatos
                    cantidadDatos={limiteTipos}
                    setCantidadDatos={setLimiteTipos}
                  />
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

      <Paginacion
          paginaActual={paginaTipos}
          setPaginaActual={setPaginaTipos}
          totalPaginas={totalPaginas}
      />
    </Container>
  );
};

ListaTiposProductos.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default ListaTiposProductos;
