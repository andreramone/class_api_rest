import modulos from '../models/modulo';
import aulas from '../models/aulas';

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
        errors: e.message,
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const queryModulos = await modulos.findAll({
        attributes: ['id', 'nome', 'descricao'],
      });

      const returnModulos = [];
      return Promise.all(
        queryModulos.map(async (modulo) => {
          const aulasModulo = await aulas.findAll({ where: { id_modulo: modulo.id } });
          modulo.aulas = aulasModulo.length;
          returnModulos.push({

            id: modulo.id,
            nome: modulo.nome,
            descricao: modulo.descricao,
            aulas: aulasModulo.length,

          });
          return modulo;
        }),
      ).then(() => res.json(returnModulos));
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
      const novoModulo = await modulos.findByPk(req.body.id);

      if (!novoModulo) {
        return res.status(400).json({
          errors: ['Módulo não existe.'],
        });
      }

      const novosDados = await modulos.update(req.body, { where: { id: req.body.id } });
      console.log(novosDados);
      const {
        id, nome, descricao,
      } = novoModulo;
      return res.json({
        id,
        nome,
        descricao,
      });
    } catch (e) {
      console.log(e.message);
      return res.status(400).json({
        errors: e.message,
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

      await modulos.destroy({ where: { id: novoModulo.id } });
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.message,
      });
    }
  }
}

export default new ModulosController();
