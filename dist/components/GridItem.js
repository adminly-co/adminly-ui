"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("@mui/material/Card"));

var _CardActions = _interopRequireDefault(require("@mui/material/CardActions"));

var _CardContent = _interopRequireDefault(require("@mui/material/CardContent"));

var _CardMedia = _interopRequireDefault(require("@mui/material/CardMedia"));

var _CardActionArea = _interopRequireDefault(require("@mui/material/CardActionArea"));

var _Typography = _interopRequireDefault(require("@mui/material/Typography"));

var _material = require("@mui/material");

var _iconsMaterial = require("@mui/icons-material");

var _useMenu2 = _interopRequireDefault(require("../hooks/useMenu"));

var _excluded = ["primary", "secondary", "image", "onClick", "onEdit", "onDelete", "secondaryActions", "actions", "xs", "sm", "md", "lg"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DashGridItem = function DashGridItem(_ref) {
  var primary = _ref.primary,
      secondary = _ref.secondary,
      image = _ref.image,
      onClick = _ref.onClick,
      onEdit = _ref.onEdit,
      onDelete = _ref.onDelete,
      secondaryActions = _ref.secondaryActions,
      actions = _ref.actions,
      _ref$xs = _ref.xs,
      xs = _ref$xs === void 0 ? 12 : _ref$xs,
      _ref$sm = _ref.sm,
      sm = _ref$sm === void 0 ? 6 : _ref$sm,
      _ref$md = _ref.md,
      md = _ref$md === void 0 ? 4 : _ref$md,
      _ref$lg = _ref.lg,
      lg = _ref$lg === void 0 ? 3 : _ref$lg,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useMenu = (0, _useMenu2["default"])(),
      open = _useMenu.open,
      anchorEl = _useMenu.anchorEl,
      closeMenu = _useMenu.closeMenu,
      openMenu = _useMenu.openMenu;

  var renderImage = function renderImage() {
    return /*#__PURE__*/_react["default"].createElement(_CardMedia["default"], {
      component: "img",
      height: "140",
      image: image,
      alt: primary
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: xs,
    sm: sm,
    md: md,
    lg: lg
  }, /*#__PURE__*/_react["default"].createElement(_Card["default"], {
    sx: sx.card
  }, onClick && /*#__PURE__*/_react["default"].createElement(_CardActionArea["default"], {
    onClick: onClick
  }, image && renderImage()), !onClick && image && renderImage(), /*#__PURE__*/_react["default"].createElement(_CardContent["default"], {
    sx: sx.cardContent
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    gutterBottom: true,
    variant: "h5",
    component: "div"
  }, primary), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "text.secondary"
  }, secondary)), (onEdit || onDelete || actions) && /*#__PURE__*/_react["default"].createElement(_CardActions["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: sx.actions
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, null, actions), /*#__PURE__*/_react["default"].createElement(_material.Box, null, (onEdit || onDelete) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: openMenu
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.MoreHoriz, null)), /*#__PURE__*/_react["default"].createElement(_material.Menu, {
    open: open,
    onClose: closeMenu,
    anchorEl: anchorEl
  }, onEdit && /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    onClick: onEdit
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemText, null, "Edit")), onDelete && /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    onClick: onDelete
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemText, null, "Delete")))))))));
};

var _default = DashGridItem;
exports["default"] = _default;
var sx = {
  actions: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  card: {
    width: '100%'
  },
  cardContent: {
    height: 140,
    overflow: 'hidden'
  }
};