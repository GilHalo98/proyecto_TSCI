// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes de reactstrap.
import { Row } from 'reactstrap';

// Conexion con react-redux
// import { connect } from 'react-redux';

// Propiedades RtL
// import { RTLProps } from '../../../../shared/prop-types/ReducerProps';

// Iconos.

// Componentes de la vista.
import InforCard from '../../components/InforCard';

const SeccionReportes = ({
    totalMerma, totalEntrada, totalSalida,
}) => (
    <Row>
      <InforCard
        md={4}
        lg={4}
        xl={4}
        title="Reportes de Merma"
        value={totalMerma}
      />

      <InforCard
        md={4}
        lg={4}
        xl={4}
        title="Reportes de Salida"
        value={totalSalida}
      />

      <InforCard
        md={4}
        lg={4}
        xl={4}
        title="Reportes de Entrada"
        value={totalEntrada}
      />
    </Row>
);

SeccionReportes.propTypes = {
    totalMerma: PropTypes.number,
    totalEntrada: PropTypes.number,
    totalSalida: PropTypes.number,
};

SeccionReportes.defaultProps = {
    totalMerma: 0,
    totalEntrada: 0,
    totalSalida: 0,
}

export default SeccionReportes;
