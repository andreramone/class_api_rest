import { Router } from 'express';
import ModuloController from '../controllers/ModuloController';

const router = new Router();

router.get('/', ModuloController.index); // lista os usuários
router.get('/:id', ModuloController.show); // lista um usuário
router.post('/', ModuloController.store); // criação de usuários
router.put('/', ModuloController.update); // update de usuário
router.delete('/:id', ModuloController.delete); // deleta usuário

export default router;
