'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.LocationModel = LocationModel;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _LocationModel = function _LocationModel(_ref) {
  var country = _ref.country;
  var address = _ref.address;
  var city = _ref.city;
  var state = _ref.state;
  var zip = _ref.zip;
  (0, _classCallCheck3.default)(this, _LocationModel);

  this.country = country;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zip = zip;
};

function LocationModel(locationObj) {
  var location = {
    country: 'USA',
    address: '1234 somewhere',
    city: 'Rockford',
    state: 'MI',
    zip: '49341'
  };

  var newLocation = (0, _assign2.default)(location, locationObj);

  return new _LocationModel(newLocation);
}

