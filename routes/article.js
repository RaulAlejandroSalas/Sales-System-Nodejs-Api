import routerx from 'express-promise-router';
import articleController from '../controllers/ArticleController';
import auth from '../middlewares/auth'
const router = routerx();

router.post('/add',auth.verifyGrocer,articleController.add);
router.get('/query',auth.verifyGrocer,articleController.query);
router.get('/querybarcode',auth.verifyUser,articleController.queryBarCode);
router.get('/list',auth.verifyGrocer,articleController.list);
router.put('/update',auth.verifyGrocer,articleController.update);
router.delete('/remove',auth.verifyGrocer,articleController.remove);
router.put('/activate',auth.verifyGrocer,articleController.activate);
router.put('/deactivate',auth.verifyGrocer,articleController.deactivate);

export default router;
