"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _reactMaterialUiCarousel = _interopRequireDefault(require("react-material-ui-carousel"));

var _useAdminly2 = _interopRequireDefault(require("../hooks/useAdminly"));

var _useResponsive2 = _interopRequireDefault(require("../hooks/useResponsive"));

var _iconsMaterial = require("@mui/icons-material");

var _excluded = ["collection", "variant", "sortBy", "sortDirection", "filters", "renderItem", "perPage", "searchable", "autoPlay", "animation", "label", "xs", "md", "lg", "xl"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MuiCarousel = function MuiCarousel(_ref) {
  var collection = _ref.collection,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'list' : _ref$variant,
      _ref$sortBy = _ref.sortBy,
      sortBy = _ref$sortBy === void 0 ? 'id' : _ref$sortBy,
      _ref$sortDirection = _ref.sortDirection,
      sortDirection = _ref$sortDirection === void 0 ? 'asc' : _ref$sortDirection,
      filters = _ref.filters,
      renderItem = _ref.renderItem,
      _ref$perPage = _ref.perPage,
      perPage = _ref$perPage === void 0 ? 16 : _ref$perPage,
      _ref$searchable = _ref.searchable,
      searchable = _ref$searchable === void 0 ? false : _ref$searchable,
      _ref$autoPlay = _ref.autoPlay,
      autoPlay = _ref$autoPlay === void 0 ? false : _ref$autoPlay,
      _ref$animation = _ref.animation,
      animation = _ref$animation === void 0 ? 'slide' : _ref$animation,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? "Collection" : _ref$label,
      _ref$xs = _ref.xs,
      xs = _ref$xs === void 0 ? 12 : _ref$xs,
      _ref$md = _ref.md,
      md = _ref$md === void 0 ? 6 : _ref$md,
      _ref$lg = _ref.lg,
      lg = _ref$lg === void 0 ? 4 : _ref$lg,
      _ref$xl = _ref.xl,
      xl = _ref$xl === void 0 ? 3 : _ref$xl,
      props = _objectWithoutProperties(_ref, _excluded);

  var defaultQuery = {
    filters: filters,
    sort_by: sortBy,
    sort_direction: sortDirection,
    page: 1,
    per_page: perPage
  };

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      group = _useState2[0],
      setGroup = _useState2[1];

  var _useState3 = (0, _react.useState)(3),
      _useState4 = _slicedToArray(_useState3, 2),
      numItemsPerRow = _useState4[0],
      setNumItemsPerRow = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      hideNavArrows = _useState6[0],
      setHideNavArrows = _useState6[1];

  var _useResponsive = (0, _useResponsive2["default"])(),
      isTablet = _useResponsive.isTablet,
      isMobile = _useResponsive.isMobile,
      isDesktop = _useResponsive.isDesktop;

  var _useAdminly = (0, _useAdminly2["default"])({
    collection: collection
  }),
      isLoading = _useAdminly.isLoading,
      isLoaded = _useAdminly.isLoaded,
      resources = _useAdminly.resources,
      findMany = _useAdminly.findMany;

  var handleGroupResources = function handleGroupResources() {
    var newGroup = [];

    if (resources.length > 0) {
      for (var i = 0; i < resources.length; i = i + numItemsPerRow) {
        var numItems = Math.min(i + numItemsPerRow, resources.length);
        newGroup[i / numItemsPerRow] = resources.slice(i, numItems);
      }

      setGroup(newGroup);
    }
  };

  (0, _react.useEffect)(function () {
    if (isMobile) {
      setNumItemsPerRow(12 / xs);
    } else if (isTablet) {
      setNumItemsPerRow(12 / md);
    } else if (isDesktop) {
      setNumItemsPerRow(12 / lg);
    } else {
      setNumItemsPerRow(12 / xl);
    }
  }, [isMobile, isTablet, isDesktop]);
  (0, _react.useEffect)(function () {
    handleGroupResources();

    if ((resources === null || resources === void 0 ? void 0 : resources.length) <= numItemsPerRow) {
      setHideNavArrows(true);
    } else {
      setHideNavArrows(false);
    }
  }, [resources === null || resources === void 0 ? void 0 : resources.length, numItemsPerRow]);
  (0, _react.useEffect)(function () {
    handleGroupResources();
  }, [resources]);
  (0, _react.useEffect)(function () {
    findMany(defaultQuery);
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: sx.root
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: sx.subtitle
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, label)), isLoaded && /*#__PURE__*/_react["default"].createElement(_reactMaterialUiCarousel["default"], {
    autoPlay: autoPlay,
    navButtonsAlwaysVisible: true,
    PrevIcon: /*#__PURE__*/_react["default"].createElement(_iconsMaterial.ChevronLeft, {
      sx: sx.icon
    }),
    NextIcon: /*#__PURE__*/_react["default"].createElement(_iconsMaterial.ChevronRight, {
      sx: sx.icon
    }),
    navButtonsWrapperProps: sx.navButtonsWrapper,
    navButtonsProps: sx.navButtons,
    navButtonsAlwaysInvisible: hideNavArrows,
    animation: 'slide'
  }, group === null || group === void 0 ? void 0 : group.map(function (row, i) {
    return /*#__PURE__*/_react["default"].createElement(_material.Box, {
      key: i,
      sx: sx.row
    }, (row === null || row === void 0 ? void 0 : row.length) > 0 && row.map(function (item, index) {
      return renderItem(item, index);
    }));
  })), isLoading && /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: sx.loading
  }, /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, null)));
};

var _default = MuiCarousel;
exports["default"] = _default;
var sx = {
  root: {
    minHeight: 480
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 1,
    md: {
      margin: 0,
      justifyContent: 'center'
    }
  },
  subtitle: {
    my: 1
  },
  icon: {
    color: 'common.white',
    height: 44,
    width: 44
  },
  loading: {
    m: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  navButtonsWrapper: {
    style: {
      bottom: '80px',
      top: 'unset'
    }
  },
  navButtons: {
    style: {
      backgroundColor: 'transparent'
    }
  }
};