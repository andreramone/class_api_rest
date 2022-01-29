import Aulas from '../models/aulas';

class AulasController {
  async store(req, res) {
    try {
      console.log(req.body);
      const novasAulas = await Aulas.create(req.body);
      const {
        id, nome, id_modulo, data, url,
      } = novasAulas;
      return res.json({
        id,
        nome,
        id_modulo,
        data,
        url,
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
      const aulasIndex = await Aulas.findAll({
        attributes: ['id', 'nome', 'id_modulo', 'data', 'url'],
      });
      return res.json(aulasIndex);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const aulasShow = await Aulas.findByPk(req.params.id);

      const {
        id, nome, id_modulo, data, url,
      } = aulasShow;
      return res.json({
        id,
        nome,
        id_modulo,
        data,
        url,
      });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      console.log(req.body);
      const aulasUpdate = await Aulas.findByPk(req.body.id);

      if (!aulasUpdate) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const novosDados = await Aulas.update(req.body);
      const {
        id, nome, id_modulo, data, url,
      } = novosDados;
      return res.json({
        id,
        nome,
        id_modulo,
        data,
        url,
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
      const aulasDelete = await Aulas.findByPk(req.params.id);

      if (!aulasDelete) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      await Aulas.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AulasController();
