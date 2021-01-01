import routerx from 'express-promise-router';
import categoryController from '../controllers/CategoryController'
import auth from '../middlewares/auth'
const router = routerx();

router.post('/add',auth.verifyGrocer,categoryController.add);
router.get('/query',auth.verifyGrocer,categoryController.query);
router.get('/list',auth.verifyGrocer,categoryController.list);
router.put('/update',auth.verifyGrocer,categoryController.update);
router.delete('/remove',auth.verifyGrocer,categoryController.remove);
router.put('/activate',auth.verifyGrocer,categoryController.activate);
router.put('/deactivate',auth.verifyGrocer,categoryController.deactivate);

export default router;
