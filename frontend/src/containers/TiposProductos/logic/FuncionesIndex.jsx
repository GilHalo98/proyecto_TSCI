// Para realizar llamadas a la API
import axios from "axios";
import Swal from "sweetalert2";

const querry = async (
    limiteTipos, paginaTipos,
    setListaTipos, setTotalPaginas,
) => {
    const tiposProductosResult = await axios({
        method: 'get',
        url: 'http://localhost:3001/api/tiposProductos/',
        params: {
            limit: limiteTipos,
            pagina: paginaTipos,
        },
    });
    setListaTipos(tiposProductosResult.data.datos);
    setTotalPaginas(tiposProductosResult.data.paginas_totales);
};

export {
  querry,
};
