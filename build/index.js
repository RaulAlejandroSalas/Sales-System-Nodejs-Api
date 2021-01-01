'use strict';

require('@babel/polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mongodb Connection
 * 
*/
_mongoose2.default.Promise = global.Promise;
var dbURL = 'mongodb+srv://admin:admin@cluster0.0r1vk.mongodb.net/sistemafacturaciondb?retryWrites=true&w=majority';
_mongoose2.default.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(function () {
  return console.log("Connected to Mongodb on port 27017...");
}).catch(console.error);

var app = (0, _express2.default)();

/**
 * Use Definitions
 * 
 */
app.use((0, _morgan2.default)('dev'));
app.use((0, _cors2.default)());
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

/**
 * Set Definitions
 */
app.set('port', process.env.PORT || 3000);

/**
 * Routes
 * 
*/
app.use('/api', _routes2.default);
/**
 * TODO Controller
 * 
*/
app.get('/hello', function (req, res) {
  res.send("Hello World...");
});

app.listen(app.get('port'), function () {
  console.log('Server is running on port ' + app.get('port'));
});
//# sourceMappingURL=index.js.map