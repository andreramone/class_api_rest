module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'aulas',
    [
      {
        nome: 'Aula teste4',
        data: new Date(),
        id_modulo: 1,
        url: '',
      },
      {
        nome: 'Aula teste5',
        data: new Date(),
        id_modulo: 2,
        url: '',

      },
      {
        nome: 'Aula teste6',
        data: new Date(),
        id_modulo: 3,
        url: '',
      },

    ],
    {},
  ),

  down: () => {},
};
