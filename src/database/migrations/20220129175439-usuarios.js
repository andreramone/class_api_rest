module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('usuarios', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
  }),

  down: (queryInterface) => queryInterface.dropTable('usuarios'),
};
