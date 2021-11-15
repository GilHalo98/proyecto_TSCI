// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Para realizar llamadas a la API
import axios from "axios";
import Swal from "sweetalert2";

// Componentes de reactstrap.
import {
  Col, Container, Row,
} from 'reactstrap';

// Iconos.
import StorePlusIcon from 'mdi-react/StorePlusIcon';

// transcripciones, aun no se como se usa.
// import { useTranslation } from 'react-i18next';

// Componentes de la vista.
import TablaDatos from './components/TablaDatos';
import PrettyButtonModal from './components/PrettyButtonModal';
import FormProveedor from './components/FormProveedor';
import Paginacion from './components/Paginacion';
import ControlCantidadDatos from './components/ControlCantidadDatos';

// Logica de la vista.
import { querry } from './logic/FuncionesIndex';
import { registrar } from './logic/FuncionesRegistros';

const ListaProveedores = ({ dir }) => {
  const [listaProveedores, setListaProveedores] = React.useState([]);

  const [paginaProveedores, setPaginaProveedores] = React.useState(1);
  const [limiteProveedores, setLimiteProveedores] = React.useState(10);
  const [totalPaginas, setTotalPaginas] = React.useState(0);

  React.useEffect(() => {
    querry(
        limiteProveedores,
        paginaProveedores,
        setListaProveedores,
        setTotalPaginas
    );
  }, [paginaProveedores, limiteProveedores]);

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
                  <PrettyButtonModal
                    titulo="Agregar un Proveedor"
                    handleSubmit={registrar}
                    icono={<StorePlusIcon style={{ width: '100%', height: '100%' }} />}
                    color="success"
                    outline
                    tooltip
                    tooltipLabel="Agregar un Proveedor"
                    tooltipPlacement="right"
                  >
                      <FormProveedor />
                  </PrettyButtonModal>
              </Col>
            </Row>

            <Row>
                <Col />
                <Col md={3}>
                  <ControlCantidadDatos
                    cantidadDatos={limiteProveedores}
                    setCantidadDatos={setLimiteProveedores}
                  />
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

      <Paginacion
          paginaActual={paginaProveedores}
          setPaginaActual={setPaginaProveedores}
          totalPaginas={totalPaginas}
      />
    </Container>
  );
};

ListaProveedores.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default ListaProveedores;
