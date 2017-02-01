'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.default = function (artistObj) {
  var artist = {
    id: (0, _blueimpMd2.default)(Date()),
    name: 'artist',
    genres: [(0, _genre.GenreModel)()]
  };

  var newArtist = (0, _assign2.default)(artist, artistObj);

  return new _ArtistModel(newArtist);
};

var _genre = require('./genre.model.es5');

var _blueimpMd = require('blueimp-md5');

var _blueimpMd2 = _interopRequireDefault(_blueimpMd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ArtistModel = function _ArtistModel(_ref) {
  var id = _ref.id;
  var name = _ref.name;
  var genres = _ref.genres;
  (0, _classCallCheck3.default)(this, _ArtistModel);

  this.id = id;
  this.name = name;
  this.genres = genres;
};
