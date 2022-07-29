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

      var $right = $('.right-slider');

      if ($right.length !== 0) {
        new _components_slider__WEBPACK_IMPORTED_MODULE_2__["default"]($right, {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button class="right-prev"><span class="icon-left"></span></button>',
          nextArrow: '<button class="right-next"><span class="icon-next"></span></button>',
          vertical: true,
          verticalSwiping: true,
          adaptiveWidth: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odG1sLXN0YXJ0Ly4vc3JjL2pzL2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovL2h0bWwtc3RhcnQvLi9zcmMvanMvY29tcG9uZW50cy9saWdodGJveC5qcyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbWFpbi1tZW51LmpzIiwid2VicGFjazovL2h0bWwtc3RhcnQvLi9zcmMvanMvY29tcG9uZW50cy9uYXYtYmFyLmpzIiwid2VicGFjazovL2h0bWwtc3RhcnQvLi9zcmMvanMvY29tcG9uZW50cy9zY3JvbGx0b3RvcC1idG4uanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0Ly4vc3JjL2pzL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0Ly4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqUXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuXG4vL2V4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIEVtaXR0ZXIge1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIC8vc3VwZXIoKTtcblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IGFyZ3NbMF07XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kZWZhdWx0T3B0aW9ucywgYXJnc1sxXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKENvbXBvbmVudC5pc2pRdWVyeShhcmdzWzBdKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdCA9IGFyZ3NbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2RlZmF1bHRPcHRpb25zLCBhcmdzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBpc2pRdWVyeShvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mIGpRdWVyeTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLl9jYWNoZU5vZGVzKCk7XG4gICAgICAgIHRoaXMuX2JpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5fcmVhZHkoKTtcbiAgICB9XG5cbiAgICBfY2FjaGVOb2RlcygpIHt9XG5cbiAgICBfYmluZEV2ZW50cygpIHt9XG5cbiAgICBfcmVhZHkoKSB7fVxufSIsImltcG9ydCBcIkBmYW5jeWFwcHMvZmFuY3lib3hcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpZ2h0Ym94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBnZXQgX2RlZmF1bHRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICBsYW5nOiAncnUnLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25FZmZlY3Q6ICdzbGlkZScsXG4gICAgICAgICAgICAgICAgYmFja0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAgICAgICdjbG9zZSdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgICAgICAgICAgcnU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENMT1NFOiAn0JfQsNC60YDRi9GC0YwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgTkVYVDogJ9CU0LDQu9GM0YjQtScsXG4gICAgICAgICAgICAgICAgICAgICAgICBQUkVWOiAn0J3QsNC30LDQtCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBFUlJPUjogJ9Cd0LUg0YPQtNCw0LXRgtGB0Y8g0LfQsNCz0YDRg9C30LjRgtGMLiA8YnIvPiDQn9C+0L/RgNC+0LHRg9C50YLQtSDQv9C+0LfQtNC90LXQtS4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgUExBWV9TVEFSVDogJ9Cd0LDRh9Cw0YLRjCDRgdC70LDQudC00YjQvtGDJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBMQVlfU1RPUDogJ9Ce0YHRgtCw0L3QvtCy0LjRgtGMINGB0LvQsNC50LTRiNC+0YMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgRlVMTF9TQ1JFRU46ICfQndCwINCy0LXRgdGMINGN0LrRgNCw0L0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgVEhVTUJTOiAn0J/RgNC10LLRjNGOJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIERPV05MT0FEOiAn0KHQutCw0YfQsNGC0YwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgU0hBUkU6ICfQn9C+0LTQtdC70LjRgtGM0YHRjycsXG4gICAgICAgICAgICAgICAgICAgICAgICBaT09NOiAn0KPQstC10LvQuNGH0LjRgtGMJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iocm9vdCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihyb290LCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgX2NhY2hlTm9kZXMoKSB7XG4gICAgICAgIHRoaXMubm9kZXMgPSB7XG4gICAgICAgICAgICBsaW5rOiAkKCcuanMtbGluay1tb2RhbCcpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2JpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMubm9kZXMubGluay5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgJGxpbmsgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICAkLmZhbmN5Ym94Lm9wZW4oe1xuICAgICAgICAgICAgICAgIHNyYzogJGxpbmsuZGF0YSgnc3JjJyksXG4gICAgICAgICAgICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICAgICAgICAgICAgb3B0czoge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlRXhpc3Rpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkVmZmVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZUxvYWQ6IGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnQuJHNsaWRlLmFkZENsYXNzKCdmYW5jeWJveC1tb2RhbCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9yZWFkeSgpIHtcbiAgICAgICAgJC5mYW5jeWJveC5kZWZhdWx0cy5pMThuLnJ1ID0gdGhpcy5vcHRpb25zLmRlZmF1bHRzLmkxOG4ucnU7XG4gICAgICAgICQuZmFuY3lib3guZGVmYXVsdHMubGFuZyA9IHRoaXMub3B0aW9ucy5kZWZhdWx0cy5sYW5nO1xuICAgICAgICAkLmZhbmN5Ym94LmRlZmF1bHRzLmJ1dHRvbnMgPSB0aGlzLm9wdGlvbnMuZGVmYXVsdHMuYnV0dG9ucztcbiAgICAgICAgJC5mYW5jeWJveC5kZWZhdWx0cy50cmFuc2l0aW9uRWZmZWN0ID0gdGhpcy5vcHRpb25zLmRlZmF1bHRzLnRyYW5zaXRpb25FZmZlY3Q7XG4gICAgICAgICQuZmFuY3lib3guZGVmYXVsdHMuYmFja0ZvY3VzID0gdGhpcy5vcHRpb25zLmRlZmF1bHRzLmJhY2tGb2N1cztcbiAgICB9XG59IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuaW1wb3J0ICdzdXBlcmZpc2gvc3JjL2pzL2hvdmVySW50ZW50JztcbmltcG9ydCAnc3VwZXJmaXNoL3NyYy9qcy9zdXBlcmZpc2gnO1xuXG5pbXBvcnQgXCIuLi9nbG9iYWwuanNcIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vbmF2LWJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IHtcbiAgXG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMucm9vdCA9ICQoJy5zZi1tZW51Jyk7XG4gICAgdGhpcy5kb2N1bWVudFNjcm9sbFRvcD1udWxsO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9pbml0U3VwZXJmaXNoKCk7XG4gICAgdGhpcy5faW5pdE1vYmlsZU1lbnUoKTtcbiAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XG4gIH1cblxuICBzdGF0aWMgb3Blbk1lbnUoKSB7XG4gICAgTWVudS5kb2N1bWVudFNjcm9sbFRvcCA9IEcuZ2V0RG9jdW1lbnRTY3JvbGxUb3AoKTtcbiAgICAkKCcuZHJhd2VyJykuYWRkQ2xhc3MoJ29wZW5lZCcpO1xuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnZHJhd2VyLW9wZW5lZCcpO1xuICAgICQoJ2JvZHknKS5jc3Moe1xuICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxuICAgICAgICAndG9wJzogLU1lbnUuZG9jdW1lbnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgICAkKCcuZHJhd2VyLXNjcmltJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIH1cblxuICBzdGF0aWMgY2xvc2VNZW51KCkge1xuICAgICAgJCgnLmRyYXdlcicpLnJlbW92ZUNsYXNzKCdvcGVuZWQnKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnZHJhd2VyLW9wZW5lZCcpO1xuICAgICAgJCgnYm9keScpLmF0dHIoJ3N0eWxlJywgJycpO1xuICAgICAgJCgnaHRtbCwgYm9keScpLnNjcm9sbFRvcChNZW51LmRvY3VtZW50U2Nyb2xsVG9wKTtcbiAgICAgICQoJy5kcmF3ZXItc2NyaW0nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICB9XG5cblxuICBfYmluZEV2ZW50cygpIHtcblxuICAgICQoJy5qcy1jbG9zZS1kcmF3ZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIE1lbnUuY2xvc2VNZW51LmNhbGwodGhpcyk7XG4gICAgICAgIE5hdkJhci5lbmFibGVVcGRhdGUoKTtcbiAgICB9KTtcblxuICAgICQoJy5qcy1vcGVuLWRyYXdlcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoISQodGhpcykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICBOYXZCYXIuZGlzYWJsZVVwZGF0ZSgpO1xuICAgICAgICAgICAgTWVudS5vcGVuTWVudS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyAvLyDQn9C70LDQstC90LDRjyDQv9GA0L7QutGA0YPRgtC60LAg0L/RgNC4INC/0LXRgNC10YXQvtC00LUg0L/QviDRj9C60L7RgNGOXG4gICAgLy8gJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5qcy1tZW51IGEnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgXG4gICAgLy8gICAgIE1lbnUuY2xvc2VNZW51KCk7XG4gICAgLy8gICAgIE5hdkJhci5lbmFibGVVcGRhdGUoKTtcblxuICAgIC8vICAgICBsZXQgaHJlZiA9ICQuYXR0cih0aGlzLCAnaHJlZicpO1xuICAgIC8vICAgICBocmVmID0gaHJlZi5zdWJzdHJpbmcoMSwgaHJlZi5sZW5ndGgpO1xuICAgIC8vICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgLy8gICAgICAgICBzY3JvbGxUb3A6ICQoaHJlZikub2Zmc2V0KCkudG9wXG4gICAgLy8gICAgIH0sIDUwMCwgZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBocmVmO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vIH0pO1xuXG4gIH1cblxuXG5cbiAgXG4gIF9pbml0U3VwZXJmaXNoKCkge1xuICAgICQodGhpcy5lbCkuc3VwZXJmaXNoKCk7XG5cbiAgICAvLyAkKCcjbWVudS1pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gICAkKCcjbW9iaWxlX3RvcF9tZW51X3dyYXBwZXInKS50b2dnbGUoKTtcbiAgICAvLyAgIHNlbGYudG9nZ2xlTW9iaWxlTWVudSgpO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgX2luaXRNb2JpbGVNZW51KCkge1xuICAgIFxuICAgIC8vIHByZXN0YXNob3Aub24oJ3Jlc3BvbnNpdmUgdXBkYXRlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyAgICQoJy5qcy1zdWItbWVudScpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICBzZWxmLnRvZ2dsZU1vYmlsZU1lbnUoKTtcbiAgICAvLyB9KTtcblxuICAgICQoJy5qcy1kcmF3ZXItbWVudS1saXN0JykuYXBwZW5kKCQoJy5zZi1tZW51JykuaHRtbCgpKTtcblxuICAgIC8vIGNsaWNrIG9uIG1lbnUgbGluayBmb3Igb3BlbiBzdWJtZW51XG4gICAgLy8kKCcuanMtZHJhd2VyLW1lbnUtbGlzdCAuc3ViLW1lbnUnKS5wYXJlbnQoJ2xpJykuZmluZCgnID4gYScpLmFkZENsYXNzKCdoYXMtc3VibWVudScpO1xuICAgIC8vICQoJy5oYXMtc3VibWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICQodGhpcykuc2libGluZ3MoJy5zdWItbWVudScpLnNsaWRlVG9nZ2xlKDQwMCk7XG4gICAgLy8gICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLXN1Yi1tZW51LW9wZW5lZCcpO1xuICAgIC8vIH0pO1xuXG4gICAgLy8gY2xpY2sgb24gYnV0dG9uIGZvciBvcGVuIHN1Ym1lbnVcbiAgICAkKCcuanMtZHJhd2VyLW1lbnUtbGlzdCAuc3ViLW1lbnUnKS5wYXJlbnQoJ2xpJykuYXBwZW5kKCc8YnV0dG9uIGNsYXNzPVwib3Blbi1zdWJtZW51LWJ0blwiPjwvYnV0dG9uPicpOyAvLyBhZGQgc3VibWVudSBidXR0b25zXG4gICAgJCgnLm9wZW4tc3VibWVudS1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuc3ViLW1lbnUnKS5zbGlkZVRvZ2dsZSg0MDApO1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdzdWItbWVudS1vcGVuZWQnKTtcbiAgICB9KTtcblxuXG5cblxuICB9XG5cbiAgdG9nZ2xlTW9iaWxlTWVudSgpIHtcbiAgICAkKCcjaGVhZGVyJykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICBpZiAoJCgnI21vYmlsZV90b3BfbWVudV93cmFwcGVyJykuaXMoXCI6dmlzaWJsZVwiKSkge1xuICAgICAgJCgnI25vdGlmaWNhdGlvbnMsICN3cmFwcGVyLCAjZm9vdGVyJykuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcjbm90aWZpY2F0aW9ucywgI3dyYXBwZXIsICNmb290ZXInKS5zaG93KCk7XG4gICAgfVxuICB9XG5cblxufVxuIiwiaW1wb3J0IFwiLi4vZ2xvYmFsLmpzXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdkJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgXG4gICAgZ2V0IF9kZWZhdWx0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9mZnNldEZvckZpeGVkOiAyMDBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMucm9vdCA9ICQoJy5uYXYtYmFyJyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gbnVsbDsgICAgICAgIFxuICAgICAgICB0aGlzLm9sZFNjcm9sbFRvcCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9wRGlyZWN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICBOYXZCYXIuYWxsb3dVcGRhdGUgPSB0cnVlO1xuICAgICAgICB0aGlzLl91cGRhdGVOYXZCYXIoKTtcbiAgICAgICAgdGhpcy5fc2V0U2VyYWNoQm94KCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFsbG93VXBkYXRlO1xuXG4gICAgc3RhdGljIGVuYWJsZVVwZGF0ZSgpe1xuICAgICAgICBOYXZCYXIuYWxsb3dVcGRhdGUgPSB0cnVlO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdOYXZCYXIuYWxsb3dVcGRhdGUgPSAnLCBOYXZCYXIuYWxsb3dVcGRhdGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkaXNhYmxlVXBkYXRlKCl7XG4gICAgICAgIE5hdkJhci5hbGxvd1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdOYXZCYXIuYWxsb3dVcGRhdGUgPSAnLCBOYXZCYXIuYWxsb3dVcGRhdGUpO1xuICAgIH1cbiAgICBcbiAgICAgICAgICAgIFxuICAgIF9iaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyDRgdC+0LHRi9GC0LjQtSDRgdC60YDQvtC7IFxuICAgICAgICBOYXZCYXIuX2hhbmRsZVNjcm9sbFRocm90dGxlZCA9IEcudGhyb3R0bGUodGhpcy5faGFuZGxlU2Nyb2xsLmJpbmQodGhpcyksIDEwMCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBOYXZCYXIuX2hhbmRsZVNjcm9sbFRocm90dGxlZCk7XG5cbiAgICAgICAgLy8g0YHQvtCx0YvRgtC40LUg0YDQtdGB0LDQudC3XG4gICAgICAgIE5hdkJhci5faGFuZGxlV2luZG93UmVzaXplVGhyb3R0bGVkID0gRy50aHJvdHRsZSh0aGlzLl9oYW5kbGVXaW5kb3dSZXNpemUuYmluZCh0aGlzKSwgMTAwKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIE5hdkJhci5faGFuZGxlV2luZG93UmVzaXplVGhyb3R0bGVkKTtcblxuICAgIH1cblxuXG4gICAgX3NldFNlcmFjaEJveCgpIHtcbiAgICAgICAgJCgnLmpzLXRvZ2xlLXNlYXJjaC1ib3gnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW5lZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIFxuXG4gICAgX3VwZGF0ZU5hdkJhcigpIHtcblxuICAgICAgICBpZighTmF2QmFyLmFsbG93VXBkYXRlKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB0aGlzLm9sZFNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsVG9wO1xuICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IEcuZ2V0RG9jdW1lbnRTY3JvbGxUb3AoKTtcbiAgICAgICAgY29uc3QgaXNOYXZCYXJGaXhlZCA9IHRoaXMucm9vdC5oYXNDbGFzcygnZml4ZWQnKTtcblxuICAgICAgICBpZih0aGlzLm9sZFNjcm9sbFRvcCA8IHRoaXMuc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvcERpcmVjdGlvbiA9IFwiZG93blwiO1xuICAgICAgICB9IGVsc2UgaWYoIHRoaXMub2xkU2Nyb2xsVG9wID4gdGhpcy5zY3JvbGxUb3AgKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvcERpcmVjdGlvbiA9IFwidXBcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wRGlyZWN0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINC/0YDQuNC70LXQv9C40LvQuNCy0LDQtdC8INGI0LDQv9C60YNcbiAgICAgICAgaWYgKCB0aGlzLnNjcm9sbFRvcCA+IHRoaXMub3B0aW9ucy5vZmZzZXRGb3JGaXhlZCAmJiAhaXNOYXZCYXJGaXhlZCApIHtcbiAgICAgICAgICAgIHRoaXMucm9vdC5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINC+0YLQu9C10L/Qu9GP0LXQvCDRiNCw0L/QutGDXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbFRvcCA8PSB0aGlzLm9wdGlvbnMub2Zmc2V0Rm9yRml4ZWQgJiYgaXNOYXZCYXJGaXhlZCkge1xuICAgICAgICAgICAgdGhpcy5yb290LnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDQutGA0YPRgtC40Lwg0LLQvdC40LdcbiAgICAgICAgaWYodGhpcy5zY3JvbGxUb3BEaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgICAgICAgdGhpcy5yb290LnJlbW92ZUNsYXNzKCdzY3JvbGwtdXAnKTtcbiAgICAgICAgICAgIHRoaXMucm9vdC5hZGRDbGFzcygnc2Nyb2xsLWRvd24nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDQutGA0YPRgtC40Lwg0LLQstC10YDRhVxuICAgICAgICBpZih0aGlzLnNjcm9sbFRvcERpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgICAgICAgdGhpcy5yb290LnJlbW92ZUNsYXNzKCdzY3JvbGwtZG93bicpO1xuICAgICAgICAgICAgdGhpcy5yb290LmFkZENsYXNzKCdzY3JvbGwtdXAnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBfaGFuZGxlU2Nyb2xsKCkge1xuICAgICAgICB0aGlzLl91cGRhdGVOYXZCYXIoKTtcbiAgICB9XG5cbiAgICBfaGFuZGxlV2luZG93UmVzaXplKCkge1xuICAgICAgICB0aGlzLl91cGRhdGVOYXZCYXIoKTtcbiAgICB9XG4gXG5cbn0iLCIvLyDQutC90L7Qv9C60LAg0L3QsNCy0LXRgNGFXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxUb1RvcEJ0biBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgXG4gICAgY29uc3RydWN0b3Iocm9vdCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihyb290LCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB0aGlzLnNldFRvVG9wQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgc2V0VG9Ub3BCdXR0b24oKSB7XG5cbiAgICAgICAgdmFyICRzY3JvbGxUb3BCdG4gPSAkKCc8YSByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCIjXCIgaWQ9XCJzY3JvbGwtdG9wXCIgY2xhc3M9XCJzY3JvbGx0b3RvcC1idG5cIj48aT48L2k+PC9hPicpLmFwcGVuZFRvKCdib2R5Jyk7XG5cbiAgICAgICAgJHNjcm9sbFRvcEJ0bi5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJ2h0bWw6bm90KDphbmltYXRlZCksYm9keTpub3QoOmFuaW1hdGVkKScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDB9LCAzMDApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMTAwKSB7XG4gICAgICAgICAgICAkc2Nyb2xsVG9wQnRuLmFkZENsYXNzKCd0b3AtYnRuLXNob3cnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRzY3JvbGxUb3BCdG4ucmVtb3ZlQ2xhc3MoJ3RvcC1idG4tc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgkc2Nyb2xsVG9wQnRuLmhhc0NsYXNzKCd0b3AtYnRuLXNob3cnKSkge1xuICAgICAgICAgICAgJHNjcm9sbFRvcEJ0bi5yZW1vdmVDbGFzcygndG9wLWJ0bi1zaG93Jyk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFwic2xpY2stY2Fyb3VzZWxcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgZ2V0IF9kZWZhdWx0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvd3M6IDAsXG4gICAgICAgICAgICBjb3VudGVyOiBmYWxzZSxcbiAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGlkZXItcHJldlwiPjxzcGFuIGNsYXNzPVwiaWNvbi1sZWZ0XCI+PC9zcGFuPjwvYnV0dG9uPicsXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGVyLW5leHRcIj48c3BhbiBjbGFzcz1cImljb24tcmlnaHRcIj48L3NwYW4+PC9idXR0b24+J1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iocm9vdCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihyb290LCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgX2NhY2hlTm9kZXMoKSB7XG4gICAgICAgIHRoaXMubm9kZXMgPSB7fTtcbiAgICB9XG5cbiAgICBfYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5yb290Lm9uKCdpbml0JywgdGhpcy5hZGRDb3VudGVyKTtcbiAgICAgICAgdGhpcy5yb290Lm9uKCdiZWZvcmVDaGFuZ2UnLCB0aGlzLmNoYW5nZUNvdW50ZXIpO1xuICAgICAgICB0aGlzLnJvb3Qub24oJ2JyZWFrcG9pbnQnLCB0aGlzLmFkZENvdW50ZXIpO1xuICAgIH1cblxuICAgIF9yZWFkeSgpIHtcbiAgICAgICAgdGhpcy5yb290LnNsaWNrKHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgYWRkQ291bnRlcihldmVudCwgc2xpY2spIHtcbiAgICAgICAgaWYgKHNsaWNrLm9wdGlvbnMuY291bnRlciA9PT0gdHJ1ZSAmJiBzbGljay5zbGlkZUNvdW50ID4gc2xpY2sub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGxldCAkY291bnRlciA9ICQoJzxkaXYgY2xhc3M9XCJzbGljay1jb3VudGVyIHNsaWNrLWNsb25lZFwiPjxkaXYgY2xhc3M9XCJzbGljay1jb3VudGVyX19pbm5lclwiPicgK1xuICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInNsaWNrLWNvdW50ZXJfX2N1cnJlbnRcIj4nICsgKHNsaWNrLmN1cnJlbnRTbGlkZSArIDEpICsgJzwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4gcm9sZT1cInNlcGFyYXRvclwiIGNsYXNzPVwic2xpY2stY291bnRlcl9fZGl2aWRlclwiPjwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJzbGljay1jb3VudGVyX19jb3VudFwiPicgKyAoc2xpY2suZ2V0RG90Q291bnQoKSArIDEpICsgJzwvc3Bhbj48L2Rpdj48L2Rpdj4nKTtcblxuICAgICAgICAgICAgJGNvdW50ZXIuYXBwZW5kVG8oc2xpY2suJHNsaWRlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VDb3VudGVyKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpIHtcbiAgICAgICAgc2xpY2suJHNsaWRlci5maW5kKCcuc2xpY2stY291bnRlcl9fY3VycmVudCcpLmh0bWwoTWF0aC5mbG9vcihuZXh0U2xpZGUgLyBzbGljay5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSArIDEpO1xuICAgIH1cbn0iLCIvKipcbiAqIEdMT0JBTFNcbiAqL1xuXG4oZnVuY3Rpb24od2luZG93KSB7XG4gICAgd2luZG93LkcgPSB7fTtcbn0pKHdpbmRvdyk7XG5cblxuLyoqXG4gKiBNdWx0aSBicm93c2VyIHN1cHBvcnQgZm9yIGRvY3VtZW50IHNjcm9sbCB0b3BcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbkcuZ2V0RG9jdW1lbnRTY3JvbGxUb3AgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDA7XG59O1xuXG5cbi8qKlxuICogTXVsdGkgYnJvd3NlciBzdXBwb3J0IGZvciBkb2N1bWVudCBzY3JvbGwgbGVmdFxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuRy5nZXREb2N1bWVudFNjcm9sbExlZnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCB8fCAwO1xufTtcblxuXG4vKipcbiAqIEdldCB0aW1lIGluIG1zXG4gKiBAbGljZW5zZSBodHRwczovL3Jhdy5naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL21hc3Rlci9MSUNFTlNFXG4gKiBAdHlwZSB7ZnVuY3Rpb259XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmxldCBnZXRUaW1lID1cbiAgRGF0ZS5ub3cgfHxcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgd2hlbiBpbnZva2VkLCB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIGF0IG1vc3Qgb25jZVxuICogZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuIE5vcm1hbGx5LCB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHdpbGwgcnVuXG4gKiBhcyBtdWNoIGFzIGl0IGNhbiwgd2l0aG91dCBldmVyIGdvaW5nIG1vcmUgdGhhbiBvbmNlIHBlciBgd2FpdGAgZHVyYXRpb247XG4gKiBidXQgaWYgeW91J2QgbGlrZSB0byBkaXNhYmxlIHRoZSBleGVjdXRpb24gb24gdGhlIGxlYWRpbmcgZWRnZSwgcGFzc1xuICogYHtsZWFkaW5nOiBmYWxzZX1gLiBUbyBkaXNhYmxlIGV4ZWN1dGlvbiBvbiB0aGUgdHJhaWxpbmcgZWRnZSwgZGl0dG8uXG4gKiBAbGljZW5zZSBodHRwczovL3Jhdy5naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL21hc3Rlci9MSUNFTlNFXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jXG4gKiBAcGFyYW0ge251bWJlcn0gd2FpdFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbkcudGhyb3R0bGUgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIGxldCBjb250ZXh0LCBhcmdzLCByZXN1bHQ7XG4gIGxldCB0aW1lb3V0ID0gbnVsbDtcbiAgbGV0IHByZXZpb3VzID0gMDtcbiAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KTtcbiAgbGV0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgcHJldmlvdXMgPSBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlID8gMCA6IGdldFRpbWUoKTtcbiAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgfTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGxldCBub3cgPSBnZXRUaW1lKCk7XG4gICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSBwcmV2aW91cyA9IG5vdztcbiAgICBsZXQgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XG4gICAgY29udGV4dCA9IHRoaXM7XG4gICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICBpZiAocmVtYWluaW5nIDw9IDApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTsiLCIvLyBpbXBvcnQgXCJtYXRjaG1lZGlhLXBvbHlmaWxsXCI7XG4vLyBpbXBvcnQgXCJtYXRjaG1lZGlhLXBvbHlmaWxsL21hdGNoTWVkaWEuYWRkTGlzdGVuZXJcIjtcblxuLy9pbXBvcnQgb2JqZWN0Rml0SW1hZ2VzIGZyb20gXCJvYmplY3QtZml0LWltYWdlc1wiOyAvLyDQn9C+0LvQuNGE0LjQu1xuaW1wb3J0IFwibGF6eXNpemVzXCI7XG5cbi8vaW1wb3J0IHtNRENSaXBwbGV9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUnO1xuLy8gaW1wb3J0IHtNRENUZXh0RmllbGR9IGZyb20gJ0BtYXRlcmlhbC90ZXh0ZmllbGQnO1xuXG5pbXBvcnQgTGlnaHRib3ggZnJvbSBcIi4vY29tcG9uZW50cy9saWdodGJveFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi9jb21wb25lbnRzL3NsaWRlclwiO1xuaW1wb3J0IFNjcm9sbFRvVG9wQnRuIGZyb20gXCIuL2NvbXBvbmVudHMvc2Nyb2xsdG90b3AtYnRuXCI7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi9jb21wb25lbnRzL21haW4tbWVudSc7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL2NvbXBvbmVudHMvbmF2LWJhclwiO1xuaW1wb3J0IHltYXBzIGZyb20gJ3ltYXBzJztcblxuY2xhc3MgQXBwbGljYXRpb24ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdENvbW1vbigpO1xuICAgICAgICAvL3RoaXMuaW5pdE1hdGVyaWFsRGVzaWduU3R1ZmYoKTtcbiAgICAgICAgdGhpcy5pbml0U2xpZGVycygpO1xuICAgICAgICAvL3RoaXMuaW5pdEFqYXhCbG9nTG9hZCgpO1xuICAgICAgICB0aGlzLmluaXRNb2JpbGVWaWV3UG9ydEhlaWdodCgpO1xuICAgICAgICB0aGlzLmluaXRZYW5kZXhNYXAoKTtcbiAgICB9XG5cblxuICAgIC8vIGluaXRNYXRlcmlhbERlc2lnblN0dWZmKCkge1xuICAgIC8vICAgICAvLyDQtdGE0YTQtdC60YIgcmlwcGxlINC90LAg0LrQvdC+0L/QutCw0YUgICAgICAgIFxuICAgIC8vICAgICBbXS5tYXAuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWRjLWJ1dHRvbicpLCBmdW5jdGlvbihlbCkge1xuICAgIC8vICAgICAgICAgcmV0dXJuIG5ldyBNRENSaXBwbGUoZWwpO1xuICAgIC8vICAgICB9KTtcblxuICAgIC8vICAgICAvLyDRgtC10LrRgdGC0L7QstGL0LUg0L/QvtC70Y8g0YTQvtGA0LxcbiAgICAvLyAgICAgLy8gW10ubWFwLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1kYy10ZXh0LWZpZWxkJyksIGZ1bmN0aW9uKGVsKSB7XG4gICAgLy8gICAgIC8vICAgICByZXR1cm4gbmV3IE1EQ1RleHRGaWVsZChlbCk7XG4gICAgLy8gICAgIC8vIH0pO1xuICAgIC8vIH1cblxuXG4gICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40LhcbiAgICBpbml0Q29tbW9uKCkge1xuXG4gICAgICAgIG5ldyBMaWdodGJveCgpO1xuXG4gICAgICAgIG5ldyBTY3JvbGxUb1RvcEJ0bigpO1xuXG4gICAgICAgIG5ldyBOYXZCYXIoeyBvZmZzZXRGb3JGaXhlZDogMzAwIH0pO1xuXG4gICAgICAgIG5ldyBNYWluTWVudSgndWwuc2YtbWVudScpO1xuXG5cbiAgICAgICAgJCgnLmNpdHknKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcucG9wLXVwJykuYWRkQ2xhc3MoJ3BvcC11cC0tYWN0aXZlJyk7XG4gICAgICAgIH0pXG4gICAgICAgICQoJy5tb2RhbCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJy5wb3AtdXAtcHJvZmlsZScpLmFkZENsYXNzKCdwb3AtdXAtLWFjdGl2ZScpO1xuICAgICAgICB9KVxuICAgICAgICAkKCcuY2xvc2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcucG9wLXVwJykucmVtb3ZlQ2xhc3MoJ3BvcC11cC0tYWN0aXZlJyk7XG4gICAgICAgIH0pXG4gICAgICAgICQoJy5jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJy5wb3AtdXAtcHJvZmlsZScpLnJlbW92ZUNsYXNzKCdwb3AtdXAtLWFjdGl2ZScpO1xuICAgICAgICB9KVxuICAgICAgICAvLyAkKCcjcGhvbmUnKS5tYXNrKCcrNyAoOTk5KSA5OTkgOTk5OScpXG4gICAgICAgICQoJy5tb3JlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnI2NhcmRfX29uZScpLmNzcyh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtMTEwJSknLCB0cmFuc2l0aW9uOiAnMXMnIH0pXG4gICAgICAgICAgICAkKCcjY2FyZF9fdHdvJykuY3NzKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC0xMDAlKScsIHRyYW5zaXRpb246ICcxcycgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLyog0J3QsNC20LDQu9C4INC90LAg0LrQvdC+0L/QvtGH0LrRgyDQvtGC0L/RgNCw0LLQutC4INGE0L7RgNC80Ysg0L7QsdGM0YDQsNGC0L3QvtC5INGB0LLRj9C30LgqL1xuICAgICAgICAkKCcjemF5YXZrYS1idXR0b24nKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKCcjemF5dmthLXN1Ym1pdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGF1dG9tYXRpYyBmb2N1cyBmb3IgaW5wdXRcbiAgICAgICAgJCgnLmNvZGUnKS5vbigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIGxldCBsZW4gPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgY3VyVGFiSW5kZXggPSBwYXJzZUludCgkKHRoaXMpLmF0dHIoJ3RhYmluZGV4JykpO1xuICAgICAgICAgICAgbGV0IG5leHRUYWJJbmRleCA9IGN1clRhYkluZGV4ICsgMTtcbiAgICAgICAgICAgIGxldCBwcmV2VGFiSW5kZXggPSBjdXJUYWJJbmRleCAtIDE7XG4gICAgICAgICAgICBpZiAobGVuID49IDIpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnZhbCh2YWx1ZS5zdWJzdHIoMCwgMSkpO1xuICAgICAgICAgICAgICAgICQoJ1t0YWJpbmRleD0nICsgbmV4dFRhYkluZGV4ICsgJ10nKS5mb2N1cygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsZW4gPT0gMCAmJiBwcmV2VGFiSW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICAkKCdbdGFiaW5kZXg9JyArIHByZXZUYWJJbmRleCArICddJykuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICgoaGlzdG9yeS5sZW5ndGggPT0gMCkgJiYgIWRvY3VtZW50LnJlZmVycmVyKSB7XG4gICAgICAgICAgICAkKCcuanMtZ28tYmFjaycpLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vINC/0YDQvtC60YDRg9GC0LjRgtGMINCy0L3QuNC3INC/0LXRgNCy0YvQuSDRjdC60YDQsNC9XG4gICAgICAgICQoJy5qcy1nby1iYWNrJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICgoMSA8IGhpc3RvcnkubGVuZ3RoKSAmJiBkb2N1bWVudC5yZWZlcnJlcikge1xuICAgICAgICAgICAgICAgIGhpc3RvcnkuYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL29iamVjdEZpdEltYWdlcyAtINC/0L7Qu9C40YTQuNC7INCw0LrRgtC40LLQsNGG0LjRj1xuICAgICAgICAvLyBpZiAodHlwZW9mIG9iamVjdEZpdEltYWdlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyAgICAgb2JqZWN0Rml0SW1hZ2VzKCQoJy5pbWFnZS1jb3ZlciBpbWcnKSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyDQv9GA0L7QutGA0YPRgtC40YLRjCDQstC90LjQtyDQv9C10YDQstGL0Lkg0Y3QutGA0LDQvVxuICAgICAgICAkKCcuanMtZ28tZG93bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgeSA9ICQoJy5oZWFkZXItd3JhcCcpLmhlaWdodCgpO1xuICAgICAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICB7IHNjcm9sbFRvcDogeSB9LCAxMDAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLy8g0J/Qu9Cw0LLQvdCw0Y8g0L/RgNC+0LrRgNGD0YLQutCwINC/0YDQuCDQv9C10YDQtdGF0L7QtNC1INC/0L4g0Y/QutC+0YDRjlxuICAgICAgICAvLyBjb25zdCAkcm9vdCA9ICQoJ2h0bWwsIGJvZHknKTtcbiAgICAgICAgLy8gJCgnI21haW4tbWVudSBhJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICAgICB2YXIgaHJlZiA9ICQuYXR0cih0aGlzLCAnaHJlZicpO1xuICAgICAgICAvLyAgICAgaHJlZiA9IGhyZWYuc3Vic3RyaW5nKDEsIGhyZWYubGVuZ3RoKTtcbiAgICAgICAgLy8gICAgIC8vY29uc29sZS5sb2coaHJlZik7XG4gICAgICAgIC8vICAgICAkcm9vdC5hbmltYXRlKHtcbiAgICAgICAgLy8gICAgICAgICBzY3JvbGxUb3A6ICQoaHJlZikub2Zmc2V0KCkudG9wXG4gICAgICAgIC8vICAgICB9LCAxNTAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBocmVmO1xuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgfVxuXG5cbiAgICBpbml0WWFuZGV4TWFwKCkge1xuXG4gICAgICAgIHltYXBzLmxvYWQoJ2h0dHBzOi8vYXBpLW1hcHMueWFuZGV4LnJ1LzIuMS8/bGFuZz1ydV9SVScpXG4gICAgICAgICAgICAudGhlbihtYXBzID0+IHtcblxuICAgICAgICAgICAgICAgIC8vINCh0L7Qt9C00LDQvdC40LUg0LrQsNGA0YLRiy5cbiAgICAgICAgICAgICAgICAvLyBodHRwczovL3RlY2gueWFuZGV4LnJ1L21hcHMvZG9jL2pzYXBpLzIuMS9kZy9jb25jZXB0cy9tYXAtZG9jcGFnZS9cbiAgICAgICAgICAgICAgICBjb25zdCBteU1hcCA9IG5ldyBtYXBzLk1hcCgneWFuZGV4LW1hcCcsIHtcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBbNTEuNjYwNzgxLCAzOS4yMDAyNjldLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiAxMyxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIG15TWFwLmNvbnRyb2xzIC8vINC00L7QsdCw0LLQuNC8INCy0YHRj9C60LjRhSDQutC90L7Qv9C+0LosINCyINGB0LrQvtCx0LrQsNGFINC40YUg0L/QvtC30LjRhtC40Lgg0LIg0LHQu9C+0LrQtVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLmFkZCgnem9vbUNvbnRyb2wnLCB7IGxlZnQ6IDUsIHRvcDogNSB9KSAvL9Cc0LDRgdGI0YLQsNCxXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAuYWRkKCd0eXBlU2VsZWN0b3InKSAvL9Ch0L/QuNGB0L7QuiDRgtC40L/QvtCyINC60LDRgNGC0YtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC5hZGQoJ21hcFRvb2xzJywgeyBsZWZ0OiAzNSwgdG9wOiA1IH0pIC8vINCh0YLQsNC90LTQsNGA0YLQvdGL0Lkg0L3QsNCx0L7RgCDQutC90L7Qv9C+0LpcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC5hZGQoJ3NlYXJjaENvbnRyb2wnKTsgLy8g0KHRgtGA0L7QutCwINGBINC/0L7QuNGB0LrQvtC8XG5cbiAgICAgICAgICAgICAgICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQvNC10YLQutC4XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly90ZWNoLnlhbmRleC5ydS9tYXBzL2RvYy9qc2FwaS8yLjEvcmVmL3JlZmVyZW5jZS9QbGFjZW1hcmstZG9jcGFnZS9cblxuXG4gICAgICAgICAgICAgICAgLyog0KHQvtC30LTQsNC10Lwg0LrQsNGB0YLQvtC80L3Ri9C1INC80LXRgtC60LggKi9cbiAgICAgICAgICAgICAgICBjb25zdCBteVBsYWNlbWFyazAgPSBuZXcgbWFwcy5QbGFjZW1hcmsoWzUxLjY2MDc4MSwgMzkuMjAwMjY5XSwge1xuICAgICAgICAgICAgICAgICAgICAvLyDQpdC40L3RgiDQv9C+0LrQsNC30YvQstCw0LXRgtGB0Y8g0L/RgNC4INC90LDQstC10LTQtdC90LjQuCDQvNGL0YjQutC+0Lkg0L3QsCDQuNC60L7QvdC60YMg0LzQtdGC0LrQuC5cbiAgICAgICAgICAgICAgICAgICAgaGludENvbnRlbnQ6ICfQodC+0LTQtdGA0LbQuNC80L7QtSDQstGB0L/Qu9GL0LLQsNGO0YnQtdC5INC/0L7QtNGB0LrQsNC30LrQuCcsXG4gICAgICAgICAgICAgICAgICAgIC8vINCR0LDQu9GD0L0g0L7RgtC60YDQvtC10YLRgdGPINC/0YDQuCDQutC70LjQutC1INC/0L4g0LzQtdGC0LrQtS5cbiAgICAgICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6ICc8ZGl2IGNsYXNzPVwiYmFsbG9uXCI+0KHQvtC00LXRgNC20LjQvNC+0LUg0LHQsNC70YPQvdCwPC9kaXY+JywgLy8g0YHQtNC10YHRjCDRgdC+0LTQtdGA0LbQuNC80L7QtSDQsdCw0LvRg9C90LAg0LIg0YTQvtGA0LzQsNGC0LUgaHRtbCwg0LLRgdC1INGB0YLQuNC70Lgg0LIgY3NzXG5cbiAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJy9pbWcvbWFya2VyLnN2ZycsIC8vINC60LDRgNGC0LjQvdC60LAg0LjQutC+0L3QutC4XG4gICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFs0MCwgNDBdLCAvLyDRgNCw0LfQvNC10YAg0LjQutC+0L3QutC4XG4gICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0zMiwgLTY0XSwgLy8g0L/QvtC30LjRhtC40Y8g0LjQutC+0L3QutC4XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyDRgtC+0LbQtSDRgdCw0LzQvtC1INC00LvRjyDQtNGA0YPQs9C40YUg0LzQtdGC0L7QulxuXG5cbiAgICAgICAgICAgICAgICAvLyDQn9C+0YHQu9C1INGC0L7Qs9C+INC60LDQuiDQvNC10YLQutCwINCx0YvQu9CwINGB0L7Qt9C00LDQvdCwLCDQtNC+0LHQsNCy0LvRj9C10Lwg0LXRkSDQvdCwINC60LDRgNGC0YMuXG4gICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmswKTtcblxuXG4gICAgICAgICAgICAgICAgLy8g0KTQuNC60YEg0LrRgNC40LLQvtCz0L4g0LLRi9GA0LDQstC90LjQstCw0L3QuNGPINC60LDRgdGC0L7QvNC90YvRhSDQsdCw0LvRg9C90L7QslxuICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuZXZlbnRzLmFkZChbXG4gICAgICAgICAgICAgICAgICAgICdiYWxsb29ub3BlbidcbiAgICAgICAgICAgICAgICBdLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZ2VvT2JqZWN0ID0gZS5nZXQoJ3RhcmdldCcpO1xuICAgICAgICAgICAgICAgICAgICBteU1hcC5wYW5UbyhnZW9PYmplY3QuZ2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKSwgeyBkZWxheTogMCB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygn0J3QtSDRg9C00LDQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LrQsNGA0YLRgycsIGVycm9yKSk7XG5cbiAgICB9XG5cblxuXG4gICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LLRgdC10YUg0YHQu9Cw0LnQtNC10YDQvtCyXG4gICAgaW5pdFNsaWRlcnMoKSB7XG5cbiAgICAgICAgLy8gSG9tZSBTbGlkZXJcbiAgICAgICAgbGV0ICRob21lU2xpZGVyID0gJCgnLmhvbWUtc2xpZGVyJyk7XG4gICAgICAgIGlmICgkaG9tZVNsaWRlci5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIG5ldyBTbGlkZXIoJGhvbWVTbGlkZXIsIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGRvdHNDbGFzczogJ215LWRvdHMnLFxuICAgICAgICAgICAgICAgIC8vYXV0b3BsYXlTcGVlZDogMjAwMCxcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF1cblxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhcm91c2VsIGluIGNvbnRlbnRcbiAgICAgICAgbGV0ICRzcGVjaWFsID0gJCgnLnNwZWNpYWxfX3NsaWRlcicpO1xuICAgICAgICBpZiAoJHNwZWNpYWwubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBuZXcgU2xpZGVyKCRzcGVjaWFsLCB7XG4gICAgICAgICAgICAgICAgY291bnRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAxNTAwLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzcGVjaWFsLXByZXZcIj48c3BhbiBjbGFzcz1cImljb24tbGVmdFwiPjwvc3Bhbj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzcGVjaWFsLW5leHRcIj48c3BhbiBjbGFzcz1cImljb24tcmlnaHRcIj48L3NwYW4+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk3NixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNjc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgJHRlcmFwID0gJCgnLnNsaWRlci10ZXJhcCcpO1xuICAgICAgICBpZiAoJHRlcmFwLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgbmV3IFNsaWRlcigkdGVyYXAsIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInRlcmFwLXByZXZcIj48c3BhbiBjbGFzcz1cImljb24tbGVmdFwiPjwvc3Bhbj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJ0ZXJhcC1uZXh0XCI+PHNwYW4gY2xhc3M9XCJpY29uLXJpZ2h0XCI+PC9zcGFuPjwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbGV0ICRzZXJ2aWNlID0gJCgnLnNlcnZpY2Utc2xpZGVyJyk7XG4gICAgICAgIGlmICgkc2VydmljZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIG5ldyBTbGlkZXIoJHNlcnZpY2UsIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNlcnZpY2UtcHJldlwiPjxzcGFuIGNsYXNzPVwiaWNvbi1sZWZ0XCI+PC9zcGFuPjwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNlcnZpY2UtbmV4dFwiPjxzcGFuIGNsYXNzPVwiaWNvbi1yaWdodFwiPjwvc3Bhbj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG5cbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGxldCAkcmlnaHQgPSAkKCcucmlnaHQtc2xpZGVyJyk7XG4gICAgICAgIGlmICgkcmlnaHQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBuZXcgU2xpZGVyKCRyaWdodCwge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInJpZ2h0LXByZXZcIj48c3BhbiBjbGFzcz1cImljb24tbGVmdFwiPjwvc3Bhbj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJyaWdodC1uZXh0XCI+PHNwYW4gY2xhc3M9XCJpY29uLW5leHRcIj48L3NwYW4+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vINC60LDRgdGC0YvQu9GM0L3QvtC1INGA0LXRiNC10L3QuNC1IDEwMHZoINC00LvRjyDQvNC+0LHQuNC70YzQvdC40LrQvtCyXG4gICAgaW5pdE1vYmlsZVZpZXdQb3J0SGVpZ2h0KCkge1xuICAgICAgICAvLyBodHRwczovL2Nzcy10cmlja3MuY29tL3RoZS10cmljay10by12aWV3cG9ydC11bml0cy1vbi1tb2JpbGUvXG4gICAgICAgIC8vIEZpcnN0IHdlIGdldCB0aGUgdmlld3BvcnQgaGVpZ2h0IGFuZCB3ZSBtdWx0aXBsZSBpdCBieSAxJSB0byBnZXQgYSB2YWx1ZSBmb3IgYSB2aCB1bml0XG4gICAgICAgIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gICAgICAgIC8vIFRoZW4gd2Ugc2V0IHRoZSB2YWx1ZSBpbiB0aGUgLS12aCBjdXN0b20gcHJvcGVydHkgdG8gdGhlIHJvb3Qgb2YgdGhlIGRvY3VtZW50XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YCk7XG4gICAgICAgIGxldCBkb2N1bWVudF93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAvLyBXZSBsaXN0ZW4gdG8gdGhlIHJlc2l6ZSBldmVudCAo0LAg0YDQtdGB0LDQudC3INCyINC80L7QsdC40LvQutCw0YUg0YHRgNCw0LHQsNGC0YvQstCw0LXRgiDQuCDQv9GA0Lgg0YHQutGA0L7Qu9C1LCDQutC+0LPQtNCwINC40YHRh9C10LfQsNC10YIg0YHRgtGA0L7QutCwINCy0LLQvtC00LAg0LDQtNGA0LXRgdCwINCyINCx0YDQsNGD0LfQtdGA0LUpXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBXZSBleGVjdXRlIHRoZSBzYW1lIHNjcmlwdCBhcyBiZWZvcmVcbiAgICAgICAgICAgIGlmIChkb2N1bWVudF93aWR0aCAhPSB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50X3dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgbGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuXG4vLyDQt9Cw0L/Rg9GB0Log0L/RgNC40LvQvtC20LXQvdC40Y9cbiQoKCkgPT4ge1xuICAgIG5ldyBBcHBsaWNhdGlvbigpO1xufSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2h0bWxfc3RhcnRcIl0gPSBzZWxmW1wid2VicGFja0NodW5raHRtbF9zdGFydFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9tYWluLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsialF1ZXJ5IiwiQ29tcG9uZW50IiwibGVuZ3RoIiwicm9vdCIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJfZGVmYXVsdE9wdGlvbnMiLCJpc2pRdWVyeSIsIl9jYWNoZU5vZGVzIiwiX2JpbmRFdmVudHMiLCJfcmVhZHkiLCJvYmplY3QiLCJMaWdodGJveCIsImluaXRpYWxpemUiLCJkZWZhdWx0cyIsImxhbmciLCJ0cmFuc2l0aW9uRWZmZWN0IiwiYmFja0ZvY3VzIiwiYnV0dG9ucyIsImkxOG4iLCJydSIsIkNMT1NFIiwiTkVYVCIsIlBSRVYiLCJFUlJPUiIsIlBMQVlfU1RBUlQiLCJQTEFZX1NUT1AiLCJGVUxMX1NDUkVFTiIsIlRIVU1CUyIsIkRPV05MT0FEIiwiU0hBUkUiLCJaT09NIiwibm9kZXMiLCJsaW5rIiwiJCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRsaW5rIiwiY3VycmVudFRhcmdldCIsImZhbmN5Ym94Iiwib3BlbiIsInNyYyIsImRhdGEiLCJ0eXBlIiwib3B0cyIsInRvdWNoIiwiYXV0b0ZvY3VzIiwiY2xvc2VFeGlzdGluZyIsImFuaW1hdGlvbkVmZmVjdCIsImJlZm9yZUxvYWQiLCJjdXJyZW50IiwiJHNsaWRlIiwiYWRkQ2xhc3MiLCJOYXZCYXIiLCJNZW51IiwiZWwiLCJkb2N1bWVudFNjcm9sbFRvcCIsImluaXQiLCJfaW5pdFN1cGVyZmlzaCIsIl9pbml0TW9iaWxlTWVudSIsImNsaWNrIiwiZSIsImNsb3NlTWVudSIsImNhbGwiLCJlbmFibGVVcGRhdGUiLCJoYXNDbGFzcyIsImRpc2FibGVVcGRhdGUiLCJvcGVuTWVudSIsInN1cGVyZmlzaCIsImFwcGVuZCIsImh0bWwiLCJwYXJlbnQiLCJzaWJsaW5ncyIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJpcyIsImhpZGUiLCJzaG93IiwiRyIsImdldERvY3VtZW50U2Nyb2xsVG9wIiwiY3NzIiwicmVtb3ZlQ2xhc3MiLCJhdHRyIiwic2Nyb2xsVG9wIiwib2xkU2Nyb2xsVG9wIiwic2Nyb2xsVG9wRGlyZWN0aW9uIiwib2Zmc2V0Rm9yRml4ZWQiLCJhbGxvd1VwZGF0ZSIsIl91cGRhdGVOYXZCYXIiLCJfc2V0U2VyYWNoQm94IiwiX2hhbmRsZVNjcm9sbFRocm90dGxlZCIsInRocm90dGxlIiwiX2hhbmRsZVNjcm9sbCIsImJpbmQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRsZVdpbmRvd1Jlc2l6ZVRocm90dGxlZCIsIl9oYW5kbGVXaW5kb3dSZXNpemUiLCJpc05hdkJhckZpeGVkIiwiU2Nyb2xsVG9Ub3BCdG4iLCJzZXRUb1RvcEJ1dHRvbiIsIiRzY3JvbGxUb3BCdG4iLCJhcHBlbmRUbyIsImFuaW1hdGUiLCJzY3JvbGwiLCJTbGlkZXIiLCJyb3dzIiwiY291bnRlciIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImFkZENvdW50ZXIiLCJjaGFuZ2VDb3VudGVyIiwic2xpY2siLCJzbGlkZUNvdW50Iiwic2xpZGVzVG9TaG93IiwiJGNvdW50ZXIiLCJjdXJyZW50U2xpZGUiLCJnZXREb3RDb3VudCIsIiRzbGlkZXIiLCJuZXh0U2xpZGUiLCJmaW5kIiwiTWF0aCIsImZsb29yIiwic2xpZGVzVG9TY3JvbGwiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSIsImdldERvY3VtZW50U2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsImdldFRpbWUiLCJEYXRlIiwibm93IiwiZnVuYyIsIndhaXQiLCJjb250ZXh0IiwiYXJncyIsInJlc3VsdCIsInRpbWVvdXQiLCJwcmV2aW91cyIsImxhdGVyIiwibGVhZGluZyIsImFwcGx5IiwicmVtYWluaW5nIiwiYXJndW1lbnRzIiwiY2xlYXJUaW1lb3V0IiwidHJhaWxpbmciLCJzZXRUaW1lb3V0IiwiTWFpbk1lbnUiLCJ5bWFwcyIsIkFwcGxpY2F0aW9uIiwiaW5pdENvbW1vbiIsImluaXRTbGlkZXJzIiwiaW5pdE1vYmlsZVZpZXdQb3J0SGVpZ2h0IiwiaW5pdFlhbmRleE1hcCIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJ0cmlnZ2VyIiwidmFsdWUiLCJ2YWwiLCJsZW4iLCJjdXJUYWJJbmRleCIsInBhcnNlSW50IiwibmV4dFRhYkluZGV4IiwicHJldlRhYkluZGV4Iiwic3Vic3RyIiwiZm9jdXMiLCJoaXN0b3J5IiwicmVmZXJyZXIiLCJiYWNrIiwieSIsImhlaWdodCIsImxvYWQiLCJ0aGVuIiwibWFwcyIsIm15TWFwIiwiTWFwIiwiY2VudGVyIiwiem9vbSIsIm15UGxhY2VtYXJrMCIsIlBsYWNlbWFyayIsImhpbnRDb250ZW50IiwiYmFsbG9vbkNvbnRlbnQiLCJpY29uSW1hZ2VIcmVmIiwiaWNvbkltYWdlU2l6ZSIsImljb25JbWFnZU9mZnNldCIsImdlb09iamVjdHMiLCJhZGQiLCJldmVudHMiLCJnZW9PYmplY3QiLCJnZXQiLCJwYW5UbyIsImdlb21ldHJ5IiwiZ2V0Q29vcmRpbmF0ZXMiLCJkZWxheSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIiRob21lU2xpZGVyIiwiaW5maW5pdGUiLCJhZGFwdGl2ZUhlaWdodCIsImZhZGUiLCJhcnJvd3MiLCJkb3RzIiwiYXV0b3BsYXkiLCJkb3RzQ2xhc3MiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiJHNwZWNpYWwiLCJhdXRvcGxheVNwZWVkIiwiJHRlcmFwIiwidmFyaWFibGVXaWR0aCIsIiRzZXJ2aWNlIiwiJHJpZ2h0IiwidmVydGljYWwiLCJ2ZXJ0aWNhbFN3aXBpbmciLCJhZGFwdGl2ZVdpZHRoIiwidmgiLCJpbm5lckhlaWdodCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJkb2N1bWVudF93aWR0aCIsImlubmVyV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9