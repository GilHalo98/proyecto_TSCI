// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Para realizar llamadas a la API
import axios from "axios";
import Swal from "sweetalert2";

// Componentes de reactstrap.
import {
    Container, Col, Row,
} from 'reactstrap';

// Iconos.
import NotePlusOutlineIcon from 'mdi-react/NotePlusOutlineIcon';

// transcripciones, aun no se como se usa.
// import { useTranslation } from 'react-i18next';

// Componentes Propios.
import PrettyButtonModal from './components/PrettyButtonModal';
import FormReporte from './components/FormReporte';
import CardReporte from './components/CardReporte';
import Paginacion from './components/Paginacion';
import OpcionesReportes from './components/OpcionesReportes';

const Reportes = ({ dir }) => {
    const [listaReportes, setListaReportes] = React.useState([]);
    const [listaProductos, setListaProductos] = React.useState([]);

    const [paginaReportes, setPaginaReportes] = React.useState(1);
    // const [limiteReportes, setLimiteReportes] = React.useState(6);
    const [totalPaginas, setTotalPaginas] = React.useState(0);

    const [opcionMerma, setOpcionMerma] = React.useState(true);
    const [opcionSalida, setOpcionSalida] = React.useState(true);
    const [opcionEntrada, setOpcionEntrada] = React.useState(true);

    React.useEffect(() => {
      const fetchData = async () => {
        var opciones = [];
        if (opcionMerma) { opciones.push('merma'); }
        if (opcionSalida) { opciones.push('salida'); }
        if (opcionEntrada) { opciones.push('entrada'); }

        if (!(opcionMerma || opcionSalida || opcionEntrada)) {
            opciones = ['merma', 'salida', 'entrada'];
        }

        const reportesResult = await axios({
            method: 'get',
            url: 'http://localhost:3001/api/reportes/',
            params: {
                // limit: limiteReportes,
                limit: 6,
                pagina: paginaReportes,
                busqueda: {
                    tipo: opciones,
                }
            },
        });
        setListaReportes(reportesResult.data.datos);
        setTotalPaginas(reportesResult.data.paginas_totales);

        const productosResult = await axios({
            method: 'get',
            url: 'http://localhost:3001/api/producto/'
        });
        setListaProductos(productosResult.data.datos);
      };

      fetchData();
    }, [paginaReportes, opcionMerma, opcionSalida, opcionEntrada]);

    const siguientePagina = () => {
        if (paginaReportes < totalPaginas) {
            setPaginaReportes(paginaReportes + 1);
        }
    };

    const anteriorPagina = () => {
        if (paginaReportes > 1) {
            setPaginaReportes(paginaReportes - 1);
        } else {
            setPaginaReportes(1);
        }
    };

    const primeraPagina = () => {
        setPaginaReportes(1);
    };

    const ultimaPagina = () => {
        setPaginaReportes(totalPaginas);
    };

    // Agrega un registro de un reporte.
    const handleSubmit = (event) => {
      const data = {
        descripcion: event.target[0].value,
        tipo: event.target[3].value,
        id_producto: event.target[2].value,
      };

      const apiRequest = axios.create({
        baseURL: 'http://localhost:3001/api',
      });

      event.preventDefault();

      apiRequest.post(
        '/reportes/add/',
        data
      ).then((respuesta) => {
        Swal.fire({
          title: "Reporte Registrado!",
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
                    <h3 className="page-title">Reportes de productos.</h3>
                  </Col>

                  <Col xs="auto">
                    <PrettyButtonModal
                      titulo="Agregar un reporte"
                      handleSubmit={handleSubmit}
                      icono={<NotePlusOutlineIcon style={{ width: '100%', height: '100%' }} />}
                      color="success"
                      outline
                      tooltip
                      tooltipLabel="Agregar un Reporte"
                      tooltipPlacement="right"
                    >
                      <FormReporte productos={listaProductos} />
                    </PrettyButtonModal>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <OpcionesReportes
                        opcionMerma={opcionMerma}
                        opcionEntrada={opcionEntrada}
                        opcionSalida={opcionSalida}
                        setOpcionMerma={setOpcionMerma}
                        setOpcionSalida={setOpcionSalida}
                        setOpcionEntrada={setOpcionEntrada}
                    />
                  </Col>
                </Row>

                <Row>
                    {listaReportes.map((reporte) => (
                        <CardReporte
                            datosReporte={reporte}
                            productos={listaProductos}
                        />
                    ))}
                </Row>
              </Container>
            </Col>
          </Row>

          <Row>
              <Col>
                <Paginacion
                    paginaActual={paginaReportes}
                    totalPaginas={totalPaginas}
                    primeraPagina={primeraPagina}
                    anteriorPagina={anteriorPagina}
                    ultimaPagina={ultimaPagina}
                    siguientePagina={siguientePagina}
                />
              </Col>
          </Row>
        </Container>
    );
};

Reportes.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default Reportes;
