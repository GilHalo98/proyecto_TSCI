import React from 'react';
// import { useTranslation } from 'react-i18next';

// Parametros del componente.
import PropTypes from 'prop-types';

//  Componentes
import { Card, CardBody, Col } from 'reactstrap';
import { Polar } from 'react-chartjs-2';

const data = {
  datasets: [{
    data: [11, 16, 7, 3, 14],
    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
    label: 'My dataset',
    borderColor: 'rgba(255,255,255,0.54)',
  }],
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
};

const options = {
  legend: {
    position: 'bottom',
  },
  scale: {
    gridLines: {
      color: 'rgb(204, 204, 204)',
      borderDash: [3, 3],
    },
    ticks: {
      fontColor: 'rgb(204, 204, 204)',
    },
  },
};

const GraficoPolarArea = ({
  title,
  md, lg, xl,
}) => (
  <Col md={md} lg={lg} xl={xl}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{title}</h5>
        </div>
        <Polar data={data} options={options} />
      </CardBody>
    </Card>
  </Col>
);

GraficoPolarArea.propTypes = {
  title: PropTypes.string,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

GraficoPolarArea.defaultProps = {
  title: '',
  md: 12,
  lg: 12,
  xl: 6,
};

export default GraficoPolarArea;
