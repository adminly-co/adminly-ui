"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _iconsMaterial = require("@mui/icons-material");

var _useMenu2 = _interopRequireDefault(require("../hooks/useMenu"));

var _excluded = ["primary", "secondary", "image", "onClick", "onEdit", "onDelete", "secondaryActions"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DashListItem = function DashListItem(_ref) {
  var primary = _ref.primary,
      secondary = _ref.secondary,
      image = _ref.image,
      onClick = _ref.onClick,
      onEdit = _ref.onEdit,
      onDelete = _ref.onDelete,
      secondaryActions = _ref.secondaryActions,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useMenu = (0, _useMenu2["default"])(),
      open = _useMenu.open,
      anchorEl = _useMenu.anchorEl,
      closeMenu = _useMenu.closeMenu,
      openMenu = _useMenu.openMenu;

  return /*#__PURE__*/_react["default"].createElement(_material.ListItem, {
    button: onClick ? true : false,
    onClick: onClick && onClick
  }, image && /*#__PURE__*/_react["default"].createElement(_material.ListItemIcon, null, /*#__PURE__*/_react["default"].createElement(_material.Avatar, {
    src: image
  })), /*#__PURE__*/_react["default"].createElement(_material.ListItemText, {
    primary: primary,
    secondary: secondary
  }), (onEdit || onDelete) && /*#__PURE__*/_react["default"].createElement(_material.ListItemSecondaryAction, null, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: openMenu
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.MoreHoriz, null)), /*#__PURE__*/_react["default"].createElement(_material.Menu, {
    open: open,
    onClose: closeMenu,
    anchorEl: anchorEl
  }, onEdit && /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    onClick: onEdit
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemText, null, "Edit")), onDelete && /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    onClick: onDelete
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemText, null, "Delete")))));
};

var _default = DashListItem;
exports["default"] = _default;