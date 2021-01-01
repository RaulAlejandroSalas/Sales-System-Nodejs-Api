'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var checkToken = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(token) {
        var __id, _ref2, _id, user, _token;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        __id = null;
                        _context.prev = 1;
                        _context.next = 4;
                        return _jsonwebtoken2.default.decode(token);

                    case 4:
                        _ref2 = _context.sent;
                        _id = _ref2._id;

                        __id = _id;
                        _context.next = 12;
                        break;

                    case 9:
                        _context.prev = 9;
                        _context.t0 = _context['catch'](1);
                        return _context.abrupt('return', false);

                    case 12:
                        _context.next = 14;
                        return _models2.default.User.findOne({ _id: __id, state: 1 });

                    case 14:
                        user = _context.sent;

                        if (!user) {
                            _context.next = 18;
                            break;
                        }

                        _token = _jsonwebtoken2.default.sign({ _id: __id }, 'secret', { expiresIn: '1d' });
                        return _context.abrupt('return', { token: _token, rol: user.rol });

                    case 18:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[1, 9]]);
    }));

    return function checkToken(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
    encode: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            return _context2.abrupt('return', _jsonwebtoken2.default.sign({ _id: id }, 'secret', { expiresIn: '1d' }));

                        case 1:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function encode(_x2) {
            return _ref3.apply(this, arguments);
        };
    }(),
    decode: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(token) {
            var _ref5, _id, user;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            _context3.next = 3;
                            return _jsonwebtoken2.default.verify(token, 'secret');

                        case 3:
                            _ref5 = _context3.sent;
                            _id = _ref5._id;
                            _context3.next = 7;
                            return _models2.default.User.findOne({ _id: _id, state: 1 });

                        case 7:
                            user = _context3.sent;

                            if (!user) {
                                _context3.next = 12;
                                break;
                            }

                            return _context3.abrupt('return', user);

                        case 12:
                            return _context3.abrupt('return', false);

                        case 13:
                            _context3.next = 20;
                            break;

                        case 15:
                            _context3.prev = 15;
                            _context3.t0 = _context3['catch'](0);
                            _context3.next = 19;
                            return checkToken(token);

                        case 19:
                            return _context3.abrupt('return', _context3.sent);

                        case 20:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined, [[0, 15]]);
        }));

        return function decode(_x3) {
            return _ref4.apply(this, arguments);
        };
    }()
};
//# sourceMappingURL=token.js.map