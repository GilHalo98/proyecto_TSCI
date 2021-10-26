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
  proveedores,
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
              <th>nombre</th>
              <th>locacion</th>
              <th>pagina web</th>
              <th>numero telefonico</th>
              <th>correo electronico</th>
            </tr>
          </thead>

          <tbody>
            {proveedores.map((proveedor) => (
              <tr key={proveedor.id}>
                <td>{proveedor.id}</td>
                <td>{proveedor.nombre}</td>
                <td>{proveedor.locacion}</td>
                <td>{proveedor.pagina_web}</td>
                <td>{proveedor.numero_telefonico}</td>
                <td>{proveedor.correo_electronico}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </Col>
);

TablaDatos.propTypes = {
  productos: PropTypes.shape({
      tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string,
      })),
      tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
    }).isRequired,
  proveedores: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
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
