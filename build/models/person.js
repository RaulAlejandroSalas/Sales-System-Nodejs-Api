'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var personSchema = new _mongoose.Schema({
    type_person: { type: String, maxlength: 20, required: true },
    name: { type: String, maxlength: 50, unique: true, required: true },
    type_document: { type: String, maxlength: 20 },
    num_document: { type: String, maxlength: 20 },
    address: { type: String, maxlength: 70 },
    phone: { type: String, maxlength: 20 },
    email: { type: String, maxlength: 50, unique: true },
    state: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
});

var person = _mongoose2.default.model('persons', personSchema);

exports.default = person;
//# sourceMappingURL=person.js.map