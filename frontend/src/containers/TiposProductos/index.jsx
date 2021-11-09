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
import ViewGridPlusOutlineIcon from 'mdi-react/ViewGridPlusOutlineIcon';

// Componentes de la vista.
import TablaDatos from './components/TablaDatos';

// transcripciones, aun no se como se usa.
// import { useTranslation } from 'react-i18next';

// Componente PrettyButton.
import PrettyButtonModal from './components/PrettyButtonModal';
import FormTipo from './components/FormTipo';
import Paginacion from './components/Paginacion';

const ListaTiposProductos = ({ dir }) => {
  const [listaTipos, setListaTipos] = React.useState([]);

  const [paginaTipos, setPaginaTipos] = React.useState(1);
  // const [limiteTipos, setLimiteTipos] = React.useState(10);
  const [totalPaginas, setTotalPaginas] = React.useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      const tiposProductosResult = await axios({
          method: 'get',
          url: 'http://localhost:3001/api/tiposProductos/',
          params: {
              // limit: limiteTipos,
              limit: 10,
              pagina: paginaTipos,
          },
      });
      setListaTipos(tiposProductosResult.data.datos);
      setTotalPaginas(tiposProductosResult.data.paginas_totales);
    };
    fetchData();
  }, [paginaTipos]);

  const siguientePagina = () => {
      if (paginaTipos < totalPaginas) {
          setPaginaTipos(paginaTipos + 1);
      }
  };

  const anteriorPagina = () => {
      if (paginaTipos > 1) {
          setPaginaTipos(paginaTipos - 1);
      } else {
          setPaginaTipos(1);
      }
  };

  const primeraPagina = () => {
      setPaginaTipos(1);
  };

  const ultimaPagina = () => {
      setPaginaTipos(totalPaginas);
  };

  const handleSubmit = (event) => {
    const data = {
      tipo: event.target[1].value,
      descripcion: event.target[2].value,
    };

    const apiRequest = axios.create({
      baseURL: 'http://localhost:3001/api',
    });

    event.preventDefault();

    apiRequest.post(
      `/tiposProductos/add/`,
      data
    ).then((respuesta) => {
      Swal.fire({
        title: "Tipo de producto Agregado!",
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
                <h3 className="page-title">Tipos de productos.</h3>
              </Col>

              <Col xs="auto">
                  <PrettyButtonModal
                    titulo="Agregar un Tipo de Producto"
                    handleSubmit={handleSubmit}
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
        totalPaginas={totalPaginas}
        primeraPagina={primeraPagina}
        anteriorPagina={anteriorPagina}
        ultimaPagina={ultimaPagina}
        siguientePagina={siguientePagina}
      />
    </Container>
  );
};

ListaTiposProductos.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default ListaTiposProductos;
