'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomID = randomID;

var _blueimpMd = require('blueimp-md5');

var _blueimpMd2 = _interopRequireDefault(_blueimpMd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function randomID() {
  return (0, _blueimpMd2.default)(Date() + Math.random());
}

