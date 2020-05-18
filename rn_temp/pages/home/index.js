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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/home/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/Images.js":
/*!******************************!*\
  !*** ./src/assets/Images.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Images = {
  loading: __webpack_require__(/*! @ASSETS/image/loading.gif */ "./src/assets/image/loading.gif")
};
exports.default = Images;

/***/ }),

/***/ "./src/assets/image/loading.gif":
/*!**************************************!*\
  !*** ./src/assets/image/loading.gif ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/loading.gif";

/***/ }),

/***/ "./src/components/Feed/FeedList.js":
/*!*****************************************!*\
  !*** ./src/components/Feed/FeedList.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Taro) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _taroRn = __webpack_require__(/*! @tarojs/taro-rn */ "@tarojs/taro-rn");

var _componentsRn = __webpack_require__(/*! @tarojs/components-rn */ "@tarojs/components-rn");

var _FeedList = __webpack_require__(/*! ./FeedList.scss */ "./src/components/Feed/FeedList.scss");

var _FeedList2 = _interopRequireDefault(_FeedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeedListStyleSheet = require('./index_styles').default;

var _styleSheet = FeedListStyleSheet;
var DefaultTake = 10;

var FeedList = function (_Component) {
  _inherits(FeedList, _Component);

  function FeedList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FeedList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FeedList.__proto__ || Object.getPrototypeOf(FeedList)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (item) {
      Taro.navigateTo({
        url: "/pages/home/feed/FeedDetail?FeedDetailId=" + item.key
      });
      _this.props.clickItem();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FeedList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var feedList = this.props.feedList;

      console.log(this.props); // if (!(Array.isArray(feedList) && feedList.length)) {
      //   return null
      // }

      return _react2.default.createElement(
        _componentsRn.View,
        null,
        this.props.children,
        Array.isArray(feedList) && feedList.length > 0 && feedList.map(function (item) {
          return (// <View key={item.key} className='feedList__item' onClick={this.handleClick.bind(this, item)}>
            _react2.default.createElement(
              _componentsRn.View,
              { key: item.key, onClick: function onClick() {
                  return _this2.handleClick(item);
                }, style: _styleSheet[_FeedList2.default["feedList__item"] || "feedList__item"] },
              _react2.default.createElement(_componentsRn.Image, { src: item.Image, style: _styleSheet[_FeedList2.default["feedList__item-image"] || "feedList__item-image"] }),
              _react2.default.createElement(
                _componentsRn.View,
                { style: _styleSheet[_FeedList2.default["feedList__item-right"] || "feedList__item-right"] },
                _react2.default.createElement(
                  _componentsRn.Text,
                  { style: _styleSheet[_FeedList2.default["feedList__item-right__title"] || "feedList__item-right__title"] },
                  item.mockTitle
                ),
                _react2.default.createElement(
                  _componentsRn.Text,
                  { numberOfLines: 2, style: _styleSheet[_FeedList2.default["feedList__item-right__desc"] || "feedList__item-right__desc"] },
                  item.mockContent
                )
              )
            )
          );
        })
      );
    }
  }]);

  return FeedList;
}(_taroRn.Component);

exports.default = FeedList;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/taro-rn */ "@tarojs/taro-rn")))

/***/ }),

/***/ "./src/components/Feed/FeedList.scss":
/*!*******************************************!*\
  !*** ./src/components/Feed/FeedList.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"feedList__item":"src-components-Feed-FeedList__feedList__item--2vm12","feedList__item-image":"src-components-Feed-FeedList__feedList__item-image--2cwYN","feedList__item-right":"src-components-Feed-FeedList__feedList__item-right--2Vsju","feedList__item-right__title":"src-components-Feed-FeedList__feedList__item-right__title--1_LNE","feedList__item-right__desc":"src-components-Feed-FeedList__feedList__item-right__desc--3i95l"};

/***/ }),

/***/ "./src/components/Home/HomeBanner.js":
/*!*******************************************!*\
  !*** ./src/components/Home/HomeBanner.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _taroRn = __webpack_require__(/*! @tarojs/taro-rn */ "@tarojs/taro-rn");

var _componentsRn = __webpack_require__(/*! @tarojs/components-rn */ "@tarojs/components-rn");

var _HomeBanner = __webpack_require__(/*! ./HomeBanner.scss */ "./src/components/Home/HomeBanner.scss");

