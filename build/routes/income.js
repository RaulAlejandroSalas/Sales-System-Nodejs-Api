'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressPromiseRouter = require('express-promise-router');

var _expressPromiseRouter2 = _interopRequireDefault(_expressPromiseRouter);

var _IncomeController = require('../controllers/IncomeController');

var _IncomeController2 = _interopRequireDefault(_IncomeController);

var _auth = require('../middlewares/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _expressPromiseRouter2.default)();

router.post('/add', _auth2.default.verifyGrocer, _IncomeController2.default.add);
router.get('/query', _auth2.default.verifyGrocer, _IncomeController2.default.query);
router.get('/list', _auth2.default.verifyGrocer, _IncomeController2.default.list);
router.get('/kpilast12months', _auth2.default.verifyUser, _IncomeController2.default.getIncomesLast12Months);
router.put('/activate', _auth2.default.verifyGrocer, _IncomeController2.default.activate);
router.put('/deactivate', _auth2.default.verifyGrocer, _IncomeController2.default.deactivate);

exports.default = router;
//# sourceMappingURL=income.js.map