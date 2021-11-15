import React from 'react';

// import { useTranslation } from 'react-i18next';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes.
import { Card, CardBody, Col } from 'reactstrap';
import { Pie } from 'react-chartjs-2';

const GraficoPie = ({
  title,
  data,
  xs, sm, md, lg, xl,
}) => (
  <Col md={md} lg={lg} xl={xl} sm={sm} xs={xs}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{title}</h5>
        </div>

        <Pie data={data}/>
      </CardBody>
    </Card>
  </Col>
);

GraficoPie.propTypes = {
  title: PropTypes.string,
  data: PropTypes.shape().isRequired,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

GraficoPie.defaultProps = {
  title: '',
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
};

export default GraficoPie;
