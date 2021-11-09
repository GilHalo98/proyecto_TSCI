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
import InforCard from '../components/InforCard';
import GraficoBarraLadeado from '../components/GraficoBarraLadeado';
import GraficoPie from '../components/GraficoPie';
// import GraficoBarra from '../components/GraficoBarra';

// Datos del prototipo.
// import { datos, datos2, datos3 } from './components/prototypeData';

const Informes = ({ rtl }) => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Informes. {rtl.direction}</h3>
      </Col>
    </Row>

    <Row>
      <Container>
        <Row>
          <InforCard
            xl={3}
            title="Usuarios Totales"
            value={1000}
          />

          <InforCard
            xl={3}
            title="Sesiones Activas"
            value={360}
          />

          <InforCard
            xl={3}
            title="Reservas Totales"
            value={20}
          />

          <InforCard
            xl={3}
            title="Reservas de eventos"
            value={5}
          />
        </Row>
        <Row>
          <GraficoBarraLadeado title="Consumo de monedas por usuario" />
          <GraficoPie title="Principales Ubicaciones de usuarios" />
        </Row>
      </Container>
    </Row>
  </Container>
);

Informes.propTypes = {
  rtl: RTLProps.isRequired,
};

export default connect((state) => ({
  rtl: state.rtl,
}))(Informes);
