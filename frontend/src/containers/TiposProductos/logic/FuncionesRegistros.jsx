// Para realizar llamadas a la API
import axios from "axios";

// Para generar alertas.
import Swal from "sweetalert2";

const apiRequest = axios.create({
  baseURL: 'http://localhost:3001/api',
});

const registrar = (event) => {
  const data = {
    tipo: event.target[1].value,
    descripcion: event.target[2].value,
  };

  event.preventDefault();

  apiRequest.post(
    `/tiposProductos/add/`,
    data
  ).then((respuesta) => {
    Swal.fire({
      title: "Tipo de producto Agregado!",
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
    tipo: event.target[1].value,
    descripcion: event.target[2].value,
  };

  event.preventDefault();

  apiRequest.put(
    `/tiposProductos/update/${event.target[0].value}`,
    data
  ).then((respuesta) => {
    Swal.fire({
      title: "Tipo de producto Actualizado!",
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
    `/tiposProductos/del/${event.target[0].value}`
  ).then((respuesta) => {
    Swal.fire({
      title: "Tipo de producto Eliminado!",
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
