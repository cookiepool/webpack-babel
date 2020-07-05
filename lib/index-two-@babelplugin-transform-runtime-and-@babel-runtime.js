"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/web.timers");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var a = 100;
var b = 200;

var func = function func() {
  console.log('箭头函数！');
};

var isHas = [1, 2, 3].includes(2);
var p = new Promise(function (resolve, reject) {
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
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
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
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('start');
            _context.next = 3;
            return delayFunc()["catch"](function (err) {
              console.log(err);
            });

          case 3:
            awaitValue = _context.sent;
            console.log('end');
            return _context.abrupt("return", awaitValue);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _testTwo.apply(this, arguments);
}

testTwo().then(function (res) {
  console.log(res);
});