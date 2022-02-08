"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _styles = require("@mui/material/styles");

var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useResponsive = function useResponsive(_ref) {
  var props = _extends({}, _ref);

  var theme = (0, _styles.useTheme)();

  var _useState = (0, _react.useState)('lg'),
      _useState2 = _slicedToArray(_useState, 2),
      breakpoint = _useState2[0],
      setBreakpoint = _useState2[1];

  var isMobile = (0, _useMediaQuery["default"])(theme.breakpoints.down('sm'));
  var isTablet = (0, _useMediaQuery["default"])(theme.breakpoints.between('sm', 'md'));
  var isDesktop = (0, _useMediaQuery["default"])(theme.breakpoints.between('md', 'lg'));
  var isSuperLargeDesktop = (0, _useMediaQuery["default"])(theme.breakpoints.up('lg'));
  (0, _react.useEffect)(function () {
    if (isMobile) setBreakpoint('sm');
    if (isTablet) setBreakpoint('md');
    if (isDesktop) setBreakpoint('lg');
    if (isSuperLargeDesktop) setBreakpoint('xl');
  }, [isMobile, isTablet, isDesktop, isSuperLargeDesktop]);
  return {
    breakpoint: breakpoint,
    isMobile: isMobile,
    isTablet: isTablet,
    isDesktop: isDesktop,
    isSuperLargeDesktop: isSuperLargeDesktop
  };
};

var _default = useResponsive;
exports["default"] = _default;