"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _setTimeout2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _context;

var a = 100;
var b = 200;

var func = function func() {
  console.log('箭头函数！');
};

var isHas = (0, _includes["default"])(_context = [1, 2, 3]).call(_context, 2);
var p = new _promise["default"](function (resolve, reject) {
  resolve(100);
});

var Animal = /*#__PURE__*/function () {
  function Animal() {
    (0, _classCallCheck2["default"])(this, Animal);
  }

  (0, _createClass2["default"])(Animal, [{
    key: "say",
    value: function say() {
      console.log('lalala!');
    }
  }]);
  return Animal;
}();

function delayFunc() {
  return new _promise["default"](function (resolve, reject) {
    (0, _setTimeout2["default"])(function () {
      reject(2333);
    }, 2000);
  });
}

function testTwo() {
  return _testTwo.apply(this, arguments);
}

function _testTwo() {
  _testTwo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var awaitValue;
    return _regenerator["default"].wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('start');
            _context2.next = 3;
            return delayFunc()["catch"](function (err) {
              console.log(err);
            });

          case 3:
            awaitValue = _context2.sent;
            console.log('end');
            return _context2.abrupt("return", awaitValue);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _testTwo.apply(this, arguments);
}

testTwo().then(function (res) {
  console.log(res);
});