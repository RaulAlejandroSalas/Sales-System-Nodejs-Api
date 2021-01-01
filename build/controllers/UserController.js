'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _token = require('../services/token');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
    add: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
            var resp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return _bcryptjs2.default.hash(req.body.password, 10);

                        case 3:
                            req.body.password = _context.sent;
                            _context.next = 6;
                            return _models2.default.User.create(req.body);

                        case 6:
                            resp = _context.sent;

                            res.status(201).send(resp);
                            _context.next = 14;
                            break;

                        case 10:
                            _context.prev = 10;
                            _context.t0 = _context['catch'](0);

                            res.status(500).send({
                                message: 'Error Inserting a new User with Body: ' + req.body
                            });
                            next(_context.t0);

                        case 14:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[0, 10]]);
        }));

        return function add(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }(),
    query: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
            var resp;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return _models2.default.User.findById({ _id: req.query.id });

                        case 3:
                            resp = _context2.sent;

                            console.log(resp);
                            if (!resp) {
                                res.status(404).send({ message: 'The User not exist with the Query: ' + req.query.id });
                            } else {
                                res.status(200).send(resp);
                            }
                            _context2.next = 12;
                            break;

                        case 8:
                            _context2.prev = 8;
                            _context2.t0 = _context2['catch'](0);

                            res.status(500).send({
                                message: 'Error Executing the Query ' + req.query.id
                            });
                            next(_context2.t0);

                        case 12:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined, [[0, 8]]);
        }));

        return function query(_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }(),
    list: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
            var pattern, resp;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            pattern = req.query.filter;
                            _context3.next = 4;
                            return _models2.default.User.find({ $or: [{ 'name': new RegExp(pattern, 'i') }, { 'email': new RegExp(pattern, 'i') }] }, { createdAt: 0 }).sort({ 'createdAt': -1 });

                        case 4:
                            resp = _context3.sent;

                            res.status(200).send(resp);
                            _context3.next = 12;
                            break;

                        case 8:
                            _context3.prev = 8;
                            _context3.t0 = _context3['catch'](0);

                            res.status(500).send({
                                message: 'Not Exists Categories in the Database...'
                            });
                            next(_context3.t0);

                        case 12:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined, [[0, 8]]);
        }));

        return function list(_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
        };
    }(),
    update: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
            var oldPassword, reg0, resp;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.prev = 0;
                            oldPassword = req.body.password;
                            _context4.next = 4;
                            return _models2.default.User.findOne({ _id: req.body.id });

                        case 4:
                            reg0 = _context4.sent;

                            if (!(oldPassword != reg0.password)) {
                                _context4.next = 9;
                                break;
                            }

                            _context4.next = 8;
                            return _bcryptjs2.default.hash(req.body.password, 10);

                        case 8:
                            req.body.password = _context4.sent;

                        case 9:
                            _context4.next = 11;
                            return _models2.default.User.findByIdAndUpdate({ _id: req.body.id }, {
                                rol: req.body.rol,
                                name: req.body.name,
                                type_document: req.body.type_document,
                                num_document: req.body.num_document,
                                address: req.body.address,
                                phone: req.body.phone,
                                email: req.body.email,
                                password: req.body.password

                            });

                        case 11:
                            resp = _context4.sent;

                            res.status(200).send(resp);
                            _context4.next = 19;
                            break;

                        case 15:
                            _context4.prev = 15;
                            _context4.t0 = _context4['catch'](0);

                            res.status(500).send({
                                message: 'Error Updating a User with id:  ' + req.body.id
                            });
                            next(_context4.t0);

                        case 19:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined, [[0, 15]]);
        }));

        return function update(_x10, _x11, _x12) {
            return _ref4.apply(this, arguments);
        };
    }(),
    remove: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
            var resp;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.prev = 0;
                            _context5.next = 3;
                            return _models2.default.User.findOneAndRemove({ _id: req.body.id });

                        case 3:
                            resp = _context5.sent;

                            res.status(200).send(resp);
                            _context5.next = 11;
                            break;

                        case 7:
                            _context5.prev = 7;
                            _context5.t0 = _context5['catch'](0);

                            res.status(500).send({
                                message: 'Error Deleting a User with id: ' + req.body.id
                            });
                            next(_context5.t0);

                        case 11:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined, [[0, 7]]);
        }));

        return function remove(_x13, _x14, _x15) {
            return _ref5.apply(this, arguments);
        };
    }(),
    activate: function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res, next) {
            var resp;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.prev = 0;
                            _context6.next = 3;
                            return _models2.default.User.findByIdAndUpdate({ _id: req.body.id }, { state: 1 });

                        case 3:
                            resp = _context6.sent;

                            res.status(201).send(resp);
                            _context6.next = 11;
                            break;

                        case 7:
                            _context6.prev = 7;
                            _context6.t0 = _context6['catch'](0);

                            res.status(500).send({
                                message: 'Error Activating a User with id: ' + req.body.id
                            });
                            next(_context6.t0);

                        case 11:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, undefined, [[0, 7]]);
        }));

        return function activate(_x16, _x17, _x18) {
            return _ref6.apply(this, arguments);
        };
    }(),
    deactivate: function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res, next) {
            var resp;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.prev = 0;
                            _context7.next = 3;
                            return _models2.default.User.findByIdAndUpdate({ _id: req.body.id }, { state: 0 });

                        case 3:
                            resp = _context7.sent;

                            res.status(201).send(resp);
                            _context7.next = 11;
                            break;

                        case 7:
                            _context7.prev = 7;
                            _context7.t0 = _context7['catch'](0);

                            res.status(500).send({
                                message: 'Error Deactivating a User with id: ' + req.body.id
                            });
                            next(_context7.t0);

                        case 11:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, undefined, [[0, 7]]);
        }));

        return function deactivate(_x19, _x20, _x21) {
            return _ref7.apply(this, arguments);
        };
    }(),

    login: function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res, next) {
            var user, match, tokenReturn;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            _context8.prev = 0;
                            _context8.next = 3;
                            return _models2.default.User.findOne({ email: req.body.email, state: 1 });

                        case 3:
                            user = _context8.sent;

                            if (!user) {
                                _context8.next = 16;
                                break;
                            }

                            //Compare Password
                            match = _bcryptjs2.default.compare(req.body.password, user.password);

                            if (!match) {
                                _context8.next = 13;
                                break;
                            }

                            _context8.next = 9;
                            return _token2.default.encode(user._id);

                        case 9:
                            tokenReturn = _context8.sent;

                            res.status(200).json({ user: user, tokenReturn: tokenReturn });
                            _context8.next = 14;
                            break;

                        case 13:
                            res.status(404).send({ message: 'Password Incorrect' });

                        case 14:
                            _context8.next = 17;
                            break;

                        case 16:
                            res.status(404).send({ message: 'The User with email: ' + req.body.email + ' not exist ' });

                        case 17:
                            _context8.next = 23;
                            break;

                        case 19:
                            _context8.prev = 19;
                            _context8.t0 = _context8['catch'](0);

                            res.status(500).send({
                                message: 'Error Login a User with email: ' + req.body.email
                            });
                            next(_context8.t0);

                        case 23:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, undefined, [[0, 19]]);
        }));

        return function login(_x22, _x23, _x24) {
            return _ref8.apply(this, arguments);
        };
    }()
};
//# sourceMappingURL=UserController.js.map