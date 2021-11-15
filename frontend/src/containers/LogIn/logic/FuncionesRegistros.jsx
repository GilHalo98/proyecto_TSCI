// Para realizar llamadas a la API
import axios from "axios";

// Para generar alertas.
import Swal from "sweetalert2";

const apiRequest = axios.create({
  baseURL: 'http://localhost:3001/api',
});

const registrar = (event, usr, pass) => {
    const data = {
      username: usr,
      password: pass,
    };

    event.preventDefault();

    apiRequest.post(
      `/user/signin/`,
      data
    ).then((respuesta) => {
      Swal.fire({
        title: "Usuario Registrado!",
        text: respuesta.data.message,
        icon: "success",
        confirmButtonText: "Ok!",
      }).then(function() {
        window.location.reload();
      });

    }).catch((error) => {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "Intenta Nuevamente",
      });
    });
};

const login = (event, usr, pass) => {
    const data = {
        username: usr,
        password: pass,
    };

    event.preventDefault();

    apiRequest.post(
      `/user/login/`,
      data
    ).then((respuesta) => {
      Swal.fire({
        title: "Incio de Seción Existoso!",
        text: respuesta.data.message,
        icon: "success",
        confirmButtonText: "Ok!",
      }).then(function() {
        window.location = '/menu/reportes';
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
  login,
};
