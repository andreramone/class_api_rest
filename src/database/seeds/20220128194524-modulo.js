module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'modulos',
    [
      {
        nome: 'Lógica de Programação',
        descricao: 'Aula de Lógica para estudantes iniciando em Programação',
      },
      {
        nome: 'Aprenda Javascript',
        descricao: 'Aula de Javascript para estudantes iniciando em Programação',
      },
      {
        nome: 'Aprenda ReactJs',
        descricao: 'Aula de ReactJs para estudantes iniciando em Programação',
      },

    ],
    {},
  ),

  down: () => {},
};
