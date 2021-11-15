// Modulos de React.
import React from 'react';

// Parametros del componente.
// import PropTypes from 'prop-types';

// Componentes de reactstrap.
import {
  Col, Container, Row,
} from 'reactstrap';

// Para realizar llamadas a la API
import axios from "axios";

// Colores aleatorios.
// import randomColor from "randomcolor";

// Mejor manipulacion de fechas.
import moment from 'moment';
import 'moment/locale/es';

// Conexion con react-redux
import { connect } from 'react-redux';

// Propiedades RtL
import { RTLProps } from '../../../shared/prop-types/ReducerProps';

// Componentes de la vista.
import GraficoBarra from '../components/GraficoBarra';
import GraficoLinea from '../components/GraficoLinea';
import ControlFecha from './components/ControlFecha';

// Logica de la vista.
import { querry } from './logic/FuncionesIndex';

const Historicos = ({ rtl }) => {
    moment.locale('es');

    const [fecha, setFecha] = React.useState(new Date().getFullYear());
    const [conteoReportes, setConteoReportes] = React.useState(
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    );

    const [conteoReportesMerma, setConteoReportesMerma] = React.useState(
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    );
    const [conteoReportesSalida, setConteoReportesSalida] = React.useState(
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    );
    const [conteoReportesEntrada, setConteoReportesEntrada] = React.useState(
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    );

    const [dataSetTipoReporte, setDataSetTipoReporte] = React.useState();

    React.useEffect(() => {
        querry(
            fecha,
            conteoReportesMerma,
            conteoReportesSalida,
            conteoReportesEntrada,
            setConteoReportes,
            setConteoReportesMerma,
            setConteoReportesSalida,
            setConteoReportesEntrada,
            setDataSetTipoReporte,
        );

    }, [fecha]);

    return (
      <Container className="dashboard">
        <Row>
          <Col md={10}>
            <h3 className="page-title">Historicos.</h3>
          </Col>

          <Col md={2}>
            <ControlFecha fecha={fecha} setFecha={setFecha} />
          </Col>
        </Row>

        <Row>
          <Container>
            <Row>
              <Col md={2} lg={2} xl={2} />
              <GraficoBarra
                title={`Cantidad de reportes por mes en ${fecha}`}
                data={{
                    labels: [
                        'Enero',
                        'Febrero',
                        'Marzo',
                        'Abril',
                        'Mayo',
                        'Junio',
                        'Julio',
                        'Agosto',
                        'Septiembre',
                        'Octubre',
                        'Noviembre',
                        'Diciembre',
                    ],
                    datasets: [{
                        label: 'Reportes Totales',
                        backgroundColor: '#FF6384',
                        borderColor: '#FF6384',
                        borderWidth: 1,
                        hoverBackgroundColor: '#FF6384',
                        hoverBorderColor: '#FF6384',
                        data: conteoReportes,
                    }],
                }}
                md={8}
                lg={8}
                xl={8}
              />
              <Col md={2} lg={2} xl={2} />
            </Row>

            <Row>
                <Col md={2} lg={2} xl={2} />
                <GraficoLinea
                  title={`Cantidad de reportes por tipo por mes en ${fecha}`}
                  data={{
                      labels: [
                          'Enero',
                          'Febrero',
                          'Marzo',
                          'Abril',
                          'Mayo',
                          'Junio',
                          'Julio',
                          'Agosto',
                          'Septiembre',
                          'Octubre',
                          'Noviembre',
                          'Diciembre',
                      ],
                      datasets: [
                        {
                            label: 'Reportes de merma',
                            fill: false,
                            lineTension: 0.3,
                            backgroundColor: '#36A2EB',
                            borderColor: '#36A2EB',
                            borderWidth: 2,
                            pointBackgroundColor: '#36A2EB',
                            pointHoverRadius: 3,
                            pointHoverBorderWidth: 1,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: conteoReportesMerma,
                        },
                        {
                            label: 'Reportes de salida',
                            fill: false,
                            lineTension: 0.3,
                            backgroundColor: '#36A2EB',
                            borderColor: '#36A2EB',
                            borderWidth: 2,
                            pointBackgroundColor: '#36A2EB',
                            pointHoverRadius: 3,
                            pointHoverBorderWidth: 1,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: conteoReportesSalida,
                        },
                        {
                            label: 'Reportes de entrada',
                            fill: false,
                            lineTension: 0.3,
                            backgroundColor: '#36A2EB',
                            borderColor: '#36A2EB',
                            borderWidth: 2,
                            pointBackgroundColor: '#36A2EB',
                            pointHoverRadius: 3,
                            pointHoverBorderWidth: 1,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: conteoReportesEntrada,
                        },
                      ],
                  }}
                  md={8}
                  lg={8}
                  xl={8}
                />
                <Col md={2} lg={2} xl={2} />
            </Row>
          </Container>
        </Row>
      </Container>
    );
};

Historicos.propTypes = {
  rtl: RTLProps.isRequired,
};

export default connect((state) => ({
  rtl: state.rtl,
}))(Historicos);
