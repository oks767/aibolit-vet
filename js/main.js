/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/component.js":
/*!****************************************!*\
  !*** ./src/js/components/component.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

 //export default class Component extends Emitter {

var Component = /*#__PURE__*/function () {
  function Component() {
    _classCallCheck(this, Component);

    //super();
    if (arguments.length === 2) {
      this.root = arguments.length <= 0 ? undefined : arguments[0];
      this.options = Object.assign({}, this._defaultOptions, arguments.length <= 1 ? undefined : arguments[1]);
    } else if (arguments.length === 1) {
      if (Component.isjQuery(arguments.length <= 0 ? undefined : arguments[0])) {
        this.root = arguments.length <= 0 ? undefined : arguments[0];
      } else {
        this.options = Object.assign({}, this._defaultOptions, arguments.length <= 0 ? undefined : arguments[0]);
      }
    }
  }

  _createClass(Component, [{
    key: "initialize",
    value: function initialize() {
      this._cacheNodes();

      this._bindEvents();

      this._ready();
    }
  }, {
    key: "_cacheNodes",
    value: function _cacheNodes() {}
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {}
  }, {
    key: "_ready",
    value: function _ready() {}
  }], [{
    key: "isjQuery",
    value: function isjQuery(object) {
      return object instanceof (jquery__WEBPACK_IMPORTED_MODULE_0___default());
    }
  }]);

  return Component;
}();



/***/ }),

/***/ "./src/js/components/lightbox.js":
/*!***************************************!*\
  !*** ./src/js/components/lightbox.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Lightbox)
/* harmony export */ });
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/js/components/component.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Lightbox = /*#__PURE__*/function (_Component) {
  _inherits(Lightbox, _Component);

  var _super = _createSuper(Lightbox);

  function Lightbox(root, options) {
    var _this;

    _classCallCheck(this, Lightbox);

    _this = _super.call(this, root, options);

    _this.initialize();

    return _this;
  }

  _createClass(Lightbox, [{
    key: "_defaultOptions",
    get: function get() {
      return {
        defaults: {
          lang: 'ru',
          transitionEffect: 'slide',
          backFocus: false,
          buttons: ['close'],
          i18n: {
            ru: {
              CLOSE: 'Закрыть',
              NEXT: 'Дальше',
              PREV: 'Назад',
              ERROR: 'Не удается загрузить. <br/> Попробуйте позднее.',
              PLAY_START: 'Начать слайдшоу',
              PLAY_STOP: 'Остановить слайдшоу',
              FULL_SCREEN: 'На весь экран',
              THUMBS: 'Превью',
              DOWNLOAD: 'Скачать',
              SHARE: 'Поделиться',
              ZOOM: 'Увеличить'
            }
          }
        }
      };
    }
  }, {
    key: "initialize",
    value: function initialize() {
      _get(_getPrototypeOf(Lightbox.prototype), "initialize", this).call(this);
    }
  }, {
    key: "_cacheNodes",
    value: function _cacheNodes() {
      this.nodes = {
        link: $('.js-link-modal')
      };
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.nodes.link.on('click', function (event) {
        event.preventDefault();
        var $link = $(event.currentTarget);
        $.fancybox.open({
          src: $link.data('src'),
          type: 'inline',
          opts: {
            touch: false,
            autoFocus: false,
            closeExisting: true,
            animationEffect: false,
            beforeLoad: function beforeLoad(event) {
              event.current.$slide.addClass('fancybox-modal');
            }
          }
        });
      });
    }
  }, {
    key: "_ready",
    value: function _ready() {
      $.fancybox.defaults.i18n.ru = this.options.defaults.i18n.ru;
      $.fancybox.defaults.lang = this.options.defaults.lang;
      $.fancybox.defaults.buttons = this.options.defaults.buttons;
      $.fancybox.defaults.transitionEffect = this.options.defaults.transitionEffect;
      $.fancybox.defaults.backFocus = this.options.defaults.backFocus;
    }
  }]);

  return Lightbox;
}(_component__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/js/components/main-menu.js":
/*!****************************************!*\
  !*** ./src/js/components/main-menu.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var superfish_src_js_hoverIntent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superfish/src/js/hoverIntent */ "./node_modules/superfish/src/js/hoverIntent.js");
/* harmony import */ var superfish_src_js_hoverIntent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superfish_src_js_hoverIntent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var superfish_src_js_superfish__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! superfish/src/js/superfish */ "./node_modules/superfish/src/js/superfish.js");
/* harmony import */ var superfish_src_js_superfish__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(superfish_src_js_superfish__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.js */ "./src/js/global.js");
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_global_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nav_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-bar */ "./src/js/components/nav-bar.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }







var Menu = /*#__PURE__*/function () {
  function Menu(el) {
    _classCallCheck(this, Menu);

    this.el = el;
    this.root = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sf-menu');
    this.documentScrollTop = null;
    this.init();
  }

  _createClass(Menu, [{
    key: "init",
    value: function init() {
      this._initSuperfish();

      this._initMobileMenu();

      this._bindEvents();
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-close-drawer').click(function (e) {
        e.preventDefault();
        Menu.closeMenu.call(this);
        _nav_bar__WEBPACK_IMPORTED_MODULE_4__["default"].enableUpdate();
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-drawer').click(function (e) {
        e.preventDefault();

        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('is-active')) {
          _nav_bar__WEBPACK_IMPORTED_MODULE_4__["default"].disableUpdate();
          Menu.openMenu.call(this);
        }
      }); // // Плавная прокрутка при переходе по якорю
      // $(document).on('click', '.js-menu a', function() {
      //     Menu.closeMenu();
      //     NavBar.enableUpdate();
      //     let href = $.attr(this, 'href');
      //     href = href.substring(1, href.length);
      //     $('html, body').animate({
      //         scrollTop: $(href).offset().top
      //     }, 500, function () {
      //         window.location.hash = href;
      //     });
      //     return false;
      // });
    }
  }, {
    key: "_initSuperfish",
    value: function _initSuperfish() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.el).superfish(); // $('#menu-icon').on('click', function() {
      //   $('#mobile_top_menu_wrapper').toggle();
      //   self.toggleMobileMenu();
      // });
    }
  }, {
    key: "_initMobileMenu",
    value: function _initMobileMenu() {
      // prestashop.on('responsive update', function(event) {
      //   $('.js-sub-menu').removeAttr('style');
      //   self.toggleMobileMenu();
      // });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-drawer-menu-list').append(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sf-menu').html()); // click on menu link for open submenu
      //$('.js-drawer-menu-list .sub-menu').parent('li').find(' > a').addClass('has-submenu');
      // $('.has-submenu').on('click', function(event) {
      //     event.preventDefault();
      //     $(this).siblings('.sub-menu').slideToggle(400);
      //     $(this).toggleClass('is-sub-menu-opened');
      // });
      // click on button for open submenu

      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-drawer-menu-list .sub-menu').parent('li').append('<button class="open-submenu-btn"></button>'); // add submenu buttons

      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.open-submenu-btn').on('click', function (event) {
        event.preventDefault();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings('.sub-menu').slideToggle(400);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('sub-menu-opened');
      });
    }
  }, {
    key: "toggleMobileMenu",
    value: function toggleMobileMenu() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header').toggleClass('is-open');

      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#mobile_top_menu_wrapper').is(":visible")) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#notifications, #wrapper, #footer').hide();
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#notifications, #wrapper, #footer').show();
      }
    }
  }], [{
    key: "openMenu",
    value: function openMenu() {
      Menu.documentScrollTop = G.getDocumentScrollTop();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.drawer').addClass('opened');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('drawer-opened');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').css({
        'position': 'fixed',
        'top': -Menu.documentScrollTop
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.drawer-scrim').css('display', 'block');
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.drawer').removeClass('opened');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('drawer-opened');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').attr('style', '');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').scrollTop(Menu.documentScrollTop);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.drawer-scrim').css('display', 'none');
    }
  }]);

  return Menu;
}();



/***/ }),

