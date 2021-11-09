import React, { useEffect, useState } from 'react';

// Usado para las traducciones.
// import { useTranslation } from 'react-i18next';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes.
import { Card, CardBody, Col } from 'reactstrap';
import { Bar } from 'react-chartjs-2';

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
      label: 'My First dataset',
      backgroundColor: '#FF6384',
      borderColor: '#FF6384',
      borderWidth: 1,
      hoverBackgroundColor: '#FF6384',
      hoverBorderColor: '#FF6384',
      data: getRandomData(),
    },
  ],
});

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

const GraficoBarra = ({
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
          <Bar data={data} options={options} />
        </CardBody>
      </Card>
    </Col>
  );
};

GraficoBarra.propTypes = {
  title: PropTypes.string,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

GraficoBarra.defaultProps = {
  title: '',
  md: 12,
  lg: 12,
  xl: 6,
};

export default GraficoBarra;
