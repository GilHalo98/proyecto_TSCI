import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const SidebarLink = ({
  title, icon, alerts, route, onClick,
}) => (
  <NavLink
    to={route}
    onClick={onClick}
    activeClassName="sidebar__link-active"
  >
    <li className="sidebar__link">
      {icon ? <span className={`sidebar__link-icon lnr lnr-${icon}`} /> : ''}
      <p className="sidebar__link-title">
        {title}
        {alerts > 0
          ? <Badge className="sidebar__link-badge" style={{ fontSize: '10px' }}>{alerts}</Badge>
          : ''}
      </p>
    </li>
  </NavLink>
);

SidebarLink.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  alerts: PropTypes.number,
  route: PropTypes.string,
  onClick: PropTypes.func,
};

SidebarLink.defaultProps = {
  icon: '',
  alerts: 0,
  route: '/',
  onClick: () => {},
};

export default SidebarLink;