/***/ "./src/js/components/nav-bar.js":
/*!**************************************!*\
  !*** ./src/js/components/nav-bar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global.js */ "./src/js/global.js");
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_global_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/js/components/component.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var NavBar = /*#__PURE__*/function (_Component) {
  _inherits(NavBar, _Component);

  var _super = _createSuper(NavBar);

  function NavBar(options) {
    var _this;

    _classCallCheck(this, NavBar);

    _this = _super.call(this, options);
    _this.root = $('.nav-bar');
    _this.scrollTop = null;
    _this.oldScrollTop = null;
    _this.scrollTopDirection = null;

    _this.init();

    return _this;
  }

  _createClass(NavBar, [{
    key: "_defaultOptions",
    get: function get() {
      return {
        offsetForFixed: 200
      };
    }
  }, {
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(NavBar.prototype), "initialize", this).call(this);

      NavBar.allowUpdate = true;

      this._updateNavBar();

      this._setSerachBox();
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      // событие скрол 
      NavBar._handleScrollThrottled = G.throttle(this._handleScroll.bind(this), 100);
      window.addEventListener('scroll', NavBar._handleScrollThrottled); // событие ресайз

      NavBar._handleWindowResizeThrottled = G.throttle(this._handleWindowResize.bind(this), 100);
      window.addEventListener('resize', NavBar._handleWindowResizeThrottled);
    }
  }, {
    key: "_setSerachBox",
    value: function _setSerachBox() {
      $('.js-togle-search-box').on('click', function (e) {
        $(this).parent().toggleClass('opened');
      });
    }
  }, {
    key: "_updateNavBar",
    value: function _updateNavBar() {
      if (!NavBar.allowUpdate) return;
      this.oldScrollTop = this.scrollTop;
      this.scrollTop = G.getDocumentScrollTop();
      var isNavBarFixed = this.root.hasClass('fixed');

      if (this.oldScrollTop < this.scrollTop) {
        this.scrollTopDirection = "down";
      } else if (this.oldScrollTop > this.scrollTop) {
        this.scrollTopDirection = "up";
      } else {
        this.scrollTopDirection = null;
      } // прилепиливаем шапку


      if (this.scrollTop > this.options.offsetForFixed && !isNavBarFixed) {
        this.root.addClass('fixed');
      } // отлепляем шапку


      if (this.scrollTop <= this.options.offsetForFixed && isNavBarFixed) {
        this.root.removeClass('fixed');
      } // крутим вниз


      if (this.scrollTopDirection === 'down') {
        this.root.removeClass('scroll-up');
        this.root.addClass('scroll-down');
      } // крутим вверх


      if (this.scrollTopDirection === 'up') {
        this.root.removeClass('scroll-down');
        this.root.addClass('scroll-up');
      }
    }
  }, {
    key: "_handleScroll",
    value: function _handleScroll() {
      this._updateNavBar();
    }
  }, {
    key: "_handleWindowResize",
    value: function _handleWindowResize() {
      this._updateNavBar();
    }
  }], [{
    key: "enableUpdate",
    value: function enableUpdate() {
      NavBar.allowUpdate = true; //console.log('NavBar.allowUpdate = ', NavBar.allowUpdate);
    }
  }, {
    key: "disableUpdate",
    value: function disableUpdate() {
      NavBar.allowUpdate = false; //console.log('NavBar.allowUpdate = ', NavBar.allowUpdate);
    }
  }]);

  return NavBar;
}(_component__WEBPACK_IMPORTED_MODULE_1__["default"]);

_defineProperty(NavBar, "allowUpdate", void 0);



/***/ }),

/***/ "./src/js/components/scrolltotop-btn.js":
/*!**********************************************!*\
  !*** ./src/js/components/scrolltotop-btn.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollToTopBtn)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/js/components/component.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// кнопка наверх


var ScrollToTopBtn = /*#__PURE__*/function (_Component) {
  _inherits(ScrollToTopBtn, _Component);

  var _super = _createSuper(ScrollToTopBtn);

  function ScrollToTopBtn(root, options) {
    var _this;

    _classCallCheck(this, ScrollToTopBtn);

    _this = _super.call(this, root, options);

    _this.initialize();

    return _this;
  }

  _createClass(ScrollToTopBtn, [{
    key: "initialize",
    value: function initialize() {
      _get(_getPrototypeOf(ScrollToTopBtn.prototype), "initialize", this).call(this);

      this.setToTopButton();
    }
  }, {
    key: "setToTopButton",
    value: function setToTopButton() {
      var $scrollTopBtn = $('<a rel="nofollow" href="#" id="scroll-top" class="scrolltotop-btn"><i></i></a>').appendTo('body');
      $scrollTopBtn.on('click', function () {
        $('html:not(:animated),body:not(:animated)').animate({
          scrollTop: 0
        }, 300);
        return false;
      });
      $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
          $scrollTopBtn.addClass('top-btn-show');
        } else {
          $scrollTopBtn.removeClass('top-btn-show');
        }
      });

      if ($scrollTopBtn.hasClass('top-btn-show')) {
        $scrollTopBtn.removeClass('top-btn-show');
      }
    }
  }]);

  return ScrollToTopBtn;
}(_component__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/js/components/component.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Slider = /*#__PURE__*/function (_Component) {
  _inherits(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider(root, options) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, root, options);

    _this.initialize();

    return _this;
  }

  _createClass(Slider, [{
    key: "_defaultOptions",
    get: function get() {
      return {
        rows: 0,
        counter: false,
        prevArrow: '<button class="slider-prev"><span class="icon-left"></span></button>',
        nextArrow: '<button class="slider-next"><span class="icon-right"></span></button>'
      };
    }
  }, {
    key: "initialize",
    value: function initialize() {
      _get(_getPrototypeOf(Slider.prototype), "initialize", this).call(this);
    }
  }, {
    key: "_cacheNodes",
    value: function _cacheNodes() {
      this.nodes = {};
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.root.on('init', this.addCounter);
      this.root.on('beforeChange', this.changeCounter);
      this.root.on('breakpoint', this.addCounter);
    }
  }, {
    key: "_ready",
    value: function _ready() {
      this.root.slick(this.options);
    }
  }, {
    key: "addCounter",
    value: function addCounter(event, slick) {
      if (slick.options.counter === true && slick.slideCount > slick.options.slidesToShow) {
        var $counter = $('<div class="slick-counter slick-cloned"><div class="slick-counter__inner">' + '<span class="slick-counter__current">' + (slick.currentSlide + 1) + '</span>' + '<span role="separator" class="slick-counter__divider"></span>' + '<span class="slick-counter__count">' + (slick.getDotCount() + 1) + '</span></div></div>');
        $counter.appendTo(slick.$slider);
      }
    }
  }, {
    key: "changeCounter",
    value: function changeCounter(event, slick, currentSlide, nextSlide) {
      slick.$slider.find('.slick-counter__current').html(Math.floor(nextSlide / slick.options.slidesToScroll) + 1);
    }
  }]);

  return Slider;
}(_component__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/js/global.js":
/*!**************************!*\
  !*** ./src/js/global.js ***!
  \**************************/
/***/ (() => {

/**
 * GLOBALS
 */
(function (window) {
  window.G = {};
})(window);
/**
 * Multi browser support for document scroll top
 * @returns {Number}
 */


G.getDocumentScrollTop = function () {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};
/**
 * Multi browser support for document scroll left
 * @returns {Number}
 */


G.getDocumentScrollLeft = function () {
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
};
/**
 * Get time in ms
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @type {function}
 * @return {number}
 */


var getTime = Date.now || function () {
  return new Date().getTime();
};
/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @param {function} func
 * @param {number} wait
 * @param {Object=} options
 * @returns {Function}
 */


G.throttle = function (func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  options || (options = {});

  var later = function later() {
    previous = options.leading === false ? 0 : getTime();
    timeout = null;
    result = func.apply(context, args);
    context = args = null;
  };

  return function () {
    var now = getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;

    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/lightbox */ "./src/js/components/lightbox.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/slider */ "./src/js/components/slider.js");
/* harmony import */ var _components_scrolltotop_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/scrolltotop-btn */ "./src/js/components/scrolltotop-btn.js");
/* harmony import */ var _components_main_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main-menu */ "./src/js/components/main-menu.js");
/* harmony import */ var _components_nav_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav-bar */ "./src/js/components/nav-bar.js");
/* harmony import */ var ymaps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ymaps */ "./node_modules/ymaps/dist/ymaps.esm.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// import "matchmedia-polyfill";
// import "matchmedia-polyfill/matchMedia.addListener";
//import objectFitImages from "object-fit-images"; // Полифил
 //import {MDCRipple} from '@material/ripple';
// import {MDCTextField} from '@material/textfield';








var Application = /*#__PURE__*/function () {
  function Application() {
    _classCallCheck(this, Application);

    this.initCommon(); //this.initMaterialDesignStuff();

    this.initSliders(); //this.initAjaxBlogLoad();

    this.initMobileViewPortHeight();
    this.initYandexMap();
  } // initMaterialDesignStuff() {
  //     // еффект ripple на кнопках        
  //     [].map.call(document.querySelectorAll('.mdc-button'), function(el) {
  //         return new MDCRipple(el);
  //     });
  //     // текстовые поля форм
  //     // [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
  //     //     return new MDCTextField(el);
  //     // });
  // }
  // Инициализации


  _createClass(Application, [{
    key: "initCommon",
    value: function initCommon() {
      new _components_lightbox__WEBPACK_IMPORTED_MODULE_1__["default"]();
      new _components_scrolltotop_btn__WEBPACK_IMPORTED_MODULE_3__["default"]();
      new _components_nav_bar__WEBPACK_IMPORTED_MODULE_5__["default"]({
        offsetForFixed: 300
      });
      new _components_main_menu__WEBPACK_IMPORTED_MODULE_4__["default"]('ul.sf-menu');
      /* Нажали на кнопочку отправки формы обьратной связи*/

      $('#zayavka-button').click(function (event) {
        event.preventDefault();
        $('#zayvka-submit').trigger('click');
      });

      if (history.length == 0 && !document.referrer) {
        $('.js-go-back').hide();
      } // прокрутить вниз первый экран


      $('.js-go-back').click(function (e) {
        e.preventDefault();

        if (1 < history.length && document.referrer) {
          history.back();
        }
      }); //objectFitImages - полифил активация
      // if (typeof objectFitImages === 'function') {
      //     objectFitImages($('.image-cover img'));
      // }
      // прокрутить вниз первый экран

      $('.js-go-down').click(function (e) {
        e.preventDefault();
        var y = $('.header-wrap').height();
        $("html, body").animate({
          scrollTop: y
        }, 1000);
      }); // // Плавная прокрутка при переходе по якорю
      // const $root = $('html, body');
      // $('#main-menu a').click(function() {
      //     var href = $.attr(this, 'href');
      //     href = href.substring(1, href.length);
      //     //console.log(href);
      //     $root.animate({
      //         scrollTop: $(href).offset().top
      //     }, 1500, function () {
      //         window.location.hash = href;
      //     });
      //     return false;
      // });
    }
  }, {
    key: "initYandexMap",
    value: function initYandexMap() {
      ymaps__WEBPACK_IMPORTED_MODULE_6__["default"].load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(function (maps) {
        // Создание карты.
        // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/map-docpage/
        var myMap = new maps.Map('yandex-map', {
          center: [51.660781, 39.200269],
          zoom: 13
        }); // myMap.controls // добавим всяких кнопок, в скобках их позиции в блоке
        //         .add('zoomControl', { left: 5, top: 5 }) //Масштаб
        //         .add('typeSelector') //Список типов карты
        //         .add('mapTools', { left: 35, top: 5 }) // Стандартный набор кнопок
        //         .add('searchControl'); // Строка с поиском
        // Добавление метки
        // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/

        /* Создаем кастомные метки */

        var myPlacemark0 = new maps.Placemark([51.660781, 39.200269], {
          // Хинт показывается при наведении мышкой на иконку метки.
          hintContent: 'Содержимое всплывающей подсказки',
          // Балун откроется при клике по метке.
          balloonContent: '<div class="ballon">Содержимое балуна</div>',
          // сдесь содержимое балуна в формате html, все стили в css
          iconImageHref: '/img/marker.svg',
          // картинка иконки
          iconImageSize: [40, 40],
          // размер иконки
          iconImageOffset: [-32, -64] // позиция иконки

        }); // тоже самое для других меток
        // После того как метка была создана, добавляем её на карту.

        myMap.geoObjects.add(myPlacemark0); // Фикс кривого выравнивания кастомных балунов

        myMap.geoObjects.events.add(['balloonopen'], function (e) {
          var geoObject = e.get('target');
          myMap.panTo(geoObject.geometry.getCoordinates(), {
            delay: 0
          });
        });
      })["catch"](function (error) {
        return console.log('Не удалось загрузить карту', error);
      });
    } // Инициализация всех слайдеров

  }, {
    key: "initSliders",
    value: function initSliders() {
      // Home Slider
      var $homeSlider = $('.home-slider');

      if ($homeSlider.length !== 0) {
        new _components_slider__WEBPACK_IMPORTED_MODULE_2__["default"]($homeSlider, {
          counter: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: false,
          fade: true,
          arrows: false,
          dots: true,
          autoplay: true,
          dotsClass: 'my-dots',
          //autoplaySpeed: 2000,
          responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              dots: false
            }
          }, {
            breakpoint: 766,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: false
            }
          }]
        });
      } // Carousel in content


      var $special = $('.special__slider');

      if ($special.length !== 0) {
        new _components_slider__WEBPACK_IMPORTED_MODULE_2__["default"]($special, {
          counter: false,
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 1500,
          prevArrow: '<button class="special-prev"><span class="icon-left"></span></button>',
          nextArrow: '<button class="special-next"><span class="icon-right"></span></button>',
          adaptiveHeight: true,
          responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: 5
            }
          }, {
            breakpoint: 1040,
            settings: {
              slidesToShow: 4
            }
          }, {
            breakpoint: 976,
            settings: {
              arrows: false,
              slidesToShow: 3
            }
          }, {
            breakpoint: 675,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          }, {
            breakpoint: 500,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          }]
        });
      }
    } // кастыльное решение 100vh для мобильников

  }, {
    key: "initMobileViewPortHeight",
    value: function initMobileViewPortHeight() {
      // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      var document_width = window.innerWidth; // We listen to the resize event (а ресайз в мобилках срабатывает и при скроле, когда исчезает строка ввода адреса в браузере)

      window.addEventListener('resize', function () {
        // We execute the same script as before
        if (document_width != window.innerWidth) {
          document_width = window.innerWidth;

          var _vh = window.innerHeight * 0.01;

          document.documentElement.style.setProperty('--vh', "".concat(_vh, "px"));
        }
      });
    }
  }]);

  return Application;
}(); // запуск приложения


