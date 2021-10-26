import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SidebarCategory = ({
  title, icon, alert, children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const categoryClass = classNames({
    'sidebar__category-wrap': true,
    'sidebar__category-wrap--open': isCollapsed,
  });

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={categoryClass}>
      <button type="button" className="sidebar__link sidebar__category" onClick={handleToggleCollapse}>
        {icon ? <span className={`sidebar__link-icon lnr lnr-${icon}`} /> : ''}
        <p className="sidebar__link-title">{title}
          {alert && <span className="sidebar__category-new" />}
        </p>
        <span className="sidebar__category-icon lnr lnr-chevron-right" />
      </button>
      <Collapse isOpen={isCollapsed} className="sidebar__submenu-wrap">
        <ul className="sidebar__submenu">
          <div>
            {children}
          </div>
        </ul>
      </Collapse>
    </div>
  );
};

SidebarCategory.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  alert: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

SidebarCategory.defaultProps = {
  icon: '',
  alert: false,
};

export default SidebarCategory;
