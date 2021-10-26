// API de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

const HeaderCard = ({
  title, description, markdown,
}) => (
  <div className="card__title">
    <h3 className="bold-text">{title}</h3>
    <h3 className="subhead">{description}
      <span className="blue-text">{markdown}</span>
    </h3>
  </div>
);

HeaderCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  markdown: PropTypes.string,
};

HeaderCard.defaultProps = {
  title: '',
  description: '',
  markdown: '',
};

export default HeaderCard;
