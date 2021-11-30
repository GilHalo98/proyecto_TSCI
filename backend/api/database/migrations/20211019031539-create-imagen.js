'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Imagenes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      // Propiedades del objeto.
      tipo: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.BLOB('long')
      },

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Imagenes');
  }
};
