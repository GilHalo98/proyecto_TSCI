import React from 'react';

// import { useTranslation } from 'react-i18next';

import {
  Table,
  Card, CardBody,
  Col,
} from 'reactstrap';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes.
import HeaderCard from './HeaderCard';

const TablaDatos = ({
  tiposProductos,
  xs, sm, md, lg, xl,
}) => (
  <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
    <Card>
      <CardBody>
        <HeaderCard
          title="Proveedores"
          description="Proveedores de productos"
        />

        <Table responsive hover>
          <thead>
            <tr>
              <th>id</th>
              <th>tipo de producto</th>
              <th>descripcion</th>
            </tr>
          </thead>

          <tbody>
            {tiposProductos.map((tipo) => (
              <tr key={tipo.id}>
                <td>{tipo.id}</td>
                <td>{tipo.tipo}</td>
                <td>{tipo.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </Col>
);

TablaDatos.propTypes = {
  tiposProductos: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

TablaDatos.defaultProps = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
};

export default TablaDatos;
