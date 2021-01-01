import routerx from 'express-promise-router';
import incomeController from '../controllers/IncomeController'
import auth from '../middlewares/auth'
const router = routerx();

router.post('/add',auth.verifyGrocer,incomeController.add);
router.get('/query',auth.verifyGrocer,incomeController.query);
router.get('/list',auth.verifyGrocer,incomeController.list);
router.get('/kpilast12months', auth.verifyUser,incomeController.getIncomesLast12Months)
router.put('/activate',auth.verifyGrocer,incomeController.activate);
router.put('/deactivate',auth.verifyGrocer,incomeController.deactivate);

export default router;
