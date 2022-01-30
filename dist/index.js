"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DashContext", {
  enumerable: true,
  get: function get() {
    return _DashContext["default"];
  }
});
Object.defineProperty(exports, "DashProvider", {
  enumerable: true,
  get: function get() {
    return _DashProvider["default"];
  }
});
Object.defineProperty(exports, "useDash", {
  enumerable: true,
  get: function get() {
    return _useDash["default"];
  }
});

var _useDash = _interopRequireDefault(require("./hooks/useDash"));

var _DashContext = _interopRequireDefault(require("./context/DashContext"));

var _DashProvider = _interopRequireDefault(require("./context/DashProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }