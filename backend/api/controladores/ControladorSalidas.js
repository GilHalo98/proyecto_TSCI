const db = require("../models/index");
const Producto = db.Producto;
const Salida = db.Salida;


// Retorna todas las Salida en la tabla.
exports.getSalidas = async(request, respuesta) => {
  // GET request.
  try {
    const reporte = await Salida.findAll();

    // Se conecto a la db, retorna las Salida.
    return respuesta.status(200).json(reporte);

  } catch(excepcion) {

    // No se conecto a la db.
    return respuesta.status(500).send({message: `${excepcion}`});
  }
};


// Agrega un producto a la db.
exports.addSalida = async(request, respuesta) => {
  // POST request.
  const datos = request.body;

  // Fecha actual.
  const fecha = new Date();

  // Verificar si la informacion esta completa.
  if(
    !datos.tipo_salida
    || !datos.descripcion
    || !datos.id_producto
  ) {
    return respuesta.status(400).send({
      message: "Información incompleta para el registro!",
    });
  }

  // Verifica si el cliente existe.
  const producto = await Producto.findOne({
    where: {
      id: datos.id_producto
    }
  });

  // Si no existe, envia una alerta.
  if(!producto) {
    return respuesta.status(404).json({
      message: `El producto ${datos.id_producto} no existe`
    });
  }

  // Realiza la reporte.
  try {
    // Crea una instancia reporte.
    const reporte = {
      fecha: fecha.toDateString(),
      tipo_salida: datos.tipo_salida,
      descripcion: datos.descripcion,
      id_producto: datos.id_producto,
    };

    Salida.create(reporte).then((resultado) => {
      respuesta.status(201).json({
        message: "El reporte de salida se agrego exitosamente!",
      });
    });

  } catch(excepcion) {
    return respuesta.status(500).send({message: `${excepcion}`});
  }
};


// Cambia los datos de un tipo de producto.
exports.updateSalida = async(request, respuesta) => {
  // PUT request.
  const datos = request.body;

  // Id del objeto a modificar.
  const {id} = request.params;

  // Busca si existe el tipo de producto si existe.
  const entrada = await Salida.findOne({
    where: {
      id: id
    }
  });

  // Si no existe el tipo de producto
  if(!entrada) {
    return respuesta.status(404).json({
      message: `El reporte ${id} no existe`
    });
  }

  // Se realian los cambios
  if(datos.tipo_salida) {
    entrada.tipo_salida = datos.tipo_salida;
  }
  if(datos.descripcion) {
    entrada.descripcion = datos.descripcion;
  }
  if(datos.id_producto) {
    entrada.id_producto = datos.id_producto;
  }
  if(datos.fecha) {
    entrada.fecha = datos.fecha;
  }

  // Si existe se actualiza su informacion.
  try {
    // Guarda los cambios.
    entrada.save();

    return respuesta.send({
      message: `El reporte ${id} se actualizo exitosamente!`,
    });
  } catch(excepcion) {
    return respuesta.status(500).send({message: `${excepcion}`});
  }
};


// Elimina un tipo de producto de la base de datos.
exports.deleteSalida = async(request, respuesta) => {
  // DELETE request.

  // Se obtiene el id del tipo de producto.
  const {id} = request.params;

  // Busca si el tipo de producto con id existe.
  const reporte = await Salida.findOne({
    where: {
      id,
    },
  });

  // Si no existe, se manda una alerta.
  if (!reporte) {
    return respuesta.status(404).send({
      message: `El reporte con id ${id} no existe`,
    });
  }

  try {
    // Elimina el tipo de producto
    reporte.destroy();

    return respuesta.send({
      message: `el reporte ${reporte.id} fue eliminado exitosamente!`,
    });
  } catch(excepcion) {
    return respuesta.status(500).send({message: `${excepcion}`});
  }
};
