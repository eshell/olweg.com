'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.default = function (eventObj) {
  var event = {
    id: (0, _utils.randomID)(),
    title: 'title',
    time: (0, _moment2.default)().format('M/D/YYYY h:mma'),
    where: (0, _location.LocationModel)(),
    genres: [(0, _genre.GenreModel)(), (0, _genre.GenreModel)(), (0, _genre.GenreModel)()]
  };

  var newEvent = (0, _assign2.default)(event, eventObj);
  return new _EventModel(newEvent);
};

var _genre = require('./genre.model.es5');

var _location = require('./location.model.es5');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('../utils/index.es5');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _EventModel = function _EventModel(_ref) {
  var id = _ref.id;
  var title = _ref.title;
  var time = _ref.time;
  var where = _ref.where;
  var genres = _ref.genres;
  (0, _classCallCheck3.default)(this, _EventModel);

  this.id = id;
  this.title = title;
  this.time = time;
  this.where = where;
  this.genres = genres;
};
