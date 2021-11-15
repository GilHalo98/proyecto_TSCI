// Para realizar llamadas a la API
import axios from "axios";
import Swal from "sweetalert2";

const querry = async (
    paginaProductos, limiteProductos,
    setListaProductos, setTotalPaginas, setListaProveedores, setListaTiposProductos
) => {
  const productosResult = await axios({
    method: 'get',
    url: 'http://localhost:3001/api/producto/',
    params: {
        limit: limiteProductos,
        pagina: paginaProductos,
    },
  });
  setListaProductos(productosResult.data.datos);
  setTotalPaginas(productosResult.data.paginas_totales);

  const proveedoresResult = await axios({
    method: 'get',
    url: 'http://localhost:3001/api/proveedores/',
    params: {
        atributos: ['id', 'nombre']
    },
  });
  setListaProveedores(proveedoresResult.data.datos);

  const tiposProductosResult = await axios({
      method: 'get',
      url: 'http://localhost:3001/api/tiposProductos/',
      params: {
          atributos: ['id', 'tipo']
      },
  });
  setListaTiposProductos(tiposProductosResult.data.datos);
};

export {
  querry,
};
