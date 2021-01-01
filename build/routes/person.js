'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressPromiseRouter = require('express-promise-router');

var _expressPromiseRouter2 = _interopRequireDefault(_expressPromiseRouter);

var _PersonController = require('../controllers/PersonController');

var _PersonController2 = _interopRequireDefault(_PersonController);

var _auth = require('../middlewares/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _expressPromiseRouter2.default)();

router.post('/add', _auth2.default.verifyUser, _PersonController2.default.add);
router.get('/query', _auth2.default.verifyUser, _PersonController2.default.query);
router.get('/list', _auth2.default.verifyUser, _PersonController2.default.list);
router.get('/listclients', _auth2.default.verifyUser, _PersonController2.default.listClient);
router.get('/listproviders', _auth2.default.verifyUser, _PersonController2.default.listProvider);
router.put('/update', _auth2.default.verifyUser, _PersonController2.default.update);
router.delete('/remove', _auth2.default.verifyUser, _PersonController2.default.remove);
router.put('/activate', _auth2.default.verifyUser, _PersonController2.default.activate);
router.put('/deactivate', _auth2.default.verifyUser, _PersonController2.default.deactivate);

exports.default = router;
//# sourceMappingURL=person.js.map