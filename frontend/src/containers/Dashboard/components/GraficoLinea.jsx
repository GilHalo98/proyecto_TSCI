import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes.
import { Card, CardBody, Col } from 'reactstrap';
import { Line } from 'react-chartjs-2';

const GraficoLinea = ({
  title, data,
  xs, sm, md, lg, xl,
}) => {
  const options = {
      scales: {
        xAxes: [
          {
            gridLines: {
              color: 'rgb(204, 204, 204)',
              borderDash: [3, 3],
            },
            ticks: {
              fontColor: 'rgb(204, 204, 204)',
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              color: 'rgb(204, 204, 204)',
              borderDash: [3, 3],
            },
            ticks: {
              fontColor: 'rgb(204, 204, 204)',
            },
          },
        ],
      },
  };

  return (
    <Col md={md} lg={lg} xl={xl} sm={sm} xs={xs}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{title}</h5>
          </div>
          <Line data={data} options={options} />
        </CardBody>
      </Card>
    </Col>
  );
};

GraficoLinea.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

GraficoLinea.defaultProps = {
    title: '',
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
};

export default GraficoLinea;
