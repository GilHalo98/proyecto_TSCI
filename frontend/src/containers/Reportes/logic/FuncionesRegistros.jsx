// Para realizar llamadas a la API
import axios from "axios";

// Para generar alertas.
import Swal from "sweetalert2";

const apiRequest = axios.create({
  baseURL: 'http://localhost:3001/api',
});

const registrar = (event) => {
  const data = {
    descripcion: event.target[1].value,
    tipo: event.target[4].value,
    id_producto: event.target[3].value,
  };

  event.preventDefault();

  apiRequest.post(
    '/reportes/add/',
    data
  ).then((respuesta) => {
    Swal.fire({
      title: "Reporte Registrado!",
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
        descripcion: event.target[1].value,
        tipo: event.target[4].value,
        id_producto: event.target[3].value,
    };

    event.preventDefault();

    apiRequest.put(
      `/reportes/update/${event.target[0].value}`,
      data
    ).then((respuesta) => {
      Swal.fire({
        title: "Reporte Actualizado!",
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

  apiRequest.delete(
    `/reportes/del/${event.target[0].value}`,
  ).then((respuesta) => {
    Swal.fire({
      title: "Reporte Eliminado!",
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
