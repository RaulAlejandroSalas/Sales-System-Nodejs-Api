'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressPromiseRouter = require('express-promise-router');

var _expressPromiseRouter2 = _interopRequireDefault(_expressPromiseRouter);

var _category = require('./category');

var _category2 = _interopRequireDefault(_category);

var _article = require('./article');

var _article2 = _interopRequireDefault(_article);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _person = require('./person');

var _person2 = _interopRequireDefault(_person);

var _income = require('./income');

var _income2 = _interopRequireDefault(_income);

var _sale = require('./sale');

var _sale2 = _interopRequireDefault(_sale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _expressPromiseRouter2.default)();

router.use('/category', _category2.default);
router.use('/article', _article2.default);
router.use('/user', _user2.default);
router.use('/person', _person2.default);
router.use('/income', _income2.default);
router.use('/sale', _sale2.default);

exports.default = router;
//# sourceMappingURL=index.js.map