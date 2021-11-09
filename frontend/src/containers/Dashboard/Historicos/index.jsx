// Modulos de React.
import React from 'react';

// Parametros del componente.
// import PropTypes from 'prop-types';

// Componentes de reactstrap.
import {
  Col, Container, Row,
} from 'reactstrap';

// Conexion con react-redux
import { connect } from 'react-redux';

// Propiedades RtL
import { RTLProps } from '../../../shared/prop-types/ReducerProps';

// Iconos.

// Componentes de la vista.
import GraficoBarra from '../components/GraficoBarra';
import GraficoLinea from '../components/GraficoLinea';
import GraficoPie from '../components/GraficoPie';

// Datos del prototipo.
// import { datos, datos2, datos3 } from './components/prototypeData';

const Historicos = ({ rtl }) => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Historicos. {rtl.direction}</h3>
      </Col>
    </Row>

    <Row>
      <Container>
        <Row>
          <Col md={0} lg={0} xl={2} />
          <GraficoBarra xl={8} title="Usuarios registrados y nuevos registros por mes en 20XX" />
          <Col md={0} lg={0} xl={2} />
        </Row>

        <Row>
          <GraficoLinea title="Partidas iniciadas y completadas por mes en 20XX" />
          <GraficoLinea title="Ingresos en monedas y subscripciones por mes en 20XX" />
        </Row>

        <Row>
          <GraficoBarra title="Usuarios Conectados por mes en 20XX" />
          <GraficoBarra title="Nuevos Registros por mes en 20XX" />
        </Row>

        <Row>
          <Col md={0} lg={0} xl={2} />
          <GraficoPie xl={8} title="Consumo de monedas por mes en 20XX" />
          <Col md={0} lg={0} xl={2} />
        </Row>
      </Container>
    </Row>
  </Container>
);

Historicos.propTypes = {
  rtl: RTLProps.isRequired,
};

export default connect((state) => ({
  rtl: state.rtl,
}))(Historicos);
