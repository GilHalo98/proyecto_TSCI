// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes de reactstrap.
import {
    Container, Col, Row,
} from 'reactstrap';

// Iconos.
import NotePlusOutlineIcon from 'mdi-react/NotePlusOutlineIcon';

// transcripciones, aun no se como se usa.
// import { useTranslation } from 'react-i18next';

// Componentes de la vista.
import PrettyButtonModal from './components/PrettyButtonModal';
import FormReporte from './components/FormReporte';
import CardReporte from './components/CardReporte';
import Paginacion from './components/Paginacion';
import OpcionesReportes from './components/OpcionesReportes';
import ControlCantidadDatos from './components/ControlCantidadDatos';

// Logica de la vista.
import { querry } from './logic/FuncionesIndex';
import { registrar } from './logic/FuncionesRegistros';

const Reportes = ({ dir }) => {
    const [listaReportes, setListaReportes] = React.useState([]);
    const [listaProductos, setListaProductos] = React.useState([]);

    const [paginaReportes, setPaginaReportes] = React.useState(1);
    const [limiteReportes, setLimiteReportes] = React.useState(6);
    const [totalPaginas, setTotalPaginas] = React.useState(0);

    const [opcionMerma, setOpcionMerma] = React.useState(true);
    const [opcionSalida, setOpcionSalida] = React.useState(true);
    const [opcionEntrada, setOpcionEntrada] = React.useState(true);

    React.useEffect(() => {
      querry(
          limiteReportes, paginaReportes,
          opcionMerma, opcionSalida, opcionEntrada,
          setListaReportes, setTotalPaginas, setListaProductos,
      );
    }, [paginaReportes, opcionMerma, opcionSalida, opcionEntrada, limiteReportes]);

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
                      handleSubmit={registrar}
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
                    <Col />
                    <Col md={3}>
                      <ControlCantidadDatos
                        cantidadDatos={limiteReportes}
                        setCantidadDatos={setLimiteReportes}
                      />
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
                    setPaginaActual={setPaginaReportes}
                    totalPaginas={totalPaginas}
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
