"use strict";

require("core-js/modules/es.array.includes");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/web.timers");

require("regenerator-runtime/runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    _classCallCheck(this, Animal);
  }

  _createClass(Animal, [{
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
  _testTwo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var awaitValue;
    return regeneratorRuntime.wrap(function _callee$(_context) {
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