const User = require('./models/user');

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await User.findAll();
            res.status(200).json(users); // Retorna a lista de usuários como JSON
        } catch (err) {
            console.error('Erro ao obter usuários:', err);
            res.status(500).json({ error: err.message });
        }
    }

    async createUser(req, res) {
        const { name, email } = req.body;
        try {
            const newUser = await User.create({ name, email });
            res.status(201).json(newUser); // Retorna o usuário criado como JSON
        } catch (err) {
            console.error('Erro ao criar usuário:', err);
            res.status(500).json({ error: err.message });
        }
    }

    async deleteUser(req, res) {
        const id = req.params.id;
        try {
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
            await user.destroy();
            res.status(204).send(); // Retorna 204 No Content após a exclusão
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
            res.status(500).json({ error: error.message });
        }
    }

    async editUser(req, res) {
        const id = req.params.id;
        const { name, email } = req.body;

        try {
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
            await user.update({ name, email });
            res.status(200).json(user); // Retorna o usuário atualizado como JSON
        } catch (error) {
            console.error('Erro ao editar usuário:', error);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new UserController();
