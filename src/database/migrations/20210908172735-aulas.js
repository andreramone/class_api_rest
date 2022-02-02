module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('aulas', {
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

    id_modulo: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    data: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
  }),

  down: (queryInterface) => queryInterface.dropTable('aulas'),
};
