// API de react.
import React from 'react';

// Propiedades del componentes.
import PropTypes from 'prop-types';

// Componentes de Bootstrap.
import {
  Col,
} from 'reactstrap';

// Enrutador de React.
import { Link } from 'react-router-dom';

const PrettyLink = ({
  link, children,
  xs, sm, md, lg, xl,
}) => (
  <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
    <Link
      to={link}
    >
      {children}
    </Link>
  </Col>
);

export default PrettyLink;

PrettyLink.propTypes = {
  children: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

PrettyLink.defaultProps = {
  xs: 'auto',
  sm: 'auto',
  md: 'auto',
  lg: 'auto',
  xl: 'auto',
};
