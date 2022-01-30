"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validFilter = exports.emptyQuery = exports.dashApi = exports.buildQuery = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var emptyQuery = {
  keywords: null,
  page: 1,
  per_page: 20,
  filters: [],
  order: 'id:desc'
};
exports.emptyQuery = emptyQuery;

var buildQuery = function buildQuery(params) {
  if (!params) return {};
  var sort_by = params.sort_by,
      sort_direction = params.sort_direction,
      keywords = params.keywords,
      filters = params.filters,
      page = params.page,
      per_page = params.per_page;
  var query = {};

  if (page) {
    query = _objectSpread(_objectSpread({}, query), {}, {
      page: page
    });
  }

  if (per_page) {
    query = _objectSpread(_objectSpread({}, query), {}, {
      per_page: per_page
    });
  }

  if (sort_by && sort_direction) {
    query = _objectSpread(_objectSpread({}, query), {}, {
      order: "".concat(sort_by, ":").concat(sort_direction)
    });
  }

  if (filters) {
    var validFilters = filters.filter(validFilter).map(function (filter) {
      return "".concat(filter.field, ":").concat(filter.operator, ":").concat(filter.value);
    });

    if (validFilters.length >= 0) {
      query = _objectSpread(_objectSpread({}, query), {}, {
        filters: validFilters.join(',')
      });
    }
  }

  if (keywords && keywords != '') {
    query = _objectSpread(_objectSpread({}, query), {}, {
      keywords: keywords
    });
  }

  return query;
};

exports.buildQuery = buildQuery;

var validFilter = function validFilter(filter) {
  var field = filter.field,
      operator = filter.operator,
      value = filter.value;

  if (field != null && field != '' && operator != null && operator != '' && value != null && value != '') {
    return true;
  } else {
    return false;
  }
};

exports.validFilter = validFilter;

var dashApi = function dashApi(_ref) {
  var url = _ref.url,
      name = _ref.name,
      token = _ref.token;

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
  return {
    findOne: function () {
      var _findOne = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
        var _api$get;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (_api$get = api.get("".concat(url, "/").concat(id))) === null || _api$get === void 0 ? void 0 : _api$get.data;

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function findOne(_x) {
        return _findOne.apply(this, arguments);
      }

      return findOne;
    }(),
    findMany: function () {
      var _findMany = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
        var resp;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return api.get(url, {
                  params: params
                });

              case 2:
                resp = _context2.sent;
                return _context2.abrupt("return", {
                  data: resp.data,
                  meta: resp.meta
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function findMany(_x2) {
        return _findMany.apply(this, arguments);
      }

      return findMany;
    }(),
    create: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resource) {
        var res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return api.post(url, _defineProperty({}, name, resource));

              case 2:
                res = _context3.sent;
                return _context3.abrupt("return", res.data);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function create(_x3) {
        return _create.apply(this, arguments);
      }

      return create;
    }(),
    udpate: function () {
      var _udpate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(resource) {
        var res;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return api.put("".concat(url, "/").concat(resource.id), _defineProperty({}, name, resource));

              case 2:
                res = _context4.sent;
                return _context4.abrupt("return", res.data);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function udpate(_x4) {
        return _udpate.apply(this, arguments);
      }

      return udpate;
    }(),
    destroy: function () {
      var _destroy = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
        var res;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return api["delete"]("".concat(url, "/").concat(id));

              case 2:
                res = _context5.sent;
                return _context5.abrupt("return", res.data);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function destroy(_x5) {
        return _destroy.apply(this, arguments);
      }

      return destroy;
    }(),
    updateMany: function () {
      var _updateMany = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(ids, resource) {
        var res;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return api.post("".concat(url, "/update_many"), _defineProperty({
                  ids: ids
                }, name, resource));

              case 2:
                res = _context6.sent;
                return _context6.abrupt("return", res.data);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function updateMany(_x6, _x7) {
        return _updateMany.apply(this, arguments);
      }

      return updateMany;
    }(),
    deleteMany: function () {
      var _deleteMany = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(ids) {
        var res;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return api.post("".concat(url, "/delete_many"), {
                  ids: ids
                });

              case 2:
                res = _context7.sent;
                return _context7.abrupt("return", res.data);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function deleteMany(_x8) {
        return _deleteMany.apply(this, arguments);
      }

      return deleteMany;
    }()
  };
};

exports.dashApi = dashApi;