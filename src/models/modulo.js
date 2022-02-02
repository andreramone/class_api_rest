import Sequelize, { Model } from 'sequelize';

export default class Modulos extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio',
            },
          },
        },
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Nome precisa ter entre 3 e 255 caracteres',
            },
          },
        },

        descricao: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio',
            },
          },
        },
      },
      {
        sequelize,
        createdAt: false,
        updatedAt: false,
      },
    );

    return this;
  }
}
