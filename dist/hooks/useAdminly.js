"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _AdminlyContext = _interopRequireDefault(require("../context/AdminlyContext"));

var _excluded = ["collection", "defaultQuery"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useAdminly = function useAdminly(_ref) {
  var collection = _ref.collection,
      _ref$defaultQuery = _ref.defaultQuery,
      defaultQuery = _ref$defaultQuery === void 0 ? _utils.emptyQuery : _ref$defaultQuery,
      props = _objectWithoutProperties(_ref, _excluded);

  var _ref2 = (0, _react.useContext)(_AdminlyContext["default"]) || {},
      api = _ref2.api;

  var url = "/".concat(collection);

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var _useState3 = (0, _react.useState)([defaultQuery.filters]),
      _useState4 = _slicedToArray(_useState3, 2),
      activeFilters = _useState4[0],
      setActiveFilters = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoaded = _useState6[0],
      setIsLoaded = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isLoading = _useState8[0],
      setIsLoading = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isEmpty = _useState10[0],
      setIsEmpty = _useState10[1];

  var _useState11 = (0, _react.useState)(props.id),
      _useState12 = _slicedToArray(_useState11, 2),
      id = _useState12[0],
      setId = _useState12[1];

  var _useState13 = (0, _react.useState)({
    id: props.id
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      resource = _useState14[0],
      setResource = _useState14[1];

  var _useState15 = (0, _react.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      resources = _useState16[0],
      setResources = _useState16[1];

  var _useState17 = (0, _react.useState)({}),
      _useState18 = _slicedToArray(_useState17, 2),
      meta = _useState18[0],
      setMeta = _useState18[1];

  var _useState19 = (0, _react.useState)({}),
      _useState20 = _slicedToArray(_useState19, 2),
      params = _useState20[0],
      setParams = _useState20[1];

  var _useState21 = (0, _react.useState)(1),
      _useState22 = _slicedToArray(_useState21, 2),
      page = _useState22[0],
      setPage = _useState22[1];

  var _useState23 = (0, _react.useState)(20),
      _useState24 = _slicedToArray(_useState23, 2),
      perPage = _useState24[0],
      setPerPage = _useState24[1];

  var _useState25 = (0, _react.useState)(1),
      _useState26 = _slicedToArray(_useState25, 2),
      numPages = _useState26[0],
      setNumPages = _useState26[1];

  var _useState27 = (0, _react.useState)("id"),
      _useState28 = _slicedToArray(_useState27, 2),
      sortBy = _useState28[0],
      setSortBy = _useState28[1];

  var _useState29 = (0, _react.useState)('desc'),
      _useState30 = _slicedToArray(_useState29, 2),
      sortDirection = _useState30[0],
      setSortDirection = _useState30[1];

  var _useState31 = (0, _react.useState)(0),
      _useState32 = _slicedToArray(_useState31, 2),
      totalCount = _useState32[0],
      setTotalCount = _useState32[1];

  var showLoading = function showLoading() {
    return setIsLoading(true);
  };

  var hideLoading = function hideLoading() {
    return setIsLoading(false);
  };

  var findOne = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (id) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", null);

            case 2:
              showLoading();
              setIsLoaded(false);
              setId(id);
              _context.next = 7;
              return api.get("".concat(url, "/").concat(id));

            case 7:
              res = _context.sent;
              setResource(res.data);
              setMeta(res.meta);
              setIsLoaded(true);
              hideLoading();
              return _context.abrupt("return", res.data);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function findOne(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var findMany = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(query) {
      var loadMore,
          queryParams,
          res,
          _res$data,
          _args2 = arguments;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              loadMore = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;
              showLoading();
              queryParams = (0, _utils.buildQuery)(query);
              setQuery(query);
              setParams(params);

              if (!loadMore) {
                setIsLoaded(false);
              }

              _context2.next = 8;
              return api.get(url, {
                params: queryParams
              });

            case 8:
              res = _context2.sent;
              hideLoading();

              if (!res.data) {
                _context2.next = 16;
                break;
              }

              if (!loadMore) {
                setResources(res.data);
              } else {
                setResources([].concat(_toConsumableArray(resources), _toConsumableArray(res.data)));
              }

              if (res.meta) {
                setMeta(res.meta);
                setPage(res.meta.page);
                setPerPage(res.meta.per_page);
                setTotalCount(res.meta.total_count);
                setNumPages(Math.floor(res.meta.total_count / res.meta.per_page) + 1);
              }

              setIsEmpty((res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.length) > 0 ? false : true);
              setIsLoaded(true);
              return _context2.abrupt("return", res.data);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function findMany(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var loadMore = function loadMore() {
    var nextPage = page + 1;
    var loadMoreResults = true;
    findMany(_objectSpread(_objectSpread({}, query), {}, {
      page: nextPage
    }), loadMoreResults);
  };

  var save = function save(resource) {
    var showLoaders = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (resource !== null && resource !== void 0 && resource.id) {
      return update(resource, showLoaders);
    } else {
      return create(resource, showLoaders);
    }
  };

  var create = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resource) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              showLoading();
              _context3.next = 3;
              return api.post(url, _defineProperty({}, collection, resource));

            case 3:
              res = _context3.sent;

              if (res.data && res.data.id) {
                setResource(res.data);
                setIsLoaded(true);
                setId(res.data.id);
              }

              hideLoading();
              return _context3.abrupt("return", res.data);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function create(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();

  var update = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(resource) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setId(resource.id);
              showLoading();
              _context4.next = 4;
              return api.put("".concat(url, "/").concat(resource.id), _defineProperty({}, collection, resource));

            case 4:
              res = _context4.sent;
              hideLoading();
              return _context4.abrupt("return", res.data);

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function update(_x4) {
      return _ref6.apply(this, arguments);
    };
  }();

  var destroy = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
      var res;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              showLoading();
              _context5.next = 3;
              return api["delete"]("".concat(url, "/").concat(id));

            case 3:
              res = _context5.sent;
              setResource({
                data: {}
              });
              hideLoading();

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function destroy(_x5) {
      return _ref7.apply(this, arguments);
    };
  }();

  var updateMany = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(ids, resource) {
      var res;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              showLoading();
              _context6.next = 3;
              return api.post("".concat(url, "/update_many"), _defineProperty({
                ids: ids
              }, collection, resource));

            case 3:
              res = _context6.sent;
              hideLoading();
              return _context6.abrupt("return", res.data);

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function updateMany(_x6, _x7) {
      return _ref8.apply(this, arguments);
    };
  }();

  var deleteMany = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(ids) {
      var res;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              showLoading();
              _context7.next = 3;
              return api.post("".concat(url, "/delete_many"), {
                ids: ids
              });

            case 3:
              res = _context7.sent;
              hideLoading();
              return _context7.abrupt("return", res.data);

            case 6:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function deleteMany(_x8) {
      return _ref9.apply(this, arguments);
    };
  }();

  var paginate = function paginate(page) {
    findMany(_objectSpread(_objectSpread({}, query), {}, {
      page: page
    }));
  };

  var handleChange = function handleChange(ev) {
    var collection = ev.target.collection;
    var value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;
    setResource(_objectSpread(_objectSpread({}, resource), {}, _defineProperty({}, collection, value)));
  };

  var reloadOne = function reloadOne() {
    findOne(id);
  };

  var reloadMany = function reloadMany() {
    findMany(query);
  };

  var sortAll = function sortAll(_ref10) {
    var sortBy = _ref10.sortBy,
        sortDirection = _ref10.sortDirection;
    setSortBy(sortBy);
    setSortDirection(sortDirection);
    findMany(_objectSpread(_objectSpread({}, query), {}, {
      sort_by: sortBy,
      sort_direction: sortDirection
    }));
  };

  (0, _react.useEffect)(function () {
    if (props.id) setId(props.id);
  }, [props.id]);
  var startIndex = perPage * (page - 1) + 1;
  var endIndex = Math.min(perPage * page, perPage * (page - 1) + ((resources === null || resources === void 0 ? void 0 : resources.length) || 0));
  return {
    id: id,
    isLoading: isLoading,
    isLoaded: isLoaded,
    isEmpty: isEmpty,
    resource: resource,
    resources: resources,
    setResource: setResource,
    setResources: setResources,
    meta: meta,
    findOne: findOne,
    findMany: findMany,
    save: save,
    update: update,
    create: create,
    destroy: destroy,
    updateMany: updateMany,
    deleteMany: deleteMany,
    paginate: paginate,
    loadMore: loadMore,
    handleChange: handleChange,
    activeFilters: activeFilters,
    setActiveFilters: setActiveFilters,
    query: query,
    params: params,
    page: page,
    perPage: perPage,
    numPages: numPages,
    totalCount: totalCount,
    reloadOne: reloadOne,
    reloadMany: reloadMany,
    sortAll: sortAll,
    sortBy: sortBy,
    sortDirection: sortDirection,
    startIndex: startIndex,
    endIndex: endIndex
  };
};

var _default = useAdminly;
exports["default"] = _default;