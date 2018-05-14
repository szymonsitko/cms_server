'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.queryBlockById = exports.addBlock = undefined;

var _block = require('../models/block');

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addBlock = function addBlock(name, content, callback) {
    var block = new _block2.default();
    block.name = name;
    block.content = content;

    block.save(callback);
};

var queryBlockById = function queryBlockById(id, callback) {
    _block2.default.find({ _id: id }, callback);
};

exports.addBlock = addBlock;
exports.queryBlockById = queryBlockById;