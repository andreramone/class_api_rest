import { Router } from 'express';
import ModuloController from '../controllers/ModuloController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', ModuloController.index);
router.get('/:id', ModuloController.show);
router.post('/', loginRequired, ModuloController.store);
router.put('/', loginRequired, ModuloController.update);
router.delete('/:id', loginRequired, ModuloController.delete);

export default router;
