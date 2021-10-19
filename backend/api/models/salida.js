'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Salida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Salida.belongsTo(models.Producto);
    }
  };
  Salida.init({
    fecha: DataTypes.STRING,
    tipo_salida: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    id_producto: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Salida',
  });
  return Salida;
};
