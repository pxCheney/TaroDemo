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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _componentsRn = __webpack_require__(/*! @tarojs/components-rn */ "@tarojs/components-rn");

var _taroRouterRn = __webpack_require__(/*! @tarojs/taro-router-rn */ "@tarojs/taro-router-rn");

var _taroRouterRn2 = _interopRequireDefault(_taroRouterRn);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _taroRn = __webpack_require__(/*! @tarojs/taro-rn */ "@tarojs/taro-rn");

var _taroReduxRn = __webpack_require__(/*! @tarojs/taro-redux-rn */ "@tarojs/taro-redux-rn");

var _index = __webpack_require__(/*! ./store/index */ "./src/store/index.js");

var _index2 = _interopRequireDefault(_index);

var _app = __webpack_require__(/*! ./app.scss */ "./src/app.scss");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var assetsImagesTabbarProfileSelectedPng = require('././assets/Images/tabbar/profile_selected.png');

var assetsImagesTabbarProfilePng = require('././assets//Images/tabbar/profile.png');

var assetsImagesTabbarAcademySelectedPng = require('././assets/Images/tabbar/academy_selected.png');

var assetsImagesTabbarAcademyPng = require('././assets//Images/tabbar/academy.png');

var assetsImagesTabbarConnectSelectedPng = require('././assets/Images/tabbar/connect_selected.png');

var assetsImagesTabbarConnectPng = require('././assets/Images/tabbar/connect.png');

var assetsImagesTabbarHomtSelectedPng = require('././assets/Images/tabbar/homt_selected.png');

var assetsImagesTabbarHomePng = require('././assets/Images/tabbar/home.png');

var pagesProfileIndex = require('./pages/profile/index').default;

var pagesAcademyIndex = require('./pages/academy/index').default;

var pagesConnectionIndex = require('./pages/connection/index').default;

var pagesHomeIndex = require('./pages/home/index').default;

var Taro = require('@tarojs/taro-rn');
/* eslint-disable react/sort-comp */

var appStyleSheet = require('./index_styles').default;

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

var _styleSheet = appStyleSheet;
var store = (0, _index2.default)();

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props, context) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props, context));

    Taro._$app = _this;
    _this.RootStack = _taroRouterRn2.default.initRouter([['pages/home/index', pagesHomeIndex], ['pages/connection/index', pagesConnectionIndex], ['pages/academy/index', pagesAcademyIndex], ['pages/profile/index', pagesProfileIndex]], Taro, {
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '医者无界',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        color: "#a6a6a6",
        selectedColor: "#07BFE3",
        backgroundColor: "white",
        borderStyle: 'black',
        list: [{
          pagePath: 'pages/home/index',
          iconPath: assetsImagesTabbarHomePng,
          selectedIconPath: assetsImagesTabbarHomtSelectedPng,
          text: '首页'
        }, {
          pagePath: 'pages/connection/index',
          iconPath: assetsImagesTabbarConnectPng,
          selectedIconPath: assetsImagesTabbarConnectSelectedPng,
          text: '好友'
        }, {
          pagePath: 'pages/academy/index',
          iconPath: assetsImagesTabbarAcademyPng,
          selectedIconPath: assetsImagesTabbarAcademySelectedPng,
          text: '学院'
        }, {
          pagePath: 'pages/profile/index',
          iconPath: assetsImagesTabbarProfilePng,
          selectedIconPath: assetsImagesTabbarProfileSelectedPng,
          text: '我的'
        }]
      }
    });
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.componentDidShow();
    }
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'componentDidCatchError',
    value: function componentDidCatchError() {} // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数


  }, {
    key: 'render',
    value: function render() {
      var RootStack = this.RootStack;
      return _react2.default.createElement(
        _taroReduxRn.Provider,
        { store: store },
        _react2.default.createElement(
          _componentsRn.Provider,
          null,
          _react2.default.createElement(RootStack, null)
        )
      );
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.componentDidHide && this.componentDidHide();
    }
  }]);

  return App;
}(_taroRn.Component);

Taro.initNativeApi(Taro);
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});
exports.default = App;

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "./src/reducers/counter.js":
/*!*********************************!*\
  !*** ./src/reducers/counter.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = counter;

var _counter = __webpack_require__(/*! ../constants/counter */ "./src/constants/counter.js");

var INITIAL_STATE = {
  num: 0
};
function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _counter.ADD:
      return _extends({}, state, {
        num: state.num + 1
      });

    case _counter.MINUS:
      return _extends({}, state, {
        num: state.num - 1
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "redux");

var _counter = __webpack_require__(/*! ./counter */ "./src/reducers/counter.js");

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  counter: _counter2.default
});

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = configStore;

var _redux = __webpack_require__(/*! redux */ "redux");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = __webpack_require__(/*! ../reducers/index */ "./src/reducers/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : _redux.compose;
var middlewares = [_reduxThunk2.default];

if (true) {
  middlewares.push(__webpack_require__(/*! redux-logger */ "redux-logger").createLogger());
}

var enhancer = composeEnhancers(_redux.applyMiddleware.apply(undefined, middlewares) // other store enhancers if any
);
function configStore() {
  var store = (0, _redux.createStore)(_index2.default, enhancer);
  return store;
}

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

/***/ "@tarojs/taro-router-rn":
/*!*****************************************!*\
  !*** external "@tarojs/taro-router-rn" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tarojs/taro-router-rn");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });