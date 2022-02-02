import Usuarios from '../models/usuarios';

class UsuariosController {
  async store(req, res) {
    try {
      const { email: emailCadastro, senha: senhaCadastro } = req.body;
      const novoUser = await Usuarios.create(
        { email: emailCadastro, senha_hash: senhaCadastro },
        { individualHooks: true },
      );
      const { id, email } = novoUser;
      return res.json({ id, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.message,
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await Usuarios.findAll({ attributes: ['id', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await Usuarios.findByPk(req.params.id);

      const { id, email } = user;
      return res.json({ id, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await Usuarios.findByPk(req.body.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      await Usuarios.update(req.body, {
        where: { id: user.id },
        individualHooks: true,
      });
      const { id, email } = user;
      return res.json({ id, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.message,
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await Usuarios.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UsuariosController();
