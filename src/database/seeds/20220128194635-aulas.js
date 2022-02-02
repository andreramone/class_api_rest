module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'aulas',
    [
      {
        nome: 'Aula inicial de lógica em programação',
        data: new Date(),
        id_modulo: 1,
        url: 'https://www.youtube.com/watch?v=iF2MdbrTiBM',
      },
      {
        nome: 'Aula intermediária de lógica em programação',
        data: new Date(),
        id_modulo: 1,
        url: 'https://www.youtube.com/watch?v=iF2MdbrTiBM',

      },
      {
        nome: 'Aula avançada de lógica em programação',
        data: new Date(),
        id_modulo: 1,
        url: 'https://www.youtube.com/watch?v=iF2MdbrTiBM',
      },

      {
        nome: 'Aula inicial de Javascript',
        data: new Date(),
        id_modulo: 2,
        url: 'https://www.youtube.com/watch?v=Ptbk2af68e8',
      },

      {
        nome: 'Aula intermediária de Javascript',
        data: new Date(),
        id_modulo: 2,
        url: 'https://www.youtube.com/watch?v=Ptbk2af68e8',
      },

      {
        nome: 'Aula avançada de Javascript',
        data: new Date(),
        id_modulo: 2,
        url: 'https://www.youtube.com/watch?v=Ptbk2af68e8',
      },

      {
        nome: 'Aula inicial de ReactJs',
        data: new Date(),
        id_modulo: 3,
        url: 'https://www.youtube.com/watch?v=ErjWNvP6mko',
      },

      {
        nome: 'Aula intermediária de ReactJs',
        data: new Date(),
        id_modulo: 3,
        url: 'https://www.youtube.com/watch?v=ErjWNvP6mko',
      },

      {
        nome: 'Aula avançada de ReactJs',
        data: new Date(),
        id_modulo: 3,
        url: 'https://www.youtube.com/watch?v=ErjWNvP6mko',
      },

    ],
    {},
  ),

  down: () => {},
};
