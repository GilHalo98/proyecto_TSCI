// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Para realizar llamadas a la API
import axios from "axios";

// Componentes de reactstrap.
import {
  Container, Row, Col,
} from 'reactstrap';

// Iconos.
import ClipboardPlusOutlineIcon from 'mdi-react/ClipboardPlusOutlineIcon';

// Componentes de la vista.
import TablaDatos from './components/TablaDatos';

// transcripciones, aun no se como se usa.
// import { useTranslation } from 'react-i18next';

// Componente PrettyButton.
import PrettyModal from '../../shared/components/extendedButtons/PrettyModal';

import FormProducto from './components/FormProducto';

const ListaProductos = ({ dir }) => {
  const [listaProductos, setListaProductos] = React.useState([]);
  const [listaProveedores, setListaProveedores] = React.useState([]);
  const [listaTiposProductos, setListaTiposProductos] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const productosResult = await axios(
        "http://localhost:3001/api/producto/"
      );
      setListaProductos(productosResult.data);

      const proveedoresResult = await axios(
        "http://localhost:3001/api/proveedores/"
      );
      setListaProveedores(proveedoresResult.data);

      const tiposProductosResult = await axios(
        "http://localhost:3001/api/tiposProductos/"
      );
      setListaTiposProductos(tiposProductosResult.data);
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
                <h3 className="page-title">Productos.</h3>
              </Col>

              <Col xs="auto">
                <PrettyModal
                  btn={<ClipboardPlusOutlineIcon style={{ width: '100%', height: '100%' }} />}
                  dir={dir}
                  color="success"
                  outline
                  idButton="agregar_nuevo_producto"
                  tooltip
                  tooltipLabel="Agregar un Producto"
                  tooltipPlacement="right"
                  titulo="Agrega un Producto"
                  botonesOk={false}
                >
                  <FormProducto
                    proveedores={listaProveedores}
                    tiposProductos={listaTiposProductos}
                  />
                </PrettyModal>
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
    </Container>
  );
};

ListaProductos.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default ListaProductos;
