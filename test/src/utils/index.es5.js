'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.randomID = randomID;
exports.isUndef = isUndef;
exports.setPageTitle = setPageTitle;

var _blueimpMd = require('blueimp-md5');

var _blueimpMd2 = _interopRequireDefault(_blueimpMd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function randomID() {
  return (0, _blueimpMd2.default)(Date() + Math.random());
}

function isUndef(v) {
  return (typeof v === 'undefined' ? 'undefined' : (0, _typeof3.default)(v)) === undefined;
}

function setPageTitle(title) {
  document.title = title;
}

