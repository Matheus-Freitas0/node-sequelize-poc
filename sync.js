const sequelize = require('./db');
const User = require('./models/user');

// Sincronizar os modelos
(async () => {
  try {
    await sequelize.sync({ force: true }); // { force: true } recria as tabelas
    console.log('Tabelas criadas!');
  } catch (error) {
    console.error('Erro ao sincronizar com o banco de dados:', error);
  } finally {
    await sequelize.close();
  }
})();