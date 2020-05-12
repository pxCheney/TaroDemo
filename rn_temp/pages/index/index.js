module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/counter.js":
/*!********************************!*\
  !*** ./src/actions/counter.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minus = exports.add = undefined;
exports.asyncAdd = asyncAdd;

var _counter = __webpack_require__(/*! ../constants/counter */ "./src/constants/counter.js");

var add = exports.add = function add() {
  return {
    type: _counter.ADD
  };
};
var minus = exports.minus = function minus() {
  return {
    type: _counter.MINUS
  };
}; // 异步的action

function asyncAdd() {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(add());
    }, 2000);
  };
}

/***/ }),

/***/ "./src/constants/counter.js":
/*!**********************************!*\
  !*** ./src/constants/counter.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD = exports.ADD = 'ADD';
var MINUS = exports.MINUS = 'MINUS';

/***/ }),

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _taroRn = __webpack_require__(/*! @tarojs/taro-rn */ "@tarojs/taro-rn");

var _componentsRn = __webpack_require__(/*! @tarojs/components-rn */ "@tarojs/components-rn");

var _taroReduxRn = __webpack_require__(/*! @tarojs/taro-redux-rn */ "@tarojs/taro-redux-rn");

var _counter = __webpack_require__(/*! ../../actions/counter */ "./src/actions/counter.js");

var _index = __webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Taro = require('@tarojs/taro-rn');

var indexStyleSheet = require('./index_styles').default;

var _styleSheet = indexStyleSheet;

var Index = (_dec = (0, _taroReduxRn.connect)(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {
    add: function add() {
      dispatch((0, _counter.add)());
    },
    dec: function dec() {
      dispatch((0, _counter.minus)());
    },
    asyncAdd: function asyncAdd() {
      dispatch((0, _counter.asyncAdd)());
    }
  };
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _componentsRn.View,
        { style: _styleSheet[_index2.default["index"] || "index"] },
        _react2.default.createElement(
          _componentsRn.Button,
          { onClick: this.props.add, style: _styleSheet[_index2.default["add_btn"] || "add_btn"] },
          '+'
        ),
        _react2.default.createElement(
          _componentsRn.Button,
          { onClick: this.props.dec, style: _styleSheet[_index2.default["dec_btn"] || "dec_btn"] },
          '-'
        ),
        _react2.default.createElement(
          _componentsRn.Button,
          { onClick: this.props.asyncAdd, style: _styleSheet[_index2.default["dec_btn"] || "dec_btn"] },
          'async'
        ),
        _react2.default.createElement(
          _componentsRn.View,
          null,
          _react2.default.createElement(
            _componentsRn.Text,
            null,
            this.props.counter.num
          )
        ),
        _react2.default.createElement(
          _componentsRn.View,
          null,
          _react2.default.createElement(
            _componentsRn.Text,
            null,
            'Hello, World'
          )
        )
      );
    }
  }]);

  return Index;
}(_taroRn.Component), _class2.config = {
  navigationBarTitleText: '首页'
}, _temp)) || _class);
exports.default = Index;

/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"index":"src-pages-index-index__index--l4wmu"};

/***/ }),

/***/ "@tarojs/components-rn":
/*!****************************************!*\
  !*** external "@tarojs/components-rn" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tarojs/components-rn");

/***/ }),

/***/ "@tarojs/taro-redux-rn":
/*!****************************************!*\
  !*** external "@tarojs/taro-redux-rn" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tarojs/taro-redux-rn");

/***/ }),

/***/ "@tarojs/taro-rn":
/*!**********************************!*\
  !*** external "@tarojs/taro-rn" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tarojs/taro-rn");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });