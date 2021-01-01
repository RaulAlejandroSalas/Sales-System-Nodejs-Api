'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _token = require('../services/token');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
    verifyUser: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
            var resp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (req.headers.token) {
                                _context.next = 2;
                                break;
                            }

                            return _context.abrupt('return', res.status(404).send({ message: 'Not Token' }));

                        case 2:
                            _context.next = 4;
                            return _token2.default.decode(req.headers.token);

                        case 4:
                            resp = _context.sent;

                            if (!(resp.rol == 'ADMIN' || resp.rol == 'SELLER' || resp.rol == 'GROCER')) {
                                _context.next = 9;
                                break;
                            }

                            next();
                            _context.next = 10;
                            break;

                        case 9:
                            return _context.abrupt('return', res.status(403).send({
                                message: 'Not Authorized'
                            }));

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function verifyUser(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }(),
    verifyAdmin: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
            var resp;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            if (req.headers.token) {
                                _context2.next = 2;
                                break;
                            }

                            return _context2.abrupt('return', res.status(404).send({ message: 'Not Token' }));

                        case 2:
                            _context2.next = 4;
                            return _token2.default.decode(req.headers.token);

                        case 4:
                            resp = _context2.sent;

                            if (!(resp.rol == 'ADMIN')) {
                                _context2.next = 9;
                                break;
                            }

                            next();
                            _context2.next = 10;
                            break;

                        case 9:
                            return _context2.abrupt('return', res.status(403).send({
                                message: 'Not Authorized'
                            }));

                        case 10:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function verifyAdmin(_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }(),
    verifyGrocer: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
            var resp;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (req.headers.token) {
                                _context3.next = 2;
                                break;
                            }

                            return _context3.abrupt('return', res.status(404).send({ message: 'Not Token' }));

                        case 2:
                            _context3.next = 4;
                            return _token2.default.decode(req.headers.token);

                        case 4:
                            resp = _context3.sent;

                            if (!(resp.rol == 'ADMIN' || resp.rol == 'GROCER')) {
                                _context3.next = 9;
                                break;
                            }

                            next();
                            _context3.next = 10;
                            break;

                        case 9:
                            return _context3.abrupt('return', res.status(403).send({
                                message: 'Not Authorized'
                            }));

                        case 10:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function verifyGrocer(_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
        };
    }(),
    verifySeller: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
            var resp;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            if (req.headers.token) {
                                _context4.next = 2;
                                break;
                            }

                            return _context4.abrupt('return', res.status(404).send({ message: 'Not Token' }));

                        case 2:
                            _context4.next = 4;
                            return _token2.default.decode(req.headers.token);

                        case 4:
                            resp = _context4.sent;

                            if (!(resp.rol == 'ADMIN' || resp.rol == 'SELLER')) {
                                _context4.next = 9;
                                break;
                            }

                            next();
                            _context4.next = 10;
                            break;

                        case 9:
                            return _context4.abrupt('return', res.status(403).send({
                                message: 'Not Authorized'
                            }));

                        case 10:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined);
        }));

        return function verifySeller(_x10, _x11, _x12) {
            return _ref4.apply(this, arguments);
        };
    }()
};
//# sourceMappingURL=auth.js.map