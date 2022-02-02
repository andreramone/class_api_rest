import { Router } from 'express';
import UsuariosController from '../controllers/UsuariosController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', UsuariosController.index);
router.get('/:id', UsuariosController.show);
router.post('/', UsuariosController.store);
router.put('/', loginRequired, UsuariosController.update);
router.delete('/:id', loginRequired, UsuariosController.delete);

export default router;
