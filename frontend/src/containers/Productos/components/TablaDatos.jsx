import React from 'react';

// import { useTranslation } from 'react-i18next';

import {
    Table,
    Card, CardBody,
    Col, ButtonToolbar, ButtonGroup,
} from 'reactstrap';

// Iconos.
import TrashCanOutlineIcon from 'mdi-react/TrashCanOutlineIcon';
import PencilOutlineIcon from 'mdi-react/PencilOutlineIcon';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes.
import HeaderCard from './HeaderCard';
import ButtonModal from './ButtonModal';
import FormProducto from './FormProducto';
import FormDeleteProducto from './FormDeleteProducto';

// Logica del componente.
import { actualizar, eliminar } from '../logic/FuncionesRegistros';

const TablaDatos = ({
  dir, productos, proveedores, tiposProductos,
  xs, sm, md, lg, xl,
}) => {
    return (
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
                  <th>opciones</th>
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
                    <td>
                        <ButtonToolbar>
                          <ButtonGroup className="btn-group--icons" style={{ 'padding': 0 }}>
                              <ButtonModal
                                titulo={`modifica los datos de ${producto.numero_serie}`}
                                handleSubmit={actualizar}
                                icono={<PencilOutlineIcon />}
                                color="warning"
                              >
                                  <FormProducto
                                        idProducto={producto.id}
                                        defaultNumero={producto.numero_serie}
                                        defaultCosto={producto.costo}
                                        defaultMedidas={producto.medidas}
                                        defaultCantidad={producto.cantidad_stock}
                                        defaultProveedor={producto.id_proveedor}
                                        defaultTipo={producto.id_tipo}
                                        proveedores={proveedores}
                                        tiposProductos={tiposProductos}
                                  />
                              </ButtonModal>

                              <ButtonModal
                                titulo={`Eliminar los datos de ${producto.numero_serie}`}
                                handleSubmit={eliminar}
                                colored
                                icono={<TrashCanOutlineIcon />}
                                color="danger"
                                isDelete
                              >
                                <FormDeleteProducto idProducto={producto.id} />
                              </ButtonModal>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    );
};

TablaDatos.propTypes = {
    dir: PropTypes.string.isRequired,
    productos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    proveedores:PropTypes.arrayOf(PropTypes.shape()).isRequired,
    tiposProductos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
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
