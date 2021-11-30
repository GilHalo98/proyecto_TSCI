module.exports = (app) => {
  // Funcionalidad de controladores.
  const imagen = require("../controladores/ControladorImagen.js");
  const upload = require("../middleware/Middleware");

  // Importando variables de ambiente.
  require("dotenv").config();

  // Enrutador de funciones.
  var router = require("express").Router();

  // Retorna los datos de una imagen dado un id.
  router.get("/:id", imagen.getImagenByID);

  // Agrega un tipo de producto al registro
  router.post("/add/", upload.single("file"), imagen.addImagen);

  // Ruta general de clientes.
  app.use(process.env.API_URL + "imagen", router);
};
