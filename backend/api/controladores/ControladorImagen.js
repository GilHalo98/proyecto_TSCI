const db = require("../models");
const Imagen = db.Imagen;

// Manipulacion de ficheros y directorios.
const fs = require("fs");

// Importa el ambiente en el que se trabaja.
require("dotenv").config();
const DIR = process.env.BASE_DIR;

exports.getImagenByID = async (request, respuesta) => {
    // GET request.

    // Se obtiene el id del usuario.
    const {id} = request.params;

    try {
        // Busca si la imagen con id existe.
        const imagen = await Imagen.findOne({
            where: {
                id,
            },
        });

        // Si no existe, se manda una alerta.
        if (!imagen) {
          return respuesta.status(404).send({
            message: `La imagen con id ${id} no existe`,
          });
        }

        // Combierte el ArrayBuffer a Base64
    	var binary = '';
    	var bytes = new Uint8Array(
            imagen.data
        );
    	var len = bytes.byteLength;
    	for (var i = 0; i < len; i++) {
    		binary += String.fromCharCode(bytes[ i ]);
    	}

        // Se conecto a la db, retorna los datos de la imagen.
        return respuesta.status(200).json({
            tipo: imagen.tipo,
            binData: binary
        });

    } catch(excepcion) {

      // No se conecto a la db.
      return respuesta.status(500).send({message: `${excepcion}`});
    }
};

exports.addImagen = async (request, respuesta) => {
    if (request.file == undefined) {
        return respuesta.status(400).send({
            message: "Información incompleta para el registro!",
        });
    }

    try {
        const imagen = {
            tipo: request.file.mimetype,
            nombre: request.file.originalname,
            data: fs.readFileSync(
                DIR + "recursos/uploads/" + request.file.filename
            ),
        };

        Imagen.create(imagen).then((resultado) => {
            fs.writeFileSync(
                DIR + "recursos/temp/" + imagen.name,
                imagen.data
            );

            respuesta.status(201).json({
                message: "La imagen fue subida exitosamente!",
            });
        });

    } catch(excepcion) {
        return respuesta.status(500).send({message: `${excepcion}`});
    }
};
