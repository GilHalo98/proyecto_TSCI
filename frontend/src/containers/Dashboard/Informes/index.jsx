// Modulos de React.
import React from 'react';

// Parametros del componente.
// import PropTypes from 'prop-types';

// Componentes de reactstrap.
import {
  Col, Container, Row,
} from 'reactstrap';

// Conexion con react-redux
import { connect } from 'react-redux';

// Propiedades RtL
import { RTLProps } from '../../../shared/prop-types/ReducerProps';

// Componentes de la vista.
import GraficoBarraLadeado from '../components/GraficoBarraLadeado';
import GraficoPie from '../components/GraficoPie';
import SeccionReportes from './components/SeccionReportes';

// Logica de la vista.
import {
    querryConteoReportes, querryProductosCantidad, querryProductosProveedor
 } from './logic/FuncionesIndex';

const Informes = ({ rtl }) => {
  const [totalMerma, setTotalMerma] = React.useState(0);
  const [totalEntrada, setTotalEntrada] = React.useState(0);
  const [totalSalida, setTotalSalida] = React.useState(0);

  const [listaProductos, setListaProductos] = React.useState([]);
  const [dataPai, setDataPai] = React.useState();

  React.useEffect(() => {
      querryConteoReportes(setTotalMerma, setTotalEntrada, setTotalSalida);
      querryProductosCantidad(setListaProductos);
      querryProductosProveedor(setDataPai);
  }, []);

  return (
    <Container className="dashboard">
        <Row>
          <Col md={12}>
            <h3 className="page-title">Informes.</h3>
          </Col>
        </Row>

        <Row>
          <Container>
            <SeccionReportes
                totalMerma={totalMerma}
                totalEntrada={totalEntrada}
                totalSalida={totalSalida}
            />

            <Row>
              <Col md={2} lg={2} xl={2} />
              <GraficoBarraLadeado
                title="Productos en almacén"
                data={listaProductos}
                keyDataYAxis={'numero_serie'}
                keyDataBar={'cantidad_stock'}
                md={8}
                lg={8}
                xl={8}
              />
              <Col md={2} lg={2} xl={2} />
            </Row>

            <Row>
              <Col md={2} lg={2} xl={2} />
              <GraficoPie
                title="Cantidad de productos por proveedor"
                data={dataPai}
                md={8}
                lg={8}
                xl={8}
              />
              <Col md={2} lg={2} xl={2} />
            </Row>
          </Container>
        </Row>
    </Container>
  );
};

Informes.propTypes = {
  rtl: RTLProps.isRequired,
};

export default connect((state) => ({
  rtl: state.rtl,
}))(Informes);
