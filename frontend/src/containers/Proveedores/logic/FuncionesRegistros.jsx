// Para realizar llamadas a la API
import axios from "axios";

// Para generar alertas.
import Swal from "sweetalert2";

const apiRequest = axios.create({
  baseURL: 'http://localhost:3001/api',
});

const registrar = (event) => {
    const data = {
      nombre: event.target[1].value,
      locacion: event.target[2].value,
      pagina_web: event.target[3].value,
      numero_telefonico: event.target[4].value,
      correo_electronico: event.target[5].value,
    };

    event.preventDefault();

    apiRequest.post(
      '/proveedores/add/',
      data
    ).then((respuesta) => {
      Swal.fire({
        title: "Proveedor Registrado!",
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
      nombre: event.target[1].value,
      locacion: event.target[2].value,
      pagina_web: event.target[3].value,
      numero_telefonico: event.target[4].value,
      correo_electronico: event.target[5].value,
  };

  event.preventDefault();

  apiRequest.put(
    `/proveedores/update/${event.target[0].value}`,
    data
  ).then((respuesta) => {
    Swal.fire({
      title: "Proveedor Registrado!",
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
    `/proveedores/del/${event.target[0].value}`,
  ).then((respuesta) => {
    Swal.fire({
      title: "Proveedor Eliminado!",
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
