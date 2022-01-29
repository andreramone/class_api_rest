import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aulas from '../models/aulas';
import Modulo from '../models/modulo';

const models = [Aulas, Modulo];

const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models),
);
