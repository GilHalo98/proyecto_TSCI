// Modelos de la db.
const db = require("../models/index");
const Usuario = db.Usuario;

// Encripta contraseñas.
const bcrypjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Registra un usuario.
exports.signin = async(request, respuesta) => {
  // POST request.
  const datos = request.body;

  // Verifia si los datos basicos para el registro estan completos.
  if(!datos.username || !datos.password) {
    return respuesta.status(400).send({
      message: "Información incompleta para el registro!",
    });
  }

  // Busca si el usuario ya se encuentra registrado
  let existe_usuario = await Usuario.findOne({
    where: {
      username: datos.username,
    },
  });

  // Si el usuario no existe.
  if(existe_usuario) {
    return respuesta.status(400).json({
      message: `El usuario ${datos.username} ya se encuentra registrado!`
    });
  }

  // Realiza el registro en la db.
  try {
    // realizamos la key para el encriptado.
    const salt = bcrypjs.genSaltSync(10);

    // Encriptamos la contrasenia.
    const hash = bcrypjs.hashSync(datos.password, salt);

    // Crea una instancia usuario.
    const usuario = {
      username: datos.username,
      password: hash,
    };

    // Registramos el usuario
    Usuario.create(usuario).then((resultado) => {
        respuesta.status(201).json({
            message: "La cuenta se ha creado exitosamente!",
        });
    });
  } catch(excepcion) {
    return respuesta.status(500).send({message: `${excepcion}`});
  }
};

// Inicio de secion del usuario.
exports.login = async(request, respuesta) => {
  // POST request.
  const datos = request.body;

  // Busca si el usuario con id existe.
  const usuario = await Usuario.findOne({
    where: {
      username: datos.username,
    },
  });

  // Si el usuario no existe.
  if(!usuario) {
    return respuesta.status(404).json({
      message: "Usuario inexistente, favor de registrarse primero!"
    });
  }

  // Genera el token y revisa las credenciales.
  try {
    bcrypjs.compare(datos.password, usuario.password, function(err, igual) {
      // Si la contrasenia pasada concuerda con la almacenada.
      if(igual){
        // Genera el token.
        const token = jwt.sign({
            id: usuario.id,
            username: usuario.username,
          },

          // Llave del token.
          process.env.Secret,

          // Tiempo de expiracion del token.
          {expiresIn: "1h"},

          // Se retorna el token con el mensaje de autenticacion exitosa
          function(err, token) {
            return respuesta.status(200).json({
              message: "Autenticación exitosa!",
              token: token
            });
          }
        );
      } else {
        return respuesta.status(500).json({
            message: 'Contraseña incorrecta'
        });
      }
    });
  } catch(excepcion) {
    return respuesta.status(500).send({message: `${excepcion}`});
  }
};

// Cierre de secion del usuario.
exports.logout = async(request, respuesta) => {
  // GET request.
  return respuesta.status(200).send({
    auth: false,
    token: null
  });
};
