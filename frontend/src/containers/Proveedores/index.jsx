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

// Componentes de la vista.
import TablaDatos from './components/TablaDatos';

// transcripciones, aun no se como se usa.
// import { useTranslation } from 'react-i18next';

// Componente PrettyButton.
import PrettyButtonModal from './components/PrettyButtonModal';
import FormProveedor from './components/FormProveedor';
import Paginacion from './components/Paginacion';

const ListaProveedores = ({ dir }) => {
  const [listaProveedores, setListaProveedores] = React.useState([]);

  const [paginaProveedores, setPaginaProveedores] = React.useState(1);
  // const [limiteProveedores, setLimiteProveedores] = React.useState(10);
  const [totalPaginas, setTotalPaginas] = React.useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
        const proveedoresResult = await axios({
            method: 'get',
            url: 'http://localhost:3001/api/proveedores/',
            params: {
                // limit: limiteProveedores,
                limit: 10,
                pagina: paginaProveedores,
            },
        });
        setListaProveedores(proveedoresResult.data.datos);
        setTotalPaginas(proveedoresResult.data.paginas_totales);
    };
    fetchData();
  }, [paginaProveedores]);

  const siguientePagina = () => {
      if (paginaProveedores < totalPaginas) {
          setPaginaProveedores(paginaProveedores + 1);
      }
  };

  const anteriorPagina = () => {
      if (paginaProveedores > 1) {
          setPaginaProveedores(paginaProveedores - 1);
      } else {
          setPaginaProveedores(1);
      }
  };

  const primeraPagina = () => {
      setPaginaProveedores(1);
  };

  const ultimaPagina = () => {
      setPaginaProveedores(totalPaginas);
  };

  const handleSubmit = (event) => {
    const data = {
      nombre: event.target[1].value,
      locacion: event.target[2].value,
      pagina_web: event.target[3].value,
      numero_telefonico: event.target[4].value,
      correo_electronico: event.target[5].value,
    };

    const apiRequest = axios.create({
      baseURL: 'http://localhost:3001/api',
    });

    event.preventDefault();

    apiRequest.post(
      '/proveedores/add/',
      data
    ).then((respuesta) => {
      Swal.fire({
        title: "Proveedor Registrado!",
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
                <h3 className="page-title">Proveedores.</h3>
              </Col>

              <Col xs="auto">
                  <PrettyButtonModal
                    titulo="Agregar un Proveedor"
                    handleSubmit={handleSubmit}
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
        totalPaginas={totalPaginas}
        primeraPagina={primeraPagina}
        anteriorPagina={anteriorPagina}
        ultimaPagina={ultimaPagina}
        siguientePagina={siguientePagina}
      />
    </Container>
  );
};

ListaProveedores.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default ListaProveedores;
