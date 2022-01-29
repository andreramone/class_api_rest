import { Router } from 'express';
import AulasController from '../controllers/AulasController';

const router = new Router();

router.get('/', AulasController.index); // lista os usuários
router.get('/:id', AulasController.show); // lista um usuário
router.post('/', AulasController.store); // criação de usuários
router.put('/', AulasController.update); // update de usuário
router.delete('/:id', AulasController.delete); // deleta usuário

export default router;
