'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressPromiseRouter = require('express-promise-router');

var _expressPromiseRouter2 = _interopRequireDefault(_expressPromiseRouter);

var _CategoryController = require('../controllers/CategoryController');

var _CategoryController2 = _interopRequireDefault(_CategoryController);

var _auth = require('../middlewares/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _expressPromiseRouter2.default)();

router.post('/add', _auth2.default.verifyGrocer, _CategoryController2.default.add);
router.get('/query', _auth2.default.verifyGrocer, _CategoryController2.default.query);
router.get('/list', _auth2.default.verifyGrocer, _CategoryController2.default.list);
router.put('/update', _auth2.default.verifyGrocer, _CategoryController2.default.update);
router.delete('/remove', _auth2.default.verifyGrocer, _CategoryController2.default.remove);
router.put('/activate', _auth2.default.verifyGrocer, _CategoryController2.default.activate);
router.put('/deactivate', _auth2.default.verifyGrocer, _CategoryController2.default.deactivate);

exports.default = router;
//# sourceMappingURL=category.js.map