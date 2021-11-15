// Para realizar llamadas a la API
import axios from "axios";

// Para generar alertas.
import Swal from "sweetalert2";

const apiRequest = axios.create({
  baseURL: 'http://localhost:3001/api',
});

const registrar = (event) => {
    const data = {
      numero_serie: event.target[1].value,
      costo: event.target[2].value,
      medidas: event.target[3].value,
      cantidad_stock: event.target[4].value,
      id_proveedor: event.target[5].value,
      id_tipo: event.target[6].value,
    };

    event.preventDefault();

    apiRequest.post(
      `/producto/add/`,
      data
    ).then((respuesta) => {
      Swal.fire({
        title: "Producto Agregado!",
        text: respuesta.data.message,
        icon: "success",
        confirmButtonText: "Ok!",
      }).then(function() {
        window.location.reload();
      });

    }).catch((error) => {
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "Intenta Nuevamente",
      });
    });
};

const actualizar = (event) => {
    const data = {
      numero_serie: event.target[1].value,
      costo: event.target[2].value,
      medidas: event.target[3].value,
      cantidad_stock: event.target[4].value,
      id_proveedor: event.target[5].value,
      id_tipo: event.target[6].value,
    };

    event.preventDefault();

    apiRequest.put(
      `/producto/update/${event.target[0].value}`,
      data
    ).then((respuesta) => {
      Swal.fire({
        title: "Producto Actualizado!",
        text: respuesta.data.message,
        icon: "success",
        confirmButtonText: "Ok!",
      }).then(function() {
        window.location.reload();
      });

    }).catch((error) => {
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "Intenta Nuevamente",
      });
    });
};

const eliminar = (event) => {
    event.preventDefault();

    console.log(event.target[0].value);
    apiRequest.delete(
      `/producto/del/${event.target[0].value}`,
    ).then((respuesta) => {
      Swal.fire({
        title: "Producto Eliminado!",
        text: respuesta.data.message,
        icon: "success",
        confirmButtonText: "Ok!",
      }).then(function() {
        window.location.reload();
      });

    }).catch((error) => {
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "Intenta Nuevamente",
      });
    });
};

export {
  registrar,
  actualizar,
  eliminar
};
