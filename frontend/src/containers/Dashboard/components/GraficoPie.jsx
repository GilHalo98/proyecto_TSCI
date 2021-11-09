import React from 'react';

// import { useTranslation } from 'react-i18next';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes.
import { Card, CardBody, Col } from 'reactstrap';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow',
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ],
    borderColor: 'rgba(255,255,255,0.54)',
  }],
};

const legendOpts = {
  onClick: (e, item) => alert(`Item with text ${item.text} and index ${item.index} clicked`),
};

const GraficoPie = ({
  title,
  md, lg, xl,
}) => (
  <Col md={md} lg={lg} xl={xl}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{title}</h5>
        </div>

        <Pie data={data} legend={legendOpts} />
      </CardBody>
    </Card>
  </Col>
);

GraficoPie.propTypes = {
  title: PropTypes.string,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

GraficoPie.defaultProps = {
  title: '',
  md: 12,
  lg: 12,
  xl: 6,
};

export default GraficoPie;
