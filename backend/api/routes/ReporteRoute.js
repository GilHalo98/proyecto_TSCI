module.exports = (app) => {
  // Funcionalidad de controladores.
  const reporte = require("../controladores/ControladorReportes.js");

  // Importando variables de ambiente.
  require("dotenv").config();

  // Enrutador de funciones.
  var router = require("express").Router();

  // Retorna todos los Reportes registrados
  router.get("/", reporte.getReportes);

  // Cuenta todos los registros de cierto tipo y retorna la cantidad
  // contada.
  router.get("/contar/", reporte.onlyCount);

  // Retorna los reportes que se generaron en un año definido.
  router.get("/porFecha/", reporte.getReportesFecha);

  // Elimina un reporte y el tipo de este dado el id del reporte.
  router.delete("/del/:id", reporte.deleteReporte);

  // Agrega un reporte al registro
  router.post("/add/", reporte.addReporte);

  // Actualiza un reporte.
  router.put("/update/:id", reporte.updateReporte);

  // Ruta general de clientes.
  app.use(process.env.API_URL + "reportes", router);
};
