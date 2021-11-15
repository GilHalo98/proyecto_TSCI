const siguientePagina = (paginaActual, totalPaginas, setPaginaActual) => {
    if (paginaActual < totalPaginas) {
        setPaginaActual(paginaActual + 1);
    }
};

const paginaAnterior = (paginaActual, setPaginaActual) => {
    if (paginaActual > 1) {
        setPaginaActual(paginaActual - 1);
    } else {
        setPaginaActual(1);
    }
};

const primeraPagina = (setPaginaActual) => {
    setPaginaActual(1);
};

const ultimaPagina = (totalPaginas, setPaginaActual) => {
    setPaginaActual(totalPaginas);
};

export {
  siguientePagina,
  paginaAnterior,
  primeraPagina,
  ultimaPagina,
};
