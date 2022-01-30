"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useDash2 = _interopRequireDefault(require("../hooks/useDash"));

var _SearchInput = _interopRequireDefault(require("./SearchInput"));

var _material = require("@mui/material");

var _Placeholder = _interopRequireDefault(require("./Placeholder"));

var _iconsMaterial = require("@mui/icons-material");

var _excluded = ["collection", "filters", "perPage", "renderItem", "searchable", "sortBy", "sortDirection", "variant"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DataQuery = function DataQuery(_ref) {
  var collection = _ref.collection,
      filters = _ref.filters,
      _ref$perPage = _ref.perPage,
      perPage = _ref$perPage === void 0 ? 10 : _ref$perPage,
      renderItem = _ref.renderItem,
      _ref$searchable = _ref.searchable,
      searchable = _ref$searchable === void 0 ? false : _ref$searchable,
      _ref$sortBy = _ref.sortBy,
      sortBy = _ref$sortBy === void 0 ? 'id' : _ref$sortBy,
      _ref$sortDirection = _ref.sortDirection,
      sortDirection = _ref$sortDirection === void 0 ? 'asc' : _ref$sortDirection,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'list' : _ref$variant,
      props = _objectWithoutProperties(_ref, _excluded);

  var defaultQuery = {
    filters: filters,
    sort_by: sortBy,
    sort_direction: sortDirection,
    page: 1,
    per_page: perPage
  };

  var _useDash = (0, _useDash2["default"])({
    collection: collection
  }),
      query = _useDash.query,
      setQuery = _useDash.setQuery,
      activeFilters = _useDash.activeFilters,
      setActiveFilters = _useDash.setActiveFilters,
      isLoading = _useDash.isLoading,
      isLoaded = _useDash.isLoaded,
      resource = _useDash.resource,
      resources = _useDash.resources,
      findMany = _useDash.findMany,
      updateResource = _useDash.update,
      deleteResource = _useDash.destroy,
      createResource = _useDash.create,
      loadMore = _useDash.loadMore,
      updateMany = _useDash.updateMany,
      deleteMany = _useDash.deleteMany,
      reloadMany = _useDash.reloadMany,
      setResource = _useDash.setResource,
      setResources = _useDash.setResources,
      sortAll = _useDash.sortAll,
      paginate = _useDash.paginate,
      page = _useDash.page,
      numPages = _useDash.numPages,
      totalCount = _useDash.totalCount,
      startIndex = _useDash.startIndex,
      endIndex = _useDash.endIndex;

  var handleChange = function handleChange(e) {
    setQuery(_objectSpread(_objectSpread({}, query), {}, {
      keywords: e.target.value
    }));
  };

  var handleSubmit = function handleSubmit(keywords) {
    findMany(_objectSpread(_objectSpread({}, query), {}, {
      keywords: keywords
    }));
  };

  (0, _react.useEffect)(function () {
    findMany(defaultQuery);
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, searchable && /*#__PURE__*/_react["default"].createElement(_SearchInput["default"], {
    value: query === null || query === void 0 ? void 0 : query.keywords,
    onChange: handleChange,
    onSubmit: handleSubmit,
    margin: "normal",
    variant: "outlined",
    fullWidth: true
  }), isLoading && !isLoaded && /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: sx.loading
  }, /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, null)), isLoaded && ((resources === null || resources === void 0 ? void 0 : resources.length) > 0 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, variant === 'list' ? /*#__PURE__*/_react["default"].createElement(_material.List, null, resources.map(function (item, index) {
    return renderItem(item, index);
  })) : /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 1
  }, resources.map(function (item, index) {
    return renderItem(item, index);
  })), page < numPages && /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: sx.loadMore
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    sx: sx.loadMoreButton,
    onClick: loadMore,
    endIcon: isLoading ? /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, {
      size: 20
    }) : /*#__PURE__*/_react["default"].createElement(_iconsMaterial.ExpandMore, null)
  }, "Load More"))) : /*#__PURE__*/_react["default"].createElement(_material.Box, {
    p: 1
  }, /*#__PURE__*/_react["default"].createElement(_Placeholder["default"], {
    title: "No Results",
    subtitle: "Please try another search."
  }))));
};

DataQuery.propTypes = {
  collection: PropTypes.string.isRequired,
  filters: PropTypes.object,
  perPage: PropTypes.number,
  renderItem: PropTypes.func.isRequired,
  searchable: PropTypes.bool,
  sortBy: PropTypes.string,
  sortDirection: PropTypes.string,
  variant: PropTypes.oneOf(['list', 'grid'])
};
var _default = DataQuery;
exports["default"] = _default;
var sx = {
  loading: {
    m: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  loadMore: {
    m: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  loadMoreButton: {
    color: 'text.secondary'
  }
};