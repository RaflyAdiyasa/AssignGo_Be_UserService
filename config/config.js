export default {
  development: {
    username: 'assigngo_user',
    password: 'pass123',
    database: 'assigngo',
    host: '34.70.188.206',
    dialect: 'postgres'
  },
  test: {
    username: 'assigngo_user',
    password: 'pass123',
    database: 'assigngo',
    host: '34.70.188.206',
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};