var _HomeBanner2 = _interopRequireDefault(_HomeBanner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeBannerStyleSheet = require('./index_styles').default;

var _styleSheet = HomeBannerStyleSheet;

var HomeBanner = function (_Component) {
  _inherits(HomeBanner, _Component);

  function HomeBanner() {
    _classCallCheck(this, HomeBanner);

    return _possibleConstructorReturn(this, (HomeBanner.__proto__ || Object.getPrototypeOf(HomeBanner)).apply(this, arguments));
  }

  _createClass(HomeBanner, [{
    key: "render",
    value: function render() {
      var data = this.props.data;

      return _react2.default.createElement(
        _componentsRn.View,
        { style: _styleSheet[_HomeBanner2.default["home-banner"] || "home-banner"] },
        _react2.default.createElement(
          _componentsRn.Swiper,
          { circular: true, autoplay: true, indicatorDots: true, indicatorActiveColor: "#07BFE3" // TODO 目前 H5、RN 暂不支持 previousMargin、nextMargin
            // previousMargin
            // nextMargin
            , style: _styleSheet[_HomeBanner2.default["home-banner__swiper"] || "home-banner__swiper"] },
          Array.isArray(data) && data.map(function (item) {
            return _react2.default.createElement(
              _componentsRn.SwiperItem,
              { key: item.key, style: _styleSheet[_HomeBanner2.default["home-banner__swiper-item"] || "home-banner__swiper-item"] },
              _react2.default.createElement(_componentsRn.Image, { src: item.Image, style: _styleSheet[_HomeBanner2.default["home-banner__swiper-item-img"] || "home-banner__swiper-item-img"] })
            );
          })
        )
      );
    }
  }]);

  return HomeBanner;
}(_taroRn.Component);

exports.default = HomeBanner;

/***/ }),

/***/ "./src/components/Home/HomeBanner.scss":
/*!*********************************************!*\
  !*** ./src/components/Home/HomeBanner.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"home-banner":"src-components-Home-HomeBanner__home-banner--A2W0k","home-banner__swiper":"src-components-Home-HomeBanner__home-banner__swiper--d6QNl","home-banner__swiper-item":"src-components-Home-HomeBanner__home-banner__swiper-item--Bfsu2","home-banner__swiper-item-img":"src-components-Home-HomeBanner__home-banner__swiper-item-img--2aJmE"};

/***/ }),

/***/ "./src/components/LoadingView/index.js":
/*!*********************************************!*\
  !*** ./src/components/LoadingView/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _componentsRn = __webpack_require__(/*! @tarojs/components-rn */ "@tarojs/components-rn");

var _Images = __webpack_require__(/*! ../../assets/Images */ "./src/assets/Images.js");

var _Images2 = _interopRequireDefault(_Images);

var _index = __webpack_require__(/*! ./index.scss */ "./src/components/LoadingView/index.scss");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexStyleSheet = require('./index_styles').default;

var _styleSheet = indexStyleSheet;

var LoadingView = function LoadingView() {
    return _react2.default.createElement(
        _componentsRn.View,
        { style: _styleSheet[_index2.default["loadingView-container"] || "loadingView-container"] },
        _react2.default.createElement(_componentsRn.Image, { src: _Images2.default.loading, style: _styleSheet[_index2.default["loadingView-container__image"] || "loadingView-container__image"] })
    );
};

exports.default = LoadingView;

/***/ }),

/***/ "./src/components/LoadingView/index.scss":
/*!***********************************************!*\
  !*** ./src/components/LoadingView/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"loadingView-container":"src-components-LoadingView-index__loadingView-container--hF98G","loadingView-container__image":"src-components-LoadingView-index__loadingView-container__image--1LxRL"};

/***/ }),

/***/ "./src/pages/home/index.js":
/*!*********************************!*\
  !*** ./src/pages/home/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _taroRn = __webpack_require__(/*! @tarojs/taro-rn */ "@tarojs/taro-rn");

var _componentsRn = __webpack_require__(/*! @tarojs/components-rn */ "@tarojs/components-rn");

var _index = __webpack_require__(/*! ../../components/LoadingView/index */ "./src/components/LoadingView/index.js");

var _index2 = _interopRequireDefault(_index);

var _HomeBanner = __webpack_require__(/*! ../../components/Home/HomeBanner */ "./src/components/Home/HomeBanner.js");

var _HomeBanner2 = _interopRequireDefault(_HomeBanner);

var _FeedList = __webpack_require__(/*! ../../components/Feed/FeedList */ "./src/components/Feed/FeedList.js");

var _FeedList2 = _interopRequireDefault(_FeedList);

var _utils = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");

