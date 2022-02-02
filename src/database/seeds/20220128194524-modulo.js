module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'modulos',
    [
      {
        nome: 'Módulo - Lógica de Programação',
        descricao: 'Aula de Lógica para estudantes iniciando em Programação',
      },
      {
        nome: 'Módulo - Aprenda Javascript',
        descricao: 'Aula de Javascript para estudantes iniciando em Programação',
      },
      {
        nome: 'Módulo - Aprenda ReactJs',
        descricao: 'Aula de ReactJs para estudantes iniciando em Programação',
      },

    ],
    {},
  ),

  down: () => {},
};
