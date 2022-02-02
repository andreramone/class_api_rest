import { Router } from 'express';
import AulasController from '../controllers/AulasController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', AulasController.index);
router.get('/:id', AulasController.show);
router.get('/modulo/:id_modulo', AulasController.showByModules);
router.post('/', loginRequired, AulasController.store);
router.put('/', loginRequired, AulasController.update);
router.delete('/:id', AulasController.delete);

export default router;
