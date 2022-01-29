module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('modulos', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      defaultValue: '',
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      defaultValue: '',
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('modulos'),
};
