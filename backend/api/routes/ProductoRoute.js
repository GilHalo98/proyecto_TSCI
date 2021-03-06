module.exports = (app) => {
  // Funcionalidad de controladores.
  const producto = require("../controladores/ControladorProducto.js");
  const upload = require("../middleware/Middleware");

  // Importando variables de ambiente.
  require("dotenv").config();

  // Enrutador de funciones.
  var router = require("express").Router();

  // Retorna todos los tipos de productos registrados
  router.get("/", producto.getProducto);

  // Cuenta todos los registros de cierto tipo y retorna la cantidad
  // contada.
  router.get("/contar/", producto.onlyCount);

  // Agrega un tipo de producto al registro
  router.post("/add/", upload.single("file"), producto.addProducto);

  // Elimina un tipo de producto productodado un id del registro
  router.delete("/del/:id", producto.deleteProducto);

  // Elimina un tipo de producto dado un id del registro
  router.put("/update/:id", upload.single("file"), producto.updateProducto);

  // Ruta general de clientes.
  app.use(process.env.API_URL + "producto", router);
};
