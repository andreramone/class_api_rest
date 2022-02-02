import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcrypt';

export default class Usuarios extends Model {
  static init(sequelize) {
    super.init({
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
      email: {
        type: Sequelize.STRING,
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      senha: {
        type: Sequelize.STRING,
      },
      senha_hash: {
        type: Sequelize.VIRTUAL,
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha precisa ter entre 6 e 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
      createdAt: false,
      updatedAt: false,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.senha_hash) {
        user.senha = await bcryptjs.hash(user.senha_hash, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.senha);
  }
}
