// Api de react.
import React from 'react';

// Rutas y switch de rutas.
import { Route, Switch } from 'react-router-dom';

// Wrapper de rutas.
import MainWrapper from './MainWrapper';

// Layout del Wrapper.
import Layout from '../Layout/index';

// Vistas.
import LogIn from '../LogIn/index';
import Productos from '../Productos';
import Proveedores from '../Proveedores';
import TiposProductos from '../TiposProductos';
import Reportes from '../Reportes';

import Historicos from '../Dashboard/Historicos/index';
import Informes from '../Dashboard/Informes/index';

const Menu = () => (
  <Switch>
    <Route path="/menu/productos" component={Productos} />
    <Route path="/menu/proveedores" component={Proveedores} />
    <Route path="/menu/tiposProductos" component={TiposProductos} />
    <Route path="/menu/Reportes" component={Reportes} />
  </Switch>
);

const Dashboard = () => (
    <Switch>
        <Route path="/dashboard/historicos" component={Historicos} />
        <Route path="/dashboard/informes" component={Informes} />
    </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/menu" component={Menu} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/log_in" component={LogIn} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
