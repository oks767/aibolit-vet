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

      var $course = $('.course-slider');

      if ($course.length !== 0) {
        new _components_slider__WEBPACK_IMPORTED_MODULE_2__["default"]($course, {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button class="course-prev"><span class="icon-left"></span></button>',
          nextArrow: '<button class="course-next"><span class="icon-right"></span></button>',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9jb21wb25lbnRzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbGlnaHRib3guanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9jb21wb25lbnRzL21haW4tbWVudS5qcyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbmF2LWJhci5qcyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0Ly4vc3JjL2pzL2NvbXBvbmVudHMvc2Nyb2xsdG90b3AtYnRuLmpzIiwid2VicGFjazovL2h0bWwtc3RhcnQvLi9zcmMvanMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcblxuLy9leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBFbWl0dGVyIHtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgXG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICAvL3N1cGVyKCk7XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBhcmdzWzBdO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGVmYXVsdE9wdGlvbnMsIGFyZ3NbMV0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGlmIChDb21wb25lbnQuaXNqUXVlcnkoYXJnc1swXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3QgPSBhcmdzWzBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kZWZhdWx0T3B0aW9ucywgYXJnc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaXNqUXVlcnkob2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiBqUXVlcnk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5fY2FjaGVOb2RlcygpO1xuICAgICAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuX3JlYWR5KCk7XG4gICAgfVxuXG4gICAgX2NhY2hlTm9kZXMoKSB7fVxuXG4gICAgX2JpbmRFdmVudHMoKSB7fVxuXG4gICAgX3JlYWR5KCkge31cbn0iLCJpbXBvcnQgXCJAZmFuY3lhcHBzL2ZhbmN5Ym94XCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWdodGJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgZ2V0IF9kZWZhdWx0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgbGFuZzogJ3J1JyxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRWZmZWN0OiAnc2xpZGUnLFxuICAgICAgICAgICAgICAgIGJhY2tGb2N1czogZmFsc2UsXG4gICAgICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgICAgICAnY2xvc2UnXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBpMThuOiB7XG4gICAgICAgICAgICAgICAgICAgIHJ1OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDTE9TRTogJ9CX0LDQutGA0YvRgtGMJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIE5FWFQ6ICfQlNCw0LvRjNGI0LUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgUFJFVjogJ9Cd0LDQt9Cw0LQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgRVJST1I6ICfQndC1INGD0LTQsNC10YLRgdGPINC30LDQs9GA0YPQt9C40YLRjC4gPGJyLz4g0J/QvtC/0YDQvtCx0YPQudGC0LUg0L/QvtC30LTQvdC10LUuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBMQVlfU1RBUlQ6ICfQndCw0YfQsNGC0Ywg0YHQu9Cw0LnQtNGI0L7RgycsXG4gICAgICAgICAgICAgICAgICAgICAgICBQTEFZX1NUT1A6ICfQntGB0YLQsNC90L7QstC40YLRjCDRgdC70LDQudC00YjQvtGDJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIEZVTExfU0NSRUVOOiAn0J3QsCDQstC10YHRjCDRjdC60YDQsNC9JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRIVU1CUzogJ9Cf0YDQtdCy0YzRjicsXG4gICAgICAgICAgICAgICAgICAgICAgICBET1dOTE9BRDogJ9Ch0LrQsNGH0LDRgtGMJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNIQVJFOiAn0J/QvtC00LXQu9C40YLRjNGB0Y8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgWk9PTTogJ9Cj0LLQtdC70LjRh9C40YLRjCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJvb3QsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIocm9vdCwgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIF9jYWNoZU5vZGVzKCkge1xuICAgICAgICB0aGlzLm5vZGVzID0ge1xuICAgICAgICAgICAgbGluazogJCgnLmpzLWxpbmstbW9kYWwnKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLm5vZGVzLmxpbmsub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbGV0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgJC5mYW5jeWJveC5vcGVuKHtcbiAgICAgICAgICAgICAgICBzcmM6ICRsaW5rLmRhdGEoJ3NyYycpLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgICAgICAgICAgIG9wdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2g6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjbG9zZUV4aXN0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25FZmZlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVMb2FkOiBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50LiRzbGlkZS5hZGRDbGFzcygnZmFuY3lib3gtbW9kYWwnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfcmVhZHkoKSB7XG4gICAgICAgICQuZmFuY3lib3guZGVmYXVsdHMuaTE4bi5ydSA9IHRoaXMub3B0aW9ucy5kZWZhdWx0cy5pMThuLnJ1O1xuICAgICAgICAkLmZhbmN5Ym94LmRlZmF1bHRzLmxhbmcgPSB0aGlzLm9wdGlvbnMuZGVmYXVsdHMubGFuZztcbiAgICAgICAgJC5mYW5jeWJveC5kZWZhdWx0cy5idXR0b25zID0gdGhpcy5vcHRpb25zLmRlZmF1bHRzLmJ1dHRvbnM7XG4gICAgICAgICQuZmFuY3lib3guZGVmYXVsdHMudHJhbnNpdGlvbkVmZmVjdCA9IHRoaXMub3B0aW9ucy5kZWZhdWx0cy50cmFuc2l0aW9uRWZmZWN0O1xuICAgICAgICAkLmZhbmN5Ym94LmRlZmF1bHRzLmJhY2tGb2N1cyA9IHRoaXMub3B0aW9ucy5kZWZhdWx0cy5iYWNrRm9jdXM7XG4gICAgfVxufSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmltcG9ydCAnc3VwZXJmaXNoL3NyYy9qcy9ob3ZlckludGVudCc7XG5pbXBvcnQgJ3N1cGVyZmlzaC9zcmMvanMvc3VwZXJmaXNoJztcblxuaW1wb3J0IFwiLi4vZ2xvYmFsLmpzXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL25hdi1iYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSB7XG4gIFxuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLnJvb3QgPSAkKCcuc2YtbWVudScpO1xuICAgIHRoaXMuZG9jdW1lbnRTY3JvbGxUb3A9bnVsbDtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5faW5pdFN1cGVyZmlzaCgpO1xuICAgIHRoaXMuX2luaXRNb2JpbGVNZW51KCk7XG4gICAgdGhpcy5fYmluZEV2ZW50cygpO1xuICB9XG5cbiAgc3RhdGljIG9wZW5NZW51KCkge1xuICAgIE1lbnUuZG9jdW1lbnRTY3JvbGxUb3AgPSBHLmdldERvY3VtZW50U2Nyb2xsVG9wKCk7XG4gICAgJCgnLmRyYXdlcicpLmFkZENsYXNzKCdvcGVuZWQnKTtcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2RyYXdlci1vcGVuZWQnKTtcbiAgICAkKCdib2R5JykuY3NzKHtcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ2ZpeGVkJyxcbiAgICAgICAgJ3RvcCc6IC1NZW51LmRvY3VtZW50U2Nyb2xsVG9wXG4gICAgfSk7XG4gICAgJCgnLmRyYXdlci1zY3JpbScpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICB9XG5cbiAgc3RhdGljIGNsb3NlTWVudSgpIHtcbiAgICAgICQoJy5kcmF3ZXInKS5yZW1vdmVDbGFzcygnb3BlbmVkJyk7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2RyYXdlci1vcGVuZWQnKTtcbiAgICAgICQoJ2JvZHknKS5hdHRyKCdzdHlsZScsICcnKTtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5zY3JvbGxUb3AoTWVudS5kb2N1bWVudFNjcm9sbFRvcCk7XG4gICAgICAkKCcuZHJhd2VyLXNjcmltJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfVxuXG5cbiAgX2JpbmRFdmVudHMoKSB7XG5cbiAgICAkKCcuanMtY2xvc2UtZHJhd2VyJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBNZW51LmNsb3NlTWVudS5jYWxsKHRoaXMpO1xuICAgICAgICBOYXZCYXIuZW5hYmxlVXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICAkKCcuanMtb3Blbi1kcmF3ZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKCEkKHRoaXMpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgICAgTmF2QmFyLmRpc2FibGVVcGRhdGUoKTtcbiAgICAgICAgICAgIE1lbnUub3Blbk1lbnUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gLy8g0J/Qu9Cw0LLQvdCw0Y8g0L/RgNC+0LrRgNGD0YLQutCwINC/0YDQuCDQv9C10YDQtdGF0L7QtNC1INC/0L4g0Y/QutC+0YDRjlxuICAgIC8vICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuanMtbWVudSBhJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIFxuICAgIC8vICAgICBNZW51LmNsb3NlTWVudSgpO1xuICAgIC8vICAgICBOYXZCYXIuZW5hYmxlVXBkYXRlKCk7XG5cbiAgICAvLyAgICAgbGV0IGhyZWYgPSAkLmF0dHIodGhpcywgJ2hyZWYnKTtcbiAgICAvLyAgICAgaHJlZiA9IGhyZWYuc3Vic3RyaW5nKDEsIGhyZWYubGVuZ3RoKTtcbiAgICAvLyAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgIC8vICAgICAgICAgc2Nyb2xsVG9wOiAkKGhyZWYpLm9mZnNldCgpLnRvcFxuICAgIC8vICAgICB9LCA1MDAsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaHJlZjtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyB9KTtcblxuICB9XG5cblxuXG4gIFxuICBfaW5pdFN1cGVyZmlzaCgpIHtcbiAgICAkKHRoaXMuZWwpLnN1cGVyZmlzaCgpO1xuXG4gICAgLy8gJCgnI21lbnUtaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIC8vICAgJCgnI21vYmlsZV90b3BfbWVudV93cmFwcGVyJykudG9nZ2xlKCk7XG4gICAgLy8gICBzZWxmLnRvZ2dsZU1vYmlsZU1lbnUoKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIF9pbml0TW9iaWxlTWVudSgpIHtcbiAgICBcbiAgICAvLyBwcmVzdGFzaG9wLm9uKCdyZXNwb25zaXZlIHVwZGF0ZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gICAkKCcuanMtc3ViLW1lbnUnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIC8vICAgc2VsZi50b2dnbGVNb2JpbGVNZW51KCk7XG4gICAgLy8gfSk7XG5cbiAgICAkKCcuanMtZHJhd2VyLW1lbnUtbGlzdCcpLmFwcGVuZCgkKCcuc2YtbWVudScpLmh0bWwoKSk7XG5cbiAgICAvLyBjbGljayBvbiBtZW51IGxpbmsgZm9yIG9wZW4gc3VibWVudVxuICAgIC8vJCgnLmpzLWRyYXdlci1tZW51LWxpc3QgLnN1Yi1tZW51JykucGFyZW50KCdsaScpLmZpbmQoJyA+IGEnKS5hZGRDbGFzcygnaGFzLXN1Ym1lbnUnKTtcbiAgICAvLyAkKCcuaGFzLXN1Ym1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuc3ViLW1lbnUnKS5zbGlkZVRvZ2dsZSg0MDApO1xuICAgIC8vICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1zdWItbWVudS1vcGVuZWQnKTtcbiAgICAvLyB9KTtcblxuICAgIC8vIGNsaWNrIG9uIGJ1dHRvbiBmb3Igb3BlbiBzdWJtZW51XG4gICAgJCgnLmpzLWRyYXdlci1tZW51LWxpc3QgLnN1Yi1tZW51JykucGFyZW50KCdsaScpLmFwcGVuZCgnPGJ1dHRvbiBjbGFzcz1cIm9wZW4tc3VibWVudS1idG5cIj48L2J1dHRvbj4nKTsgLy8gYWRkIHN1Ym1lbnUgYnV0dG9uc1xuICAgICQoJy5vcGVuLXN1Ym1lbnUtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLnN1Yi1tZW51Jykuc2xpZGVUb2dnbGUoNDAwKTtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnc3ViLW1lbnUtb3BlbmVkJyk7XG4gICAgfSk7XG5cblxuXG5cbiAgfVxuXG4gIHRvZ2dsZU1vYmlsZU1lbnUoKSB7XG4gICAgJCgnI2hlYWRlcicpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgaWYgKCQoJyNtb2JpbGVfdG9wX21lbnVfd3JhcHBlcicpLmlzKFwiOnZpc2libGVcIikpIHtcbiAgICAgICQoJyNub3RpZmljYXRpb25zLCAjd3JhcHBlciwgI2Zvb3RlcicpLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnI25vdGlmaWNhdGlvbnMsICN3cmFwcGVyLCAjZm9vdGVyJykuc2hvdygpO1xuICAgIH1cbiAgfVxuXG5cbn1cbiIsImltcG9ydCBcIi4uL2dsb2JhbC5qc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIFxuICAgIGdldCBfZGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvZmZzZXRGb3JGaXhlZDogMjAwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnJvb3QgPSAkKCcubmF2LWJhcicpO1xuICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IG51bGw7ICAgICAgICBcbiAgICAgICAgdGhpcy5vbGRTY3JvbGxUb3AgPSBudWxsO1xuICAgICAgICB0aGlzLnNjcm9sbFRvcERpcmVjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICAgICAgTmF2QmFyLmFsbG93VXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlTmF2QmFyKCk7XG4gICAgICAgIHRoaXMuX3NldFNlcmFjaEJveCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhbGxvd1VwZGF0ZTtcblxuICAgIHN0YXRpYyBlbmFibGVVcGRhdGUoKXtcbiAgICAgICAgTmF2QmFyLmFsbG93VXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnTmF2QmFyLmFsbG93VXBkYXRlID0gJywgTmF2QmFyLmFsbG93VXBkYXRlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGlzYWJsZVVwZGF0ZSgpe1xuICAgICAgICBOYXZCYXIuYWxsb3dVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnTmF2QmFyLmFsbG93VXBkYXRlID0gJywgTmF2QmFyLmFsbG93VXBkYXRlKTtcbiAgICB9XG4gICAgXG4gICAgICAgICAgICBcbiAgICBfYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8g0YHQvtCx0YvRgtC40LUg0YHQutGA0L7QuyBcbiAgICAgICAgTmF2QmFyLl9oYW5kbGVTY3JvbGxUaHJvdHRsZWQgPSBHLnRocm90dGxlKHRoaXMuX2hhbmRsZVNjcm9sbC5iaW5kKHRoaXMpLCAxMDApO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgTmF2QmFyLl9oYW5kbGVTY3JvbGxUaHJvdHRsZWQpO1xuXG4gICAgICAgIC8vINGB0L7QsdGL0YLQuNC1INGA0LXRgdCw0LnQt1xuICAgICAgICBOYXZCYXIuX2hhbmRsZVdpbmRvd1Jlc2l6ZVRocm90dGxlZCA9IEcudGhyb3R0bGUodGhpcy5faGFuZGxlV2luZG93UmVzaXplLmJpbmQodGhpcyksIDEwMCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBOYXZCYXIuX2hhbmRsZVdpbmRvd1Jlc2l6ZVRocm90dGxlZCk7XG5cbiAgICB9XG5cblxuICAgIF9zZXRTZXJhY2hCb3goKSB7XG4gICAgICAgICQoJy5qcy10b2dsZS1zZWFyY2gtYm94Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICBcblxuICAgIF91cGRhdGVOYXZCYXIoKSB7XG5cbiAgICAgICAgaWYoIU5hdkJhci5hbGxvd1VwZGF0ZSkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5vbGRTY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFRvcDtcbiAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSBHLmdldERvY3VtZW50U2Nyb2xsVG9wKCk7XG4gICAgICAgIGNvbnN0IGlzTmF2QmFyRml4ZWQgPSB0aGlzLnJvb3QuaGFzQ2xhc3MoJ2ZpeGVkJyk7XG5cbiAgICAgICAgaWYodGhpcy5vbGRTY3JvbGxUb3AgPCB0aGlzLnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb3BEaXJlY3Rpb24gPSBcImRvd25cIjtcbiAgICAgICAgfSBlbHNlIGlmKCB0aGlzLm9sZFNjcm9sbFRvcCA+IHRoaXMuc2Nyb2xsVG9wICkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb3BEaXJlY3Rpb24gPSBcInVwXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvcERpcmVjdGlvbiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQv9GA0LjQu9C10L/QuNC70LjQstCw0LXQvCDRiNCw0L/QutGDXG4gICAgICAgIGlmICggdGhpcy5zY3JvbGxUb3AgPiB0aGlzLm9wdGlvbnMub2Zmc2V0Rm9yRml4ZWQgJiYgIWlzTmF2QmFyRml4ZWQgKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQvtGC0LvQtdC/0LvRj9C10Lwg0YjQsNC/0LrRg1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxUb3AgPD0gdGhpcy5vcHRpb25zLm9mZnNldEZvckZpeGVkICYmIGlzTmF2QmFyRml4ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g0LrRgNGD0YLQuNC8INCy0L3QuNC3XG4gICAgICAgIGlmKHRoaXMuc2Nyb2xsVG9wRGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdC5yZW1vdmVDbGFzcygnc2Nyb2xsLXVwJyk7XG4gICAgICAgICAgICB0aGlzLnJvb3QuYWRkQ2xhc3MoJ3Njcm9sbC1kb3duJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g0LrRgNGD0YLQuNC8INCy0LLQtdGA0YVcbiAgICAgICAgaWYodGhpcy5zY3JvbGxUb3BEaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdC5yZW1vdmVDbGFzcygnc2Nyb2xsLWRvd24nKTtcbiAgICAgICAgICAgIHRoaXMucm9vdC5hZGRDbGFzcygnc2Nyb2xsLXVwJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgX2hhbmRsZVNjcm9sbCgpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlTmF2QmFyKCk7XG4gICAgfVxuXG4gICAgX2hhbmRsZVdpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlTmF2QmFyKCk7XG4gICAgfVxuIFxuXG59IiwiLy8g0LrQvdC+0L/QutCwINC90LDQstC10YDRhVxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsVG9Ub3BCdG4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHJvb3QsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIocm9vdCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5zZXRUb1RvcEJ1dHRvbigpO1xuICAgIH1cblxuICAgIHNldFRvVG9wQnV0dG9uKCkge1xuXG4gICAgICAgIHZhciAkc2Nyb2xsVG9wQnRuID0gJCgnPGEgcmVsPVwibm9mb2xsb3dcIiBocmVmPVwiI1wiIGlkPVwic2Nyb2xsLXRvcFwiIGNsYXNzPVwic2Nyb2xsdG90b3AtYnRuXCI+PGk+PC9pPjwvYT4nKS5hcHBlbmRUbygnYm9keScpO1xuXG4gICAgICAgICRzY3JvbGxUb3BCdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCdodG1sOm5vdCg6YW5pbWF0ZWQpLGJvZHk6bm90KDphbmltYXRlZCknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwfSwgMzAwKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDEwMCkge1xuICAgICAgICAgICAgJHNjcm9sbFRvcEJ0bi5hZGRDbGFzcygndG9wLWJ0bi1zaG93Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkc2Nyb2xsVG9wQnRuLnJlbW92ZUNsYXNzKCd0b3AtYnRuLXNob3cnKTtcbiAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoJHNjcm9sbFRvcEJ0bi5oYXNDbGFzcygndG9wLWJ0bi1zaG93JykpIHtcbiAgICAgICAgICAgICRzY3JvbGxUb3BCdG4ucmVtb3ZlQ2xhc3MoJ3RvcC1idG4tc2hvdycpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBcInNsaWNrLWNhcm91c2VsXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGdldCBfZGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb3dzOiAwLFxuICAgICAgICAgICAgY291bnRlcjogZmFsc2UsXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGVyLXByZXZcIj48c3BhbiBjbGFzcz1cImljb24tbGVmdFwiPjwvc3Bhbj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlci1uZXh0XCI+PHNwYW4gY2xhc3M9XCJpY29uLXJpZ2h0XCI+PC9zcGFuPjwvYnV0dG9uPidcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJvb3QsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIocm9vdCwgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIF9jYWNoZU5vZGVzKCkge1xuICAgICAgICB0aGlzLm5vZGVzID0ge307XG4gICAgfVxuXG4gICAgX2JpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMucm9vdC5vbignaW5pdCcsIHRoaXMuYWRkQ291bnRlcik7XG4gICAgICAgIHRoaXMucm9vdC5vbignYmVmb3JlQ2hhbmdlJywgdGhpcy5jaGFuZ2VDb3VudGVyKTtcbiAgICAgICAgdGhpcy5yb290Lm9uKCdicmVha3BvaW50JywgdGhpcy5hZGRDb3VudGVyKTtcbiAgICB9XG5cbiAgICBfcmVhZHkoKSB7XG4gICAgICAgIHRoaXMucm9vdC5zbGljayh0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIGFkZENvdW50ZXIoZXZlbnQsIHNsaWNrKSB7XG4gICAgICAgIGlmIChzbGljay5vcHRpb25zLmNvdW50ZXIgPT09IHRydWUgJiYgc2xpY2suc2xpZGVDb3VudCA+IHNsaWNrLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBsZXQgJGNvdW50ZXIgPSAkKCc8ZGl2IGNsYXNzPVwic2xpY2stY291bnRlciBzbGljay1jbG9uZWRcIj48ZGl2IGNsYXNzPVwic2xpY2stY291bnRlcl9faW5uZXJcIj4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJzbGljay1jb3VudGVyX19jdXJyZW50XCI+JyArIChzbGljay5jdXJyZW50U2xpZGUgKyAxKSArICc8L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuIHJvbGU9XCJzZXBhcmF0b3JcIiBjbGFzcz1cInNsaWNrLWNvdW50ZXJfX2RpdmlkZXJcIj48L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwic2xpY2stY291bnRlcl9fY291bnRcIj4nICsgKHNsaWNrLmdldERvdENvdW50KCkgKyAxKSArICc8L3NwYW4+PC9kaXY+PC9kaXY+Jyk7XG5cbiAgICAgICAgICAgICRjb3VudGVyLmFwcGVuZFRvKHNsaWNrLiRzbGlkZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlQ291bnRlcihldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSB7XG4gICAgICAgIHNsaWNrLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNvdW50ZXJfX2N1cnJlbnQnKS5odG1sKE1hdGguZmxvb3IobmV4dFNsaWRlIC8gc2xpY2sub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKyAxKTtcbiAgICB9XG59IiwiLyoqXG4gKiBHTE9CQUxTXG4gKi9cblxuKGZ1bmN0aW9uKHdpbmRvdykge1xuICAgIHdpbmRvdy5HID0ge307XG59KSh3aW5kb3cpO1xuXG5cbi8qKlxuICogTXVsdGkgYnJvd3NlciBzdXBwb3J0IGZvciBkb2N1bWVudCBzY3JvbGwgdG9wXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5HLmdldERvY3VtZW50U2Nyb2xsVG9wID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwO1xufTtcblxuXG4vKipcbiAqIE11bHRpIGJyb3dzZXIgc3VwcG9ydCBmb3IgZG9jdW1lbnQgc2Nyb2xsIGxlZnRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbkcuZ2V0RG9jdW1lbnRTY3JvbGxMZWZ0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgMDtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGltZSBpbiBtc1xuICogQGxpY2Vuc2UgaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZS9tYXN0ZXIvTElDRU5TRVxuICogQHR5cGUge2Z1bmN0aW9ufVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5sZXQgZ2V0VGltZSA9XG4gIERhdGUubm93IHx8XG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBhdCBtb3N0IG9uY2VcbiAqIGR1cmluZyBhIGdpdmVuIHdpbmRvdyBvZiB0aW1lLiBOb3JtYWxseSwgdGhlIHRocm90dGxlZCBmdW5jdGlvbiB3aWxsIHJ1blxuICogYXMgbXVjaCBhcyBpdCBjYW4sIHdpdGhvdXQgZXZlciBnb2luZyBtb3JlIHRoYW4gb25jZSBwZXIgYHdhaXRgIGR1cmF0aW9uO1xuICogYnV0IGlmIHlvdSdkIGxpa2UgdG8gZGlzYWJsZSB0aGUgZXhlY3V0aW9uIG9uIHRoZSBsZWFkaW5nIGVkZ2UsIHBhc3NcbiAqIGB7bGVhZGluZzogZmFsc2V9YC4gVG8gZGlzYWJsZSBleGVjdXRpb24gb24gdGhlIHRyYWlsaW5nIGVkZ2UsIGRpdHRvLlxuICogQGxpY2Vuc2UgaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZS9tYXN0ZXIvTElDRU5TRVxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY1xuICogQHBhcmFtIHtudW1iZXJ9IHdhaXRcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5HLnRocm90dGxlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICBsZXQgY29udGV4dCwgYXJncywgcmVzdWx0O1xuICBsZXQgdGltZW91dCA9IG51bGw7XG4gIGxldCBwcmV2aW91cyA9IDA7XG4gIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gIGxldCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBnZXRUaW1lKCk7XG4gICAgdGltZW91dCA9IG51bGw7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBsZXQgbm93ID0gZ2V0VGltZSgpO1xuICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBub3c7XG4gICAgbGV0IHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgaWYgKHJlbWFpbmluZyA8PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIHByZXZpb3VzID0gbm93O1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07IiwiLy8gaW1wb3J0IFwibWF0Y2htZWRpYS1wb2x5ZmlsbFwiO1xuLy8gaW1wb3J0IFwibWF0Y2htZWRpYS1wb2x5ZmlsbC9tYXRjaE1lZGlhLmFkZExpc3RlbmVyXCI7XG5cbi8vaW1wb3J0IG9iamVjdEZpdEltYWdlcyBmcm9tIFwib2JqZWN0LWZpdC1pbWFnZXNcIjsgLy8g0J/QvtC70LjRhNC40LtcbmltcG9ydCBcImxhenlzaXplc1wiO1xuXG4vL2ltcG9ydCB7TURDUmlwcGxlfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlJztcbi8vIGltcG9ydCB7TURDVGV4dEZpZWxkfSBmcm9tICdAbWF0ZXJpYWwvdGV4dGZpZWxkJztcblxuaW1wb3J0IExpZ2h0Ym94IGZyb20gXCIuL2NvbXBvbmVudHMvbGlnaHRib3hcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9zbGlkZXJcIjtcbmltcG9ydCBTY3JvbGxUb1RvcEJ0biBmcm9tIFwiLi9jb21wb25lbnRzL3Njcm9sbHRvdG9wLWJ0blwiO1xuaW1wb3J0IE1haW5NZW51IGZyb20gJy4vY29tcG9uZW50cy9tYWluLW1lbnUnO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9jb21wb25lbnRzL25hdi1iYXJcIjtcbmltcG9ydCB5bWFwcyBmcm9tICd5bWFwcyc7XG5cbmNsYXNzIEFwcGxpY2F0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRDb21tb24oKTtcbiAgICAgICAgLy90aGlzLmluaXRNYXRlcmlhbERlc2lnblN0dWZmKCk7XG4gICAgICAgIHRoaXMuaW5pdFNsaWRlcnMoKTtcbiAgICAgICAgLy90aGlzLmluaXRBamF4QmxvZ0xvYWQoKTtcbiAgICAgICAgdGhpcy5pbml0TW9iaWxlVmlld1BvcnRIZWlnaHQoKTtcbiAgICAgICAgdGhpcy5pbml0WWFuZGV4TWFwKCk7XG4gICAgfVxuXG5cbiAgICAvLyBpbml0TWF0ZXJpYWxEZXNpZ25TdHVmZigpIHtcbiAgICAvLyAgICAgLy8g0LXRhNGE0LXQutGCIHJpcHBsZSDQvdCwINC60L3QvtC/0LrQsNGFICAgICAgICBcbiAgICAvLyAgICAgW10ubWFwLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1kYy1idXR0b24nKSwgZnVuY3Rpb24oZWwpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiBuZXcgTURDUmlwcGxlKGVsKTtcbiAgICAvLyAgICAgfSk7XG5cbiAgICAvLyAgICAgLy8g0YLQtdC60YHRgtC+0LLRi9C1INC/0L7Qu9GPINGE0L7RgNC8XG4gICAgLy8gICAgIC8vIFtdLm1hcC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZGMtdGV4dC1maWVsZCcpLCBmdW5jdGlvbihlbCkge1xuICAgIC8vICAgICAvLyAgICAgcmV0dXJuIG5ldyBNRENUZXh0RmllbGQoZWwpO1xuICAgIC8vICAgICAvLyB9KTtcbiAgICAvLyB9XG5cblxuICAgIC8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4XG4gICAgaW5pdENvbW1vbigpIHtcblxuICAgICAgICBuZXcgTGlnaHRib3goKTtcblxuICAgICAgICBuZXcgU2Nyb2xsVG9Ub3BCdG4oKTtcblxuICAgICAgICBuZXcgTmF2QmFyKHsgb2Zmc2V0Rm9yRml4ZWQ6IDMwMCB9KTtcblxuICAgICAgICBuZXcgTWFpbk1lbnUoJ3VsLnNmLW1lbnUnKTtcblxuXG4gICAgICAgICQoJy5jaXR5JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLnBvcC11cCcpLmFkZENsYXNzKCdwb3AtdXAtLWFjdGl2ZScpO1xuICAgICAgICB9KVxuICAgICAgICAkKCcubW9kYWwnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcucG9wLXVwLXByb2ZpbGUnKS5hZGRDbGFzcygncG9wLXVwLS1hY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgJCgnLmNsb3NlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLnBvcC11cCcpLnJlbW92ZUNsYXNzKCdwb3AtdXAtLWFjdGl2ZScpO1xuICAgICAgICB9KVxuICAgICAgICAkKCcuY2xvc2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcucG9wLXVwLXByb2ZpbGUnKS5yZW1vdmVDbGFzcygncG9wLXVwLS1hY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gJCgnI3Bob25lJykubWFzaygnKzcgKDk5OSkgOTk5IDk5OTknKVxuICAgICAgICAkKCcubW9yZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJyNjYXJkX19vbmUnKS5jc3MoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTExMCUpJywgdHJhbnNpdGlvbjogJzFzJyB9KVxuICAgICAgICAgICAgJCgnI2NhcmRfX3R3bycpLmNzcyh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtMTAwJSknLCB0cmFuc2l0aW9uOiAnMXMnIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC8qINCd0LDQttCw0LvQuCDQvdCwINC60L3QvtC/0L7Rh9C60YMg0L7RgtC/0YDQsNCy0LrQuCDRhNC+0YDQvNGLINC+0LHRjNGA0LDRgtC90L7QuSDRgdCy0Y/Qt9C4Ki9cbiAgICAgICAgJCgnI3pheWF2a2EtYnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJCgnI3pheXZrYS1zdWJtaXQnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhdXRvbWF0aWMgZm9jdXMgZm9yIGlucHV0XG4gICAgICAgICQoJy5jb2RlJykub24oJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICBsZXQgbGVuID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgbGV0IGN1clRhYkluZGV4ID0gcGFyc2VJbnQoJCh0aGlzKS5hdHRyKCd0YWJpbmRleCcpKTtcbiAgICAgICAgICAgIGxldCBuZXh0VGFiSW5kZXggPSBjdXJUYWJJbmRleCArIDE7XG4gICAgICAgICAgICBsZXQgcHJldlRhYkluZGV4ID0gY3VyVGFiSW5kZXggLSAxO1xuICAgICAgICAgICAgaWYgKGxlbiA+PSAyKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS52YWwodmFsdWUuc3Vic3RyKDAsIDEpKTtcbiAgICAgICAgICAgICAgICAkKCdbdGFiaW5kZXg9JyArIG5leHRUYWJJbmRleCArICddJykuZm9jdXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGVuID09IDAgJiYgcHJldlRhYkluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgJCgnW3RhYmluZGV4PScgKyBwcmV2VGFiSW5kZXggKyAnXScpLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoKGhpc3RvcnkubGVuZ3RoID09IDApICYmICFkb2N1bWVudC5yZWZlcnJlcikge1xuICAgICAgICAgICAgJCgnLmpzLWdvLWJhY2snKS5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQv9GA0L7QutGA0YPRgtC40YLRjCDQstC90LjQtyDQv9C10YDQstGL0Lkg0Y3QutGA0LDQvVxuICAgICAgICAkKCcuanMtZ28tYmFjaycpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoKDEgPCBoaXN0b3J5Lmxlbmd0aCkgJiYgZG9jdW1lbnQucmVmZXJyZXIpIHtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LmJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9vYmplY3RGaXRJbWFnZXMgLSDQv9C+0LvQuNGE0LjQuyDQsNC60YLQuNCy0LDRhtC40Y9cbiAgICAgICAgLy8gaWYgKHR5cGVvZiBvYmplY3RGaXRJbWFnZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gICAgIG9iamVjdEZpdEltYWdlcygkKCcuaW1hZ2UtY292ZXIgaW1nJykpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8g0L/RgNC+0LrRgNGD0YLQuNGC0Ywg0LLQvdC40Lcg0L/QtdGA0LLRi9C5INGN0LrRgNCw0L1cbiAgICAgICAgJCgnLmpzLWdvLWRvd24nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IHkgPSAkKCcuaGVhZGVyLXdyYXAnKS5oZWlnaHQoKTtcbiAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgeyBzY3JvbGxUb3A6IHkgfSwgMTAwMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC8vINCf0LvQsNCy0L3QsNGPINC/0YDQvtC60YDRg9GC0LrQsCDQv9GA0Lgg0L/QtdGA0LXRhdC+0LTQtSDQv9C+INGP0LrQvtGA0Y5cbiAgICAgICAgLy8gY29uc3QgJHJvb3QgPSAkKCdodG1sLCBib2R5Jyk7XG4gICAgICAgIC8vICQoJyNtYWluLW1lbnUgYScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgdmFyIGhyZWYgPSAkLmF0dHIodGhpcywgJ2hyZWYnKTtcbiAgICAgICAgLy8gICAgIGhyZWYgPSBocmVmLnN1YnN0cmluZygxLCBocmVmLmxlbmd0aCk7XG4gICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKGhyZWYpO1xuICAgICAgICAvLyAgICAgJHJvb3QuYW5pbWF0ZSh7XG4gICAgICAgIC8vICAgICAgICAgc2Nyb2xsVG9wOiAkKGhyZWYpLm9mZnNldCgpLnRvcFxuICAgICAgICAvLyAgICAgfSwgMTUwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaHJlZjtcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyB9KTtcblxuICAgIH1cblxuXG4gICAgaW5pdFlhbmRleE1hcCgpIHtcblxuICAgICAgICB5bWFwcy5sb2FkKCdodHRwczovL2FwaS1tYXBzLnlhbmRleC5ydS8yLjEvP2xhbmc9cnVfUlUnKVxuICAgICAgICAgICAgLnRoZW4obWFwcyA9PiB7XG5cbiAgICAgICAgICAgICAgICAvLyDQodC+0LfQtNCw0L3QuNC1INC60LDRgNGC0YsuXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly90ZWNoLnlhbmRleC5ydS9tYXBzL2RvYy9qc2FwaS8yLjEvZGcvY29uY2VwdHMvbWFwLWRvY3BhZ2UvXG4gICAgICAgICAgICAgICAgY29uc3QgbXlNYXAgPSBuZXcgbWFwcy5NYXAoJ3lhbmRleC1tYXAnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogWzUxLjY2MDc4MSwgMzkuMjAwMjY5XSxcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMTMsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBteU1hcC5jb250cm9scyAvLyDQtNC+0LHQsNCy0LjQvCDQstGB0Y/QutC40YUg0LrQvdC+0L/QvtC6LCDQsiDRgdC60L7QsdC60LDRhSDQuNGFINC/0L7Qt9C40YbQuNC4INCyINCx0LvQvtC60LVcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC5hZGQoJ3pvb21Db250cm9sJywgeyBsZWZ0OiA1LCB0b3A6IDUgfSkgLy/QnNCw0YHRiNGC0LDQsVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLmFkZCgndHlwZVNlbGVjdG9yJykgLy/QodC/0LjRgdC+0Log0YLQuNC/0L7QsiDQutCw0YDRgtGLXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAuYWRkKCdtYXBUb29scycsIHsgbGVmdDogMzUsIHRvcDogNSB9KSAvLyDQodGC0LDQvdC00LDRgNGC0L3Ri9C5INC90LDQsdC+0YAg0LrQvdC+0L/QvtC6XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAuYWRkKCdzZWFyY2hDb250cm9sJyk7IC8vINCh0YLRgNC+0LrQsCDRgSDQv9C+0LjRgdC60L7QvFxuXG4gICAgICAgICAgICAgICAgLy8g0JTQvtCx0LDQstC70LXQvdC40LUg0LzQtdGC0LrQuFxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vdGVjaC55YW5kZXgucnUvbWFwcy9kb2MvanNhcGkvMi4xL3JlZi9yZWZlcmVuY2UvUGxhY2VtYXJrLWRvY3BhZ2UvXG5cblxuICAgICAgICAgICAgICAgIC8qINCh0L7Qt9C00LDQtdC8INC60LDRgdGC0L7QvNC90YvQtSDQvNC10YLQutC4ICovXG4gICAgICAgICAgICAgICAgY29uc3QgbXlQbGFjZW1hcmswID0gbmV3IG1hcHMuUGxhY2VtYXJrKFs1MS42NjA3ODEsIDM5LjIwMDI2OV0sIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0KXQuNC90YIg0L/QvtC60LDQt9GL0LLQsNC10YLRgdGPINC/0YDQuCDQvdCw0LLQtdC00LXQvdC40Lgg0LzRi9GI0LrQvtC5INC90LAg0LjQutC+0L3QutGDINC80LXRgtC60LguXG4gICAgICAgICAgICAgICAgICAgIGhpbnRDb250ZW50OiAn0KHQvtC00LXRgNC20LjQvNC+0LUg0LLRgdC/0LvRi9Cy0LDRjtGJ0LXQuSDQv9C+0LTRgdC60LDQt9C60LgnLFxuICAgICAgICAgICAgICAgICAgICAvLyDQkdCw0LvRg9C9INC+0YLQutGA0L7QtdGC0YHRjyDQv9GA0Lgg0LrQu9C40LrQtSDQv9C+INC80LXRgtC60LUuXG4gICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAnPGRpdiBjbGFzcz1cImJhbGxvblwiPtCh0L7QtNC10YDQttC40LzQvtC1INCx0LDQu9GD0L3QsDwvZGl2PicsIC8vINGB0LTQtdGB0Ywg0YHQvtC00LXRgNC20LjQvNC+0LUg0LHQsNC70YPQvdCwINCyINGE0L7RgNC80LDRgtC1IGh0bWwsINCy0YHQtSDRgdGC0LjQu9C4INCyIGNzc1xuXG4gICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcvaW1nL21hcmtlci5zdmcnLCAvLyDQutCw0YDRgtC40L3QutCwINC40LrQvtC90LrQuFxuICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbNDAsIDQwXSwgLy8g0YDQsNC30LzQtdGAINC40LrQvtC90LrQuFxuICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMzIsIC02NF0sIC8vINC/0L7Qt9C40YbQuNGPINC40LrQvtC90LrQuFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8g0YLQvtC20LUg0YHQsNC80L7QtSDQtNC70Y8g0LTRgNGD0LPQuNGFINC80LXRgtC+0LpcblxuXG4gICAgICAgICAgICAgICAgLy8g0J/QvtGB0LvQtSDRgtC+0LPQviDQutCw0Log0LzQtdGC0LrQsCDQsdGL0LvQsCDRgdC+0LfQtNCw0L3QsCwg0LTQvtCx0LDQstC70Y/QtdC8INC10ZEg0L3QsCDQutCw0YDRgtGDLlxuICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrMCk7XG5cblxuICAgICAgICAgICAgICAgIC8vINCk0LjQutGBINC60YDQuNCy0L7Qs9C+INCy0YvRgNCw0LLQvdC40LLQsNC90LjRjyDQutCw0YHRgtC+0LzQvdGL0YUg0LHQsNC70YPQvdC+0LJcbiAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmV2ZW50cy5hZGQoW1xuICAgICAgICAgICAgICAgICAgICAnYmFsbG9vbm9wZW4nXG4gICAgICAgICAgICAgICAgXSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdlb09iamVjdCA9IGUuZ2V0KCd0YXJnZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgbXlNYXAucGFuVG8oZ2VvT2JqZWN0Lmdlb21ldHJ5LmdldENvb3JkaW5hdGVzKCksIHsgZGVsYXk6IDAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LfQsNCz0YDRg9C30LjRgtGMINC60LDRgNGC0YMnLCBlcnJvcikpO1xuXG4gICAgfVxuXG5cblxuICAgIC8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINCy0YHQtdGFINGB0LvQsNC50LTQtdGA0L7QslxuICAgIGluaXRTbGlkZXJzKCkge1xuXG4gICAgICAgIC8vIEhvbWUgU2xpZGVyXG4gICAgICAgIGxldCAkaG9tZVNsaWRlciA9ICQoJy5ob21lLXNsaWRlcicpO1xuICAgICAgICBpZiAoJGhvbWVTbGlkZXIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBuZXcgU2xpZGVyKCRob21lU2xpZGVyLCB7XG4gICAgICAgICAgICAgICAgY291bnRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkb3RzQ2xhc3M6ICdteS1kb3RzJyxcbiAgICAgICAgICAgICAgICAvL2F1dG9wbGF5U3BlZWQ6IDIwMDAsXG5cbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdXG5cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYXJvdXNlbCBpbiBjb250ZW50XG4gICAgICAgIGxldCAkc3BlY2lhbCA9ICQoJy5zcGVjaWFsX19zbGlkZXInKTtcbiAgICAgICAgaWYgKCRzcGVjaWFsLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgbmV3IFNsaWRlcigkc3BlY2lhbCwge1xuICAgICAgICAgICAgICAgIGNvdW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTUwMCxcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic3BlY2lhbC1wcmV2XCI+PHNwYW4gY2xhc3M9XCJpY29uLWxlZnRcIj48L3NwYW4+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic3BlY2lhbC1uZXh0XCI+PHNwYW4gY2xhc3M9XCJpY29uLXJpZ2h0XCI+PC9zcGFuPjwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG5cbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDQwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5NzYsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDY3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0ICR0ZXJhcCA9ICQoJy5zbGlkZXItdGVyYXAnKTtcbiAgICAgICAgaWYgKCR0ZXJhcC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIG5ldyBTbGlkZXIoJHRlcmFwLCB7XG4gICAgICAgICAgICAgICAgY291bnRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJ0ZXJhcC1wcmV2XCI+PHNwYW4gY2xhc3M9XCJpY29uLWxlZnRcIj48L3NwYW4+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwidGVyYXAtbmV4dFwiPjxzcGFuIGNsYXNzPVwiaWNvbi1yaWdodFwiPjwvc3Bhbj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG5cbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGxldCAkc2VydmljZSA9ICQoJy5zZXJ2aWNlLXNsaWRlcicpO1xuICAgICAgICBpZiAoJHNlcnZpY2UubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBuZXcgU2xpZGVyKCRzZXJ2aWNlLCB7XG4gICAgICAgICAgICAgICAgY291bnRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzZXJ2aWNlLXByZXZcIj48c3BhbiBjbGFzcz1cImljb24tbGVmdFwiPjwvc3Bhbj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzZXJ2aWNlLW5leHRcIj48c3BhbiBjbGFzcz1cImljb24tcmlnaHRcIj48L3NwYW4+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NzYsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgJHJpZ2h0ID0gJCgnLnJpZ2h0LXNsaWRlcicpO1xuICAgICAgICBpZiAoJHJpZ2h0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgbmV3IFNsaWRlcigkcmlnaHQsIHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJyaWdodC1wcmV2XCI+PHNwYW4gY2xhc3M9XCJpY29uLWxlZnRcIj48L3NwYW4+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwicmlnaHQtbmV4dFwiPjxzcGFuIGNsYXNzPVwiaWNvbi1uZXh0XCI+PC9zcGFuPjwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlV2lkdGg6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGxldCAkY291cnNlID0gJCgnLmNvdXJzZS1zbGlkZXInKTtcbiAgICAgICAgaWYgKCRjb3Vyc2UubGVuZ3RoICE9PTApe1xuICAgICAgICAgICAgbmV3IFNsaWRlciAoJGNvdXJzZSwge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cImNvdXJzZS1wcmV2XCI+PHNwYW4gY2xhc3M9XCJpY29uLWxlZnRcIj48L3NwYW4+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwiY291cnNlLW5leHRcIj48c3BhbiBjbGFzcz1cImljb24tcmlnaHRcIj48L3NwYW4+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyDQutCw0YHRgtGL0LvRjNC90L7QtSDRgNC10YjQtdC90LjQtSAxMDB2aCDQtNC70Y8g0LzQvtCx0LjQu9GM0L3QuNC60L7QslxuICAgIGluaXRNb2JpbGVWaWV3UG9ydEhlaWdodCgpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS90aGUtdHJpY2stdG8tdmlld3BvcnQtdW5pdHMtb24tbW9iaWxlL1xuICAgICAgICAvLyBGaXJzdCB3ZSBnZXQgdGhlIHZpZXdwb3J0IGhlaWdodCBhbmQgd2UgbXVsdGlwbGUgaXQgYnkgMSUgdG8gZ2V0IGEgdmFsdWUgZm9yIGEgdmggdW5pdFxuICAgICAgICBsZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxO1xuICAgICAgICAvLyBUaGVuIHdlIHNldCB0aGUgdmFsdWUgaW4gdGhlIC0tdmggY3VzdG9tIHByb3BlcnR5IHRvIHRoZSByb290IG9mIHRoZSBkb2N1bWVudFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApO1xuICAgICAgICBsZXQgZG9jdW1lbnRfd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgLy8gV2UgbGlzdGVuIHRvIHRoZSByZXNpemUgZXZlbnQgKNCwINGA0LXRgdCw0LnQtyDQsiDQvNC+0LHQuNC70LrQsNGFINGB0YDQsNCx0LDRgtGL0LLQsNC10YIg0Lgg0L/RgNC4INGB0LrRgNC+0LvQtSwg0LrQvtCz0LTQsCDQuNGB0YfQtdC30LDQtdGCINGB0YLRgNC+0LrQsCDQstCy0L7QtNCwINCw0LTRgNC10YHQsCDQsiDQsdGA0LDRg9C30LXRgNC1KVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gV2UgZXhlY3V0ZSB0aGUgc2FtZSBzY3JpcHQgYXMgYmVmb3JlXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnRfd2lkdGggIT0gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudF93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuLy8g0LfQsNC/0YPRgdC6INC/0YDQuNC70L7QttC10L3QuNGPXG4kKCgpID0+IHtcbiAgICBuZXcgQXBwbGljYXRpb24oKTtcbn0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtodG1sX3N0YXJ0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua2h0bWxfc3RhcnRcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvbWFpbi5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImpRdWVyeSIsIkNvbXBvbmVudCIsImxlbmd0aCIsInJvb3QiLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwiX2RlZmF1bHRPcHRpb25zIiwiaXNqUXVlcnkiLCJfY2FjaGVOb2RlcyIsIl9iaW5kRXZlbnRzIiwiX3JlYWR5Iiwib2JqZWN0IiwiTGlnaHRib3giLCJpbml0aWFsaXplIiwiZGVmYXVsdHMiLCJsYW5nIiwidHJhbnNpdGlvbkVmZmVjdCIsImJhY2tGb2N1cyIsImJ1dHRvbnMiLCJpMThuIiwicnUiLCJDTE9TRSIsIk5FWFQiLCJQUkVWIiwiRVJST1IiLCJQTEFZX1NUQVJUIiwiUExBWV9TVE9QIiwiRlVMTF9TQ1JFRU4iLCJUSFVNQlMiLCJET1dOTE9BRCIsIlNIQVJFIiwiWk9PTSIsIm5vZGVzIiwibGluayIsIiQiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkbGluayIsImN1cnJlbnRUYXJnZXQiLCJmYW5jeWJveCIsIm9wZW4iLCJzcmMiLCJkYXRhIiwidHlwZSIsIm9wdHMiLCJ0b3VjaCIsImF1dG9Gb2N1cyIsImNsb3NlRXhpc3RpbmciLCJhbmltYXRpb25FZmZlY3QiLCJiZWZvcmVMb2FkIiwiY3VycmVudCIsIiRzbGlkZSIsImFkZENsYXNzIiwiTmF2QmFyIiwiTWVudSIsImVsIiwiZG9jdW1lbnRTY3JvbGxUb3AiLCJpbml0IiwiX2luaXRTdXBlcmZpc2giLCJfaW5pdE1vYmlsZU1lbnUiLCJjbGljayIsImUiLCJjbG9zZU1lbnUiLCJjYWxsIiwiZW5hYmxlVXBkYXRlIiwiaGFzQ2xhc3MiLCJkaXNhYmxlVXBkYXRlIiwib3Blbk1lbnUiLCJzdXBlcmZpc2giLCJhcHBlbmQiLCJodG1sIiwicGFyZW50Iiwic2libGluZ3MiLCJzbGlkZVRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiaXMiLCJoaWRlIiwic2hvdyIsIkciLCJnZXREb2N1bWVudFNjcm9sbFRvcCIsImNzcyIsInJlbW92ZUNsYXNzIiwiYXR0ciIsInNjcm9sbFRvcCIsIm9sZFNjcm9sbFRvcCIsInNjcm9sbFRvcERpcmVjdGlvbiIsIm9mZnNldEZvckZpeGVkIiwiYWxsb3dVcGRhdGUiLCJfdXBkYXRlTmF2QmFyIiwiX3NldFNlcmFjaEJveCIsIl9oYW5kbGVTY3JvbGxUaHJvdHRsZWQiLCJ0aHJvdHRsZSIsIl9oYW5kbGVTY3JvbGwiLCJiaW5kIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVXaW5kb3dSZXNpemVUaHJvdHRsZWQiLCJfaGFuZGxlV2luZG93UmVzaXplIiwiaXNOYXZCYXJGaXhlZCIsIlNjcm9sbFRvVG9wQnRuIiwic2V0VG9Ub3BCdXR0b24iLCIkc2Nyb2xsVG9wQnRuIiwiYXBwZW5kVG8iLCJhbmltYXRlIiwic2Nyb2xsIiwiU2xpZGVyIiwicm93cyIsImNvdW50ZXIiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJhZGRDb3VudGVyIiwiY2hhbmdlQ291bnRlciIsInNsaWNrIiwic2xpZGVDb3VudCIsInNsaWRlc1RvU2hvdyIsIiRjb3VudGVyIiwiY3VycmVudFNsaWRlIiwiZ2V0RG90Q291bnQiLCIkc2xpZGVyIiwibmV4dFNsaWRlIiwiZmluZCIsIk1hdGgiLCJmbG9vciIsInNsaWRlc1RvU2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImJvZHkiLCJnZXREb2N1bWVudFNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsInNjcm9sbExlZnQiLCJnZXRUaW1lIiwiRGF0ZSIsIm5vdyIsImZ1bmMiLCJ3YWl0IiwiY29udGV4dCIsImFyZ3MiLCJyZXN1bHQiLCJ0aW1lb3V0IiwicHJldmlvdXMiLCJsYXRlciIsImxlYWRpbmciLCJhcHBseSIsInJlbWFpbmluZyIsImFyZ3VtZW50cyIsImNsZWFyVGltZW91dCIsInRyYWlsaW5nIiwic2V0VGltZW91dCIsIk1haW5NZW51IiwieW1hcHMiLCJBcHBsaWNhdGlvbiIsImluaXRDb21tb24iLCJpbml0U2xpZGVycyIsImluaXRNb2JpbGVWaWV3UG9ydEhlaWdodCIsImluaXRZYW5kZXhNYXAiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwidHJpZ2dlciIsInZhbHVlIiwidmFsIiwibGVuIiwiY3VyVGFiSW5kZXgiLCJwYXJzZUludCIsIm5leHRUYWJJbmRleCIsInByZXZUYWJJbmRleCIsInN1YnN0ciIsImZvY3VzIiwiaGlzdG9yeSIsInJlZmVycmVyIiwiYmFjayIsInkiLCJoZWlnaHQiLCJsb2FkIiwidGhlbiIsIm1hcHMiLCJteU1hcCIsIk1hcCIsImNlbnRlciIsInpvb20iLCJteVBsYWNlbWFyazAiLCJQbGFjZW1hcmsiLCJoaW50Q29udGVudCIsImJhbGxvb25Db250ZW50IiwiaWNvbkltYWdlSHJlZiIsImljb25JbWFnZVNpemUiLCJpY29uSW1hZ2VPZmZzZXQiLCJnZW9PYmplY3RzIiwiYWRkIiwiZXZlbnRzIiwiZ2VvT2JqZWN0IiwiZ2V0IiwicGFuVG8iLCJnZW9tZXRyeSIsImdldENvb3JkaW5hdGVzIiwiZGVsYXkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCIkaG9tZVNsaWRlciIsImluZmluaXRlIiwiYWRhcHRpdmVIZWlnaHQiLCJmYWRlIiwiYXJyb3dzIiwiZG90cyIsImF1dG9wbGF5IiwiZG90c0NsYXNzIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIiRzcGVjaWFsIiwiYXV0b3BsYXlTcGVlZCIsIiR0ZXJhcCIsInZhcmlhYmxlV2lkdGgiLCIkc2VydmljZSIsIiRyaWdodCIsInZlcnRpY2FsIiwidmVydGljYWxTd2lwaW5nIiwiYWRhcHRpdmVXaWR0aCIsIiRjb3Vyc2UiLCJ2aCIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImRvY3VtZW50X3dpZHRoIiwiaW5uZXJXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=