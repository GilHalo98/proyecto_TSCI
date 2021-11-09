// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes de reactstrap.
import {
    Row, Col,
    Pagination, PaginationItem, PaginationLink,
} from 'reactstrap';

const Paginacion = ({
    paginaActual, totalPaginas,
    primeraPagina, anteriorPagina,
    ultimaPagina, siguientePagina,
}) => (
    <Row>
        <Col>
            <Pagination>
                <PaginationItem>
                    <PaginationLink onClick={primeraPagina} first />
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink onClick={anteriorPagina} previous />
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink>
                        {paginaActual} / {totalPaginas}
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink onClick={siguientePagina} next />
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink onClick={ultimaPagina} last />
                </PaginationItem>
            </Pagination>
        </Col>
    </Row>
);

Paginacion.propTypes = {
  paginaActual: PropTypes.number.isRequired,
  totalPaginas: PropTypes.number.isRequired,

  primeraPagina: PropTypes.func.isRequired,
  anteriorPagina: PropTypes.func.isRequired,
  siguientePagina: PropTypes.func.isRequired,
  ultimaPagina: PropTypes.func.isRequired,
};

export default Paginacion;