$(function () {
  new Application();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhtml_start"] = self["webpackChunkhtml_start"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2h0bWwtc3RhcnQvLi9zcmMvanMvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9jb21wb25lbnRzL2xpZ2h0Ym94LmpzIiwid2VicGFjazovL2h0bWwtc3RhcnQvLi9zcmMvanMvY29tcG9uZW50cy9tYWluLW1lbnUuanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9jb21wb25lbnRzL25hdi1iYXIuanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9jb21wb25lbnRzL3Njcm9sbHRvdG9wLWJ0bi5qcyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0Ly4vc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovL2h0bWwtc3RhcnQvLi9zcmMvanMvZ2xvYmFsLmpzIiwid2VicGFjazovL2h0bWwtc3RhcnQvLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5cbi8vZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgRW1pdHRlciB7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgLy9zdXBlcigpO1xuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5yb290ID0gYXJnc1swXTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2RlZmF1bHRPcHRpb25zLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBpZiAoQ29tcG9uZW50LmlzalF1ZXJ5KGFyZ3NbMF0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb290ID0gYXJnc1swXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGVmYXVsdE9wdGlvbnMsIGFyZ3NbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGlzalF1ZXJ5KG9iamVjdCkge1xuICAgICAgICByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgalF1ZXJ5O1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlTm9kZXMoKTtcbiAgICAgICAgdGhpcy5fYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLl9yZWFkeSgpO1xuICAgIH1cblxuICAgIF9jYWNoZU5vZGVzKCkge31cblxuICAgIF9iaW5kRXZlbnRzKCkge31cblxuICAgIF9yZWFkeSgpIHt9XG59IiwiaW1wb3J0IFwiQGZhbmN5YXBwcy9mYW5jeWJveFwiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlnaHRib3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGdldCBfZGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgICAgICAgIGxhbmc6ICdydScsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVmZmVjdDogJ3NsaWRlJyxcbiAgICAgICAgICAgICAgICBiYWNrRm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgJ2Nsb3NlJ1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgaTE4bjoge1xuICAgICAgICAgICAgICAgICAgICBydToge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ0xPU0U6ICfQl9Cw0LrRgNGL0YLRjCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBORVhUOiAn0JTQsNC70YzRiNC1JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBSRVY6ICfQndCw0LfQsNC0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIEVSUk9SOiAn0J3QtSDRg9C00LDQtdGC0YHRjyDQt9Cw0LPRgNGD0LfQuNGC0YwuIDxici8+INCf0L7Qv9GA0L7QsdGD0LnRgtC1INC/0L7Qt9C00L3QtdC1LicsXG4gICAgICAgICAgICAgICAgICAgICAgICBQTEFZX1NUQVJUOiAn0J3QsNGH0LDRgtGMINGB0LvQsNC50LTRiNC+0YMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgUExBWV9TVE9QOiAn0J7RgdGC0LDQvdC+0LLQuNGC0Ywg0YHQu9Cw0LnQtNGI0L7RgycsXG4gICAgICAgICAgICAgICAgICAgICAgICBGVUxMX1NDUkVFTjogJ9Cd0LAg0LLQtdGB0Ywg0Y3QutGA0LDQvScsXG4gICAgICAgICAgICAgICAgICAgICAgICBUSFVNQlM6ICfQn9GA0LXQstGM0Y4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgRE9XTkxPQUQ6ICfQodC60LDRh9Cw0YLRjCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBTSEFSRTogJ9Cf0L7QtNC10LvQuNGC0YzRgdGPJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFpPT006ICfQo9Cy0LXQu9C40YfQuNGC0YwnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihyb290LCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKHJvb3QsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBfY2FjaGVOb2RlcygpIHtcbiAgICAgICAgdGhpcy5ub2RlcyA9IHtcbiAgICAgICAgICAgIGxpbms6ICQoJy5qcy1saW5rLW1vZGFsJylcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5ub2Rlcy5saW5rLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCAkbGluayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgICQuZmFuY3lib3gub3Blbih7XG4gICAgICAgICAgICAgICAgc3JjOiAkbGluay5kYXRhKCdzcmMnKSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgICAgICAgICAgICBvcHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VFeGlzdGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRWZmZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlTG9hZDogZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudC4kc2xpZGUuYWRkQ2xhc3MoJ2ZhbmN5Ym94LW1vZGFsJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3JlYWR5KCkge1xuICAgICAgICAkLmZhbmN5Ym94LmRlZmF1bHRzLmkxOG4ucnUgPSB0aGlzLm9wdGlvbnMuZGVmYXVsdHMuaTE4bi5ydTtcbiAgICAgICAgJC5mYW5jeWJveC5kZWZhdWx0cy5sYW5nID0gdGhpcy5vcHRpb25zLmRlZmF1bHRzLmxhbmc7XG4gICAgICAgICQuZmFuY3lib3guZGVmYXVsdHMuYnV0dG9ucyA9IHRoaXMub3B0aW9ucy5kZWZhdWx0cy5idXR0b25zO1xuICAgICAgICAkLmZhbmN5Ym94LmRlZmF1bHRzLnRyYW5zaXRpb25FZmZlY3QgPSB0aGlzLm9wdGlvbnMuZGVmYXVsdHMudHJhbnNpdGlvbkVmZmVjdDtcbiAgICAgICAgJC5mYW5jeWJveC5kZWZhdWx0cy5iYWNrRm9jdXMgPSB0aGlzLm9wdGlvbnMuZGVmYXVsdHMuYmFja0ZvY3VzO1xuICAgIH1cbn0iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5pbXBvcnQgJ3N1cGVyZmlzaC9zcmMvanMvaG92ZXJJbnRlbnQnO1xuaW1wb3J0ICdzdXBlcmZpc2gvc3JjL2pzL3N1cGVyZmlzaCc7XG5cbmltcG9ydCBcIi4uL2dsb2JhbC5qc1wiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9uYXYtYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUge1xuICBcbiAgY29uc3RydWN0b3IoZWwpIHtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5yb290ID0gJCgnLnNmLW1lbnUnKTtcbiAgICB0aGlzLmRvY3VtZW50U2Nyb2xsVG9wPW51bGw7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2luaXRTdXBlcmZpc2goKTtcbiAgICB0aGlzLl9pbml0TW9iaWxlTWVudSgpO1xuICAgIHRoaXMuX2JpbmRFdmVudHMoKTtcbiAgfVxuXG4gIHN0YXRpYyBvcGVuTWVudSgpIHtcbiAgICBNZW51LmRvY3VtZW50U2Nyb2xsVG9wID0gRy5nZXREb2N1bWVudFNjcm9sbFRvcCgpO1xuICAgICQoJy5kcmF3ZXInKS5hZGRDbGFzcygnb3BlbmVkJyk7XG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdkcmF3ZXItb3BlbmVkJyk7XG4gICAgJCgnYm9keScpLmNzcyh7XG4gICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXG4gICAgICAgICd0b3AnOiAtTWVudS5kb2N1bWVudFNjcm9sbFRvcFxuICAgIH0pO1xuICAgICQoJy5kcmF3ZXItc2NyaW0nKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9zZU1lbnUoKSB7XG4gICAgICAkKCcuZHJhd2VyJykucmVtb3ZlQ2xhc3MoJ29wZW5lZCcpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdkcmF3ZXItb3BlbmVkJyk7XG4gICAgICAkKCdib2R5JykuYXR0cignc3R5bGUnLCAnJyk7XG4gICAgICAkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG9wKE1lbnUuZG9jdW1lbnRTY3JvbGxUb3ApO1xuICAgICAgJCgnLmRyYXdlci1zY3JpbScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gIH1cblxuXG4gIF9iaW5kRXZlbnRzKCkge1xuXG4gICAgJCgnLmpzLWNsb3NlLWRyYXdlcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgTWVudS5jbG9zZU1lbnUuY2FsbCh0aGlzKTtcbiAgICAgICAgTmF2QmFyLmVuYWJsZVVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnLmpzLW9wZW4tZHJhd2VyJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZighJCh0aGlzKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgICAgIE5hdkJhci5kaXNhYmxlVXBkYXRlKCk7XG4gICAgICAgICAgICBNZW51Lm9wZW5NZW51LmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIC8vINCf0LvQsNCy0L3QsNGPINC/0YDQvtC60YDRg9GC0LrQsCDQv9GA0Lgg0L/QtdGA0LXRhdC+0LTQtSDQv9C+INGP0LrQvtGA0Y5cbiAgICAvLyAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmpzLW1lbnUgYScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBcbiAgICAvLyAgICAgTWVudS5jbG9zZU1lbnUoKTtcbiAgICAvLyAgICAgTmF2QmFyLmVuYWJsZVVwZGF0ZSgpO1xuXG4gICAgLy8gICAgIGxldCBocmVmID0gJC5hdHRyKHRoaXMsICdocmVmJyk7XG4gICAgLy8gICAgIGhyZWYgPSBocmVmLnN1YnN0cmluZygxLCBocmVmLmxlbmd0aCk7XG4gICAgLy8gICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAvLyAgICAgICAgIHNjcm9sbFRvcDogJChocmVmKS5vZmZzZXQoKS50b3BcbiAgICAvLyAgICAgfSwgNTAwLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhyZWY7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8gfSk7XG5cbiAgfVxuXG5cblxuICBcbiAgX2luaXRTdXBlcmZpc2goKSB7XG4gICAgJCh0aGlzLmVsKS5zdXBlcmZpc2goKTtcblxuICAgIC8vICQoJyNtZW51LWljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyAgICQoJyNtb2JpbGVfdG9wX21lbnVfd3JhcHBlcicpLnRvZ2dsZSgpO1xuICAgIC8vICAgc2VsZi50b2dnbGVNb2JpbGVNZW51KCk7XG4gICAgLy8gfSk7XG4gIH1cblxuICBfaW5pdE1vYmlsZU1lbnUoKSB7XG4gICAgXG4gICAgLy8gcHJlc3Rhc2hvcC5vbigncmVzcG9uc2l2ZSB1cGRhdGUnLCBmdW5jdGlvbihldmVudCkge1xuICAgIC8vICAgJCgnLmpzLXN1Yi1tZW51JykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgIHNlbGYudG9nZ2xlTW9iaWxlTWVudSgpO1xuICAgIC8vIH0pO1xuXG4gICAgJCgnLmpzLWRyYXdlci1tZW51LWxpc3QnKS5hcHBlbmQoJCgnLnNmLW1lbnUnKS5odG1sKCkpO1xuXG4gICAgLy8gY2xpY2sgb24gbWVudSBsaW5rIGZvciBvcGVuIHN1Ym1lbnVcbiAgICAvLyQoJy5qcy1kcmF3ZXItbWVudS1saXN0IC5zdWItbWVudScpLnBhcmVudCgnbGknKS5maW5kKCcgPiBhJykuYWRkQ2xhc3MoJ2hhcy1zdWJtZW51Jyk7XG4gICAgLy8gJCgnLmhhcy1zdWJtZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgJCh0aGlzKS5zaWJsaW5ncygnLnN1Yi1tZW51Jykuc2xpZGVUb2dnbGUoNDAwKTtcbiAgICAvLyAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtc3ViLW1lbnUtb3BlbmVkJyk7XG4gICAgLy8gfSk7XG5cbiAgICAvLyBjbGljayBvbiBidXR0b24gZm9yIG9wZW4gc3VibWVudVxuICAgICQoJy5qcy1kcmF3ZXItbWVudS1saXN0IC5zdWItbWVudScpLnBhcmVudCgnbGknKS5hcHBlbmQoJzxidXR0b24gY2xhc3M9XCJvcGVuLXN1Ym1lbnUtYnRuXCI+PC9idXR0b24+Jyk7IC8vIGFkZCBzdWJtZW51IGJ1dHRvbnNcbiAgICAkKCcub3Blbi1zdWJtZW51LWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQodGhpcykuc2libGluZ3MoJy5zdWItbWVudScpLnNsaWRlVG9nZ2xlKDQwMCk7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3N1Yi1tZW51LW9wZW5lZCcpO1xuICAgIH0pO1xuXG5cblxuXG4gIH1cblxuICB0b2dnbGVNb2JpbGVNZW51KCkge1xuICAgICQoJyNoZWFkZXInKS50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xuICAgIGlmICgkKCcjbW9iaWxlX3RvcF9tZW51X3dyYXBwZXInKS5pcyhcIjp2aXNpYmxlXCIpKSB7XG4gICAgICAkKCcjbm90aWZpY2F0aW9ucywgI3dyYXBwZXIsICNmb290ZXInKS5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJyNub3RpZmljYXRpb25zLCAjd3JhcHBlciwgI2Zvb3RlcicpLnNob3coKTtcbiAgICB9XG4gIH1cblxuXG59XG4iLCJpbXBvcnQgXCIuLi9nbG9iYWwuanNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2QmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBcbiAgICBnZXQgX2RlZmF1bHRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb2Zmc2V0Rm9yRml4ZWQ6IDIwMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5yb290ID0gJCgnLm5hdi1iYXInKTtcbiAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSBudWxsOyAgICAgICAgXG4gICAgICAgIHRoaXMub2xkU2Nyb2xsVG9wID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY3JvbGxUb3BEaXJlY3Rpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgICAgIE5hdkJhci5hbGxvd1VwZGF0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU5hdkJhcigpO1xuICAgICAgICB0aGlzLl9zZXRTZXJhY2hCb3goKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWxsb3dVcGRhdGU7XG5cbiAgICBzdGF0aWMgZW5hYmxlVXBkYXRlKCl7XG4gICAgICAgIE5hdkJhci5hbGxvd1VwZGF0ZSA9IHRydWU7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ05hdkJhci5hbGxvd1VwZGF0ZSA9ICcsIE5hdkJhci5hbGxvd1VwZGF0ZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRpc2FibGVVcGRhdGUoKXtcbiAgICAgICAgTmF2QmFyLmFsbG93VXBkYXRlID0gZmFsc2U7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ05hdkJhci5hbGxvd1VwZGF0ZSA9ICcsIE5hdkJhci5hbGxvd1VwZGF0ZSk7XG4gICAgfVxuICAgIFxuICAgICAgICAgICAgXG4gICAgX2JpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vINGB0L7QsdGL0YLQuNC1INGB0LrRgNC+0LsgXG4gICAgICAgIE5hdkJhci5faGFuZGxlU2Nyb2xsVGhyb3R0bGVkID0gRy50aHJvdHRsZSh0aGlzLl9oYW5kbGVTY3JvbGwuYmluZCh0aGlzKSwgMTAwKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIE5hdkJhci5faGFuZGxlU2Nyb2xsVGhyb3R0bGVkKTtcblxuICAgICAgICAvLyDRgdC+0LHRi9GC0LjQtSDRgNC10YHQsNC50LdcbiAgICAgICAgTmF2QmFyLl9oYW5kbGVXaW5kb3dSZXNpemVUaHJvdHRsZWQgPSBHLnRocm90dGxlKHRoaXMuX2hhbmRsZVdpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpLCAxMDApO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgTmF2QmFyLl9oYW5kbGVXaW5kb3dSZXNpemVUaHJvdHRsZWQpO1xuXG4gICAgfVxuXG5cbiAgICBfc2V0U2VyYWNoQm94KCkge1xuICAgICAgICAkKCcuanMtdG9nbGUtc2VhcmNoLWJveCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbmVkJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgXG5cbiAgICBfdXBkYXRlTmF2QmFyKCkge1xuXG4gICAgICAgIGlmKCFOYXZCYXIuYWxsb3dVcGRhdGUpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMub2xkU2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxUb3A7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gRy5nZXREb2N1bWVudFNjcm9sbFRvcCgpO1xuICAgICAgICBjb25zdCBpc05hdkJhckZpeGVkID0gdGhpcy5yb290Lmhhc0NsYXNzKCdmaXhlZCcpO1xuXG4gICAgICAgIGlmKHRoaXMub2xkU2Nyb2xsVG9wIDwgdGhpcy5zY3JvbGxUb3ApIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wRGlyZWN0aW9uID0gXCJkb3duXCI7XG4gICAgICAgIH0gZWxzZSBpZiggdGhpcy5vbGRTY3JvbGxUb3AgPiB0aGlzLnNjcm9sbFRvcCApIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wRGlyZWN0aW9uID0gXCJ1cFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb3BEaXJlY3Rpb24gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0L/RgNC40LvQtdC/0LjQu9C40LLQsNC10Lwg0YjQsNC/0LrRg1xuICAgICAgICBpZiAoIHRoaXMuc2Nyb2xsVG9wID4gdGhpcy5vcHRpb25zLm9mZnNldEZvckZpeGVkICYmICFpc05hdkJhckZpeGVkICkge1xuICAgICAgICAgICAgdGhpcy5yb290LmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0L7RgtC70LXQv9C70Y/QtdC8INGI0LDQv9C60YNcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsVG9wIDw9IHRoaXMub3B0aW9ucy5vZmZzZXRGb3JGaXhlZCAmJiBpc05hdkJhckZpeGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vINC60YDRg9GC0LjQvCDQstC90LjQt1xuICAgICAgICBpZih0aGlzLnNjcm9sbFRvcERpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QucmVtb3ZlQ2xhc3MoJ3Njcm9sbC11cCcpO1xuICAgICAgICAgICAgdGhpcy5yb290LmFkZENsYXNzKCdzY3JvbGwtZG93bicpO1xuICAgICAgICB9XG4gICAgICAgIC8vINC60YDRg9GC0LjQvCDQstCy0LXRgNGFXG4gICAgICAgIGlmKHRoaXMuc2Nyb2xsVG9wRGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QucmVtb3ZlQ2xhc3MoJ3Njcm9sbC1kb3duJyk7XG4gICAgICAgICAgICB0aGlzLnJvb3QuYWRkQ2xhc3MoJ3Njcm9sbC11cCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIF9oYW5kbGVTY3JvbGwoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU5hdkJhcigpO1xuICAgIH1cblxuICAgIF9oYW5kbGVXaW5kb3dSZXNpemUoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU5hdkJhcigpO1xuICAgIH1cbiBcblxufSIsIi8vINC60L3QvtC/0LrQsCDQvdCw0LLQtdGA0YVcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFRvVG9wQnRuIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihyb290LCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKHJvb3QsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgICAgIHRoaXMuc2V0VG9Ub3BCdXR0b24oKTtcbiAgICB9XG5cbiAgICBzZXRUb1RvcEJ1dHRvbigpIHtcblxuICAgICAgICB2YXIgJHNjcm9sbFRvcEJ0biA9ICQoJzxhIHJlbD1cIm5vZm9sbG93XCIgaHJlZj1cIiNcIiBpZD1cInNjcm9sbC10b3BcIiBjbGFzcz1cInNjcm9sbHRvdG9wLWJ0blwiPjxpPjwvaT48L2E+JykuYXBwZW5kVG8oJ2JvZHknKTtcblxuICAgICAgICAkc2Nyb2xsVG9wQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnaHRtbDpub3QoOmFuaW1hdGVkKSxib2R5Om5vdCg6YW5pbWF0ZWQpJykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMH0sIDMwMCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAxMDApIHtcbiAgICAgICAgICAgICRzY3JvbGxUb3BCdG4uYWRkQ2xhc3MoJ3RvcC1idG4tc2hvdycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHNjcm9sbFRvcEJ0bi5yZW1vdmVDbGFzcygndG9wLWJ0bi1zaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCRzY3JvbGxUb3BCdG4uaGFzQ2xhc3MoJ3RvcC1idG4tc2hvdycpKSB7XG4gICAgICAgICAgICAkc2Nyb2xsVG9wQnRuLnJlbW92ZUNsYXNzKCd0b3AtYnRuLXNob3cnKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgXCJzbGljay1jYXJvdXNlbFwiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBnZXQgX2RlZmF1bHRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93czogMCxcbiAgICAgICAgICAgIGNvdW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlci1wcmV2XCI+PHNwYW4gY2xhc3M9XCJpY29uLWxlZnRcIj48L3NwYW4+PC9idXR0b24+JyxcbiAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGlkZXItbmV4dFwiPjxzcGFuIGNsYXNzPVwiaWNvbi1yaWdodFwiPjwvc3Bhbj48L2J1dHRvbj4nXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihyb290LCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKHJvb3QsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBfY2FjaGVOb2RlcygpIHtcbiAgICAgICAgdGhpcy5ub2RlcyA9IHt9O1xuICAgIH1cblxuICAgIF9iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLnJvb3Qub24oJ2luaXQnLCB0aGlzLmFkZENvdW50ZXIpO1xuICAgICAgICB0aGlzLnJvb3Qub24oJ2JlZm9yZUNoYW5nZScsIHRoaXMuY2hhbmdlQ291bnRlcik7XG4gICAgICAgIHRoaXMucm9vdC5vbignYnJlYWtwb2ludCcsIHRoaXMuYWRkQ291bnRlcik7XG4gICAgfVxuXG4gICAgX3JlYWR5KCkge1xuICAgICAgICB0aGlzLnJvb3Quc2xpY2sodGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICBhZGRDb3VudGVyKGV2ZW50LCBzbGljaykge1xuICAgICAgICBpZiAoc2xpY2sub3B0aW9ucy5jb3VudGVyID09PSB0cnVlICYmIHNsaWNrLnNsaWRlQ291bnQgPiBzbGljay5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgbGV0ICRjb3VudGVyID0gJCgnPGRpdiBjbGFzcz1cInNsaWNrLWNvdW50ZXIgc2xpY2stY2xvbmVkXCI+PGRpdiBjbGFzcz1cInNsaWNrLWNvdW50ZXJfX2lubmVyXCI+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwic2xpY2stY291bnRlcl9fY3VycmVudFwiPicgKyAoc2xpY2suY3VycmVudFNsaWRlICsgMSkgKyAnPC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICc8c3BhbiByb2xlPVwic2VwYXJhdG9yXCIgY2xhc3M9XCJzbGljay1jb3VudGVyX19kaXZpZGVyXCI+PC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInNsaWNrLWNvdW50ZXJfX2NvdW50XCI+JyArIChzbGljay5nZXREb3RDb3VudCgpICsgMSkgKyAnPC9zcGFuPjwvZGl2PjwvZGl2PicpO1xuXG4gICAgICAgICAgICAkY291bnRlci5hcHBlbmRUbyhzbGljay4kc2xpZGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZUNvdW50ZXIoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkge1xuICAgICAgICBzbGljay4kc2xpZGVyLmZpbmQoJy5zbGljay1jb3VudGVyX19jdXJyZW50JykuaHRtbChNYXRoLmZsb29yKG5leHRTbGlkZSAvIHNsaWNrLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICsgMSk7XG4gICAgfVxufSIsIi8qKlxuICogR0xPQkFMU1xuICovXG5cbihmdW5jdGlvbih3aW5kb3cpIHtcbiAgICB3aW5kb3cuRyA9IHt9O1xufSkod2luZG93KTtcblxuXG4vKipcbiAqIE11bHRpIGJyb3dzZXIgc3VwcG9ydCBmb3IgZG9jdW1lbnQgc2Nyb2xsIHRvcFxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuRy5nZXREb2N1bWVudFNjcm9sbFRvcCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgMDtcbn07XG5cblxuLyoqXG4gKiBNdWx0aSBicm93c2VyIHN1cHBvcnQgZm9yIGRvY3VtZW50IHNjcm9sbCBsZWZ0XG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5HLmdldERvY3VtZW50U2Nyb2xsTGVmdCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0IHx8IDA7XG59O1xuXG5cbi8qKlxuICogR2V0IHRpbWUgaW4gbXNcbiAqIEBsaWNlbnNlIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmUvbWFzdGVyL0xJQ0VOU0VcbiAqIEB0eXBlIHtmdW5jdGlvbn1cbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xubGV0IGdldFRpbWUgPVxuICBEYXRlLm5vdyB8fFxuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCB3aGVuIGludm9rZWQsIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgYXQgbW9zdCBvbmNlXG4gKiBkdXJpbmcgYSBnaXZlbiB3aW5kb3cgb2YgdGltZS4gTm9ybWFsbHksIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gd2lsbCBydW5cbiAqIGFzIG11Y2ggYXMgaXQgY2FuLCB3aXRob3V0IGV2ZXIgZ29pbmcgbW9yZSB0aGFuIG9uY2UgcGVyIGB3YWl0YCBkdXJhdGlvbjtcbiAqIGJ1dCBpZiB5b3UnZCBsaWtlIHRvIGRpc2FibGUgdGhlIGV4ZWN1dGlvbiBvbiB0aGUgbGVhZGluZyBlZGdlLCBwYXNzXG4gKiBge2xlYWRpbmc6IGZhbHNlfWAuIFRvIGRpc2FibGUgZXhlY3V0aW9uIG9uIHRoZSB0cmFpbGluZyBlZGdlLCBkaXR0by5cbiAqIEBsaWNlbnNlIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmUvbWFzdGVyL0xJQ0VOU0VcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmNcbiAqIEBwYXJhbSB7bnVtYmVyfSB3YWl0XG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuRy50aHJvdHRsZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgbGV0IGNvbnRleHQsIGFyZ3MsIHJlc3VsdDtcbiAgbGV0IHRpbWVvdXQgPSBudWxsO1xuICBsZXQgcHJldmlvdXMgPSAwO1xuICBvcHRpb25zIHx8IChvcHRpb25zID0ge30pO1xuICBsZXQgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogZ2V0VGltZSgpO1xuICAgIHRpbWVvdXQgPSBudWxsO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICB9O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgbGV0IG5vdyA9IGdldFRpbWUoKTtcbiAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHByZXZpb3VzID0gbm93O1xuICAgIGxldCByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIGlmIChyZW1haW5pbmcgPD0gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59OyIsIi8vIGltcG9ydCBcIm1hdGNobWVkaWEtcG9seWZpbGxcIjtcbi8vIGltcG9ydCBcIm1hdGNobWVkaWEtcG9seWZpbGwvbWF0Y2hNZWRpYS5hZGRMaXN0ZW5lclwiO1xuXG4vL2ltcG9ydCBvYmplY3RGaXRJbWFnZXMgZnJvbSBcIm9iamVjdC1maXQtaW1hZ2VzXCI7IC8vINCf0L7Qu9C40YTQuNC7XG5pbXBvcnQgXCJsYXp5c2l6ZXNcIjtcblxuLy9pbXBvcnQge01EQ1JpcHBsZX0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZSc7XG4vLyBpbXBvcnQge01EQ1RleHRGaWVsZH0gZnJvbSAnQG1hdGVyaWFsL3RleHRmaWVsZCc7XG5cbmltcG9ydCBMaWdodGJveCBmcm9tIFwiLi9jb21wb25lbnRzL2xpZ2h0Ym94XCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvc2xpZGVyXCI7XG5pbXBvcnQgU2Nyb2xsVG9Ub3BCdG4gZnJvbSBcIi4vY29tcG9uZW50cy9zY3JvbGx0b3RvcC1idG5cIjtcbmltcG9ydCBNYWluTWVudSBmcm9tICcuL2NvbXBvbmVudHMvbWFpbi1tZW51JztcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vY29tcG9uZW50cy9uYXYtYmFyXCI7XG5pbXBvcnQgeW1hcHMgZnJvbSAneW1hcHMnO1xuXG5jbGFzcyBBcHBsaWNhdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0Q29tbW9uKCk7XG4gICAgICAgIC8vdGhpcy5pbml0TWF0ZXJpYWxEZXNpZ25TdHVmZigpO1xuICAgICAgICB0aGlzLmluaXRTbGlkZXJzKCk7XG4gICAgICAgIC8vdGhpcy5pbml0QWpheEJsb2dMb2FkKCk7XG4gICAgICAgIHRoaXMuaW5pdE1vYmlsZVZpZXdQb3J0SGVpZ2h0KCk7XG4gICAgICAgIHRoaXMuaW5pdFlhbmRleE1hcCgpO1xuICAgIH1cblxuXG4gICAgLy8gaW5pdE1hdGVyaWFsRGVzaWduU3R1ZmYoKSB7XG4gICAgLy8gICAgIC8vINC10YTRhNC10LrRgiByaXBwbGUg0L3QsCDQutC90L7Qv9C60LDRhSAgICAgICAgXG4gICAgLy8gICAgIFtdLm1hcC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZGMtYnV0dG9uJyksIGZ1bmN0aW9uKGVsKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gbmV3IE1EQ1JpcHBsZShlbCk7XG4gICAgLy8gICAgIH0pO1xuXG4gICAgLy8gICAgIC8vINGC0LXQutGB0YLQvtCy0YvQtSDQv9C+0LvRjyDRhNC+0YDQvFxuICAgIC8vICAgICAvLyBbXS5tYXAuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWRjLXRleHQtZmllbGQnKSwgZnVuY3Rpb24oZWwpIHtcbiAgICAvLyAgICAgLy8gICAgIHJldHVybiBuZXcgTURDVGV4dEZpZWxkKGVsKTtcbiAgICAvLyAgICAgLy8gfSk7XG4gICAgLy8gfVxuXG5cbiAgICAvLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjQuFxuICAgIGluaXRDb21tb24oKSB7XG5cbiAgICAgICAgbmV3IExpZ2h0Ym94KCk7XG5cbiAgICAgICAgbmV3IFNjcm9sbFRvVG9wQnRuKCk7XG5cbiAgICAgICAgbmV3IE5hdkJhcih7IG9mZnNldEZvckZpeGVkOiAzMDAgfSk7XG5cbiAgICAgICAgbmV3IE1haW5NZW51KCd1bC5zZi1tZW51Jyk7XG5cbiAgICAgICAgLyog0J3QsNC20LDQu9C4INC90LAg0LrQvdC+0L/QvtGH0LrRgyDQvtGC0L/RgNCw0LLQutC4INGE0L7RgNC80Ysg0L7QsdGM0YDQsNGC0L3QvtC5INGB0LLRj9C30LgqL1xuICAgICAgICAkKCcjemF5YXZrYS1idXR0b24nKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKCcjemF5dmthLXN1Ym1pdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgoaGlzdG9yeS5sZW5ndGggPT0gMCkgJiYgIWRvY3VtZW50LnJlZmVycmVyKSB7XG4gICAgICAgICAgICAkKCcuanMtZ28tYmFjaycpLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINC/0YDQvtC60YDRg9GC0LjRgtGMINCy0L3QuNC3INC/0LXRgNCy0YvQuSDRjdC60YDQsNC9XG4gICAgICAgICQoJy5qcy1nby1iYWNrJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICgoMSA8IGhpc3RvcnkubGVuZ3RoKSAmJiBkb2N1bWVudC5yZWZlcnJlcikge1xuICAgICAgICAgICAgICAgIGhpc3RvcnkuYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL29iamVjdEZpdEltYWdlcyAtINC/0L7Qu9C40YTQuNC7INCw0LrRgtC40LLQsNGG0LjRj1xuICAgICAgICAvLyBpZiAodHlwZW9mIG9iamVjdEZpdEltYWdlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyAgICAgb2JqZWN0Rml0SW1hZ2VzKCQoJy5pbWFnZS1jb3ZlciBpbWcnKSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyDQv9GA0L7QutGA0YPRgtC40YLRjCDQstC90LjQtyDQv9C10YDQstGL0Lkg0Y3QutGA0LDQvVxuICAgICAgICAkKCcuanMtZ28tZG93bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgeSA9ICQoJy5oZWFkZXItd3JhcCcpLmhlaWdodCgpO1xuICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICB7IHNjcm9sbFRvcDogeSB9LCAxMDAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLy8g0J/Qu9Cw0LLQvdCw0Y8g0L/RgNC+0LrRgNGD0YLQutCwINC/0YDQuCDQv9C10YDQtdGF0L7QtNC1INC/0L4g0Y/QutC+0YDRjlxuICAgICAgICAvLyBjb25zdCAkcm9vdCA9ICQoJ2h0bWwsIGJvZHknKTtcbiAgICAgICAgLy8gJCgnI21haW4tbWVudSBhJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICAgICB2YXIgaHJlZiA9ICQuYXR0cih0aGlzLCAnaHJlZicpO1xuICAgICAgICAvLyAgICAgaHJlZiA9IGhyZWYuc3Vic3RyaW5nKDEsIGhyZWYubGVuZ3RoKTtcbiAgICAgICAgLy8gICAgIC8vY29uc29sZS5sb2coaHJlZik7XG4gICAgICAgIC8vICAgICAkcm9vdC5hbmltYXRlKHtcbiAgICAgICAgLy8gICAgICAgICBzY3JvbGxUb3A6ICQoaHJlZikub2Zmc2V0KCkudG9wXG4gICAgICAgIC8vICAgICB9LCAxNTAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBocmVmO1xuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgfVxuXG5cbiAgICBpbml0WWFuZGV4TWFwKCkge1xuXG4gICAgICAgIHltYXBzLmxvYWQoJ2h0dHBzOi8vYXBpLW1hcHMueWFuZGV4LnJ1LzIuMS8/bGFuZz1ydV9SVScpXG4gICAgICAgICAgICAudGhlbihtYXBzID0+IHtcblxuICAgICAgICAgICAgICAgIC8vINCh0L7Qt9C00LDQvdC40LUg0LrQsNGA0YLRiy5cbiAgICAgICAgICAgICAgICAvLyBodHRwczovL3RlY2gueWFuZGV4LnJ1L21hcHMvZG9jL2pzYXBpLzIuMS9kZy9jb25jZXB0cy9tYXAtZG9jcGFnZS9cbiAgICAgICAgICAgICAgICBjb25zdCBteU1hcCA9IG5ldyBtYXBzLk1hcCgneWFuZGV4LW1hcCcsIHtcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBbNTEuNjYwNzgxLCAzOS4yMDAyNjldLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiAxMyxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIG15TWFwLmNvbnRyb2xzIC8vINC00L7QsdCw0LLQuNC8INCy0YHRj9C60LjRhSDQutC90L7Qv9C+0LosINCyINGB0LrQvtCx0LrQsNGFINC40YUg0L/QvtC30LjRhtC40Lgg0LIg0LHQu9C+0LrQtVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLmFkZCgnem9vbUNvbnRyb2wnLCB7IGxlZnQ6IDUsIHRvcDogNSB9KSAvL9Cc0LDRgdGI0YLQsNCxXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAuYWRkKCd0eXBlU2VsZWN0b3InKSAvL9Ch0L/QuNGB0L7QuiDRgtC40L/QvtCyINC60LDRgNGC0YtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC5hZGQoJ21hcFRvb2xzJywgeyBsZWZ0OiAzNSwgdG9wOiA1IH0pIC8vINCh0YLQsNC90LTQsNGA0YLQvdGL0Lkg0L3QsNCx0L7RgCDQutC90L7Qv9C+0LpcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC5hZGQoJ3NlYXJjaENvbnRyb2wnKTsgLy8g0KHRgtGA0L7QutCwINGBINC/0L7QuNGB0LrQvtC8XG5cbiAgICAgICAgICAgICAgICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQvNC10YLQutC4XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly90ZWNoLnlhbmRleC5ydS9tYXBzL2RvYy9qc2FwaS8yLjEvcmVmL3JlZmVyZW5jZS9QbGFjZW1hcmstZG9jcGFnZS9cblxuXG4gICAgICAgICAgICAgICAgLyog0KHQvtC30LTQsNC10Lwg0LrQsNGB0YLQvtC80L3Ri9C1INC80LXRgtC60LggKi9cbiAgICAgICAgICAgICAgICBjb25zdCBteVBsYWNlbWFyazAgPSBuZXcgbWFwcy5QbGFjZW1hcmsoWzUxLjY2MDc4MSwgMzkuMjAwMjY5XSwge1xuICAgICAgICAgICAgICAgICAgICAvLyDQpdC40L3RgiDQv9C+0LrQsNC30YvQstCw0LXRgtGB0Y8g0L/RgNC4INC90LDQstC10LTQtdC90LjQuCDQvNGL0YjQutC+0Lkg0L3QsCDQuNC60L7QvdC60YMg0LzQtdGC0LrQuC5cbiAgICAgICAgICAgICAgICAgICAgaGludENvbnRlbnQ6ICfQodC+0LTQtdGA0LbQuNC80L7QtSDQstGB0L/Qu9GL0LLQsNGO0YnQtdC5INC/0L7QtNGB0LrQsNC30LrQuCcsXG4gICAgICAgICAgICAgICAgICAgIC8vINCR0LDQu9GD0L0g0L7RgtC60YDQvtC10YLRgdGPINC/0YDQuCDQutC70LjQutC1INC/0L4g0LzQtdGC0LrQtS5cbiAgICAgICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6ICc8ZGl2IGNsYXNzPVwiYmFsbG9uXCI+0KHQvtC00LXRgNC20LjQvNC+0LUg0LHQsNC70YPQvdCwPC9kaXY+JywgLy8g0YHQtNC10YHRjCDRgdC+0LTQtdGA0LbQuNC80L7QtSDQsdCw0LvRg9C90LAg0LIg0YTQvtGA0LzQsNGC0LUgaHRtbCwg0LLRgdC1INGB0YLQuNC70Lgg0LIgY3NzXG5cbiAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJy9pbWcvbWFya2VyLnN2ZycsIC8vINC60LDRgNGC0LjQvdC60LAg0LjQutC+0L3QutC4XG4gICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFs0MCwgNDBdLCAvLyDRgNCw0LfQvNC10YAg0LjQutC+0L3QutC4XG4gICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0zMiwgLTY0XSwgLy8g0L/QvtC30LjRhtC40Y8g0LjQutC+0L3QutC4XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyDRgtC+0LbQtSDRgdCw0LzQvtC1INC00LvRjyDQtNGA0YPQs9C40YUg0LzQtdGC0L7QulxuXG5cbiAgICAgICAgICAgICAgICAvLyDQn9C+0YHQu9C1INGC0L7Qs9C+INC60LDQuiDQvNC10YLQutCwINCx0YvQu9CwINGB0L7Qt9C00LDQvdCwLCDQtNC+0LHQsNCy0LvRj9C10Lwg0LXRkSDQvdCwINC60LDRgNGC0YMuXG4gICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmswKTtcblxuXG4gICAgICAgICAgICAgICAgLy8g0KTQuNC60YEg0LrRgNC40LLQvtCz0L4g0LLRi9GA0LDQstC90LjQstCw0L3QuNGPINC60LDRgdGC0L7QvNC90YvRhSDQsdCw0LvRg9C90L7QslxuICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuZXZlbnRzLmFkZChbXG4gICAgICAgICAgICAgICAgICAgICdiYWxsb29ub3BlbidcbiAgICAgICAgICAgICAgICBdLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZ2VvT2JqZWN0ID0gZS5nZXQoJ3RhcmdldCcpO1xuICAgICAgICAgICAgICAgICAgICBteU1hcC5wYW5UbyhnZW9PYmplY3QuZ2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKSwgeyBkZWxheTogMCB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygn0J3QtSDRg9C00LDQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LrQsNGA0YLRgycsIGVycm9yKSk7XG5cbiAgICB9XG5cblxuXG4gICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LLRgdC10YUg0YHQu9Cw0LnQtNC10YDQvtCyXG4gICAgaW5pdFNsaWRlcnMoKSB7XG5cbiAgICAgICAgLy8gSG9tZSBTbGlkZXJcbiAgICAgICAgbGV0ICRob21lU2xpZGVyID0gJCgnLmhvbWUtc2xpZGVyJyk7XG4gICAgICAgIGlmICgkaG9tZVNsaWRlci5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIG5ldyBTbGlkZXIoJGhvbWVTbGlkZXIsIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGRvdHNDbGFzczogJ215LWRvdHMnLFxuICAgICAgICAgICAgICAgIC8vYXV0b3BsYXlTcGVlZDogMjAwMCxcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF1cblxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhcm91c2VsIGluIGNvbnRlbnRcbiAgICAgICAgbGV0ICRzcGVjaWFsID0gJCgnLnNwZWNpYWxfX3NsaWRlcicpO1xuICAgICAgICBpZiAoJHNwZWNpYWwubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBuZXcgU2xpZGVyKCRzcGVjaWFsLCB7XG4gICAgICAgICAgICAgICAgY291bnRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAxNTAwLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzcGVjaWFsLXByZXZcIj48c3BhbiBjbGFzcz1cImljb24tbGVmdFwiPjwvc3Bhbj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzcGVjaWFsLW5leHRcIj48c3BhbiBjbGFzcz1cImljb24tcmlnaHRcIj48L3NwYW4+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk3NixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNjc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8g0LrQsNGB0YLRi9C70YzQvdC+0LUg0YDQtdGI0LXQvdC40LUgMTAwdmgg0LTQu9GPINC80L7QsdC40LvRjNC90LjQutC+0LJcbiAgICBpbml0TW9iaWxlVmlld1BvcnRIZWlnaHQoKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vdGhlLXRyaWNrLXRvLXZpZXdwb3J0LXVuaXRzLW9uLW1vYmlsZS9cbiAgICAgICAgLy8gRmlyc3Qgd2UgZ2V0IHRoZSB2aWV3cG9ydCBoZWlnaHQgYW5kIHdlIG11bHRpcGxlIGl0IGJ5IDElIHRvIGdldCBhIHZhbHVlIGZvciBhIHZoIHVuaXRcbiAgICAgICAgbGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMTtcbiAgICAgICAgLy8gVGhlbiB3ZSBzZXQgdGhlIHZhbHVlIGluIHRoZSAtLXZoIGN1c3RvbSBwcm9wZXJ0eSB0byB0aGUgcm9vdCBvZiB0aGUgZG9jdW1lbnRcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKTtcbiAgICAgICAgbGV0IGRvY3VtZW50X3dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIC8vIFdlIGxpc3RlbiB0byB0aGUgcmVzaXplIGV2ZW50ICjQsCDRgNC10YHQsNC50Lcg0LIg0LzQvtCx0LjQu9C60LDRhSDRgdGA0LDQsdCw0YLRi9Cy0LDQtdGCINC4INC/0YDQuCDRgdC60YDQvtC70LUsINC60L7Qs9C00LAg0LjRgdGH0LXQt9Cw0LXRgiDRgdGC0YDQvtC60LAg0LLQstC+0LTQsCDQsNC00YDQtdGB0LAg0LIg0LHRgNCw0YPQt9C10YDQtSlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIC8vIFdlIGV4ZWN1dGUgdGhlIHNhbWUgc2NyaXB0IGFzIGJlZm9yZVxuICAgICAgICAgICAgaWYgKGRvY3VtZW50X3dpZHRoICE9IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRfd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICBsZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5cbi8vINC30LDQv9GD0YHQuiDQv9GA0LjQu9C+0LbQtdC90LjRj1xuJCgoKSA9PiB7XG4gICAgbmV3IEFwcGxpY2F0aW9uKCk7XG59KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5raHRtbF9zdGFydFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtodG1sX3N0YXJ0XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL21haW4uanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJqUXVlcnkiLCJDb21wb25lbnQiLCJsZW5ndGgiLCJyb290Iiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsIl9kZWZhdWx0T3B0aW9ucyIsImlzalF1ZXJ5IiwiX2NhY2hlTm9kZXMiLCJfYmluZEV2ZW50cyIsIl9yZWFkeSIsIm9iamVjdCIsIkxpZ2h0Ym94IiwiaW5pdGlhbGl6ZSIsImRlZmF1bHRzIiwibGFuZyIsInRyYW5zaXRpb25FZmZlY3QiLCJiYWNrRm9jdXMiLCJidXR0b25zIiwiaTE4biIsInJ1IiwiQ0xPU0UiLCJORVhUIiwiUFJFViIsIkVSUk9SIiwiUExBWV9TVEFSVCIsIlBMQVlfU1RPUCIsIkZVTExfU0NSRUVOIiwiVEhVTUJTIiwiRE9XTkxPQUQiLCJTSEFSRSIsIlpPT00iLCJub2RlcyIsImxpbmsiLCIkIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJGxpbmsiLCJjdXJyZW50VGFyZ2V0IiwiZmFuY3lib3giLCJvcGVuIiwic3JjIiwiZGF0YSIsInR5cGUiLCJvcHRzIiwidG91Y2giLCJhdXRvRm9jdXMiLCJjbG9zZUV4aXN0aW5nIiwiYW5pbWF0aW9uRWZmZWN0IiwiYmVmb3JlTG9hZCIsImN1cnJlbnQiLCIkc2xpZGUiLCJhZGRDbGFzcyIsIk5hdkJhciIsIk1lbnUiLCJlbCIsImRvY3VtZW50U2Nyb2xsVG9wIiwiaW5pdCIsIl9pbml0U3VwZXJmaXNoIiwiX2luaXRNb2JpbGVNZW51IiwiY2xpY2siLCJlIiwiY2xvc2VNZW51IiwiY2FsbCIsImVuYWJsZVVwZGF0ZSIsImhhc0NsYXNzIiwiZGlzYWJsZVVwZGF0ZSIsIm9wZW5NZW51Iiwic3VwZXJmaXNoIiwiYXBwZW5kIiwiaHRtbCIsInBhcmVudCIsInNpYmxpbmdzIiwic2xpZGVUb2dnbGUiLCJ0b2dnbGVDbGFzcyIsImlzIiwiaGlkZSIsInNob3ciLCJHIiwiZ2V0RG9jdW1lbnRTY3JvbGxUb3AiLCJjc3MiLCJyZW1vdmVDbGFzcyIsImF0dHIiLCJzY3JvbGxUb3AiLCJvbGRTY3JvbGxUb3AiLCJzY3JvbGxUb3BEaXJlY3Rpb24iLCJvZmZzZXRGb3JGaXhlZCIsImFsbG93VXBkYXRlIiwiX3VwZGF0ZU5hdkJhciIsIl9zZXRTZXJhY2hCb3giLCJfaGFuZGxlU2Nyb2xsVGhyb3R0bGVkIiwidGhyb3R0bGUiLCJfaGFuZGxlU2Nyb2xsIiwiYmluZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlV2luZG93UmVzaXplVGhyb3R0bGVkIiwiX2hhbmRsZVdpbmRvd1Jlc2l6ZSIsImlzTmF2QmFyRml4ZWQiLCJTY3JvbGxUb1RvcEJ0biIsInNldFRvVG9wQnV0dG9uIiwiJHNjcm9sbFRvcEJ0biIsImFwcGVuZFRvIiwiYW5pbWF0ZSIsInNjcm9sbCIsIlNsaWRlciIsInJvd3MiLCJjb3VudGVyIiwicHJldkFycm93IiwibmV4dEFycm93IiwiYWRkQ291bnRlciIsImNoYW5nZUNvdW50ZXIiLCJzbGljayIsInNsaWRlQ291bnQiLCJzbGlkZXNUb1Nob3ciLCIkY291bnRlciIsImN1cnJlbnRTbGlkZSIsImdldERvdENvdW50IiwiJHNsaWRlciIsIm5leHRTbGlkZSIsImZpbmQiLCJNYXRoIiwiZmxvb3IiLCJzbGlkZXNUb1Njcm9sbCIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwiZ2V0RG9jdW1lbnRTY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJzY3JvbGxMZWZ0IiwiZ2V0VGltZSIsIkRhdGUiLCJub3ciLCJmdW5jIiwid2FpdCIsImNvbnRleHQiLCJhcmdzIiwicmVzdWx0IiwidGltZW91dCIsInByZXZpb3VzIiwibGF0ZXIiLCJsZWFkaW5nIiwiYXBwbHkiLCJyZW1haW5pbmciLCJhcmd1bWVudHMiLCJjbGVhclRpbWVvdXQiLCJ0cmFpbGluZyIsInNldFRpbWVvdXQiLCJNYWluTWVudSIsInltYXBzIiwiQXBwbGljYXRpb24iLCJpbml0Q29tbW9uIiwiaW5pdFNsaWRlcnMiLCJpbml0TW9iaWxlVmlld1BvcnRIZWlnaHQiLCJpbml0WWFuZGV4TWFwIiwidHJpZ2dlciIsImhpc3RvcnkiLCJyZWZlcnJlciIsImJhY2siLCJ5IiwiaGVpZ2h0IiwibG9hZCIsInRoZW4iLCJtYXBzIiwibXlNYXAiLCJNYXAiLCJjZW50ZXIiLCJ6b29tIiwibXlQbGFjZW1hcmswIiwiUGxhY2VtYXJrIiwiaGludENvbnRlbnQiLCJiYWxsb29uQ29udGVudCIsImljb25JbWFnZUhyZWYiLCJpY29uSW1hZ2VTaXplIiwiaWNvbkltYWdlT2Zmc2V0IiwiZ2VvT2JqZWN0cyIsImFkZCIsImV2ZW50cyIsImdlb09iamVjdCIsImdldCIsInBhblRvIiwiZ2VvbWV0cnkiLCJnZXRDb29yZGluYXRlcyIsImRlbGF5IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiJGhvbWVTbGlkZXIiLCJpbmZpbml0ZSIsImFkYXB0aXZlSGVpZ2h0IiwiZmFkZSIsImFycm93cyIsImRvdHMiLCJhdXRvcGxheSIsImRvdHNDbGFzcyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCIkc3BlY2lhbCIsImF1dG9wbGF5U3BlZWQiLCJ2aCIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImRvY3VtZW50X3dpZHRoIiwiaW5uZXJXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=