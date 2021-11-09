import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes.
import { Card, CardBody, Col } from 'reactstrap';
import { Line } from 'react-chartjs-2';

const getRandomData = () => new Array(12).fill(0).map(() => Math.floor(Math.random() * 100));

const getState = () => ({
  labels: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  datasets: [
    {
      label: 'My First Dataset',
      fill: false,
      lineTension: 0.3,
      backgroundColor: '#36A2EB',
      borderColor: '#36A2EB',
      borderWidth: 2,
      pointBackgroundColor: '#36A2EB',
      pointHoverRadius: 3,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: getRandomData(),
    },
    {
      label: 'My Second Dataset',
      fill: false,
      lineTension: 0.3,
      backgroundColor: '#FF6384',
      borderColor: '#FF6384',
      borderWidth: 2,
      pointBackgroundColor: '#FF6384',
      pointHoverRadius: 3,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: getRandomData(),
    },
  ],
});

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

const GraficoLinea = ({
  title,
  md, lg, xl,
}) => {
  const [data, setData] = useState(getState());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(getState());
    }, 4000);
    return (() => {
      clearInterval(intervalId);
    });
  }, []);

  return (
    <Col md={md} lg={lg} xl={xl}>
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
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

GraficoLinea.defaultProps = {
  title: '',
  md: 12,
  lg: 12,
  xl: 6,
};

export default GraficoLinea;
