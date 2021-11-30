const multer = require("multer");

// Importa el ambiente en el que se trabaja.
require("dotenv").config();
const DIR = process.env.BASE_DIR;

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('Solo se aceptan imagenes.', false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR + 'recursos/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-TS-${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;
