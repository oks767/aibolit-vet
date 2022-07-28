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
      $('.city').click(function () {
        $('.pop-up').addClass('pop-up--active');
      });
      $('.modal').click(function () {
        $('.pop-up-profile').addClass('pop-up--active');
      });
      $('.close').click(function () {
        $('.pop-up').removeClass('pop-up--active');
      });
      $('.close').click(function () {
        $('.pop-up-profile').removeClass('pop-up--active');
      }); // $('#phone').mask('+7 (999) 999 9999')

      $('.more').click(function () {
        $('#card__one').css({
          transform: 'translate(-110%)',
          transition: '1s'
        });
        $('#card__two').css({
          transform: 'translate(-100%)',
          transition: '1s'
        });
      });
      /* Нажали на кнопочку отправки формы обьратной связи*/

      $('#zayavka-button').click(function (event) {
        event.preventDefault();
        $('#zayvka-submit').trigger('click');
      }); // automatic focus for input

      $('.code').on('keyup', function (e) {
        var value = $(this).val();
        var len = value.length;
        var curTabIndex = parseInt($(this).attr('tabindex'));
        var nextTabIndex = curTabIndex + 1;
        var prevTabIndex = curTabIndex - 1;

        if (len >= 2) {
          $(this).val(value.substr(0, 1));
          $('[tabindex=' + nextTabIndex + ']').focus();
        } else if (len == 0 && prevTabIndex !== 0) {
          $('[tabindex=' + prevTabIndex + ']').focus();
        }
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

      var $terap = $('.slider-terap');

      if ($terap.length !== 0) {
        new _components_slider__WEBPACK_IMPORTED_MODULE_2__["default"]($terap, {
          counter: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 3000,
          prevArrow: '<button class="terap-prev"><span class="icon-left"></span></button>',
          nextArrow: '<button class="terap-next"><span class="icon-right"></span></button>',
          adaptiveHeight: true,
          variableWidth: true,
          responsive: [{
            breakpoint: 576,
            settings: {
              slidesToShow: 1
            }
          }]
        });
      }

      var $service = $('.service-slider');

      if ($service.length !== 0) {
        new _components_slider__WEBPACK_IMPORTED_MODULE_2__["default"]($service, {
          counter: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 3000,
          prevArrow: '<button class="service-prev"><span class="icon-left"></span></button>',
          nextArrow: '<button class="service-next"><span class="icon-right"></span></button>',
          adaptiveHeight: true,
          variableWidth: true,
          responsive: [{
            breakpoint: 576,
            settings: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9jb21wb25lbnRzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbGlnaHRib3guanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9jb21wb25lbnRzL21haW4tbWVudS5qcyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbmF2LWJhci5qcyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0Ly4vc3JjL2pzL2NvbXBvbmVudHMvc2Nyb2xsdG90b3AtYnRuLmpzIiwid2VicGFjazovL2h0bWwtc3RhcnQvLi9zcmMvanMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcblxuLy9leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBFbWl0dGVyIHtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgXG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICAvL3N1cGVyKCk7XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBhcmdzWzBdO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGVmYXVsdE9wdGlvbnMsIGFyZ3NbMV0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGlmIChDb21wb25lbnQuaXNqUXVlcnkoYXJnc1swXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3QgPSBhcmdzWzBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kZWZhdWx0T3B0aW9ucywgYXJnc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaXNqUXVlcnkob2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiBqUXVlcnk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5fY2FjaGVOb2RlcygpO1xuICAgICAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuX3JlYWR5KCk7XG4gICAgfVxuXG4gICAgX2NhY2hlTm9kZXMoKSB7fVxuXG4gICAgX2JpbmRFdmVudHMoKSB7fVxuXG4gICAgX3JlYWR5KCkge31cbn0iLCJpbXBvcnQgXCJAZmFuY3lhcHBzL2ZhbmN5Ym94XCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWdodGJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgZ2V0IF9kZWZhdWx0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgbGFuZzogJ3J1JyxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRWZmZWN0OiAnc2xpZGUnLFxuICAgICAgICAgICAgICAgIGJhY2tGb2N1czogZmFsc2UsXG4gICAgICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgICAgICAnY2xvc2UnXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBpMThuOiB7XG4gICAgICAgICAgICAgICAgICAgIHJ1OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDTE9TRTogJ9CX0LDQutGA0YvRgtGMJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIE5FWFQ6ICfQlNCw0LvRjNGI0LUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgUFJFVjogJ9Cd0LDQt9Cw0LQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgRVJST1I6ICfQndC1INGD0LTQsNC10YLRgdGPINC30LDQs9GA0YPQt9C40YLRjC4gPGJyLz4g0J/QvtC/0YDQvtCx0YPQudGC0LUg0L/QvtC30LTQvdC10LUuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBMQVlfU1RBUlQ6ICfQndCw0YfQsNGC0Ywg0YHQu9Cw0LnQtNGI0L7RgycsXG4gICAgICAgICAgICAgICAgICAgICAgICBQTEFZX1NUT1A6ICfQntGB0YLQsNC90L7QstC40YLRjCDRgdC70LDQudC00YjQvtGDJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIEZVTExfU0NSRUVOOiAn0J3QsCDQstC10YHRjCDRjdC60YDQsNC9JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRIVU1CUzogJ9Cf0YDQtdCy0YzRjicsXG4gICAgICAgICAgICAgICAgICAgICAgICBET1dOTE9BRDogJ9Ch0LrQsNGH0LDRgtGMJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNIQVJFOiAn0J/QvtC00LXQu9C40YLRjNGB0Y8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgWk9PTTogJ9Cj0LLQtdC70LjRh9C40YLRjCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJvb3QsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIocm9vdCwgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIF9jYWNoZU5vZGVzKCkge1xuICAgICAgICB0aGlzLm5vZGVzID0ge1xuICAgICAgICAgICAgbGluazogJCgnLmpzLWxpbmstbW9kYWwnKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLm5vZGVzLmxpbmsub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbGV0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgJC5mYW5jeWJveC5vcGVuKHtcbiAgICAgICAgICAgICAgICBzcmM6ICRsaW5rLmRhdGEoJ3NyYycpLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgICAgICAgICAgIG9wdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2g6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjbG9zZUV4aXN0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25FZmZlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVMb2FkOiBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50LiRzbGlkZS5hZGRDbGFzcygnZmFuY3lib3gtbW9kYWwnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfcmVhZHkoKSB7XG4gICAgICAgICQuZmFuY3lib3guZGVmYXVsdHMuaTE4bi5ydSA9IHRoaXMub3B0aW9ucy5kZWZhdWx0cy5pMThuLnJ1O1xuICAgICAgICAkLmZhbmN5Ym94LmRlZmF1bHRzLmxhbmcgPSB0aGlzLm9wdGlvbnMuZGVmYXVsdHMubGFuZztcbiAgICAgICAgJC5mYW5jeWJveC5kZWZhdWx0cy5idXR0b25zID0gdGhpcy5vcHRpb25zLmRlZmF1bHRzLmJ1dHRvbnM7XG4gICAgICAgICQuZmFuY3lib3guZGVmYXVsdHMudHJhbnNpdGlvbkVmZmVjdCA9IHRoaXMub3B0aW9ucy5kZWZhdWx0cy50cmFuc2l0aW9uRWZmZWN0O1xuICAgICAgICAkLmZhbmN5Ym94LmRlZmF1bHRzLmJhY2tGb2N1cyA9IHRoaXMub3B0aW9ucy5kZWZhdWx0cy5iYWNrRm9jdXM7XG4gICAgfVxufSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmltcG9ydCAnc3VwZXJmaXNoL3NyYy9qcy9ob3ZlckludGVudCc7XG5pbXBvcnQgJ3N1cGVyZmlzaC9zcmMvanMvc3VwZXJmaXNoJztcblxuaW1wb3J0IFwiLi4vZ2xvYmFsLmpzXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL25hdi1iYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSB7XG4gIFxuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLnJvb3QgPSAkKCcuc2YtbWVudScpO1xuICAgIHRoaXMuZG9jdW1lbnRTY3JvbGxUb3A9bnVsbDtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5faW5pdFN1cGVyZmlzaCgpO1xuICAgIHRoaXMuX2luaXRNb2JpbGVNZW51KCk7XG4gICAgdGhpcy5fYmluZEV2ZW50cygpO1xuICB9XG5cbiAgc3RhdGljIG9wZW5NZW51KCkge1xuICAgIE1lbnUuZG9jdW1lbnRTY3JvbGxUb3AgPSBHLmdldERvY3VtZW50U2Nyb2xsVG9wKCk7XG4gICAgJCgnLmRyYXdlcicpLmFkZENsYXNzKCdvcGVuZWQnKTtcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2RyYXdlci1vcGVuZWQnKTtcbiAgICAkKCdib2R5JykuY3NzKHtcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ2ZpeGVkJyxcbiAgICAgICAgJ3RvcCc6IC1NZW51LmRvY3VtZW50U2Nyb2xsVG9wXG4gICAgfSk7XG4gICAgJCgnLmRyYXdlci1zY3JpbScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICB9XG5cbiAgc3RhdGljIGNsb3NlTWVudSgpIHtcbiAgICAgICQoJy5kcmF3ZXInKS5yZW1vdmVDbGFzcygnb3BlbmVkJyk7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2RyYXdlci1vcGVuZWQnKTtcbiAgICAgICQoJ2JvZHknKS5hdHRyKCdzdHlsZScsICcnKTtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5zY3JvbGxUb3AoTWVudS5kb2N1bWVudFNjcm9sbFRvcCk7XG4gICAgICAkKCcuZHJhd2VyLXNjcmltJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfVxuXG5cbiAgX2JpbmRFdmVudHMoKSB7XG5cbiAgICAkKCcuanMtY2xvc2UtZHJhd2VyJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBNZW51LmNsb3NlTWVudS5jYWxsKHRoaXMpO1xuICAgICAgICBOYXZCYXIuZW5hYmxlVXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICAkKCcuanMtb3Blbi1kcmF3ZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKCEkKHRoaXMpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgICAgTmF2QmFyLmRpc2FibGVVcGRhdGUoKTtcbiAgICAgICAgICAgIE1lbnUub3Blbk1lbnUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gLy8g0J/Qu9Cw0LLQvdCw0Y8g0L/RgNC+0LrRgNGD0YLQutCwINC/0YDQuCDQv9C10YDQtdGF0L7QtNC1INC/0L4g0Y/QutC+0YDRjlxuICAgIC8vICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuanMtbWVudSBhJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIFxuICAgIC8vICAgICBNZW51LmNsb3NlTWVudSgpO1xuICAgIC8vICAgICBOYXZCYXIuZW5hYmxlVXBkYXRlKCk7XG5cbiAgICAvLyAgICAgbGV0IGhyZWYgPSAkLmF0dHIodGhpcywgJ2hyZWYnKTtcbiAgICAvLyAgICAgaHJlZiA9IGhyZWYuc3Vic3RyaW5nKDEsIGhyZWYubGVuZ3RoKTtcbiAgICAvLyAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgIC8vICAgICAgICAgc2Nyb2xsVG9wOiAkKGhyZWYpLm9mZnNldCgpLnRvcFxuICAgIC8vICAgICB9LCA1MDAsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaHJlZjtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyB9KTtcblxuICB9XG5cblxuXG4gIFxuICBfaW5pdFN1cGVyZmlzaCgpIHtcbiAgICAkKHRoaXMuZWwpLnN1cGVyZmlzaCgpO1xuXG4gICAgLy8gJCgnI21lbnUtaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIC8vICAgJCgnI21vYmlsZV90b3BfbWVudV93cmFwcGVyJykudG9nZ2xlKCk7XG4gICAgLy8gICBzZWxmLnRvZ2dsZU1vYmlsZU1lbnUoKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIF9pbml0TW9iaWxlTWVudSgpIHtcbiAgICBcbiAgICAvLyBwcmVzdGFzaG9wLm9uKCdyZXNwb25zaXZlIHVwZGF0ZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gICAkKCcuanMtc3ViLW1lbnUnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIC8vICAgc2VsZi50b2dnbGVNb2JpbGVNZW51KCk7XG4gICAgLy8gfSk7XG5cbiAgICAkKCcuanMtZHJhd2VyLW1lbnUtbGlzdCcpLmFwcGVuZCgkKCcuc2YtbWVudScpLmh0bWwoKSk7XG5cbiAgICAvLyBjbGljayBvbiBtZW51IGxpbmsgZm9yIG9wZW4gc3VibWVudVxuICAgIC8vJCgnLmpzLWRyYXdlci1tZW51LWxpc3QgLnN1Yi1tZW51JykucGFyZW50KCdsaScpLmZpbmQoJyA+IGEnKS5hZGRDbGFzcygnaGFzLXN1Ym1lbnUnKTtcbiAgICAvLyAkKCcuaGFzLXN1Ym1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuc3ViLW1lbnUnKS5zbGlkZVRvZ2dsZSg0MDApO1xuICAgIC8vICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1zdWItbWVudS1vcGVuZWQnKTtcbiAgICAvLyB9KTtcblxuICAgIC8vIGNsaWNrIG9uIGJ1dHRvbiBmb3Igb3BlbiBzdWJtZW51XG4gICAgJCgnLmpzLWRyYXdlci1tZW51LWxpc3QgLnN1Yi1tZW51JykucGFyZW50KCdsaScpLmFwcGVuZCgnPGJ1dHRvbiBjbGFzcz1cIm9wZW4tc3VibWVudS1idG5cIj48L2J1dHRvbj4nKTsgLy8gYWRkIHN1Ym1lbnUgYnV0dG9uc1xuICAgICQoJy5vcGVuLXN1Ym1lbnUtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLnN1Yi1tZW51Jykuc2xpZGVUb2dnbGUoNDAwKTtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnc3ViLW1lbnUtb3BlbmVkJyk7XG4gICAgfSk7XG5cblxuXG5cbiAgfVxuXG4gIHRvZ2dsZU1vYmlsZU1lbnUoKSB7XG4gICAgJCgnI2hlYWRlcicpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgaWYgKCQoJyNtb2JpbGVfdG9wX21lbnVfd3JhcHBlcicpLmlzKFwiOnZpc2libGVcIikpIHtcbiAgICAgICQoJyNub3RpZmljYXRpb25zLCAjd3JhcHBlciwgI2Zvb3RlcicpLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnI25vdGlmaWNhdGlvbnMsICN3cmFwcGVyLCAjZm9vdGVyJykuc2hvdygpO1xuICAgIH1cbiAgfVxuXG5cbn1cbiIsImltcG9ydCBcIi4uL2dsb2JhbC5qc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIFxuICAgIGdldCBfZGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvZmZzZXRGb3JGaXhlZDogMjAwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnJvb3QgPSAkKCcubmF2LWJhcicpO1xuICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IG51bGw7ICAgICAgICBcbiAgICAgICAgdGhpcy5vbGRTY3JvbGxUb3AgPSBudWxsO1xuICAgICAgICB0aGlzLnNjcm9sbFRvcERpcmVjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICAgICAgTmF2QmFyLmFsbG93VXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlTmF2QmFyKCk7XG4gICAgICAgIHRoaXMuX3NldFNlcmFjaEJveCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhbGxvd1VwZGF0ZTtcblxuICAgIHN0YXRpYyBlbmFibGVVcGRhdGUoKXtcbiAgICAgICAgTmF2QmFyLmFsbG93VXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnTmF2QmFyLmFsbG93VXBkYXRlID0gJywgTmF2QmFyLmFsbG93VXBkYXRlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzYWJsZVVwZGF0ZSgpe1xuICAgICAgICBOYXZCYXIuYWxsb3dVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnTmF2QmFyLmFsbG93VXBkYXRlID0gJywgTmF2QmFyLmFsbG93VXBkYXRlKTtcbiAgICB9XG4gICAgXG4gICAgICAgICAgICBcbiAgICBfYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8g0YHQvtCx0YvRgtC40LUg0YHQutGA0L7QuyBcbiAgICAgICAgTmF2QmFyLl9oYW5kbGVTY3JvbGxUaHJvdHRsZWQgPSBHLnRocm90dGxlKHRoaXMuX2hhbmRsZVNjcm9sbC5iaW5kKHRoaXMpLCAxMDApO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgTmF2QmFyLl9oYW5kbGVTY3JvbGxUaHJvdHRsZWQpO1xuXG4gICAgICAgIC8vINGB0L7QsdGL0YLQuNC1INGA0LXRgdCw0LnQt1xuICAgICAgICBOYXZCYXIuX2hhbmRsZVdpbmRvd1Jlc2l6ZVRocm90dGxlZCA9IEcudGhyb3R0bGUodGhpcy5faGFuZGxlV2luZG93UmVzaXplLmJpbmQodGhpcyksIDEwMCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBOYXZCYXIuX2hhbmRsZVdpbmRvd1Jlc2l6ZVRocm90dGxlZCk7XG5cbiAgICB9XG5cblxuICAgIF9zZXRTZXJhY2hCb3goKSB7XG4gICAgICAgICQoJy5qcy10b2dsZS1zZWFyY2gtYm94Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICBcblxuICAgIF91cGRhdGVOYXZCYXIoKSB7XG5cbiAgICAgICAgaWYoIU5hdkJhci5hbGxvd1VwZGF0ZSkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5vbGRTY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFRvcDtcbiAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSBHLmdldERvY3VtZW50U2Nyb2xsVG9wKCk7XG4gICAgICAgIGNvbnN0IGlzTmF2QmFyRml4ZWQgPSB0aGlzLnJvb3QuaGFzQ2xhc3MoJ2ZpeGVkJyk7XG5cbiAgICAgICAgaWYodGhpcy5vbGRTY3JvbGxUb3AgPCB0aGlzLnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb3BEaXJlY3Rpb24gPSBcImRvd25cIjtcbiAgICAgICAgfSBlbHNlIGlmKCB0aGlzLm9sZFNjcm9sbFRvcCA+IHRoaXMuc2Nyb2xsVG9wICkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb3BEaXJlY3Rpb24gPSBcInVwXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvcERpcmVjdGlvbiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQv9GA0LjQu9C10L/QuNC70LjQstCw0LXQvCDRiNCw0L/QutGDXG4gICAgICAgIGlmICggdGhpcy5zY3JvbGxUb3AgPiB0aGlzLm9wdGlvbnMub2Zmc2V0Rm9yRml4ZWQgJiYgIWlzTmF2QmFyRml4ZWQgKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQvtGC0LvQtdC/0LvRj9C10Lwg0YjQsNC/0LrRg1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxUb3AgPD0gdGhpcy5vcHRpb25zLm9mZnNldEZvckZpeGVkICYmIGlzTmF2QmFyRml4ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g0LrRgNGD0YLQuNC8INCy0L3QuNC3XG4gICAgICAgIGlmKHRoaXMuc2Nyb2xsVG9wRGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdC5yZW1vdmVDbGFzcygnc2Nyb2xsLXVwJyk7XG4gICAgICAgICAgICB0aGlzLnJvb3QuYWRkQ2xhc3MoJ3Njcm9sbC1kb3duJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g0LrRgNGD0YLQuNC8INCy0LLQtdGA0YVcbiAgICAgICAgaWYodGhpcy5zY3JvbGxUb3BEaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdC5yZW1vdmVDbGFzcygnc2Nyb2xsLWRvd24nKTtcbiAgICAgICAgICAgIHRoaXMucm9vdC5hZGRDbGFzcygnc2Nyb2xsLXVwJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgX2hhbmRsZVNjcm9sbCgpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlTmF2QmFyKCk7XG4gICAgfVxuXG4gICAgX2hhbmRsZVdpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlTmF2QmFyKCk7XG4gICAgfVxuIFxuXG59IiwiLy8g0LrQvdC+0L/QutCwINC90LDQstC10YDRhVxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsVG9Ub3BCdG4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHJvb3QsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIocm9vdCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5zZXRUb1RvcEJ1dHRvbigpO1xuICAgIH1cblxuICAgIHNldFRvVG9wQnV0dG9uKCkge1xuXG4gICAgICAgIHZhciAkc2Nyb2xsVG9wQnRuID0gJCgnPGEgcmVsPVwibm9mb2xsb3dcIiBocmVmPVwiI1wiIGlkPVwic2Nyb2xsLXRvcFwiIGNsYXNzPVwic2Nyb2xsdG90b3AtYnRuXCI+PGk+PC9pPjwvYT4nKS5hcHBlbmRUbygnYm9keScpO1xuXG4gICAgICAgICRzY3JvbGxUb3BCdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCdodG1sOm5vdCg6YW5pbWF0ZWQpLGJvZHk6bm90KDphbmltYXRlZCknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwfSwgMzAwKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDEwMCkge1xuICAgICAgICAgICAgJHNjcm9sbFRvcEJ0bi5hZGRDbGFzcygndG9wLWJ0bi1zaG93Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkc2Nyb2xsVG9wQnRuLnJlbW92ZUNsYXNzKCd0b3AtYnRuLXNob3cnKTtcbiAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoJHNjcm9sbFRvcEJ0bi5oYXNDbGFzcygndG9wLWJ0bi1zaG93JykpIHtcbiAgICAgICAgICAgICRzY3JvbGxUb3BCdG4ucmVtb3ZlQ2xhc3MoJ3RvcC1idG4tc2hvdycpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBcInNsaWNrLWNhcm91c2VsXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGdldCBfZGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb3dzOiAwLFxuICAgICAgICAgICAgY291bnRlcjogZmFsc2UsXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGVyLXByZXZcIj48c3BhbiBjbGFzcz1cImljb24tbGVmdFwiPjwvc3Bhbj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlci1uZXh0XCI+PHNwYW4gY2xhc3M9XCJpY29uLXJpZ2h0XCI+PC9zcGFuPjwvYnV0dG9uPidcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJvb3QsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIocm9vdCwgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIF9jYWNoZU5vZGVzKCkge1xuICAgICAgICB0aGlzLm5vZGVzID0ge307XG4gICAgfVxuXG4gICAgX2JpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMucm9vdC5vbignaW5pdCcsIHRoaXMuYWRkQ291bnRlcik7XG4gICAgICAgIHRoaXMucm9vdC5vbignYmVmb3JlQ2hhbmdlJywgdGhpcy5jaGFuZ2VDb3VudGVyKTtcbiAgICAgICAgdGhpcy5yb290Lm9uKCdicmVha3BvaW50JywgdGhpcy5hZGRDb3VudGVyKTtcbiAgICB9XG5cbiAgICBfcmVhZHkoKSB7XG4gICAgICAgIHRoaXMucm9vdC5zbGljayh0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIGFkZENvdW50ZXIoZXZlbnQsIHNsaWNrKSB7XG4gICAgICAgIGlmIChzbGljay5vcHRpb25zLmNvdW50ZXIgPT09IHRydWUgJiYgc2xpY2suc2xpZGVDb3VudCA+IHNsaWNrLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBsZXQgJGNvdW50ZXIgPSAkKCc8ZGl2IGNsYXNzPVwic2xpY2stY291bnRlciBzbGljay1jbG9uZWRcIj48ZGl2IGNsYXNzPVwic2xpY2stY291bnRlcl9faW5uZXJcIj4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJzbGljay1jb3VudGVyX19jdXJyZW50XCI+JyArIChzbGljay5jdXJyZW50U2xpZGUgKyAxKSArICc8L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuIHJvbGU9XCJzZXBhcmF0b3JcIiBjbGFzcz1cInNsaWNrLWNvdW50ZXJfX2RpdmlkZXJcIj48L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwic2xpY2stY291bnRlcl9fY291bnRcIj4nICsgKHNsaWNrLmdldERvdENvdW50KCkgKyAxKSArICc8L3NwYW4+PC9kaXY+PC9kaXY+Jyk7XG5cbiAgICAgICAgICAgICRjb3VudGVyLmFwcGVuZFRvKHNsaWNrLiRzbGlkZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlQ291bnRlcihldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSB7XG4gICAgICAgIHNsaWNrLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNvdW50ZXJfX2N1cnJlbnQnKS5odG1sKE1hdGguZmxvb3IobmV4dFNsaWRlIC8gc2xpY2sub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKyAxKTtcbiAgICB9XG59IiwiLyoqXG4gKiBHTE9CQUxTXG4gKi9cblxuKGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIHdpbmRvdy5HID0ge307XG59KSh3aW5kb3cpO1xuXG5cbi8qKlxuICogTXVsdGkgYnJvd3NlciBzdXBwb3J0IGZvciBkb2N1bWVudCBzY3JvbGwgdG9wXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5HLmdldERvY3VtZW50U2Nyb2xsVG9wID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwO1xufTtcblxuXG4vKipcbiAqIE11bHRpIGJyb3dzZXIgc3VwcG9ydCBmb3IgZG9jdW1lbnQgc2Nyb2xsIGxlZnRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbkcuZ2V0RG9jdW1lbnRTY3JvbGxMZWZ0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgMDtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGltZSBpbiBtc1xuICogQGxpY2Vuc2UgaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZS9tYXN0ZXIvTElDRU5TRVxuICogQHR5cGUge2Z1bmN0aW9ufVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5sZXQgZ2V0VGltZSA9XG4gIERhdGUubm93IHx8XG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBhdCBtb3N0IG9uY2VcbiAqIGR1cmluZyBhIGdpdmVuIHdpbmRvdyBvZiB0aW1lLiBOb3JtYWxseSwgdGhlIHRocm90dGxlZCBmdW5jdGlvbiB3aWxsIHJ1blxuICogYXMgbXVjaCBhcyBpdCBjYW4sIHdpdGhvdXQgZXZlciBnb2luZyBtb3JlIHRoYW4gb25jZSBwZXIgYHdhaXRgIGR1cmF0aW9uO1xuICogYnV0IGlmIHlvdSdkIGxpa2UgdG8gZGlzYWJsZSB0aGUgZXhlY3V0aW9uIG9uIHRoZSBsZWFkaW5nIGVkZ2UsIHBhc3NcbiAqIGB7bGVhZGluZzogZmFsc2V9YC4gVG8gZGlzYWJsZSBleGVjdXRpb24gb24gdGhlIHRyYWlsaW5nIGVkZ2UsIGRpdHRvLlxuICogQGxpY2Vuc2UgaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZS9tYXN0ZXIvTElDRU5TRVxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY1xuICogQHBhcmFtIHtudW1iZXJ9IHdhaXRcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5HLnRocm90dGxlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICBsZXQgY29udGV4dCwgYXJncywgcmVzdWx0O1xuICBsZXQgdGltZW91dCA9IG51bGw7XG4gIGxldCBwcmV2aW91cyA9IDA7XG4gIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gIGxldCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBnZXRUaW1lKCk7XG4gICAgdGltZW91dCA9IG51bGw7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBsZXQgbm93ID0gZ2V0VGltZSgpO1xuICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBub3c7XG4gICAgbGV0IHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgaWYgKHJlbWFpbmluZyA8PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIHByZXZpb3VzID0gbm93O1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07IiwiLy8gaW1wb3J0IFwibWF0Y2htZWRpYS1wb2x5ZmlsbFwiO1xuLy8gaW1wb3J0IFwibWF0Y2htZWRpYS1wb2x5ZmlsbC9tYXRjaE1lZGlhLmFkZExpc3RlbmVyXCI7XG5cbi8vaW1wb3J0IG9iamVjdEZpdEltYWdlcyBmcm9tIFwib2JqZWN0LWZpdC1pbWFnZXNcIjsgLy8g0J/QvtC70LjRhNC40LtcbmltcG9ydCBcImxhenlzaXplc1wiO1xuXG4vL2ltcG9ydCB7TURDUmlwcGxlfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlJztcbi8vIGltcG9ydCB7TURDVGV4dEZpZWxkfSBmcm9tICdAbWF0ZXJpYWwvdGV4dGZpZWxkJztcblxuaW1wb3J0IExpZ2h0Ym94IGZyb20gXCIuL2NvbXBvbmVudHMvbGlnaHRib3hcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9zbGlkZXJcIjtcbmltcG9ydCBTY3JvbGxUb1RvcEJ0biBmcm9tIFwiLi9jb21wb25lbnRzL3Njcm9sbHRvdG9wLWJ0blwiO1xuaW1wb3J0IE1haW5NZW51IGZyb20gJy4vY29tcG9uZW50cy9tYWluLW1lbnUnO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9jb21wb25lbnRzL25hdi1iYXJcIjtcbmltcG9ydCB5bWFwcyBmcm9tICd5bWFwcyc7XG5cbmNsYXNzIEFwcGxpY2F0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRDb21tb24oKTtcbiAgICAgICAgLy90aGlzLmluaXRNYXRlcmlhbERlc2lnblN0dWZmKCk7XG4gICAgICAgIHRoaXMuaW5pdFNsaWRlcnMoKTtcbiAgICAgICAgLy90aGlzLmluaXRBamF4QmxvZ0xvYWQoKTtcbiAgICAgICAgdGhpcy5pbml0TW9iaWxlVmlld1BvcnRIZWlnaHQoKTtcbiAgICAgICAgdGhpcy5pbml0WWFuZGV4TWFwKCk7XG4gICAgfVxuXG5cbiAgICAvLyBpbml0TWF0ZXJpYWxEZXNpZ25TdHVmZigpIHtcbiAgICAvLyAgICAgLy8g0LXRhNGE0LXQutGCIHJpcHBsZSDQvdCwINC60L3QvtC/0LrQsNGFICAgICAgICBcbiAgICAvLyAgICAgW10ubWFwLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1kYy1idXR0b24nKSwgZnVuY3Rpb24oZWwpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiBuZXcgTURDUmlwcGxlKGVsKTtcbiAgICAvLyAgICAgfSk7XG5cbiAgICAvLyAgICAgLy8g0YLQtdC60YHRgtC+0LLRi9C1INC/0L7Qu9GPINGE0L7RgNC8XG4gICAgLy8gICAgIC8vIFtdLm1hcC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZGMtdGV4dC1maWVsZCcpLCBmdW5jdGlvbihlbCkge1xuICAgIC8vICAgICAvLyAgICAgcmV0dXJuIG5ldyBNRENUZXh0RmllbGQoZWwpO1xuICAgIC8vICAgICAvLyB9KTtcbiAgICAvLyB9XG5cblxuICAgIC8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4XG4gICAgaW5pdENvbW1vbigpIHtcblxuICAgICAgICBuZXcgTGlnaHRib3goKTtcblxuICAgICAgICBuZXcgU2Nyb2xsVG9Ub3BCdG4oKTtcblxuICAgICAgICBuZXcgTmF2QmFyKHsgb2Zmc2V0Rm9yRml4ZWQ6IDMwMCB9KTtcblxuICAgICAgICBuZXcgTWFpbk1lbnUoJ3VsLnNmLW1lbnUnKTtcblxuXG4gICAgICAgICQoJy5jaXR5JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLnBvcC11cCcpLmFkZENsYXNzKCdwb3AtdXAtLWFjdGl2ZScpO1xuICAgICAgICB9KVxuICAgICAgICAkKCcubW9kYWwnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcucG9wLXVwLXByb2ZpbGUnKS5hZGRDbGFzcygncG9wLXVwLS1hY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgJCgnLmNsb3NlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLnBvcC11cCcpLnJlbW92ZUNsYXNzKCdwb3AtdXAtLWFjdGl2ZScpO1xuICAgICAgICB9KVxuICAgICAgICAkKCcuY2xvc2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcucG9wLXVwLXByb2ZpbGUnKS5yZW1vdmVDbGFzcygncG9wLXVwLS1hY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gJCgnI3Bob25lJykubWFzaygnKzcgKDk5OSkgOTk5IDk5OTknKVxuICAgICAgICAkKCcubW9yZScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKCcjY2FyZF9fb25lJykuY3NzKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTExMCUpJywgdHJhbnNpdGlvbjogJzFzJ30pXG4gICAgICAgICAgICAkKCcjY2FyZF9fdHdvJykuY3NzKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTEwMCUpJywgdHJhbnNpdGlvbjogJzFzJ30pXG4gICAgICAgIH0pXG4gICAgICAgIC8qINCd0LDQttCw0LvQuCDQvdCwINC60L3QvtC/0L7Rh9C60YMg0L7RgtC/0YDQsNCy0LrQuCDRhNC+0YDQvNGLINC+0LHRjNGA0LDRgtC90L7QuSDRgdCy0Y/Qt9C4Ki9cbiAgICAgICAgJCgnI3pheWF2a2EtYnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJCgnI3pheXZrYS1zdWJtaXQnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhdXRvbWF0aWMgZm9jdXMgZm9yIGlucHV0XG4gICAgICAgICQoJy5jb2RlJykub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIGxldCBsZW4gPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgY3VyVGFiSW5kZXggPSBwYXJzZUludCgkKHRoaXMpLmF0dHIoJ3RhYmluZGV4JykpO1xuICAgICAgICAgICAgbGV0IG5leHRUYWJJbmRleCA9IGN1clRhYkluZGV4ICsgMTtcbiAgICAgICAgICAgIGxldCBwcmV2VGFiSW5kZXggPSBjdXJUYWJJbmRleCAtIDE7XG4gICAgICAgICAgICBpZiAobGVuID49IDIpIHtcbiAgICAgICAgICAgICAgJCh0aGlzKS52YWwodmFsdWUuc3Vic3RyKDAsIDEpKTtcbiAgICAgICAgICAgICAgJCgnW3RhYmluZGV4PScgKyBuZXh0VGFiSW5kZXggKyAnXScpLmZvY3VzKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlbiA9PSAwICYmIHByZXZUYWJJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAkKCdbdGFiaW5kZXg9JyArIHByZXZUYWJJbmRleCArICddJykuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgaWYgKChoaXN0b3J5Lmxlbmd0aCA9PSAwKSAmJiAhZG9jdW1lbnQucmVmZXJyZXIpIHtcbiAgICAgICAgICAgICQoJy5qcy1nby1iYWNrJykuaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g0L/RgNC+0LrRgNGD0YLQuNGC0Ywg0LLQvdC40Lcg0L/QtdGA0LLRi9C5INGN0LrRgNCw0L1cbiAgICAgICAgJCgnLmpzLWdvLWJhY2snKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKCgxIDwgaGlzdG9yeS5sZW5ndGgpICYmIGRvY3VtZW50LnJlZmVycmVyKSB7XG4gICAgICAgICAgICAgICAgaGlzdG9yeS5iYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vb2JqZWN0Rml0SW1hZ2VzIC0g0L/QvtC70LjRhNC40Lsg0LDQutGC0LjQstCw0YbQuNGPXG4gICAgICAgIC8vIGlmICh0eXBlb2Ygb2JqZWN0Rml0SW1hZ2VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vICAgICBvYmplY3RGaXRJbWFnZXMoJCgnLmltYWdlLWNvdmVyIGltZycpKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vINC/0YDQvtC60YDRg9GC0LjRgtGMINCy0L3QuNC3INC/0LXRgNCy0YvQuSDRjdC60YDQsNC9XG4gICAgICAgICQoJy5qcy1nby1kb3duJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCB5ID0gJCgnLmhlYWRlci13cmFwJykuaGVpZ2h0KCk7XG4gICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKFxuICAgICAgICAgICAgICAgIHsgc2Nyb2xsVG9wOiB5IH0sIDEwMDApO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAvLyDQn9C70LDQstC90LDRjyDQv9GA0L7QutGA0YPRgtC60LAg0L/RgNC4INC/0LXRgNC10YXQvtC00LUg0L/QviDRj9C60L7RgNGOXG4gICAgICAgIC8vIGNvbnN0ICRyb290ID0gJCgnaHRtbCwgYm9keScpO1xuICAgICAgICAvLyAkKCcjbWFpbi1tZW51IGEnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAgIHZhciBocmVmID0gJC5hdHRyKHRoaXMsICdocmVmJyk7XG4gICAgICAgIC8vICAgICBocmVmID0gaHJlZi5zdWJzdHJpbmcoMSwgaHJlZi5sZW5ndGgpO1xuICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhocmVmKTtcbiAgICAgICAgLy8gICAgICRyb290LmFuaW1hdGUoe1xuICAgICAgICAvLyAgICAgICAgIHNjcm9sbFRvcDogJChocmVmKS5vZmZzZXQoKS50b3BcbiAgICAgICAgLy8gICAgIH0sIDE1MDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhyZWY7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICB9XG5cblxuICAgIGluaXRZYW5kZXhNYXAoKSB7XG5cbiAgICAgICAgeW1hcHMubG9hZCgnaHR0cHM6Ly9hcGktbWFwcy55YW5kZXgucnUvMi4xLz9sYW5nPXJ1X1JVJylcbiAgICAgICAgICAgIC50aGVuKG1hcHMgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8g0KHQvtC30LTQsNC90LjQtSDQutCw0YDRgtGLLlxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vdGVjaC55YW5kZXgucnUvbWFwcy9kb2MvanNhcGkvMi4xL2RnL2NvbmNlcHRzL21hcC1kb2NwYWdlL1xuICAgICAgICAgICAgICAgIGNvbnN0IG15TWFwID0gbmV3IG1hcHMuTWFwKCd5YW5kZXgtbWFwJywge1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFs1MS42NjA3ODEsIDM5LjIwMDI2OV0sXG4gICAgICAgICAgICAgICAgICAgIHpvb206IDEzLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gbXlNYXAuY29udHJvbHMgLy8g0LTQvtCx0LDQstC40Lwg0LLRgdGP0LrQuNGFINC60L3QvtC/0L7Quiwg0LIg0YHQutC+0LHQutCw0YUg0LjRhSDQv9C+0LfQuNGG0LjQuCDQsiDQsdC70L7QutC1XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAuYWRkKCd6b29tQ29udHJvbCcsIHsgbGVmdDogNSwgdG9wOiA1IH0pIC8v0JzQsNGB0YjRgtCw0LFcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC5hZGQoJ3R5cGVTZWxlY3RvcicpIC8v0KHQv9C40YHQvtC6INGC0LjQv9C+0LIg0LrQsNGA0YLRi1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLmFkZCgnbWFwVG9vbHMnLCB7IGxlZnQ6IDM1LCB0b3A6IDUgfSkgLy8g0KHRgtCw0L3QtNCw0YDRgtC90YvQuSDQvdCw0LHQvtGAINC60L3QvtC/0L7QulxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLmFkZCgnc2VhcmNoQ29udHJvbCcpOyAvLyDQodGC0YDQvtC60LAg0YEg0L/QvtC40YHQutC+0LxcblxuICAgICAgICAgICAgICAgIC8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC80LXRgtC60LhcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL3RlY2gueWFuZGV4LnJ1L21hcHMvZG9jL2pzYXBpLzIuMS9yZWYvcmVmZXJlbmNlL1BsYWNlbWFyay1kb2NwYWdlL1xuXG5cbiAgICAgICAgICAgICAgICAvKiDQodC+0LfQtNCw0LXQvCDQutCw0YHRgtC+0LzQvdGL0LUg0LzQtdGC0LrQuCAqL1xuICAgICAgICAgICAgICAgIGNvbnN0IG15UGxhY2VtYXJrMCA9IG5ldyBtYXBzLlBsYWNlbWFyayhbNTEuNjYwNzgxLCAzOS4yMDAyNjldLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCl0LjQvdGCINC/0L7QutCw0LfRi9Cy0LDQtdGC0YHRjyDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4INC80YvRiNC60L7QuSDQvdCwINC40LrQvtC90LrRgyDQvNC10YLQutC4LlxuICAgICAgICAgICAgICAgICAgICBoaW50Q29udGVudDogJ9Ch0L7QtNC10YDQttC40LzQvtC1INCy0YHQv9C70YvQstCw0Y7RidC10Lkg0L/QvtC00YHQutCw0LfQutC4JyxcbiAgICAgICAgICAgICAgICAgICAgLy8g0JHQsNC70YPQvSDQvtGC0LrRgNC+0LXRgtGB0Y8g0L/RgNC4INC60LvQuNC60LUg0L/QviDQvNC10YLQutC1LlxuICAgICAgICAgICAgICAgICAgICBiYWxsb29uQ29udGVudDogJzxkaXYgY2xhc3M9XCJiYWxsb25cIj7QodC+0LTQtdGA0LbQuNC80L7QtSDQsdCw0LvRg9C90LA8L2Rpdj4nLCAvLyDRgdC00LXRgdGMINGB0L7QtNC10YDQttC40LzQvtC1INCx0LDQu9GD0L3QsCDQsiDRhNC+0YDQvNCw0YLQtSBodG1sLCDQstGB0LUg0YHRgtC40LvQuCDQsiBjc3NcblxuICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnL2ltZy9tYXJrZXIuc3ZnJywgLy8g0LrQsNGA0YLQuNC90LrQsCDQuNC60L7QvdC60LhcbiAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzQwLCA0MF0sIC8vINGA0LDQt9C80LXRgCDQuNC60L7QvdC60LhcbiAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTMyLCAtNjRdLCAvLyDQv9C+0LfQuNGG0LjRjyDQuNC60L7QvdC60LhcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vINGC0L7QttC1INGB0LDQvNC+0LUg0LTQu9GPINC00YDRg9Cz0LjRhSDQvNC10YLQvtC6XG5cblxuICAgICAgICAgICAgICAgIC8vINCf0L7RgdC70LUg0YLQvtCz0L4g0LrQsNC6INC80LXRgtC60LAg0LHRi9C70LAg0YHQvtC30LTQsNC90LAsINC00L7QsdCw0LLQu9GP0LXQvCDQtdGRINC90LAg0LrQsNGA0YLRgy5cbiAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyazApO1xuXG5cbiAgICAgICAgICAgICAgICAvLyDQpNC40LrRgSDQutGA0LjQstC+0LPQviDQstGL0YDQsNCy0L3QuNCy0LDQvdC40Y8g0LrQsNGB0YLQvtC80L3Ri9GFINCx0LDQu9GD0L3QvtCyXG4gICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5ldmVudHMuYWRkKFtcbiAgICAgICAgICAgICAgICAgICAgJ2JhbGxvb25vcGVuJ1xuICAgICAgICAgICAgICAgIF0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBnZW9PYmplY3QgPSBlLmdldCgndGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgICAgIG15TWFwLnBhblRvKGdlb09iamVjdC5nZW9tZXRyeS5nZXRDb29yZGluYXRlcygpLCB7IGRlbGF5OiAwIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCfQndC1INGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDQutCw0YDRgtGDJywgZXJyb3IpKTtcblxuICAgIH1cblxuXG5cbiAgICAvLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQstGB0LXRhSDRgdC70LDQudC00LXRgNC+0LJcbiAgICBpbml0U2xpZGVycygpIHtcblxuICAgICAgICAvLyBIb21lIFNsaWRlclxuICAgICAgICBsZXQgJGhvbWVTbGlkZXIgPSAkKCcuaG9tZS1zbGlkZXInKTtcbiAgICAgICAgaWYgKCRob21lU2xpZGVyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgbmV3IFNsaWRlcigkaG9tZVNsaWRlciwge1xuICAgICAgICAgICAgICAgIGNvdW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgZG90c0NsYXNzOiAnbXktZG90cycsXG4gICAgICAgICAgICAgICAgLy9hdXRvcGxheVNwZWVkOiAyMDAwLFxuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjYsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXVxuXG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2Fyb3VzZWwgaW4gY29udGVudFxuICAgICAgICBsZXQgJHNwZWNpYWwgPSAkKCcuc3BlY2lhbF9fc2xpZGVyJyk7XG4gICAgICAgIGlmICgkc3BlY2lhbC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIG5ldyBTbGlkZXIoJHNwZWNpYWwsIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDE1MDAsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNwZWNpYWwtcHJldlwiPjxzcGFuIGNsYXNzPVwiaWNvbi1sZWZ0XCI+PC9zcGFuPjwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNwZWNpYWwtbmV4dFwiPjxzcGFuIGNsYXNzPVwiaWNvbi1yaWdodFwiPjwvc3Bhbj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTA0MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTc2LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA2NzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCAkdGVyYXAgPSAkKCcuc2xpZGVyLXRlcmFwJyk7XG4gICAgICAgIGlmICgkdGVyYXAubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBuZXcgU2xpZGVyKCR0ZXJhcCwge1xuICAgICAgICAgICAgICAgIGNvdW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwidGVyYXAtcHJldlwiPjxzcGFuIGNsYXNzPVwiaWNvbi1sZWZ0XCI+PC9zcGFuPjwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInRlcmFwLW5leHRcIj48c3BhbiBjbGFzcz1cImljb24tcmlnaHRcIj48L3NwYW4+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NzYsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgJHNlcnZpY2UgPSAkKCcuc2VydmljZS1zbGlkZXInKTtcbiAgICAgICAgaWYgKCRzZXJ2aWNlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgbmV3IFNsaWRlcigkc2VydmljZSwge1xuICAgICAgICAgICAgICAgIGNvdW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2VydmljZS1wcmV2XCI+PHNwYW4gY2xhc3M9XCJpY29uLWxlZnRcIj48L3NwYW4+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2VydmljZS1uZXh0XCI+PHNwYW4gY2xhc3M9XCJpY29uLXJpZ2h0XCI+PC9zcGFuPjwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vINC60LDRgdGC0YvQu9GM0L3QvtC1INGA0LXRiNC10L3QuNC1IDEwMHZoINC00LvRjyDQvNC+0LHQuNC70YzQvdC40LrQvtCyXG4gICAgaW5pdE1vYmlsZVZpZXdQb3J0SGVpZ2h0KCkge1xuICAgICAgICAvLyBodHRwczovL2Nzcy10cmlja3MuY29tL3RoZS10cmljay10by12aWV3cG9ydC11bml0cy1vbi1tb2JpbGUvXG4gICAgICAgIC8vIEZpcnN0IHdlIGdldCB0aGUgdmlld3BvcnQgaGVpZ2h0IGFuZCB3ZSBtdWx0aXBsZSBpdCBieSAxJSB0byBnZXQgYSB2YWx1ZSBmb3IgYSB2aCB1bml0XG4gICAgICAgIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gICAgICAgIC8vIFRoZW4gd2Ugc2V0IHRoZSB2YWx1ZSBpbiB0aGUgLS12aCBjdXN0b20gcHJvcGVydHkgdG8gdGhlIHJvb3Qgb2YgdGhlIGRvY3VtZW50XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YCk7XG4gICAgICAgIGxldCBkb2N1bWVudF93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAvLyBXZSBsaXN0ZW4gdG8gdGhlIHJlc2l6ZSBldmVudCAo0LAg0YDQtdGB0LDQudC3INCyINC80L7QsdC40LvQutCw0YUg0YHRgNCw0LHQsNGC0YvQstCw0LXRgiDQuCDQv9GA0Lgg0YHQutGA0L7Qu9C1LCDQutC+0LPQtNCwINC40YHRh9C10LfQsNC10YIg0YHRgtGA0L7QutCwINCy0LLQvtC00LAg0LDQtNGA0LXRgdCwINCyINCx0YDQsNGD0LfQtdGA0LUpXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBXZSBleGVjdXRlIHRoZSBzYW1lIHNjcmlwdCBhcyBiZWZvcmVcbiAgICAgICAgICAgIGlmIChkb2N1bWVudF93aWR0aCAhPSB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50X3dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgbGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuXG4vLyDQt9Cw0L/Rg9GB0Log0L/RgNC40LvQvtC20LXQvdC40Y9cbiQoKCkgPT4ge1xuICAgIG5ldyBBcHBsaWNhdGlvbigpO1xufSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2h0bWxfc3RhcnRcIl0gPSBzZWxmW1wid2VicGFja0NodW5raHRtbF9zdGFydFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9tYWluLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsialF1ZXJ5IiwiQ29tcG9uZW50IiwibGVuZ3RoIiwicm9vdCIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJfZGVmYXVsdE9wdGlvbnMiLCJpc2pRdWVyeSIsIl9jYWNoZU5vZGVzIiwiX2JpbmRFdmVudHMiLCJfcmVhZHkiLCJvYmplY3QiLCJMaWdodGJveCIsImluaXRpYWxpemUiLCJkZWZhdWx0cyIsImxhbmciLCJ0cmFuc2l0aW9uRWZmZWN0IiwiYmFja0ZvY3VzIiwiYnV0dG9ucyIsImkxOG4iLCJydSIsIkNMT1NFIiwiTkVYVCIsIlBSRVYiLCJFUlJPUiIsIlBMQVlfU1RBUlQiLCJQTEFZX1NUT1AiLCJGVUxMX1NDUkVFTiIsIlRIVU1CUyIsIkRPV05MT0FEIiwiU0hBUkUiLCJaT09NIiwibm9kZXMiLCJsaW5rIiwiJCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRsaW5rIiwiY3VycmVudFRhcmdldCIsImZhbmN5Ym94Iiwib3BlbiIsInNyYyIsImRhdGEiLCJ0eXBlIiwib3B0cyIsInRvdWNoIiwiYXV0b0ZvY3VzIiwiY2xvc2VFeGlzdGluZyIsImFuaW1hdGlvbkVmZmVjdCIsImJlZm9yZUxvYWQiLCJjdXJyZW50IiwiJHNsaWRlIiwiYWRkQ2xhc3MiLCJOYXZCYXIiLCJNZW51IiwiZWwiLCJkb2N1bWVudFNjcm9sbFRvcCIsImluaXQiLCJfaW5pdFN1cGVyZmlzaCIsIl9pbml0TW9iaWxlTWVudSIsImNsaWNrIiwiZSIsImNsb3NlTWVudSIsImNhbGwiLCJlbmFibGVVcGRhdGUiLCJoYXNDbGFzcyIsImRpc2FibGVVcGRhdGUiLCJvcGVuTWVudSIsInN1cGVyZmlzaCIsImFwcGVuZCIsImh0bWwiLCJwYXJlbnQiLCJzaWJsaW5ncyIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJpcyIsImhpZGUiLCJzaG93IiwiRyIsImdldERvY3VtZW50U2Nyb2xsVG9wIiwiY3NzIiwicmVtb3ZlQ2xhc3MiLCJhdHRyIiwic2Nyb2xsVG9wIiwib2xkU2Nyb2xsVG9wIiwic2Nyb2xsVG9wRGlyZWN0aW9uIiwib2Zmc2V0Rm9yRml4ZWQiLCJhbGxvd1VwZGF0ZSIsIl91cGRhdGVOYXZCYXIiLCJfc2V0U2VyYWNoQm94IiwiX2hhbmRsZVNjcm9sbFRocm90dGxlZCIsInRocm90dGxlIiwiX2hhbmRsZVNjcm9sbCIsImJpbmQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRsZVdpbmRvd1Jlc2l6ZVRocm90dGxlZCIsIl9oYW5kbGVXaW5kb3dSZXNpemUiLCJpc05hdkJhckZpeGVkIiwiU2Nyb2xsVG9Ub3BCdG4iLCJzZXRUb1RvcEJ1dHRvbiIsIiRzY3JvbGxUb3BCdG4iLCJhcHBlbmRUbyIsImFuaW1hdGUiLCJzY3JvbGwiLCJTbGlkZXIiLCJyb3dzIiwiY291bnRlciIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImFkZENvdW50ZXIiLCJjaGFuZ2VDb3VudGVyIiwic2xpY2siLCJzbGlkZUNvdW50Iiwic2xpZGVzVG9TaG93IiwiJGNvdW50ZXIiLCJjdXJyZW50U2xpZGUiLCJnZXREb3RDb3VudCIsIiRzbGlkZXIiLCJuZXh0U2xpZGUiLCJmaW5kIiwiTWF0aCIsImZsb29yIiwic2xpZGVzVG9TY3JvbGwiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSIsImdldERvY3VtZW50U2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsImdldFRpbWUiLCJEYXRlIiwibm93IiwiZnVuYyIsIndhaXQiLCJjb250ZXh0IiwiYXJncyIsInJlc3VsdCIsInRpbWVvdXQiLCJwcmV2aW91cyIsImxhdGVyIiwibGVhZGluZyIsImFwcGx5IiwicmVtYWluaW5nIiwiYXJndW1lbnRzIiwiY2xlYXJUaW1lb3V0IiwidHJhaWxpbmciLCJzZXRUaW1lb3V0IiwiTWFpbk1lbnUiLCJ5bWFwcyIsIkFwcGxpY2F0aW9uIiwiaW5pdENvbW1vbiIsImluaXRTbGlkZXJzIiwiaW5pdE1vYmlsZVZpZXdQb3J0SGVpZ2h0IiwiaW5pdFlhbmRleE1hcCIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJ0cmlnZ2VyIiwidmFsdWUiLCJ2YWwiLCJsZW4iLCJjdXJUYWJJbmRleCIsInBhcnNlSW50IiwibmV4dFRhYkluZGV4IiwicHJldlRhYkluZGV4Iiwic3Vic3RyIiwiZm9jdXMiLCJoaXN0b3J5IiwicmVmZXJyZXIiLCJiYWNrIiwieSIsImhlaWdodCIsImxvYWQiLCJ0aGVuIiwibWFwcyIsIm15TWFwIiwiTWFwIiwiY2VudGVyIiwiem9vbSIsIm15UGxhY2VtYXJrMCIsIlBsYWNlbWFyayIsImhpbnRDb250ZW50IiwiYmFsbG9vbkNvbnRlbnQiLCJpY29uSW1hZ2VIcmVmIiwiaWNvbkltYWdlU2l6ZSIsImljb25JbWFnZU9mZnNldCIsImdlb09iamVjdHMiLCJhZGQiLCJldmVudHMiLCJnZW9PYmplY3QiLCJnZXQiLCJwYW5UbyIsImdlb21ldHJ5IiwiZ2V0Q29vcmRpbmF0ZXMiLCJkZWxheSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIiRob21lU2xpZGVyIiwiaW5maW5pdGUiLCJhZGFwdGl2ZUhlaWdodCIsImZhZGUiLCJhcnJvd3MiLCJkb3RzIiwiYXV0b3BsYXkiLCJkb3RzQ2xhc3MiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiJHNwZWNpYWwiLCJhdXRvcGxheVNwZWVkIiwiJHRlcmFwIiwidmFyaWFibGVXaWR0aCIsIiRzZXJ2aWNlIiwidmgiLCJpbm5lckhlaWdodCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJkb2N1bWVudF93aWR0aCIsImlubmVyV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9