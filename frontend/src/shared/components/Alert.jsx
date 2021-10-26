import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, Button } from 'reactstrap';
import InformationOutlineIcon from 'mdi-react/InformationOutlineIcon';
import ThumbUpOutlineIcon from 'mdi-react/ThumbUpOutlineIcon';
import CommentAlertOutlineIcon from 'mdi-react/CommentAlertOutlineIcon';
import CloseCircleOutlineIcon from 'mdi-react/CloseCircleOutlineIcon';

const AlertComponent = ({
  color, className, icon, children, buttonLabel, customIcon, noCloseButton,
}) => {
  const [visible, setVisible] = useState(true);

  const onShow = () => {
    setVisible(true);
  };

  const onDismiss = () => {
    setVisible(false);
  };

  let Icon;

  if (customIcon) {
    Icon = customIcon;
  } else {
    switch (color) {
      case 'info':
        Icon = <InformationOutlineIcon />;
        break;
      case 'success':
        Icon = <ThumbUpOutlineIcon />;
        break;
      case 'warning':
        Icon = <CommentAlertOutlineIcon />;
        break;
      case 'danger':
        Icon = <CloseCircleOutlineIcon />;
        break;
      default:
        break;
    }
  }

  if (visible) {
    let closeButton = '';

    if (!noCloseButton) {
      closeButton = (
        <button className="close" type="button" onClick={onDismiss}>
          <span className="lnr lnr-cross" />
        </button>
      );
    }

    return (
      <Alert color={color} className={className} isOpen={visible}>
        {icon && <div className="alert__icon">{Icon}</div>}
        {closeButton}
        <div className="alert__content">{children}</div>
      </Alert>
    );
  }

  return <Button color={color} className={className} onClick={onShow}>{buttonLabel}</Button>;
};

export default AlertComponent;

AlertComponent.propTypes = {
  customIcon: PropTypes.element,
  buttonLabel: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.bool,
  noCloseButton: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

AlertComponent.defaultProps = {
  color: '',
  icon: false,
  noCloseButton: false,
  className: '',
  buttonLabel: 'Show Alert!',
  customIcon: '',
};
