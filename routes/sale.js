import routerx from 'express-promise-router';
import saleController from '../controllers/SaleController'
import auth from '../middlewares/auth'
const router = routerx();

router.post('/add',auth.verifySeller,saleController.add);
router.get('/query',auth.verifySeller,saleController.query);
router.get('/list',auth.verifySeller,saleController.list);
router.put('/activate',auth.verifySeller,saleController.activate);
router.put('/deactivate',auth.verifySeller,saleController.deactivate);

export default router;