var _index3 = __webpack_require__(/*! ../../services/index */ "./src/services/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Taro = require('@tarojs/taro-rn');

var Mock = __webpack_require__(/*! mockjs/dist/mock */ "mockjs/dist/mock");

var Random = Mock.Random;
var DefaultTake = 10;

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: false,
      bannerData: [],
      feedList: [],
      skip: 0
    }, _this.getHomeBanner = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var bannerData;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              // this.setState({ loading: true })
              Taro.showLoading({
                title: 'loading'
              });
              _context.next = 4;
              return _index4.default.getHomeBanner();

            case 4:
              bannerData = _context.sent;

              setTimeout(function () {
                _this.setState({
                  loading: false,
                  bannerData: bannerData
                });
                Taro.hideLoading();
              }, 500);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](0);

              console.log('PXhome-index-ERROR--', _context.t0);

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[0, 8]]);
    })), _this.getFeedList = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var feedList, list;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              feedList = _this.state.feedList;
              _context2.next = 4;
              return _index4.default.getFeedList({
                skip: skip,
                take: DefaultTake
              });

            case 4:
              list = _context2.sent;

              setTimeout(function () {
                _this.setState({
                  feedList: !skip ? list : [].concat(_toConsumableArray(feedList), _toConsumableArray(list)),
                  canLoadMore: feedList.length >= DefaultTake,
                  skip: skip
                });
              }, 500);
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2['catch'](0);

              console.log('PXhome-index-ERROR--', _context2.t0);

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[0, 8]]);
    })), _this.loadRecommend = function () {
      console.log('loadMore');
      var skip = _this.state.skip + 10;
      _this.getFeedList(skip);
    }, _this.clickItem = function () {
      console.log('clickItem');
    }, _this.renderTitle = function () {
      return _react2.default.createElement(
        _componentsRn.View,
        null,
        _react2.default.createElement(
          _componentsRn.Text,
          null,
          '\u5217\u8868\u7684Title11'
        )
      );
    }, _this.onScrollToUpper = function () {
      console.log('onScrollToUpper');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getHomeBanner();
      this.getFeedList();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          loading = _state.loading,
          bannerData = _state.bannerData,
          feedList = _state.feedList;


      if (loading) {
        return _react2.default.createElement(_index2.default, null);
      }

      return _react2.default.createElement(
        _componentsRn.ScrollView,
        { scrollY: true, className: 'feedList', upperThreshold: 20, onScrollToUpper: this.onScrollToUpper, onScrollToLower: this.loadRecommend, style: {
            height: (0, _utils.getWindowHeight)()
          } // refresherEnabled
          // refresherThreshold='45'
          // refresherDefaultStyle='black'
          // refresherBackground='#f50'
        },
        _react2.default.createElement(_HomeBanner2.default, { data: bannerData }),
        _react2.default.createElement(
          _FeedList2.default,
          { feedList: feedList, clickItem: this.clickItem },
          this.renderTitle()
        )
      );
    }
  }]);

  return Home;
}(_taroRn.Component);

exports.default = Home;

/***/ }),

/***/ "./src/services/fetch.js":
/*!*******************************!*\
  !*** ./src/services/fetch.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Taro) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = function (url) {
  var _this = this;

  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';

  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(params) {
      var completeUrl, response, dataSource;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              completeUrl = 'http://localhost:8888' + url;


              if (method === 'GET') {
                completeUrl = completeUrl + '?' + queryParams(params);
              }

              _context.prev = 2;
              _context.next = 5;
              return Taro.request({
                url: completeUrl,
                method: method
              });

            case 5:
              response = _context.sent;
              dataSource = response.data.dataSource;
              return _context.abrupt('return', dataSource);

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](2);

              console.error('PX-REQUEST-ERROR:', _context.t0);

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[2, 10]]);
    }));

    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var _querystring = __webpack_require__(/*! querystring */ "querystring");

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function queryParams(params) {
  return _querystring2.default.stringify(params);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/taro-rn */ "@tarojs/taro-rn")))

/***/ }),

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetch = __webpack_require__(/*! ./fetch */ "./src/services/fetch.js");

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getHomeBanner: (0, _fetch2.default)('/Home/homeBanner'),
  getFeedList: (0, _fetch2.default)('/Feed/GetFeedList')
};

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Taro) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWindowHeight = getWindowHeight;
var toastLoading = exports.toastLoading = function toastLoading() {
  return Taro.showToast({
    title: '加载中...',
    icon: 'loading',
    mask: true
  });
};
var NAVIGATOR_HEIGHT = 44;
var TAB_BAR_HEIGHT = 50; /**
                          * 返回屏幕可用高度
                          * // NOTE 各端返回的 windowHeight 不一定是最终可用高度（例如可能没减去 statusBar 的高度），需二次计算
                          * @param {*} showTabBar
                          */
function getWindowHeight() {
  var showTabBar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var info = Taro.getSystemInfoSync();
  var windowHeight = info.windowHeight,
      statusBarHeight = info.statusBarHeight,
      titleBarHeight = info.titleBarHeight;

  var tabBarHeight = showTabBar ? TAB_BAR_HEIGHT : 0;

  if (true) {
    return windowHeight - statusBarHeight - NAVIGATOR_HEIGHT - tabBarHeight;
  }

  if (false) {}

  if (false) {}

  return windowHeight + 'px';
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/taro-rn */ "@tarojs/taro-rn")))

/***/ }),

/***/ "@tarojs/components-rn":
/*!****************************************!*\
  !*** external "@tarojs/components-rn" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tarojs/components-rn");

/***/ }),

/***/ "@tarojs/taro-rn":
/*!**********************************!*\
  !*** external "@tarojs/taro-rn" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tarojs/taro-rn");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "mockjs/dist/mock":
/*!***********************************!*\
  !*** external "mockjs/dist/mock" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mockjs/dist/mock");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

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