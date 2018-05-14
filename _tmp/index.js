'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _blocks = require('./routes/blocks');

var _blocks2 = _interopRequireDefault(_blocks);

var _block = require('./routes/block');

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect('mongodb://localhost/');


var db = _mongoose2.default.connection;

db.once('open', function () {
    console.log(new Date().toTimeString() + ' :: Connection to MongoDB has been established');
});

db.on('error', function (err) {
    console.log('Error: ' + err);
});

var app = (0, _express2.default)();

app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use('/', _blocks2.default);
app.use('/', _block2.default);

app.get('*', function (req, res) {
    res.status(404).send({ error: 'Requested endpoint is not defined.' }).end();
});

app.post('*', function (req, res) {
    res.status(404).send({ error: 'Requested endpoint is not defined.' }).end();
});

app.listen(3000, function () {
    console.log('Listening on 3000');
});