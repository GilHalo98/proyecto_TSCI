'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Merma.belongsTo(models.Producto);
    }
  };
  Merma.init({
    fecha: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    id_producto: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Merma',
  });
  return Merma;
};
