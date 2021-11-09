// API de react.
import React, { useState } from 'react';

// Tipo de datos.
import PropTypes from 'prop-types';

// Para llamadas a la API
import axios from "axios";
import Swal from "sweetalert2";

// Componentes de bootstrap.
import {
  Badge, Card, CardBody, Col, Collapse,
} from 'reactstrap';

// Iconos.
import TrashCanOutlineIcon from 'mdi-react/TrashCanOutlineIcon';
import PencilOutlineIcon from 'mdi-react/PencilOutlineIcon';
import MinusIcon from 'mdi-react/MinusIcon';

import ButtonModal from './ButtonModal';
import FormReporte from './FormReporte';

const Panel = ({
    datosReporte, productos,
    color, divider, icon, title, label, subhead, before,
    panelClass, children,
    md, lg, xl, sm, xs,
}) => {
  // const [visible, setVisible] = useState(true);
  const [collapse, setCollapse] = useState(true);

  // Actualiza el reporte.
  const handleUpdate = (event) => {
      const data = {
        descripcion: event.target[0].value,
        id_producto: event.target[2].value,
        tipo: event.target[3].value,
      };

      const apiRequest = axios.create({
        baseURL: 'http://localhost:3001/api',
      });

      event.preventDefault();

      apiRequest.put(
        `/reportes/update/${datosReporte.id}`,
        data
      ).then((respuesta) => {
        Swal.fire({
          title: "Reporte Actualizado!",
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
  }

  // Elimina el registro del reporte junto con su tipo asignado.
  const handleRemove = (event) => {
    const apiRequest = axios.create({
      baseURL: 'http://localhost:3001/api',
    });

    event.preventDefault();

    apiRequest.delete(
      `/reportes/del/${datosReporte.id}`,
    ).then((respuesta) => {
      Swal.fire({
        title: "Reporte Eliminado!",
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

  const toggleCollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  if (true) {
    return (
      <Col md={md} lg={lg} xl={xl} sm={sm} xs={xs}>
        <Card
          className={`panel${color ? ` panel--${color}` : ''}
          ${divider ? ' panel--divider' : ''}${collapse ? '' : ' panel--collapse'} ${panelClass}`}
        >
          <CardBody className="panel__body">
            <div className="panel__btns">
              <button
                className="panel__btn"
                aria-label="panel__btn"
                type="button"
                onClick={toggleCollapse}
              >
                <MinusIcon />
              </button>

              <ButtonModal
                titulo="Modificar Reporte"
                handleSubmit={handleUpdate}
                icono={<PencilOutlineIcon />}
                color="warning"
              >
                <FormReporte
                    productos={productos}
                    defaultDescripcion={datosReporte.descripcion}
                    defaultTipo={datosReporte.tipo}
                    defaultProducto={datosReporte.id_producto}
                />
              </ButtonModal>

              <ButtonModal
                titulo="¿Deseas eliminar el reporte?"
                handleSubmit={handleRemove}
                colored
                icono={<TrashCanOutlineIcon />}
                color="danger"
              >
                <p style={{ 'textAlign':'center' }}>
                    Al eliminar este elemento no habra manera de recuperarlo
                </p>
              </ButtonModal>
            </div>

            <div className="panel__title">
              <h5 className="bold-text">
                {icon ? <span className={`panel__icon lnr lnr-${icon}`} /> : ''}
                {title}
                <Badge className="panel__label">{label}</Badge>
              </h5>
              <h5 className="subhead">{subhead}</h5>
            </div>

            <Collapse isOpen={collapse}>
              <div className="panel__content">
                {children}
              </div>
            </Collapse>
          </CardBody>
        </Card>
        {before}
      </Col>
    );
  }

  return '';
};

Panel.propTypes = {
    productos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    datosReporte: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    divider: PropTypes.bool,
    color: PropTypes.string,
    title: PropTypes.string,
    subhead: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    sm: PropTypes.number,
    xs: PropTypes.number,
    before: PropTypes.element,
    panelClass: PropTypes.string,
};

Panel.defaultProps = {
    divider: false,
    color: '',
    title: '',
    subhead: '',
    label: '',
    icon: '',
    md: 0,
    lg: 0,
    xl: 0,
    sm: 0,
    xs: 0,
    before: null,
    panelClass: '',
};

export default Panel;

export const PanelTitle = ({ title }) => (
  <div className="panel__title">
    <h5 className="bold-text">
      {title}
    </h5>
  </div>
);

PanelTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
