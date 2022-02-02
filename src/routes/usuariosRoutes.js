import { Router } from 'express';
import UsuariosController from '../controllers/UsuariosController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', UsuariosController.index); // lista os usuários
router.get('/:id', UsuariosController.show); // lista um usuário
router.post('/', UsuariosController.store); // criação de usuários
router.put('/', loginRequired, UsuariosController.update); // update de usuário
router.delete('/:id', loginRequired, UsuariosController.delete); // deleta usuário

export default router;
