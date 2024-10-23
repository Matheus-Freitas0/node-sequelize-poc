const sequelize = require('./db');
const User = require('./models/user');

(async () => {
  try {
    // Conectar ao banco
    await sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso!');

    // Criar um novo usuário
    const newUser = await User.create({
      name: 'João Silva',
      email: 'joao.silva@example.com',
    });
    console.log('Usuário criado:', newUser.toJSON());

    // Ler os dados do usuário
    const users = await User.findAll();
    console.log('Lista de usuários:', users.map(u => u.toJSON()));

    // Atualizar o usuário
    await User.update({ name: 'João Santos' }, {
      where: { email: 'joao.silva@example.com' },
    });
    console.log('Usuário atualizado.');

    // Excluir o usuário
    await User.destroy({
      where: { email: 'joao.silva@example.com' },
    });
    console.log('Usuário excluído.');

  } catch (error) {
    console.error('Erro nas operações CRUD:', error);
  } finally {
    await sequelize.close();
  }
})();