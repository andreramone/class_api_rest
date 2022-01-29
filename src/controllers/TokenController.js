import jwt from 'jsonwebtoken';
import Aulas from '../models/aulas';

class TokenController {
  async store(req, res) {
    console.log(req.body);
    const { email } = req.body;

    if (!email) {
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }

    const aula = await Aulas.findOne({ where: { email } });

    if (!aula) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }

    const { id } = aula;
    const token = jwt.sign({ id }, 'class_api', {
      expiresIn: '7d',
    });

    return res.json({
      token,
      aulas: {
        id,
        nome: aula.nome,
        modulo: aula.modulo,
        data: aula.data,
      },
    });
  }
}

export default new TokenController();
