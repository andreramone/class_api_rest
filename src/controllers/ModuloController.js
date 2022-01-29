import modulos from '../models/modulo';

class ModulosController {
  async store(req, res) {
    try {
      console.log(req.body);
      const novoModulo = await modulos.create(req.body);
      const {
        id, nome, descricao,
      } = novoModulo;
      return res.json({
        id,
        nome,
        descricao,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const novoModulo = await modulos.findAll({
        attributes: ['id', 'nome', 'descricao'],
      });
      return res.json(novoModulo);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const novoModulo = await modulos.findByPk(req.params.id);

      const {
        id, nome, descricao,
      } = novoModulo;
      return res.json({
        id,
        nome,
        descricao,
      });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      console.log(req.body);
      const novoModulo = await modulos.findByPk(req.body.id);

      if (!novoModulo) {
        return res.status(400).json({
          errors: ['Módulo não existe.'],
        });
      }

      const novosDados = await modulos.update(req.body);
      const {
        id, nome, descricao,
      } = novosDados;
      return res.json({
        id,
        nome,
        descricao,
      });
    } catch (e) {
      console.log(e.message);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const novoModulo = await modulos.findByPk(req.params.id);

      if (!novoModulo) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      await modulos.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ModulosController();
