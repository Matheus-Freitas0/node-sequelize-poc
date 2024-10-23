const { Sequelize } = require('sequelize');

// Conectar ao banco de dados MySQL
const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;