import jwt from 'jsonwebtoken';
import Usuarios from '../models/usuarios';

class TokenController {
  async store(req, res) {
    try {
      console.log(req.body);
      const { email, senha } = req.body;

      if (!email) {
        return res.status(401).json({
          errors: ['Credenciais inválidas'],
        });
      }

      const usuario = await Usuarios.findOne({ where: { email } });

      if (!usuario) {
        return res.status(401).json({
          errors: ['Usuário não existe'],
        });
      }

      if (!(await usuario.passwordIsValid(senha))) {
        return res.status(401).json({
          errors: ['Email ou senha invalidos'],
        });
      }

      const { id } = usuario;
      const token = jwt.sign({ id, email }, 'class_api', {
        expiresIn: '7d',
      });

      return res.json({
        token,
        usuario: {
          id,
          email,
        },
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.message,
      });
    }
  }
}

export default new TokenController();
