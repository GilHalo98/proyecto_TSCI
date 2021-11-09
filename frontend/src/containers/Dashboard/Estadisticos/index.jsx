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
import GraficoPie from '../components/GraficoPie';
import StatCard from '../components/StatCard';
import GraficoLinea from '../components/GraficoLinea';
// import GraficoPolarArea from '../components/GraficoPolarArea';

// Datos del prototipo.
// import { datos, datos2, datos3 } from './components/prototypeData';

const Estadisticos = ({ rtl }) => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Estadisticos. {rtl.direction}</h3>
      </Col>
    </Row>

    <Row>
      <Container>
        <Row>
          <StatCard
            xl={4}
            title="Usuarios Femeninos"
            value={250}
            max={1000}
          />

          <StatCard
            xl={4}
            title="Usuarios Masculinos"
            value={750}
            max={1000}
          />

          <StatCard
            xl={4}
            title="Usuarios Verificados"
            value={170}
            max={1000}
          />
        </Row>

        <Row>
          <Col md={0} lg={0} xl={2} />
          <GraficoPie xl={8} title="Edades de Usuarios" />
          <Col md={0} lg={0} xl={2} />
        </Row>

        <Row>
          <GraficoBarra title="Intereses de usaurios" />
          <GraficoLinea title="Duración de Salas" />
        </Row>

        <Row>
          <Col md={0} lg={0} xl={2} />
          <GraficoBarra xl={8} title="Salas creadas vs salas activas" />
          <Col md={0} lg={0} xl={2} />
        </Row>
      </Container>
    </Row>
  </Container>
);

Estadisticos.propTypes = {
  rtl: RTLProps.isRequired,
};

export default connect((state) => ({
  rtl: state.rtl,
}))(Estadisticos);
