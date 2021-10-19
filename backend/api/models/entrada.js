'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entrada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Entrada.belongsTo(models.Producto);
    }
  };
  Entrada.init({
    fecha: DataTypes.STRING,
    tipo_entrada: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    id_producto: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Entrada',
  });
  return Entrada;
};
