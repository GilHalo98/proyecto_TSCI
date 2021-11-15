import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes.
import {
  Col,
  Card, CardBody,
} from 'reactstrap';

// Iconos.
// import TrendingDownIcon from 'mdi-react/TrendingDownIcon';

const InforCard = ({
  title, value,
  xs, sm, md, lg, xl,
}) => (
  <Col md={md} lg={lg} xl={xl} sm={sm} xs={xs}>
    <Card>
      <CardBody className="dashboard__card-widget">
        <div className="mobile-app-widget">
          <div className="mobile-app-widget__title">
            <h4>{title}</h4>
          </div>

          <div className="mobile-app-widget__top-line mobile-app-widget__top-line--pink">
            <p className="mobile-app-widget__total-stat">{value}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
);

InforCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

InforCard.defaultProps = {
  title: '',
  value: '',
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
};

export default InforCard;
