import React from 'react';

// Usado para las traducciones.
// import { useTranslation } from 'react-i18next';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes.
import { Card, CardBody, Col } from 'reactstrap';
import { Bar } from 'react-chartjs-2';

const GraficoBarra = ({
  title,
  data,
  xs, sm, md, lg, xl,
}) => {
  const options = {
      legend: {
        position: 'bottom',
      },
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

          <Bar data={data} options={options} />
        </CardBody>
      </Card>
    </Col>
  );
};

GraficoBarra.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

GraficoBarra.defaultProps = {
  title: '',
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
};

export default GraficoBarra;
