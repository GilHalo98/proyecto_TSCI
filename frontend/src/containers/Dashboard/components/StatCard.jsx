import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes.
import {
  Col,
  Progress,
  Card, CardBody,
} from 'reactstrap';

// Iconos.
import TrendingDownIcon from 'mdi-react/TrendingDownIcon';

const StatCard = ({
  title,
  value, max,
  md, lg, xl,
}) => (
  <Col md={md} lg={lg} xl={xl}>
    <Card>
      <CardBody className="dashboard__card-widget">
        <div className="mobile-app-widget">
          <div className="mobile-app-widget__top-line mobile-app-widget__top-line--pink">
            <p className="mobile-app-widget__total-stat">{value} de {max}</p>
            <TrendingDownIcon className="dashboard__trend-icon" />
          </div>
          <div className="mobile-app-widget__title">
            <h5>{title}</h5>
          </div>
          <div className="progress-wrap progress-wrap--small progress-wrap--pink-gradient progress-wrap--label-top">
            <Progress value={parseInt(((value / max) * 100), 10)}>
              <p className="progress__label">{parseInt(((value / max) * 100), 10)}%</p>
            </Progress>
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
);

StatCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  max: PropTypes.number.isRequired,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

StatCard.defaultProps = {
  title: '',
  value: 0,
  md: 12,
  lg: 12,
  xl: 6,
};

export default StatCard;
