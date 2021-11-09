// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Para realizar llamadas a la API
import axios from "axios";
import Swal from "sweetalert2";

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
import PrettyButtonModal from './components/PrettyButtonModal';
import FormProducto from './components/FormProducto';
import Paginacion from './components/Paginacion';

const ListaProductos = ({ dir }) => {
  const [listaProductos, setListaProductos] = React.useState([]);
  const [listaProveedores, setListaProveedores] = React.useState([]);
  const [listaTiposProductos, setListaTiposProductos] = React.useState([]);

  const [paginaProductos, setPaginaProductos] = React.useState(1);
  // const [limiteProductos, setLimiteProductos] = React.useState(10);
  const [totalPaginas, setTotalPaginas] = React.useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      const productosResult = await axios({
        method: 'get',
        url: 'http://localhost:3001/api/producto/',
        params: {
            // limit: limiteProductos,
            limit: 10,
            pagina: paginaProductos,
        },
      });
      setListaProductos(productosResult.data.datos);
      setTotalPaginas(productosResult.data.paginas_totales);

      const proveedoresResult = await axios({
        method: 'get',
        url: 'http://localhost:3001/api/proveedores/',
        params: {
            atributos: ['id', 'nombre']
        },
      });
      setListaProveedores(proveedoresResult.data.datos);

      const tiposProductosResult = await axios({
          method: 'get',
          url: 'http://localhost:3001/api/tiposProductos/',
          params: {
              atributos: ['id', 'tipo']
          },
      });
      setListaTiposProductos(tiposProductosResult.data.datos);
    };
    fetchData();
  }, [paginaProductos]);

  const siguientePagina = () => {
      if (paginaProductos < totalPaginas) {
          setPaginaProductos(paginaProductos + 1);
      }
  };

  const anteriorPagina = () => {
      if (paginaProductos > 1) {
          setPaginaProductos(paginaProductos - 1);
      } else {
          setPaginaProductos(1);
      }
  };

  const primeraPagina = () => {
      setPaginaProductos(1);
  };

  const ultimaPagina = () => {
      setPaginaProductos(totalPaginas);
  };

  const handleSubmit = (event) => {
      const data = {
        numero_serie: event.target[1].value,
        costo: event.target[2].value,
        medidas: event.target[3].value,
        cantidad_stock: event.target[4].value,
        id_proveedor: event.target[5].value,
        id_tipo: event.target[6].value,
      };

      const apiRequest = axios.create({
        baseURL: 'http://localhost:3001/api',
      });

      event.preventDefault();

      apiRequest.post(
        `/producto/add/`,
        data
      ).then((respuesta) => {
        Swal.fire({
          title: "Producto Agregado!",
          text: respuesta.data.message,
          icon: "success",
          confirmButtonText: "Ok!",
        }).then(function() {
          window.location.reload();
        });

      }).catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.response.data.message,
          icon: "error",
          confirmButtonText: "Intenta Nuevamente",
        });
      });
  };

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
                    handleSubmit={handleSubmit}
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
        totalPaginas={totalPaginas}
        primeraPagina={primeraPagina}
        anteriorPagina={anteriorPagina}
        ultimaPagina={ultimaPagina}
        siguientePagina={siguientePagina}
      />
    </Container>
  );
};

ListaProductos.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default ListaProductos;
