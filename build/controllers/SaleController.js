'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var incrementStock = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(idArticle, quantity) {
        var _ref2, stock, newStock;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _models2.default.Article.findOne({ _id: idArticle });

                    case 2:
                        _ref2 = _context.sent;
                        stock = _ref2.stock;
                        newStock = parseInt(stock) + parseInt(quantity);
                        _context.next = 7;
                        return _models2.default.Article.findByIdAndUpdate({ _id: idArticle }, { stock: newStock });

                    case 7:
                        return _context.abrupt('return', _context.sent);

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function incrementStock(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var decrementStock = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(idArticle, quantity) {
        var _ref4, stock, newStock;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return _models2.default.Article.findOne({ _id: idArticle });

                    case 2:
                        _ref4 = _context2.sent;
                        stock = _ref4.stock;
                        newStock = parseInt(stock) - parseInt(quantity);
                        _context2.next = 7;
                        return _models2.default.Article.findByIdAndUpdate({ _id: idArticle }, { stock: newStock });

                    case 7:
                        return _context2.abrupt('return', _context2.sent);

                    case 8:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function decrementStock(_x3, _x4) {
        return _ref3.apply(this, arguments);
    };
}();

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
    add: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
            var resp, details;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            _context3.next = 3;
                            return _models2.default.Sale.create(req.body);

                        case 3:
                            resp = _context3.sent;

                            //Updating Stock Articles
                            details = req.body.details;

                            details.map(function (x) {
                                return decrementStock(x._id, x.quantity);
                            });
                            res.status(201).send(resp);
                            _context3.next = 13;
                            break;

                        case 9:
                            _context3.prev = 9;
                            _context3.t0 = _context3['catch'](0);

                            res.status(500).send({
                                message: 'Error Inserting a new Sale with Body: ' + req.body
                            });
                            next(_context3.t0);

                        case 13:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined, [[0, 9]]);
        }));

        return function add(_x5, _x6, _x7) {
            return _ref5.apply(this, arguments);
        };
    }(),
    query: function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
            var resp;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.prev = 0;
                            _context4.next = 3;
                            return _models2.default.Sale.findById({ _id: req.query.id }).populate('users', { name: 1 }).populate('persons', { name: 1 });

                        case 3:
                            resp = _context4.sent;

                            if (!resp) {
                                res.status(404).send({ message: 'The Sale not exist with the Query: ' + req.query.id });
                            } else {
                                res.status(200).send(resp);
                            }
                            _context4.next = 11;
                            break;

                        case 7:
                            _context4.prev = 7;
                            _context4.t0 = _context4['catch'](0);

                            res.status(500).send({
                                message: 'Error Executing the Query ' + req.query.id
                            });
                            next(_context4.t0);

                        case 11:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined, [[0, 7]]);
        }));

        return function query(_x8, _x9, _x10) {
            return _ref6.apply(this, arguments);
        };
    }(),
    list: function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
            var pattern, resp;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.prev = 0;
                            pattern = req.query.filter;
                            _context5.next = 4;
                            return _models2.default.Sale.find({ $or: [{ 'num_receipt': new RegExp(pattern, 'i') }, { 'serie_receipt': new RegExp(pattern, 'i') }] }).populate('users', { name: 1 }).populate('persons', { name: 1 }).sort({ 'createdAt': -1 });

                        case 4:
                            resp = _context5.sent;

                            res.status(200).send(resp);
                            _context5.next = 12;
                            break;

                        case 8:
                            _context5.prev = 8;
                            _context5.t0 = _context5['catch'](0);

                            res.status(500).send({
                                message: 'Not Exists Sale in the Database...'
                            });
                            next(_context5.t0);

                        case 12:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined, [[0, 8]]);
        }));

        return function list(_x11, _x12, _x13) {
            return _ref7.apply(this, arguments);
        };
    }(),
    activate: function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res, next) {
            var resp, details;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.prev = 0;
                            _context6.next = 3;
                            return _models2.default.Sale.findByIdAndUpdate({ _id: req.body.id }, { state: 1 });

                        case 3:
                            resp = _context6.sent;
                            details = resp.details;

                            details.map(function (x) {
                                return decrementStock(x._id, x.quantity);
                            });
                            res.status(201).send(resp);
                            _context6.next = 13;
                            break;

                        case 9:
                            _context6.prev = 9;
                            _context6.t0 = _context6['catch'](0);

                            res.status(500).send({
                                message: 'Error Activating a Sale with id: ' + req.body.id
                            });
                            next(_context6.t0);

                        case 13:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, undefined, [[0, 9]]);
        }));

        return function activate(_x14, _x15, _x16) {
            return _ref8.apply(this, arguments);
        };
    }(),
    deactivate: function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res, next) {
            var resp, details;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.prev = 0;
                            _context7.next = 3;
                            return _models2.default.Sale.findByIdAndUpdate({ _id: req.body.id }, { state: 0 });

                        case 3:
                            resp = _context7.sent;
                            details = resp.details;

                            details.map(function (x) {
                                return incrementStock(x._id, x.quantity);
                            });
                            res.status(201).send(resp);
                            _context7.next = 13;
                            break;

                        case 9:
                            _context7.prev = 9;
                            _context7.t0 = _context7['catch'](0);

                            res.status(500).send({
                                message: 'Error Deactivating a Sale with id: ' + req.body.id
                            });
                            next(_context7.t0);

                        case 13:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, undefined, [[0, 9]]);
        }));

        return function deactivate(_x17, _x18, _x19) {
            return _ref9.apply(this, arguments);
        };
    }(),
    getSalesLast12Months: function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res, next) {
            var response;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            _context8.prev = 0;
                            _context8.next = 3;
                            return _models2.default.Sale.aggregate([{
                                $group: {
                                    _id: {
                                        month: { $month: "$createdAt" },
                                        year: { $year: "$createdAt" }
                                    },
                                    total: { $sum: "$total" },
                                    number: { $sum: 1 }
                                }
                            }, {
                                $sort: {
                                    "_id.year": -1, "_id.month": -1
                                }
                            }]).limit(12);

                        case 3:
                            response = _context8.sent;

                            res.status(200).json(response);
                            _context8.next = 11;
                            break;

                        case 7:
                            _context8.prev = 7;
                            _context8.t0 = _context8['catch'](0);

                            res.status(500).send({
                                message: 'Error GettingSalesLast12Months a Sale with id: ' + req.body.id
                            });
                            next(_context8.t0);

                        case 11:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, undefined, [[0, 7]]);
        }));

        return function getSalesLast12Months(_x20, _x21, _x22) {
            return _ref10.apply(this, arguments);
        };
    }()
};
//# sourceMappingURL=SaleController.js.map