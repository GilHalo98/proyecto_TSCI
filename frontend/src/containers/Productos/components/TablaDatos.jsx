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
  productos, proveedores, tiposProductos,
  xs, sm, md, lg, xl,
}) => (
  <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
    <Card>
      <CardBody>
        <HeaderCard
          title="Productos"
          description="Productos en inventario"
        />

        <Table responsive hover>
          <thead>
            <tr>
              <th>id</th>
              <th>numero de serie</th>
              <th>costo</th>
              <th>medidas</th>
              <th>cantidad en stock</th>
              <th>proveedor</th>
              <th>tipo de producto</th>
            </tr>
          </thead>

          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.numero_serie}</td>
                <td>{producto.costo}</td>
                <td>{producto.medidas}</td>
                <td>{producto.cantidad_stock}</td>
                <td>
                  {proveedores.map((proveedor) => {
                    if(proveedor.id === producto.id_proveedor) {
                      return(proveedor.nombre);
                    }
                    return('');
                  })}
                </td>
                <td>
                  {tiposProductos.map((tipoProducto) => {
                    if(tipoProducto.id === producto.id_tipo) {
                      return(tipoProducto.tipo);
                    }
                    return('');
                  })}
                </td>
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
