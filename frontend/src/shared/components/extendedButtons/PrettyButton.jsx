// API de react.
import React from 'react';

// Propiedades del componentes.
import PropTypes from 'prop-types';

// Componentes de Bootstrap.
import {
  Col,
  Button, UncontrolledTooltip,
} from 'reactstrap';

const PrettyButton = ({
  children, className,
  idButton, color, outline,
  dir, tooltip, tooltipLabel, tooltipPlacement,
  funcion,
  xs, sm, md, lg, xl,
}) => {
  let Tooltip;

  if (tooltip) {
    Tooltip = (
      <UncontrolledTooltip
        dir={dir}
        placement={tooltipPlacement}
        target={idButton}
      >
        {tooltipLabel}
      </UncontrolledTooltip>
    );
  } else {
    Tooltip = '';
  }

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <Button
        style={{
            'background': 'transparent',
            'border': 'none',
            'padding': 0,
        }}
        id={idButton}
        size="sm"
        color={color}
        className={className}
        outline={outline}
        onClick={() => { funcion(); }}
      >
        {children}
      </Button>

      {Tooltip}
    </Col>
  );
};

export default PrettyButton;

PrettyButton.propTypes = {
  children: PropTypes.element.isRequired,
  dir: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  idButton: PropTypes.string,
  tooltip: PropTypes.bool,
  tooltipLabel: PropTypes.string,
  outline: PropTypes.bool,
  tooltipPlacement: PropTypes.string,
  funcion: PropTypes.func,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

PrettyButton.defaultProps = {
  dir: '',
  color: '',
  className: '',
  idButton: 'prettyButton',
  tooltip: false,
  tooltipLabel: 'prettyButton',
  outline: false,
  tooltipPlacement: 'right',
  funcion: () => {},
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
};
