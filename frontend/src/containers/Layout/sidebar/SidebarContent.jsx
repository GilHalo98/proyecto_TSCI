import React from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

const SidebarContent = ({
  onClick, changeToDark, changeToLight,
}) => {
  const handleHideSidebar = () => {
    onClick();
  };

  return (
    <div className="sidebar__content">
      <ul className="sidebar__block">
        <SidebarLink title="Productos" route="/menu/productos" onClick={handleHideSidebar} />
        <SidebarLink title="Proveedores" route="/menu/proveedores" onClick={handleHideSidebar} />
        <SidebarLink title="Tipos de Productos" route="/menu/tiposProductos" onClick={handleHideSidebar} />
      </ul>

      <ul className="sidebar__block">
        <SidebarCategory title="Modo Light/Dark" icon="layers">
          <button type="button" className="sidebar__link" onClick={changeToLight}>
            <p className="sidebar__link-title">Light Theme</p>
          </button>

          <button type="button" className="sidebar__link" onClick={changeToDark}>
            <p className="sidebar__link-title">Dark Theme</p>
          </button>
        </SidebarCategory>
      </ul>

      <ul className="sidebar__block">
        <SidebarLink title="Log Out" icon="exit" route="/log_in" onClick={handleHideSidebar} />
      </ul>
    </div>
  );
};

SidebarContent.propTypes = {
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SidebarContent;
