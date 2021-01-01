'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressPromiseRouter = require('express-promise-router');

var _expressPromiseRouter2 = _interopRequireDefault(_expressPromiseRouter);

var _ArticleController = require('../controllers/ArticleController');

var _ArticleController2 = _interopRequireDefault(_ArticleController);

var _auth = require('../middlewares/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _expressPromiseRouter2.default)();

router.post('/add', _auth2.default.verifyGrocer, _ArticleController2.default.add);
router.get('/query', _auth2.default.verifyGrocer, _ArticleController2.default.query);
router.get('/querybarcode', _auth2.default.verifyUser, _ArticleController2.default.queryBarCode);
router.get('/list', _auth2.default.verifyGrocer, _ArticleController2.default.list);
router.put('/update', _auth2.default.verifyGrocer, _ArticleController2.default.update);
router.delete('/remove', _auth2.default.verifyGrocer, _ArticleController2.default.remove);
router.put('/activate', _auth2.default.verifyGrocer, _ArticleController2.default.activate);
router.put('/deactivate', _auth2.default.verifyGrocer, _ArticleController2.default.deactivate);

exports.default = router;
//# sourceMappingURL=article.js.map