import { Router } from 'express';
import ModuloController from '../controllers/ModuloController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', ModuloController.index); // lista os usuários
router.get('/:id', ModuloController.show); // lista um usuário
router.post('/', loginRequired, ModuloController.store); // criação de usuários
router.put('/', loginRequired, ModuloController.update); // update de usuário
router.delete('/:id', loginRequired, ModuloController.delete); // deleta usuário

export default router;
