function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<noscript>\n    <h2 style=\"color: #ff0000\">Seems your browser doesn't support Javascript! Websocket relies on Javascript being\n  enabled. Please enable\n  Javascript and reload this page!</h2>\n</noscript>\n\n<app-sidebar [showNow] = \"loggedIn\" (changeChannel)=\"changeChannelClicked($event)\"></app-sidebar>\n\n<app-chat-page [showNow] = 'loggedIn' [changeChannel] = 'changedChannel' [currentUser] = 'user'></app-chat-page>\n\n<app-login-page (loginSuccess)=\"childEventClicked($event)\" ></app-login-page>\n\n\n\n\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n\n\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-page/chat-page.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-page/chat-page.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatPageChatPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div #chatPage id=\"chat-page\" *ngIf=\"show\">\n    <div class=\"chat-container\">\n        <div class=\"chat-header\">\n            <h2>Prime 5 Chatter</h2>\n        </div>\n        <ul #messageArea id=\"messageArea\">\n\n        </ul>\n        <form #messageForm id=\"messageForm\" name=\"messageForm\" nameForm=\"messageForm\">\n            <div class=\"form-group\">\n                <div class=\"input-group clearfix\">\n                    <input #message type=\"text\"  id=\"message\" placeholder=\"Type a message...\"\n                        autocomplete=\"off\" class=\"form-control\" />\n                    <button (click)=\"sendMessage()\" class=\"primary\">Send</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginPageLoginPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf = !isShow>\n    <div class=\"login-page-container\">\n        <h1 class=\"title\">Login</h1>\n        <form id=\"loginForm\" name=\"loginForm\">\n            <div class=\"form-group\">\n                <input type=\"text\" #name placeholder=\"Username\"\n                       autocomplete=\"off\" class=\"form-control\" />\n                <input type=\"password\" #password placeholder=\"Password\"\n                       autocomplete=\"off\" class=\"form-control\" />\n            </div>\n            <div class=\"form-group\">\n                <button (click)=\"tryLogin()\" class=\"accent username-submit\">\n                    StartChatting\n                </button>\n                <button type = \"button\" onclick=\"goToAccountCreation()\" class=\"accent username-submit\">\n                    Create new account\n                </button>\n            </div>\n        </form>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div #sidebar *ngIf = show>\n    <div id=\"sidenav\" class=\"sidenav\">\n        <h2>Public Channels</h2>\n        <ul #channelList>\n            <button *ngFor = \"let channel of channels\" (click) = \"goToChannel(channel.channel_name)\">{{channel.channel_name}}</button>>\n        </ul>\n        <h2>Private Channels</h2>\n        <ul id=\"privatechannellist\">\n\n        </ul>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n    box-sizing: border-box;\n}\n\nhtml,body {\n    height: 100%;\n    overflow: hidden;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-weight: 400;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 1rem;\n    line-height: 1.58;\n    color: #333;\n    /*  background-color: #f4f4f4; */\n\n    height: 100vh;\n\n    width: 100vw;\n\n    overflow: hidden;\n\n\n\n    /* Center and scale the image nicely */\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\nbody:before {\n    height: 50%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: \"assets/img/67937.jpg\";\n    content: \"\";\n    z-index: 0;\n}\n\n.clearfix:after {\n    display: block;\n    content: \"\";\n    clear: both;\n}\n\n.hidden {\n    display: none;\n}\n\n.sidenav{\n    height: 100%; /* Full-height: remove this if you want \"auto\" height */\n    width: 220px; /* Set the width of the sidebar */\n    position: fixed; /* Fixed Sidebar (stay in place on scroll) */\n    z-index: 1; /* Stay on top */\n    top: 0; /* Stay at the top */\n    left: 0;\n    background-color: #111; /* Black */\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 20px;\n}\n\n.sidenav a {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 18px;\n    color: #818181;\n    display: block;\n}\n\n.sidenav a:hover {\n    color: #f1f1f1;\n}\n\n.form-control {\n    width: 100%;\n    min-height: 38px;\n    font-size: 15px;\n    border: 1px solid #c8c8c8;\n}\n\n.form-group {\n    margin-bottom: 15px;\n}\n\ninput {\n    padding-left: 10px;\n    outline: none;\n}\n\nh1, h2, h3, h4, h5, h6 {\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\nh1 {\n    font-size: 1.7em;\n}\n\na {\n    color: #128ff2;\n}\n\nbutton {\n    box-shadow: none;\n    border: 1px solid transparent;\n    font-size: 14px;\n    outline: none;\n    line-height: 100%;\n    white-space: nowrap;\n    vertical-align: middle;\n    padding: 0.6rem 1rem;\n    border-radius: 2px;\n    -webkit-transition: all 0.2s ease-in-out;\n    transition: all 0.2s ease-in-out;\n    cursor: pointer;\n    min-height: 38px;\n}\n\nbutton.default {\n    background-color: #e8e8e8;\n    color: #333;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);\n}\n\nbutton.primary {\n    background-color: #25be38;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);\n    color: #fff;\n}\n\nbutton.accent {\n    background-color: #1778dd;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);\n    color: #fff;\n}\n\n#username-page {\n    text-align: center;\n}\n\n#create-account-page {\n    text-align: center;\n}\n\n.username-page-container {\n    background: #fff;\n    box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);\n    border-radius: 2px;\n    width: 100%;\n    max-width: 500px;\n    display: inline-block;\n    margin-top: 42px;\n    vertical-align: middle;\n    position: relative;\n    padding: 35px 55px 35px;\n    min-height: 250px;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    margin-top: -160px;\n}\n\n.username-page-container .username-submit {\n    margin-top: 10px;\n}\n\n#chat-page {\n    position: relative;\n    height: 100%;\n}\n\n.chat-container {\n    max-width: 700px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: #fff;\n    box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);\n    margin-top: 30px;\n    height: calc(100% - 60px);\n    max-height: 600px;\n    position: relative;\n}\n\n#chat-page ul {\n    list-style-type: none;\n    background-color: #FFF;\n    margin: 0;\n    overflow: auto;\n    overflow-y: scroll;\n    padding: 0 20px 0px 20px;\n    height: calc(100% - 150px);\n}\n\n#chat-page #messageForm {\n    padding: 20px;\n}\n\n#chat-page ul li {\n    line-height: 1.5rem;\n    padding: 10px 20px;\n    margin: 0;\n    border-bottom: 1px solid #f4f4f4;\n}\n\n#chat-page ul li p {\n    margin: 0;\n}\n\n#chat-page .event-message {\n    width: 100%;\n    text-align: center;\n    clear: both;\n}\n\n#chat-page .event-message p {\n    color: #777;\n    font-size: 14px;\n    word-wrap: break-word;\n}\n\n#chat-page .chat-message {\n    padding-left: 68px;\n    position: relative;\n}\n\n#chat-page .chat-message i {\n    position: absolute;\n    width: 42px;\n    height: 42px;\n    overflow: hidden;\n    left: 10px;\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 18px;\n    line-height: 42px;\n    color: #fff;\n    text-align: center;\n    border-radius: 50%;\n    font-style: normal;\n    text-transform: uppercase;\n}\n\n#chat-page .chat-message span {\n    color: #333;\n    font-weight: 600;\n}\n\n#chat-page .chat-message time {\n    color: #777;\n    margin-left: 15px;\n    font-size: 14px;\n}\n\n#chat-page .chat-message p {\n    color: #43464b;\n}\n\n#messageForm .input-group input {\n    float: left;\n    width: calc(100% - 85px);\n}\n\n#messageForm .input-group button {\n    float: left;\n    width: 80px;\n    height: 38px;\n    margin-left: 5px;\n}\n\n.chat-header {\n    text-align: center;\n    padding: 15px;\n    border-bottom: 1px solid #ececec;\n}\n\n.chat-header h2 {\n    margin: 0;\n    font-weight: 500;\n}\n\n.connecting {\n    padding-top: 5px;\n    text-align: center;\n    color: #777;\n    position: absolute;\n    top: 65px;\n    width: 100%;\n}\n\n@media screen and (max-width: 730px) {\n\n    .chat-container {\n        margin-left: 10px;\n        margin-right: 10px;\n        margin-top: 10px;\n    }\n}\n\n@media screen and (max-width: 480px) {\n    .chat-container {\n        height: calc(100% - 30px);\n    }\n\n    .username-page-container {\n        width: auto;\n        margin-left: 15px;\n        margin-right: 15px;\n        padding: 25px;\n    }\n\n    #chat-page ul {\n        height: calc(100% - 120px);\n    }\n\n    #messageForm .input-group button {\n        width: 65px;\n    }\n\n    #messageForm .input-group input {\n        width: calc(100% - 70px);\n    }\n\n    .chat-header {\n        padding: 10px;\n    }\n\n    .connecting {\n        top: 60px;\n    }\n\n    .chat-header h2 {\n        font-size: 1.1em;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsMkRBQTJEO0lBQzNELGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdDQUFnQzs7SUFFaEMsYUFBYTs7SUFFYixZQUFZOztJQUVaLGdCQUFnQjs7OztJQUloQixzQ0FBc0M7SUFDdEMsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWSxFQUFFLHVEQUF1RDtJQUNyRSxZQUFZLEVBQUUsaUNBQWlDO0lBQy9DLGVBQWUsRUFBRSw0Q0FBNEM7SUFDN0QsVUFBVSxFQUFFLGdCQUFnQjtJQUM1QixNQUFNLEVBQUUsb0JBQW9CO0lBQzVCLE9BQU87SUFDUCxzQkFBc0IsRUFBRSxVQUFVO0lBQ2xDLGtCQUFrQixFQUFFLDhCQUE4QjtJQUNsRCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsd0NBQWdDO0lBQWhDLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMkNBQTJDO0lBQzNDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwyQ0FBMkM7SUFDM0MsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCxRQUFRO0lBQ1IsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLDBDQUEwQztJQUMxQyxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBR0E7O0lBRUk7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgLyogIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7ICovXG5cbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgd2lkdGg6IDEwMHZ3O1xuXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuXG5cbiAgICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5ib2R5OmJlZm9yZSB7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6IFwiYXNzZXRzL2ltZy82NzkzNy5qcGdcIjtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi5jbGVhcmZpeDphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNpZGVuYXZ7XG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsLWhlaWdodDogcmVtb3ZlIHRoaXMgaWYgeW91IHdhbnQgXCJhdXRvXCIgaGVpZ2h0ICovXG4gICAgd2lkdGg6IDIyMHB4OyAvKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSBzaWRlYmFyICovXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBGaXhlZCBTaWRlYmFyIChzdGF5IGluIHBsYWNlIG9uIHNjcm9sbCkgKi9cbiAgICB6LWluZGV4OiAxOyAvKiBTdGF5IG9uIHRvcCAqL1xuICAgIHRvcDogMDsgLyogU3RheSBhdCB0aGUgdG9wICovXG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExOyAvKiBCbGFjayAqL1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uc2lkZW5hdiBhIHtcbiAgICBwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICM4MTgxODE7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zaWRlbmF2IGE6aG92ZXIge1xuICAgIGNvbG9yOiAjZjFmMWYxO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAzOHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuaW5wdXQge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xufVxuXG5hIHtcbiAgICBjb2xvcjogIzEyOGZmMjtcbn1cblxuYnV0dG9uIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiAwLjZyZW0gMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1pbi1oZWlnaHQ6IDM4cHg7XG59XG5cbmJ1dHRvbi5kZWZhdWx0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbmJ1dHRvbi5wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjViZTM4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbmJ1dHRvbi5hY2NlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzc4ZGQ7XG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuI3VzZXJuYW1lLXBhZ2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NyZWF0ZS1hY2NvdW50LXBhZ2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzZXJuYW1lLXBhZ2UtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDExcHggcmdiYSgwLCAwLCAwLCAwLjI3KTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogNDJweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAzNXB4IDU1cHggMzVweDtcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiAtMTYwcHg7XG59XG5cbi51c2VybmFtZS1wYWdlLWNvbnRhaW5lciAudXNlcm5hbWUtc3VibWl0IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5cbiNjaGF0LXBhZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jaGF0LWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4yNyk7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2NoYXQtcGFnZSB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBwYWRkaW5nOiAwIDIwcHggMHB4IDIwcHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNTBweCk7XG59XG5cbiNjaGF0LXBhZ2UgI21lc3NhZ2VGb3JtIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4jY2hhdC1wYWdlIHVsIGxpIHtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNGY0ZjQ7XG59XG5cbiNjaGF0LXBhZ2UgdWwgbGkgcCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jY2hhdC1wYWdlIC5ldmVudC1tZXNzYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbiNjaGF0LXBhZ2UgLmV2ZW50LW1lc3NhZ2UgcCB7XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuI2NoYXQtcGFnZSAuY2hhdC1tZXNzYWdlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDY4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jY2hhdC1wYWdlIC5jaGF0LW1lc3NhZ2UgaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA0MnB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNjaGF0LXBhZ2UgLmNoYXQtbWVzc2FnZSBzcGFuIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4jY2hhdC1wYWdlIC5jaGF0LW1lc3NhZ2UgdGltZSB7XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4jY2hhdC1wYWdlIC5jaGF0LW1lc3NhZ2UgcCB7XG4gICAgY29sb3I6ICM0MzQ2NGI7XG59XG5cbiNtZXNzYWdlRm9ybSAuaW5wdXQtZ3JvdXAgaW5wdXQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4NXB4KTtcbn1cblxuI21lc3NhZ2VGb3JtIC5pbnB1dC1ncm91cCBidXR0b24ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uY2hhdC1oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNlY2VjO1xufVxuXG4uY2hhdC1oZWFkZXIgaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY29ubmVjdGluZyB7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjVweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzBweCkge1xuXG4gICAgLmNoYXQtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLmNoYXQtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICB9XG5cbiAgICAudXNlcm5hbWUtcGFnZS1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICB9XG5cbiAgICAjY2hhdC1wYWdlIHVsIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMjBweCk7XG4gICAgfVxuXG4gICAgI21lc3NhZ2VGb3JtIC5pbnB1dC1ncm91cCBidXR0b24ge1xuICAgICAgICB3aWR0aDogNjVweDtcbiAgICB9XG5cbiAgICAjbWVzc2FnZUZvcm0gLmlucHV0LWdyb3VwIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICAgIH1cblxuICAgIC5jaGF0LWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4gICAgLmNvbm5lY3Rpbmcge1xuICAgICAgICB0b3A6IDYwcHg7XG4gICAgfVxuXG4gICAgLmNoYXQtaGVhZGVyIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.loggedIn = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "childEventClicked",
        value: function childEventClicked(name) {
          console.log("event moving through parent.");
          console.log(event);
          console.log("LoggedIn: " + this.loggedIn);
          this.loggedIn = true;
          this.user = name;
          console.log("LoggedIn: " + this.loggedIn);
        }
      }, {
        key: "changeChannelClicked",
        value: function changeChannelClicked(channelName) {
          this.changedChannel = channelName;
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./chat-page/chat-page.component */
    "./src/app/chat-page/chat-page.component.ts");
    /* harmony import */


    var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login-page/login-page.component */
    "./src/app/login-page/login-page.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _chat_page_chat_page_component__WEBPACK_IMPORTED_MODULE_7__["ChatPageComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/chat-page/chat-page.component.css":
  /*!***************************************************!*\
    !*** ./src/app/chat-page/chat-page.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatPageChatPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtcGFnZS9jaGF0LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/chat-page/chat-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/chat-page/chat-page.component.ts ***!
    \**************************************************/

  /*! exports provided: ChatPageComponent */

  /***/
  function srcAppChatPageChatPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPageComponent", function () {
      return ChatPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _web_socket_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../web-socket-service.service */
    "./src/app/web-socket-service.service.ts");

    var ChatPageComponent =
    /*#__PURE__*/
    function () {
      function ChatPageComponent(webSocketService) {
        _classCallCheck(this, ChatPageComponent);

        this.webSocketService = webSocketService;
        this.colors = ['#2196F3', '#32c787', '#00BCD4', '#ff5652', '#ffc107', '#ff85af', '#FF9800', '#39bbb0'];
      }

      _createClass(ChatPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("----" + this.showNow + "----");
          console.log("This is: " + this);
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var messageContent = this.messageInput.nativeElement.value.trim();

          if (messageContent && this.stompClient) {
            var chatMessage = {
              sender: this.currentUser,
              content: this.messageInput.nativeElement.value,
              type: 'CHAT',
              channel_name: this.currentChannel
            };
            console.log("Sending message");
            this.stompClient.send("/app/chat.send", {}, JSON.stringify(chatMessage));
            this.messageInput.nativeElement.value = '';
          }
        }
      }, {
        key: "connect",
        value: function connect(stompClient) {
          var _this = this;

          stompClient.connect({}, function () {
            _this.stompClient.subscribe("/topic/public", function (payload) {
              _this.onMessageReceived(payload);
            });

            _this.stompClient.subscribe("/format/getMessages", function (payload) {
              _this.getChannelMessages(payload);
            });
          }, function (error) {});
        }
      }, {
        key: "onMessageReceived",
        value: function onMessageReceived(payload) {
          console.log("onMessageReceived has been called");
          var message = JSON.parse(payload.body);
          var messageElement = document.createElement('li');

          if (message.type === 'JOIN') {
            messageElement.classList.add('event-message');
            message.content = message.sender + ' joined!';
          } else if (message.type === 'LEAVE') {
            messageElement.classList.add('event-message');
            message.content = message.sender + ' left!';
          } else {
            messageElement.classList.add('chat-message');
            var avatarElement = document.createElement('i');
            var avatarText = document.createTextNode(message.sender[0]);
            avatarElement.appendChild(avatarText);
            messageElement.appendChild(avatarElement);
            var usernameElement = document.createElement('span');
            var usernameText = document.createTextNode(message.sender);
            usernameElement.appendChild(usernameText);
            messageElement.appendChild(usernameElement);
            var timestamp = document.createElement('time');
            timestamp.innerText = message.timestamp;
            messageElement.appendChild(timestamp);
          }

          var textElement = document.createElement('p');
          var messageText = document.createTextNode(message.content);
          textElement.appendChild(messageText);
          messageElement.appendChild(textElement);
          this.messageArea.nativeElement.appendChild(messageElement);
          this.messageArea.nativeElement.scrollTop = this.messageArea.nativeElement.scrollHeight;
        }
      }, {
        key: "getChannelMessages",
        value: function getChannelMessages(payload) {
          while (this.messageArea.nativeElement.firstChild) {
            this.messageArea.nativeElement.removeChild(this.messageArea.nativeElement.firstChild);
          }

          var channelMessages = JSON.parse(payload.body);
          console.log(channelMessages.length);

          for (var i = 0; i < channelMessages.length; i++) {
            var currentMessage = channelMessages[i];
            this.retrievingMessages(currentMessage);
          }
        }
      }, {
        key: "retrievingMessages",
        value: function retrievingMessages(message) {
          console.log("retrievingMessages has been called");
          var messageElement = document.createElement('li');
          messageElement.classList.add('chat-message');
          var avatarElement = document.createElement('i');
          var avatarText = document.createTextNode(message.sender[0]);
          avatarElement.appendChild(avatarText);
          avatarElement.style['background-color'] = this.getAvatarColor(message.sender);
          messageElement.appendChild(avatarElement);
          var usernameElement = document.createElement('span');
          var usernameText = document.createTextNode(message.sender);
          usernameElement.appendChild(usernameText);
          messageElement.appendChild(usernameElement);
          var timestamp = document.createElement('time');
          timestamp.innerText = message.timestamp;
          messageElement.appendChild(timestamp);
          var textElement = document.createElement('p');
          var messageText = document.createTextNode(message.content);
          textElement.appendChild(messageText);
          messageElement.appendChild(textElement);
          this.messageArea.nativeElement.appendChild(messageElement);
          this.messageArea.nativeElement.scrollTop = this.messageArea.nativeElement.scrollHeight;
        }
      }, {
        key: "getAvatarColor",
        value: function getAvatarColor(messageSender) {
          var hash = 0;

          for (var i = 0; i < messageSender.length; i++) {
            hash = 31 * hash + messageSender.charCodeAt(i);
          }

          var index = Math.abs(hash % this.colors.length);
          return this.colors[index];
        }
      }, {
        key: "disconnect",
        value: function disconnect(stompClient) {
          stompClient.disconnect();
        }
      }, {
        key: "showNow",
        set: function set(bool) {
          this.show = bool;
          console.log("////" + this.show + "////");
          console.log("This is: " + this);
          console.log("//////////////////");
          this.stompClient = this.webSocketService.getClient();

          if (this.stompClient.status != 'CONNECTED') {
            this.connect(this.stompClient);
          }
        }
      }, {
        key: "changeChannel",
        set: function set(name) {
          if (name != undefined) {
            this.stompClient.send("/app/chat.getMessages", {}, JSON.stringify(name));
            this.currentChannel = name;
          }
        }
      }]);

      return ChatPageComponent;
    }();

    ChatPageComponent.ctorParameters = function () {
      return [{
        type: _web_socket_service_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketServiceService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatPageComponent.prototype, "currentUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatPageComponent.prototype, "showNow", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatPageComponent.prototype, "changeChannel", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chatPage', null)], ChatPageComponent.prototype, "chatPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageForm', null)], ChatPageComponent.prototype, "messageForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('message', null)], ChatPageComponent.prototype, "messageInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageArea', null)], ChatPageComponent.prototype, "messageArea", void 0);
    ChatPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-page/chat-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-page.component.css */
      "./src/app/chat-page/chat-page.component.css")).default]
    })], ChatPageComponent);
    /***/
  },

  /***/
  "./src/app/login-page/login-page.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/login-page/login-page.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginPageLoginPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#login-page {\n    text-align: center;\n}\n.login-page-container {\n    background: #fff;\n    box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);\n    border-radius: 2px;\n    width: 100%;\n    max-width: 500px;\n    display: inline-block;\n    margin-top: 42px;\n    vertical-align: middle;\n    position: relative;\n    padding: 35px 55px 35px;\n    min-height: 250px;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    margin-top: -160px;\n}\n.login-page-container .username-submit {\n    margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0lBQ1AsUUFBUTtJQUNSLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luLXBhZ2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbi1wYWdlLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4yNyk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDQycHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMzVweCA1NXB4IDM1cHg7XG4gICAgbWluLWhlaWdodDogMjUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogLTE2MHB4O1xufVxuXG4ubG9naW4tcGFnZS1jb250YWluZXIgLnVzZXJuYW1lLXN1Ym1pdCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login-page/login-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/login-page/login-page.component.ts ***!
    \****************************************************/

  /*! exports provided: LoginPageComponent */

  /***/
  function srcAppLoginPageLoginPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
      return LoginPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _web_socket_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../web-socket-service.service */
    "./src/app/web-socket-service.service.ts");

    var LoginPageComponent =
    /*#__PURE__*/
    function () {
      function LoginPageComponent(webSocketService) {
        _classCallCheck(this, LoginPageComponent);

        this.webSocketService = webSocketService;
        this.isShow = false;
        this.isCreateAccountShow = true;
        this.isLoginShow = false;
        this.loginSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(LoginPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.stompClient = this.webSocketService.getClient();

          if (this.stompClient.status != 'CONNECTED') {
            this.connect(this.stompClient);
          }
        }
      }, {
        key: "connect",
        value: function connect(stompClient) {
          var _this = this;

          stompClient.connect({}, function () {
            stompClient.subscribe("/connect/login", function (frame) {
              _this.checkUserInfo(frame);
            });
          }, function (error) {});
        }
      }, {
        key: "tryLogin",
        value: function tryLogin() {
          var username = this.usernameinput.nativeElement.value.trim();
          var password = this.passwordinput.nativeElement.value;
          this.stompClient.send('/app/chat.login', {}, JSON.stringify({
            USER_NAME: username,
            USER_PWD: password
          }));
        }
      }, {
        key: "checkUserInfo",
        value: function checkUserInfo(payload) {
          var userInfo = JSON.parse(payload.body);

          if (userInfo.user_NAME == null || userInfo.user_PWD == null) {
            console.log("incorrect login information");
          } else {
            console.log("logging in");
            console.log("Welcome, " + userInfo.user_NAME);
            this.isShow = true;
            this.loginSuccess.emit(userInfo.user_NAME);
            this.disconnect(this.stompClient);
          }
        }
      }, {
        key: "disconnect",
        value: function disconnect(stompClient) {
          stompClient.disconnect();
        }
      }]);

      return LoginPageComponent;
    }();

    LoginPageComponent.ctorParameters = function () {
      return [{
        type: _web_socket_service_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketServiceService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LoginPageComponent.prototype, "loginSuccess", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginPage', null)], LoginPageComponent.prototype, "loginPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginForm', null)], LoginPageComponent.prototype, "usernameForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('name', null)], LoginPageComponent.prototype, "usernameinput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('password', null)], LoginPageComponent.prototype, "passwordinput", void 0);
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-page.component.css */
      "./src/app/login-page/login-page.component.css")).default]
    })], LoginPageComponent);
    /***/
  },

  /***/
  "./src/app/sidebar/sidebar.component.css":
  /*!***********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSidebarSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav{\n    height: 100%; /* Full-height: remove this if you want \"auto\" height */\n    width: 220px; /* Set the width of the sidebar */\n    position: fixed; /* Fixed Sidebar (stay in place on scroll) */\n    z-index: 1; /* Stay on top */\n    top: 0; /* Stay at the top */\n    left: 0;\n    background-color: #111; /* Black */\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 20px;\n}\n\n.sidenav a {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 18px;\n    color: #818181;\n    display: block;\n}\n\n.sidenav a:hover {\n    color: #f1f1f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZLEVBQUUsdURBQXVEO0lBQ3JFLFlBQVksRUFBRSxpQ0FBaUM7SUFDL0MsZUFBZSxFQUFFLDRDQUE0QztJQUM3RCxVQUFVLEVBQUUsZ0JBQWdCO0lBQzVCLE1BQU0sRUFBRSxvQkFBb0I7SUFDNUIsT0FBTztJQUNQLHNCQUFzQixFQUFFLFVBQVU7SUFDbEMsa0JBQWtCLEVBQUUsOEJBQThCO0lBQ2xELGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXZ7XG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsLWhlaWdodDogcmVtb3ZlIHRoaXMgaWYgeW91IHdhbnQgXCJhdXRvXCIgaGVpZ2h0ICovXG4gICAgd2lkdGg6IDIyMHB4OyAvKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSBzaWRlYmFyICovXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBGaXhlZCBTaWRlYmFyIChzdGF5IGluIHBsYWNlIG9uIHNjcm9sbCkgKi9cbiAgICB6LWluZGV4OiAxOyAvKiBTdGF5IG9uIHRvcCAqL1xuICAgIHRvcDogMDsgLyogU3RheSBhdCB0aGUgdG9wICovXG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExOyAvKiBCbGFjayAqL1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uc2lkZW5hdiBhIHtcbiAgICBwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICM4MTgxODE7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zaWRlbmF2IGE6aG92ZXIge1xuICAgIGNvbG9yOiAjZjFmMWYxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/sidebar/sidebar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ts ***!
    \**********************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _web_socket_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../web-socket-service.service */
    "./src/app/web-socket-service.service.ts");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent(webSocketService) {
        _classCallCheck(this, SidebarComponent);

        this.webSocketService = webSocketService;
        this.channels = [];
        this.changeChannel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.stompClient = this.webSocketService.getClient();

          if (this.stompClient.status != 'CONNECTED') {
            this.connect();
          }
        }
      }, {
        key: "connect",
        value: function connect() {
          var _this = this;

          _this.stompClient.connect({}, function () {
            _this.stompClient.subscribe("/sidebar/channels", function (frame) {
              _this.getChannels(frame);
            });
          }, function (error) {});
        }
      }, {
        key: "getChannels",
        value: function getChannels(payload) {
          console.log("getChannels has been called.");
          var channelArray = JSON.parse(payload.body);
          this.channels = channelArray;
          console.log(this.channels);
        }
      }, {
        key: "goToChannel",
        value: function goToChannel(channelName) {
          //console.log("ChannelName: " + channelName);
          this.changeChannel.emit(channelName); //this.stompClient.send("/app/chat.getMessages", {}, JSON.stringify(channelName));
        }
      }, {
        key: "disconnect",
        value: function disconnect() {
          this.stompClient.disconnect();
        }
      }, {
        key: "showNow",
        set: function set(bool) {
          this.show = bool;

          if (bool) {
            this.stompClient.send("/app/chat.channels");
          }
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: _web_socket_service_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketServiceService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebar', null)], SidebarComponent.prototype, "sidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('channelList', null)], SidebarComponent.prototype, "channelArea", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SidebarComponent.prototype, "showNow", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SidebarComponent.prototype, "changeChannel", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.css */
      "./src/app/sidebar/sidebar.component.css")).default]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/web-socket-service.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/web-socket-service.service.ts ***!
    \***********************************************/

  /*! exports provided: WebSocketServiceService */

  /***/
  function srcAppWebSocketServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebSocketServiceService", function () {
      return WebSocketServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! stompjs */
    "./node_modules/stompjs/index.js");
    /* harmony import */


    var stompjs__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sockjs-client */
    "./node_modules/sockjs-client/lib/entry.js");
    /* harmony import */


    var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);

    var WebSocketServiceService =
    /*#__PURE__*/
    function () {
      function WebSocketServiceService() {
        _classCallCheck(this, WebSocketServiceService);

        this.serverUrl = 'http://localhost:8080/prime5chatter';
      }

      _createClass(WebSocketServiceService, [{
        key: "getClient",
        value: function getClient() {
          var socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__(this.serverUrl);
          this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_2__["over"](socket);
          return this.stompClient;
        }
      }, {
        key: "subscribe",
        value: function subscribe() {}
      }, {
        key: "disconnect",
        value: function disconnect(stompClient) {
          stompClient.disconnect();
        }
      }]);

      return WebSocketServiceService;
    }();

    WebSocketServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], WebSocketServiceService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/mike/Desktop/dev/prime5chat/FrontEnd.ChatterApp/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map