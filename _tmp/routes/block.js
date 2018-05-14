'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _block = require('../controllers/block');

var _block2 = _interopRequireDefault(_block);

var _mocks = require('../constants/mocks');

var mocks = _interopRequireWildcard(_mocks);

var _errors = require('../constants/errors');

var errors = _interopRequireWildcard(_errors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blockRouter = _express2.default.Router();

blockRouter.post('/block', function (req, res) {
    var _req$body = req.body,
        name = _req$body.name,
        content = _req$body.content;


    (0, _block.addBlock)(name, content, function (err, block) {
        if (err) {
            res.status(400).send({ error: err.message }).end();
        } else {
            res.status(200).send(block).end();
        }
    });
});

blockRouter.get('/block/:id', function (req, res) {
    var id = req.params.id;


    (0, _block.queryBlockById)(id, function (err, block) {
        if (err) {
            res.status(422).send({ error: err.message }).end();
        } else {
            res.status(200).send(block).end();
        }
    });
});

blockRouter.post('/block/:id', function (req, res) {
    res.status(405).send({ error: 'This method is not allowed under this endpoint' }).end();
});

exports.default = blockRouter;