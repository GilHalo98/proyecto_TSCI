// Para realizar llamadas a la API
import axios from "axios";

const querry = async (
    limiteReportes, paginaReportes,
    opcionMerma, opcionSalida, opcionEntrada,
    setListaReportes, setTotalPaginas, setListaProductos,
) => {
  var opciones = [];
  if (opcionMerma) { opciones.push('merma'); }
  if (opcionSalida) { opciones.push('salida'); }
  if (opcionEntrada) { opciones.push('entrada'); }

  if (!(opcionMerma || opcionSalida || opcionEntrada)) {
      opciones = ['merma', 'salida', 'entrada'];
  }

  const reportesResult = await axios({
      method: 'get',
      url: 'http://localhost:3001/api/reportes/',
      params: {
          limit: limiteReportes,
          orden: [['fecha', 'DESC']],
          pagina: paginaReportes,
          busqueda: {
              tipo: opciones,
          }
      },
  });
  setListaReportes(reportesResult.data.datos);
  setTotalPaginas(reportesResult.data.paginas_totales);

  const productosResult = await axios({
      method: 'get',
      url: 'http://localhost:3001/api/producto/'
  });
  setListaProductos(productosResult.data.datos);
};

export {
  querry,
};
