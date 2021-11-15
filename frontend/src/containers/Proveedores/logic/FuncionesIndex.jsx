// Para realizar llamadas a la API
import axios from "axios";
import Swal from "sweetalert2";

const querry = async (
    limiteProveedores, paginaProveedores,
    setListaProveedores, setTotalPaginas,
) => {
    const proveedoresResult = await axios({
        method: 'get',
        url: 'http://localhost:3001/api/proveedores/',
        params: {
            limit: limiteProveedores,
            pagina: paginaProveedores,
        },
    });
    setListaProveedores(proveedoresResult.data.datos);
    setTotalPaginas(proveedoresResult.data.paginas_totales);
};

export {
  querry,
};
