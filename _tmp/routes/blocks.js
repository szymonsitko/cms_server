'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _block = require('../models/block');

var _block2 = _interopRequireDefault(_block);

var _errors = require('../constants/errors');

var errors = _interopRequireWildcard(_errors);

var _mocks = require('../constants/mocks');

var mocks = _interopRequireWildcard(_mocks);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blocksRouter = _express2.default.Router();

blocksRouter.get('/blocks', function (req, res) {
    _block2.default.find({}, function (err, blocks) {
        res.status(200).send(blocks).end();
    });
});

blocksRouter.post('/blocks', function (req, res) {
    res.status(405).send(errors.INVALID_METHOD).end();
});

blocksRouter.post('/blocks/:id', function (req, res) {
    res.status(405).send(errors.INVALID_METHOD).end();
});

exports.default = blocksRouter;