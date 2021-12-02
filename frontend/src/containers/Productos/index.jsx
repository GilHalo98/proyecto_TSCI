// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes de reactstrap.
import {
  Container, Row, Col,
} from 'reactstrap';

// Iconos.
import ClipboardPlusOutlineIcon from 'mdi-react/ClipboardPlusOutlineIcon';

// Componentes de la vista.
import TablaDatos from './components/TablaDatos';
import PrettyButtonModal from './components/PrettyButtonModal';
import FormProducto from './components/FormProducto';
import Paginacion from './components/Paginacion';
import ControlCantidadDatos from './components/ControlCantidadDatos';

// Logica de vista.
import { registrar } from './logic/FuncionesRegistros';
import { querry } from './logic/FuncionesIndex';

const ListaProductos = ({ rtl, theme, dir }) => {
  const [listaProductos, setListaProductos] = React.useState([]);
  const [listaProveedores, setListaProveedores] = React.useState([]);
  const [listaTiposProductos, setListaTiposProductos] = React.useState([]);

  const [paginaProductos, setPaginaProductos] = React.useState(1);
  const [limiteProductos, setLimiteProductos] = React.useState(10);
  const [totalPaginas, setTotalPaginas] = React.useState(0);

  React.useEffect(() => {
    querry(
        paginaProductos,
        limiteProductos,
        setListaProductos,
        setTotalPaginas,
        setListaProveedores,
        setListaTiposProductos,
    );

  }, [paginaProductos, limiteProductos]);

  return (
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <Container>
            <Row>
              <Col>
                <h3 className="page-title">Productos.</h3>
              </Col>

              <Col xs="auto">
                  <PrettyButtonModal
                    titulo="Agregar un Producto"
                    handleSubmit={registrar}
                    icono={<ClipboardPlusOutlineIcon style={{ width: '100%', height: '100%' }} />}
                    color="success"
                    outline
                    tooltip
                    tooltipLabel="Agregar un Producto"
                    tooltipPlacement="right"
                  >
                      <FormProducto
                        proveedores={listaProveedores}
                        tiposProductos={listaTiposProductos}
                      />
                  </PrettyButtonModal>
              </Col>
            </Row>

            <Row>
                <Col />
                <Col md={3}>
                  <ControlCantidadDatos
                    cantidadDatos={limiteProductos}
                    setCantidadDatos={setLimiteProductos}
                  />
                </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      <Row>
        <TablaDatos
          productos={listaProductos}
          proveedores={listaProveedores}
          tiposProductos={listaTiposProductos}
        />
      </Row>

      <Paginacion
        paginaActual={paginaProductos}
        setPaginaActual={setPaginaProductos}
        totalPaginas={totalPaginas}
      />
    </Container>
  );
};

ListaProductos.propTypes = {
    dir: PropTypes.string.isRequired,
};

export default ListaProductos;
