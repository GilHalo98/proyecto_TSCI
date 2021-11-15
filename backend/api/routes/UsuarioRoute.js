module.exports = (app) => {
  // Funcionalidad de controladores.
  const usuario = require("../controladores/ControladorUsusario.js");

  // Importando variables de ambiente.
  require("dotenv").config();

  // Enrutador de funciones.
  var router = require("express").Router();

  // Registra un usuario a la db
  router.post("/signin/", usuario.signin);

  // Inicia secion de un usaurio dado.
  router.post("/login/", usuario.login);

  // Termina la secion de un usuario dado.
  router.get("/logout/", usuario.logout);

  // Ruta general de clientes.
  app.use(process.env.API_URL + "user", router);
};
