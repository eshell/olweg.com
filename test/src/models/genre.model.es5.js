'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.GenreModel = GenreModel;

var _random = require('../utils/random.es5');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _GenreModel = function _GenreModel(_ref) {
  var id = _ref.id;
  var name = _ref.name;
  (0, _classCallCheck3.default)(this, _GenreModel);

  this.id = id;
  this.name = name;
};

function GenreModel(genreObj) {
  var genre = {
    id: (0, _random.randomID)(),
    name: 'genre'
  };

  var newGenre = (0, _assign2.default)(genre, genreObj);

  return new _GenreModel(newGenre);
}
