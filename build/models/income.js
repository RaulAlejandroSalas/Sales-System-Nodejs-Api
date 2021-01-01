'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var incomeSchema = new _mongoose.Schema({
    user: { type: _mongoose.Schema.ObjectId, ref: 'users', required: true },
    person: { type: _mongoose.Schema.ObjectId, ref: 'persons', required: true },
    type_receipt: { type: String, maxlength: 20, required: true },
    serie_receipt: { type: String, maxlength: 7 },
    num_receipt: { type: String, maxlength: 10, required: true },
    tax: { type: Number, required: true }, //Percent income
    total: { type: Number, required: true },
    details: [{
        _id: {
            type: String,
            required: true
        },
        article: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],
    state: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
});

var income = _mongoose2.default.model('incomes', incomeSchema);

exports.default = income;
//# sourceMappingURL=income.js.map