import { Sequelize } from 'sequelize';
import config from '../config/config.js';
import userModel from './user.js';

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: false
  }
);

const db = {
  User: userModel(sequelize),
  sequelize,
  Sequelize
};

export default db;