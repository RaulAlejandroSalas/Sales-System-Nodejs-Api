'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var categorySchema = new _mongoose.Schema({
    name: { type: String, maxlength: 50, unique: true, required: true },
    description: { type: String, maxlength: 255 },
    state: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
});

var category = _mongoose2.default.model('categories', categorySchema);
exports.default = category;
//# sourceMappingURL=category.js.map