'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var articleSchema = new _mongoose.Schema({
    category: { type: _mongoose.Schema.ObjectId, ref: 'categories' },
    code: { type: String, maxlength: 64 },
    name: { type: String, maxlength: 50, unique: true, required: true },
    description: { type: String, maxlength: 255 },
    sale_price: { type: Number, required: true },
    stock: { type: Number, required: true },
    state: { type: Number, required: true, default: 1 },
    createdAt: { type: Date, default: Date.now }
});

var article = _mongoose2.default.model('articles', articleSchema);
exports.default = article;
//# sourceMappingURL=article.js.map