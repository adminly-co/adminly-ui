"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Paper = _interopRequireDefault(require("@mui/material/Paper"));

var _InputBase = _interopRequireDefault(require("@mui/material/InputBase"));

var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));

var _reactFeather = require("react-feather");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SearchInput = function SearchInput(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "Search..." : _ref$placeholder;

  var onKeyPress = function onKeyPress(e) {
    if (e.key === 'Enter') {
      onSubmit(value);
    }
  };

  var onClear = function onClear() {
    onSubmit('');
  };

  return /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    sx: sx.paper
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    onClick: onSubmit,
    type: "submit",
    sx: sx.iconButton,
    "aria-label": "search"
  }, /*#__PURE__*/_react["default"].createElement(_reactFeather.Search, {
    size: 20
  })), /*#__PURE__*/_react["default"].createElement(_InputBase["default"], {
    sx: sx.inputBase,
    placeholder: placeholder,
    onChange: onChange,
    value: value || '',
    inputProps: {
      'aria-label': placeholder
    },
    onKeyPress: onKeyPress
  }), (value === null || value === void 0 ? void 0 : value.length) > 0 && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    onClick: onClear,
    type: "submit",
    sx: sx.iconButton,
    "aria-label": "search"
  }, /*#__PURE__*/_react["default"].createElement(_reactFeather.X, {
    size: 18
  })));
};

var _default = SearchInput;
exports["default"] = _default;
var sx = {
  paper: {
    p: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  inputBase: {
    ml: 1,
    flex: 1
  },
  iconButton: {
    p: '10px'
  }
};