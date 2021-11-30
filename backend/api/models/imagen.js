'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Imagen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Imagen.init({
    tipo: DataTypes.STRING,
    nombre: DataTypes.STRING,
    data: DataTypes.BLOB('long')
  }, {
    sequelize,
    modelName: 'Imagen',
    tableName: 'Imagenes',
  });
  return Imagen;
};
