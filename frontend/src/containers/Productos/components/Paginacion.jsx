// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Logica del componente.
import {
  siguientePagina,
  paginaAnterior,
  primeraPagina,
  ultimaPagina,
} from '../logic/FuncionesPaginacion';

// Componentes de reactstrap.
import {
    Row, Col,
    Pagination, PaginationItem, PaginationLink,
} from 'reactstrap';

const Paginacion = ({
    paginaActual, setPaginaActual, totalPaginas,
}) => (
    <Row>
        <Col>
            <Pagination>
                <PaginationItem>
                    <PaginationLink
                        onClick={() => {
                            primeraPagina(setPaginaActual);
                        }}
                        first
                    />
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink
                        onClick={() => {
                            paginaAnterior(paginaActual, setPaginaActual);
                        }}
                        previous
                    />
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink>
                        {paginaActual} / {totalPaginas}
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink
                        onClick={() => {
                            siguientePagina(paginaActual, totalPaginas, setPaginaActual);
                        }}
                        next
                    />
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink
                        onClick={() => {
                            ultimaPagina(totalPaginas, setPaginaActual);
                        }}
                        last
                    />
                </PaginationItem>
            </Pagination>
        </Col>
    </Row>
);

Paginacion.propTypes = {
  paginaActual: PropTypes.number.isRequired,
  setPaginaActual: PropTypes.func.isRequired,
  totalPaginas: PropTypes.number.isRequired,
};

export default Paginacion;
