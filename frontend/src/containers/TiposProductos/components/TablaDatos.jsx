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

// Para realizar llamadas a la API
import axios from "axios";
import Swal from "sweetalert2";

// Componentes.
import HeaderCard from './HeaderCard';

// Componentes.
import ButtonModal from './ButtonModal';
import FormTipo from './FormTipo';
import FormDeleteTipo from './FormDeleteTipo';

const TablaDatos = ({
  dir,
  tiposProductos,
  xs, sm, md, lg, xl,
}) => {
    const handleUpdate = (event) => {
      const data = {
        tipo: event.target[1].value,
        descripcion: event.target[2].value,
      };

      const apiRequest = axios.create({
        baseURL: 'http://localhost:3001/api',
      });

      event.preventDefault();

      apiRequest.put(
        `/tiposProductos/update/${event.target[0].value}`,
        data
      ).then((respuesta) => {
        Swal.fire({
          title: "Tipo de producto Actualizado!",
          text: respuesta.data.message,
          icon: "success",
          confirmButtonText: "Ok!",
        }).then(function() {
          window.location.reload();
        });

      }).catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.response.data.message,
          icon: "error",
          confirmButtonText: "Intenta Nuevamente",
        });
      });
    };

    const handleRemove = (event) => {
      const apiRequest = axios.create({
        baseURL: 'http://localhost:3001/api',
      });

      event.preventDefault();

      apiRequest.delete(
        `/tiposProductos/del/${event.target[0].value}`
      ).then((respuesta) => {
        Swal.fire({
          title: "Tipo de producto Eliminado!",
          text: respuesta.data.message,
          icon: "success",
          confirmButtonText: "Ok!",
        }).then(function() {
          window.location.reload();
        });

      }).catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.response.data.message,
          icon: "error",
          confirmButtonText: "Intenta Nuevamente",
        });
      });
    };

    return (
      <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
        <Card>
          <CardBody>
            <HeaderCard
              title="Tipos de Productos"
              description="Tipos de productos en inventario."
            />

            <Table responsive hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>tipo de producto</th>
                  <th>descripcion</th>
                  <th>opciones</th>
                </tr>
              </thead>

              <tbody>
                {tiposProductos.map((tipo) => (
                  <tr key={tipo.id}>
                    <td>{tipo.id}</td>
                    <td>{tipo.tipo}</td>
                    <td>{tipo.descripcion}</td>
                    <td>
                        <ButtonToolbar>
                          <ButtonGroup className="btn-group--icons" style={{ 'padding': 0 }}>
                              <ButtonModal
                                titulo={`modifica los datos de ${tipo.tipo}`}
                                handleSubmit={handleUpdate}
                                icono={<PencilOutlineIcon />}
                                color="warning"
                              >
                                  <FormTipo
                                      idTipo={tipo.id}
                                      defaultTipo={tipo.tipo}
                                      defaultDescripcion={tipo.descripcion}
                                  />
                              </ButtonModal>

                              <ButtonModal
                                titulo={`Eliminar los datos de ${tipo.tipo}`}
                                handleSubmit={handleRemove}
                                colored
                                icono={<TrashCanOutlineIcon />}
                                color="danger"
                                isDelete
                              >
                                <FormDeleteTipo idTipo={tipo.id} />
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
