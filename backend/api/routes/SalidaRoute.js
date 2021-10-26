module.exports = (app) => {
  // Funcionalidad de controladores.
  const reporte = require("../controladores/ControladorSalidas.js");

  // Importando variables de ambiente.
  require("dotenv").config();

  // Enrutador de funciones.
  var router = require("express").Router();

  // Retorna todos los tipos de productos registrados
  router.get("/", reporte.getSalidas);

  // Agrega un tipo de producto al registro
  router.post("/add/", reporte.addSalida);

  // Elimina un tipo de producto productodado un id del registro
  router.delete("/del/:id", reporte.deleteSalida);

  // Elimina un tipo de producto dado un id del registro
  router.put("/update/:id", reporte.updateSalida);

  // Ruta general de clientes.
  app.use(process.env.API_URL + "reporteSalida", router);
};
