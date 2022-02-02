import Sequelize, { Model } from 'sequelize';

export default class Aulas extends Model {
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
        id_modulo: {
          type: Sequelize.INTEGER,
          references: 'modulos',
          referencesKey: 'id',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio',
            },
          },
        },
        data: {
          type: Sequelize.DATE,
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio',
            },
          },
        },
        url: {
          type: Sequelize.STRING,
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
