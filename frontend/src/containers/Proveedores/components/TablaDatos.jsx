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
import FormProveedor from './FormProveedor';
import FormDeleteProveedor from './FormDeleteProveedor';

// Logica del componente.
import { actualizar, eliminar } from '../logic/FuncionesRegistros';

const TablaDatos = ({
  dir, proveedores,
  xs, sm, md, lg, xl,
}) => {
    return (
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
                  <th>opciones</th>
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
                    <td>
                      <ButtonToolbar>
                        <ButtonGroup className="btn-group--icons" style={{ 'padding': 0 }}>
                            <ButtonModal
                              titulo={`modifica los datos de ${proveedor.nombre}`}
                              handleSubmit={actualizar}
                              icono={<PencilOutlineIcon />}
                              color="warning"
                            >
                                <FormProveedor
                                    idProveedor={proveedor.id}
                                    defaultNombre={proveedor.nombre}
                                    defaultDireccion={proveedor.locacion}
                                    defaultPagina={proveedor.pagina_web}
                                    defaultNumero={proveedor.numero_telefonico}
                                    defaultCorreo={proveedor.correo_electronico}
                                />
                          </ButtonModal>

                          <ButtonModal
                            titulo={`Eliminar los datos de ${proveedor.nombre}`}
                            handleSubmit={eliminar}
                            colored
                            icono={<TrashCanOutlineIcon />}
                            color="danger"
                            isDelete
                          >
                            <FormDeleteProveedor
                                idProveedor={proveedor.id}
                            />
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
}

TablaDatos.propTypes = {
  dir: PropTypes.string.isRequired,
  productos: PropTypes.arrayOf(PropTypes.shape()),
  proveedores: PropTypes.arrayOf(PropTypes.shape()),
  tiposProductos: PropTypes.arrayOf(PropTypes.shape()),
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
