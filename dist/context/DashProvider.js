"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DashContext = _interopRequireDefault(require("./DashContext"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DashProvider = function DashProvider(_ref) {
  var token = _ref.token,
      url = _ref.url,
      children = _ref.children;

  var api = _axios["default"].create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    timeout: 30000
  });

  api.interceptors.response.use(function (resp) {
    return Promise.resolve(resp.data);
  }, function (error) {
    return Promise.reject(error.response);
  });
  var value = {
    api: api
  };
  return /*#__PURE__*/_react["default"].createElement(_DashContext["default"].Provider, {
    value: value
  }, children);
};

var _default = DashProvider;
exports["default"] = _default;