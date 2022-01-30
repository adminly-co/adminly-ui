"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _excluded = ["icon", "title", "subtitle", "actions"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Placeholder = function Placeholder(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      subtitle = _ref.subtitle,
      actions = _ref.actions,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    p: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
  }, icon && /*#__PURE__*/_react["default"].createElement(_material.Avatar, {
    className: classes.avatar
  }, icon), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle1"
  }, title), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, subtitle), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.actions
  }, actions));
};

var _default = Placeholder;
exports["default"] = _default;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    avatar: {
      height: '50px',
      width: '50px',
      backgroundColor: theme.palette.common.white,
      marginBottom: theme.spacing(2),
      '&& .MuiSvgIcon-root': {
        color: theme.palette.text.secondary
      }
    },
    actions: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: theme.spacing(1)
    }
  };
});