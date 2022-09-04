'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tipos_Productos', [
        {
          tipo: 'Rin',
          descripcion: 'Rin para llanta',
        },
        {
          tipo: 'Bomba de gasolina',
          descripcion: 'Bomba de gasolina',
        },
        {
          tipo: 'Llanta',
          descripcion: 'Llanta para automovil',
        },
        {
          tipo: 'Cadena de tiempo',
          descripcion: 'Cadeno de tiempo',
        },
        {
          tipo: 'Foco frontal',
          descripcion: 'Foco frontal de automovil',
        },
        {
          tipo: 'Farol',
          descripcion: 'Farol para automovil',
        },
        {
          tipo: 'Bomba de aceite',
          descripcion: 'Bomba de aceite para automovil',
        },
        {
          tipo: 'Radiador',
          descripcion: 'Radiador de automovil',
        },
        {
          tipo: 'Retrovisor',
          descripcion: 'Retrovisor para automovil',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tipos_Productos', null, {});
  }
};
