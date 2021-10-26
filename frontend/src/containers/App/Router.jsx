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

const Pages = () => (
  <Switch>
    <Route path="/menu/productos" component={Productos} />
    <Route path="/menu/proveedores" component={Proveedores} />
    <Route path="/menu/tiposProductos" component={TiposProductos} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/menu" component={Pages} />
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
