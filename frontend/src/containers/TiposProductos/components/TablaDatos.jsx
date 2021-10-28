import React from 'react';

// import { useTranslation } from 'react-i18next';

import {
  Table,
  Card, CardBody,
  Col, ButtonToolbar, ButtonGroup,
} from 'reactstrap';

// Iconos.
import ViewGridPlusOutlineIcon from 'mdi-react/ViewGridPlusOutlineIcon';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes.
import HeaderCard from './HeaderCard';

// Componente PrettyButton.
import PrettyModal from '../../../shared/components/extendedButtons/PrettyModal';
import FormTipos from './FormTipos';

const TablaDatos = ({
  dir,
  tiposProductos,
  xs, sm, md, lg, xl,
}) => (
  <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
    <Card>
      <CardBody>
        <HeaderCard
          title="Proveedores"
          description="Proveedores de productos"
        />

        <Table responsive hover>
          <thead>
            <tr>
              <th>id</th>
              <th>tipo de producto</th>
              <th>descripcion</th>
              <th>opciones</th>
            </tr>
          </thead>

          <tbody>
            {tiposProductos.map((tipo) => (
              <tr key={tipo.id}>
                <td>{tipo.id}</td>
                <td>{tipo.tipo}</td>
                <td>{tipo.descripcion}</td>
                <td>
                  <ButtonToolbar>
                    <ButtonGroup className="btn-group" dir="ltr">
                      <PrettyModal
                        btn={<p><ViewGridPlusOutlineIcon /> Modificar</p>}
                        className="icon"
                        dir={dir}
                        color="primary"
                        outline
                        idButton={`modificar_tipo_${tipo.id}`}
                        titulo={`modifica los datos de ${tipo.tipo}`}
                        botonesOk={false}
                      >
                        <FormTipos
                          defaultTipo={tipo.tipo}
                          defaultDescripción={tipo.descripcion}
                        />
                      </PrettyModal>

                      <PrettyModal
                        btn={<p><ViewGridPlusOutlineIcon /> Eliminar</p>}
                        className="icon"
                        dir={dir}
                        color="danger"
                        outline
                        idButton={`eliminar_tipo_${tipo.id}`}
                        titulo={`¿Estas seguro de eliminar ${tipo.tipo}?`}
                        botonesOk={false}
                      >
                        <FormTipos
                          defaultTipo={tipo.tipo}
                          defaultDescripción={tipo.descripcion}
                        />
                      </PrettyModal>
                    </ButtonGroup>
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </Col>
);

TablaDatos.propTypes = {
  dir: PropTypes.string.isRequired,
  tiposProductos: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

TablaDatos.defaultProps = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
};

export default TablaDatos;
