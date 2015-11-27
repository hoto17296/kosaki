'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API_BASE_DEFAULT = 'http://xn--3ur52o1bb7099d.xn--u9jb933vm9i.com';

var Kosaki = (function () {
  function Kosaki(path, api_base) {
    _classCallCheck(this, Kosaki);

    this._api_base = api_base || API_BASE_DEFAULT;
    this._images = null;
    this._cb = [];
    this._load(path);
  }

  _createClass(Kosaki, [{
    key: '_load',
    value: function _load(path) {
      var _this = this;

      var url = this._api_base + '/images.json';
      _request2.default.get(url, function (err, res, body) {
        if (err) {
          return console.error(err);
        }
        _this._images = JSON.parse(body);
        _this._cb.map(function (cb) {
          return cb();
        });
      });
    }
  }, {
    key: 'random',
    value: function random(opts) {
      var images = this.get(opts);
      return images.length > 0 ? images[Math.floor(Math.random() * images.length)] : null;
    }
  }, {
    key: 'get',
    value: function get(opts) {
      var _this2 = this;

      if (!this._images) {
        return [];
      }
      return this._images.general.map(function (image) {
        return _this2._api_base + '/images/' + image.name;
      });
    }
  }, {
    key: 'onReady',
    value: function onReady(cb) {
      this._images === null ? this._cb.push(cb) : cb();
    }
  }]);

  return Kosaki;
})();

exports.default = Kosaki;

module.exports = exports.default;
