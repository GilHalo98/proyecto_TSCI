// Para realizar llamadas a la API
import axios from "axios";

const querryImagen = async (
    id_imagen,
    setImagen,
) => {
    const imagen = await axios({
        method: 'get',
        url: `http://localhost:3001/api/imagen/${id_imagen}`,
    });
    setImagen({
        tipo: imagen.data.tipo,
        imagenB64: window.btoa(imagen.data.binData),
    });
};

export {
  querryImagen,
};
