(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/kedirosa/Desktop/red-market-ionic5/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1oPy":
    /*!*************************************************!*\
      !*** ./src/app/utils/history-helper.service.ts ***!
      \*************************************************/

    /*! exports provided: HistoryHelperService */

    /***/
    function oPy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoryHelperService", function () {
        return HistoryHelperService;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HistoryHelperService = function HistoryHelperService(router) {
        var _this = this;

        _classCallCheck(this, HistoryHelperService);

        this.router = router;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"];
        })).subscribe(function (_ref) {
          var urlAfterRedirects = _ref.urlAfterRedirects;
          // console.log('previous URL', this.previousUrl);
          _this.previousUrl = urlAfterRedirects; // console.log('NEW previous URL', this.previousUrl);
        });
      };

      HistoryHelperService.ɵfac = function HistoryHelperService_Factory(t) {
        return new (t || HistoryHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      HistoryHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: HistoryHelperService,
        factory: HistoryHelperService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "2gss":
    /*!************************************************************!*\
      !*** ./src/app/shell/image-shell/image-shell.component.ts ***!
      \************************************************************/

    /*! exports provided: ImageShellComponent */

    /***/
    function gss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageShellComponent", function () {
        return ImageShellComponent;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../utils/transfer-state-helper */
      "O2zu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ImageShellComponent_ng_content_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 0, ["*ngIf", "_display === 'cover'"]);
        }
      }

      var _c0 = ["*"];

      var ImageShellComponent = /*#__PURE__*/function () {
        function ImageShellComponent(transferStateHelper) {
          _classCallCheck(this, ImageShellComponent);

          this.transferStateHelper = transferStateHelper; // To debug shell styles, change configuration in the environment file

          this.debugDisplay = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appShellConfig && _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appShellConfig.debug ? _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appShellConfig.debug : false; // tslint:disable-next-line:variable-name

          this._src = ''; // tslint:disable-next-line:variable-name

          this._alt = ''; // tslint:disable-next-line:variable-name

          this._loadingStrategy = 'lazy'; // tslint:disable-next-line:variable-name

          this._display = '';
          this.imageSSR = false;
          this.imageLoaded = false;
          this.imageError = false;
          this.errorMessage = 'Could not load image';
        }

        _createClass(ImageShellComponent, [{
          key: "display",
          get: function get() {
            return this._display;
          },
          set: function set(val) {
            this._display = val !== undefined && val !== null ? val : ''; // For display 'cover' we use a hidden aux image. As it's hidden, if set loading to 'lazy' it won't ever trigger the loading mechanism

            if (this._display === 'cover') {
              this._loadingStrategy = 'eager';
            }
          }
        }, {
          key: "src",
          set: function set(val) {
            if (!this.debugDisplay) {
              this._src = val !== undefined && val !== null ? val : '';
            } // When using SSR (Server Side Rendering), avoid the loading animation while the image resource is being loaded


            var imageState = this.transferStateHelper.checkImageShellState('shell-images-state', this._src);

            if (imageState === _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_1__["ImageShellState"].SSR || imageState === _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_1__["ImageShellState"].BROWSER_FROM_SSR) {
              this._imageProcessedInServer();
            } else {
              if (this._display === 'cover') {
                // Unset the background-image until the image is loaded
                this.backgroundImage = 'unset';
              }
            }
          }
        }, {
          key: "alt",
          set: function set(val) {
            this._alt = val !== undefined && val !== null ? val : '';
          }
        }, {
          key: "_imageProcessedInServer",
          value: function _imageProcessedInServer() {
            this.imageSSR = true; // Also set backgroundImage so it's ready when transitioning from SSR to the browser

            if (this._display === 'cover') {
              this.backgroundImage = 'url(' + this._src + ')';
            }
          }
        }, {
          key: "_imageLoaded",
          value: function _imageLoaded() {
            this.imageLoaded = true; // If it's a cover image then set the background-image property accordingly

            if (this._display === 'cover') {
              // Now that the image is loaded, set the background image
              this.backgroundImage = 'url(' + this._src + ')';
            }
          }
        }, {
          key: "_imageLoadError",
          value: function _imageLoadError(event) {
            var _this2 = this;

            // Image error event get's called when the src is empty. We use emty values for the shell.
            // (see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Image_loading_errors)
            // Avoid that shell case
            if (this._src && this._src !== '') {
              this.imageLoaded = false;
              this.imageSSR = false;
              setTimeout(function () {
                _this2.imageError = true;
              }, 500);
            }
          }
        }]);

        return ImageShellComponent;
      }();

      ImageShellComponent.ɵfac = function ImageShellComponent_Factory(t) {
        return new (t || ImageShellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_1__["TransferStateHelper"]));
      };

      ImageShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ImageShellComponent,
        selectors: [["app-image-shell"]],
        hostVars: 10,
        hostBindings: function ImageShellComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-error", ctx.errorMessage)("display", ctx.display);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", ctx.backgroundImage);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("img-ssr", ctx.imageSSR)("img-loaded", ctx.imageLoaded)("img-error", ctx.imageError);
          }
        },
        inputs: {
          display: "display",
          src: "src",
          alt: "alt"
        },
        ngContentSelectors: _c0,
        decls: 3,
        vars: 4,
        consts: [[1, "spinner"], [1, "inner-img", 3, "src", "alt", "load", "error"], [4, "ngIf"]],
        template: function ImageShellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-spinner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function ImageShellComponent_Template_img_load_1_listener() {
              return ctx._imageLoaded();
            })("error", function ImageShellComponent_Template_img_error_1_listener($event) {
              return ctx._imageLoadError($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ImageShellComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx._src, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx._alt);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("loading", ctx._loadingStrategy);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._display === "cover");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["[_nghost-%COMP%] {\n  --image-shell-loading-background: #EEE;\n  --image-shell-border-radius: 0px;\n  --image-shell-color: #333;\n  display: block;\n  position: relative;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n  transition: all ease-in-out 0.3s;\n  z-index: 2;\n}\n[_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]::before {\n  content: \"\";\n  background: var(--image-shell-loading-background);\n  border-radius: var(--image-shell-border-radius);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n[_nghost-%COMP%]:not([display=cover]) {\n  width: 100%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]:not([display=cover])    > .inner-img[_ngcontent-%COMP%] {\n  transition: visibility 0s linear, opacity 0.5s linear;\n  opacity: 0;\n  visibility: hidden;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--image-shell-border-radius);\n  display: block;\n}\n[_nghost-%COMP%]:not([display=cover]).img-ssr::before, [_nghost-%COMP%]:not([display=cover]).img-loaded::before {\n  display: none;\n}\n[_nghost-%COMP%]:not([display=cover]).img-ssr    > .inner-img[_ngcontent-%COMP%], [_nghost-%COMP%]:not([display=cover]).img-loaded    > .inner-img[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n[_nghost-%COMP%]:not([display=cover]).img-error    > .inner-img[_ngcontent-%COMP%] {\n  color: var(--image-shell-color);\n  font-size: 12px;\n}\n[_nghost-%COMP%]:not([display=cover]).img-error::after {\n  content: attr(data-error);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 10px;\n  color: var(--image-shell-color);\n  background-color: var(--image-shell-loading-background);\n  font-size: 12px;\n}\n[display=cover][_nghost-%COMP%] {\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n[display=cover][_nghost-%COMP%]::before, [display=cover][_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n[display=cover][_nghost-%COMP%]    > .inner-img[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n[display=cover].img-ssr[_nghost-%COMP%]::before, [display=cover].img-loaded[_nghost-%COMP%]::before {\n  display: none;\n}\n[animation=gradient][_nghost-%COMP%] {\n  --image-shell-loading-background: #EEE;\n  --image-shell-animation-color: #DDD;\n}\n[animation=gradient][_nghost-%COMP%]::before {\n  background: linear-gradient(to right, var(--image-shell-loading-background) 8%, var(--image-shell-animation-color) 18%, var(--image-shell-loading-background) 33%);\n  background-size: 800px 104px;\n  -webkit-animation: animateBackground 2s ease-in-out infinite;\n          animation: animateBackground 2s ease-in-out infinite;\n}\n[animation=gradient].img-ssr[_nghost-%COMP%]::before, [animation=gradient].img-loaded[_nghost-%COMP%]::before, [animation=gradient].img-error[_nghost-%COMP%]::before {\n  background: none;\n  -webkit-animation: 0;\n          animation: 0;\n}\n@-webkit-keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n[animation=spinner][_nghost-%COMP%] {\n  --image-shell-spinner-size: 28px;\n  --image-shell-spinner-color: #CCC;\n}\n[animation=spinner][_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n  left: calc(50% - calc(var(--image-shell-spinner-size) / 2));\n  width: var(--image-shell-spinner-size);\n  height: var(--image-shell-spinner-size);\n  font-size: var(--image-shell-spinner-size);\n  line-height: var(--image-shell-spinner-size);\n  color: var(--image-shell-spinner-color);\n}\n[animation=spinner].img-ssr[_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%], [animation=spinner].img-loaded[_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%], [animation=spinner].img-error[_nghost-%COMP%]    > .spinner[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n.add-overlay[_nghost-%COMP%] {\n  --image-shell-overlay-background: rgba(0, 0, 0, .4);\n}\n.add-overlay.img-ssr[_nghost-%COMP%]::before, .add-overlay.img-loaded[_nghost-%COMP%]::before, .add-overlay.img-error[_nghost-%COMP%]::before {\n  display: block;\n  background: var(--image-shell-overlay-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ltYWdlLXNoZWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FBQUY7QUFHRTtFQUNFLGFBQUE7QUFESjtBQUtFO0VBQ0UsV0FBQTtFQUNBLGlEQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFISjtBQU1FO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBSko7QUFNSTtFQUNFLHFEQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtFQUVBLGNBQUE7QUFMTjtBQVdNO0VBQ0UsYUFBQTtBQVRSO0FBWU07RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFWUjtBQWVNO0VBRUUsK0JBQUE7RUFDQSxlQUFBO0FBZFI7QUFrQk07RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsZUFBQTtBQWhCUjtBQXVCRTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7QUFyQko7QUF3Qkk7RUFFRSxXQUFBO0FBdkJOO0FBMEJJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBeEJOO0FBOEJNO0VBQ0UsYUFBQTtBQTVCUjtBQWtDQTtFQUNFLHNDQUFBO0VBQ0EsbUNBQUE7QUEvQkY7QUFrQ0U7RUFDRSxrS0FDRTtFQUNGLDRCQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtBQWpDSjtBQXdDSTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7VUFBQSxZQUFBO0FBdENOO0FBMENFO0VBQ0U7SUFDRSw2QkFBQTtFQXhDSjtFQTJDRTtJQUNFLDRCQUFBO0VBekNKO0FBQ0Y7QUFrQ0U7RUFDRTtJQUNFLDZCQUFBO0VBeENKO0VBMkNFO0lBQ0UsNEJBQUE7RUF6Q0o7QUFDRjtBQTZDQTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUExQ0Y7QUE0Q0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwREFBQTtFQUNBLDJEQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsNENBQUE7RUFDQSx1Q0FBQTtBQTFDSjtBQWdESTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQTlDTjtBQW1EQTtFQUNFLG1EQUFBO0FBaERGO0FBc0RJO0VBQ0UsY0FBQTtFQUNBLGlEQUFBO0FBcEROIiwiZmlsZSI6ImltYWdlLXNoZWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogI0VFRTtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIC0taW1hZ2Utc2hlbGwtY29sb3I6ICMzMzM7XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzKTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4zcztcbiAgei1pbmRleDogMjtcblxuICAvLyBCeSBkZWZhdWx0LCBoaWRlIHRoZSBzcGlubmVyXG4gICYgPiAuc3Bpbm5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8vIExvYWRpbmcgYmFja2dyb3VuZFxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1cyk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuXG4gICY6bm90KFtkaXNwbGF5PVwiY292ZXJcIl0pIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJiA+IC5pbm5lci1pbWcge1xuICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIsIG9wYWNpdHkgLjVzIGxpbmVhcjtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXMpO1xuICAgICAgLy8gSW1hZ2Ugc2hvdWxkIGZpbGwgdGhlIHNwYWNlIHdoaWxlIGxvYWRpbmdcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICYuaW1nLXNzcixcbiAgICAmLmltZy1sb2FkZWQge1xuICAgICAgLy8gSGlkZSBsb2FkaW5nIGJhY2tncm91bmQgb25jZSB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJiA+IC5pbm5lci1pbWcge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuaW1nLWVycm9yIHtcbiAgICAgICYgPiAuaW5uZXItaW1nIHtcbiAgICAgICAgLy8gRm9yIHRoZSBBbHQgdGV4dFxuICAgICAgICBjb2xvcjogdmFyKC0taW1hZ2Utc2hlbGwtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBwbGFjZWhvbGRlciBiYWNrZ3JvdW5kXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1lcnJvcik7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWltYWdlLXNoZWxsLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kKTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vICogTk9URTogd2UgZGlkbid0IGFkZCAuaW1nLWVycm9yIHN0eWxlcyBmb3IgJ2NvdmVyJyBkaXNwbGF5IG9uIHB1cnBvc2UuXG4gIC8vIElmIGl0IGlzIGRpc3BsYXk6IGNvdmVyXG4gICZbZGlzcGxheT1cImNvdmVyXCJdIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICAvLyBJbiBjb3ZlciBkaXNwbGF5LCB3ZSBjYW4gaGF2ZSBjb250ZW50IGluc2lkZSB0aGUgZWxlbWVudCwgdGh1cyB3ZSBuZWVkIHRvIHB1dCB0aGVzZSBlbGVtZW50cyBiZW5lYXRoXG4gICAgJjo6YmVmb3JlLFxuICAgICYgPiAuc3Bpbm5lciB7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG5cbiAgICAmID4gLmlubmVyLWltZyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuICAgICYuaW1nLXNzcixcbiAgICAmLmltZy1sb2FkZWQge1xuICAgICAgLy8gSGlkZSBsb2FkaW5nIGJhY2tncm91bmQgb25jZSB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOmhvc3QoW2FuaW1hdGlvbj1cImdyYWRpZW50XCJdKSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiAjRUVFO1xuICAtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogI0RERDtcblxuICAvLyBUaGUgYW5pbWF0aW9uIHRoYXQgZ29lcyBiZW5lYXRoIHRoZSBtYXNrc1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6XG4gICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZCkgOCUsIHZhcigtLWltYWdlLXNoZWxsLWFuaW1hdGlvbi1jb2xvcikgMTglLCB2YXIoLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQpIDMzJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDRweDtcbiAgICBhbmltYXRpb246IGFuaW1hdGVCYWNrZ3JvdW5kIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG5cbiAgJi5pbWctc3NyLFxuICAmLmltZy1sb2FkZWQsXG4gICYuaW1nLWVycm9yIHtcbiAgICAvLyBSZXNldCBiYWNrZ3JvdW5kIGFuaW1hdGlvblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYW5pbWF0aW9uOiAwO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZUJhY2tncm91bmQge1xuICAgIDAle1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2OHB4IDBcbiAgICB9XG5cbiAgICAxMDAle1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMFxuICAgIH1cbiAgfVxufVxuXG46aG9zdChbYW5pbWF0aW9uPVwic3Bpbm5lclwiXSkge1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZTogMjhweDtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiAjQ0NDO1xuXG4gICYgPiAuc3Bpbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogY2FsYyg1MCUgLSBjYWxjKHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSkgLyAyKSk7XG4gICAgbGVmdDogY2FsYyg1MCUgLSBjYWxjKHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSkgLyAyKSk7XG4gICAgd2lkdGg6IHZhcigtLWltYWdlLXNoZWxsLXNwaW5uZXItc2l6ZSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemUpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcbiAgICBsaW5lLWhlaWdodDogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplKTtcbiAgICBjb2xvcjogdmFyKC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcik7XG4gIH1cblxuICAmLmltZy1zc3IsXG4gICYuaW1nLWxvYWRlZCxcbiAgJi5pbWctZXJyb3Ige1xuICAgICYgPiAuc3Bpbm5lciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbiAgfVxufVxuXG46aG9zdCguYWRkLW92ZXJsYXkpIHtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjQpO1xuXG4gICYuaW1nLXNzcixcbiAgJi5pbWctbG9hZGVkLFxuICAmLmltZy1lcnJvciB7XG4gICAgLy8gQWRkIGJhY2tncm91bmQgb3ZlcmxheSBhZnRlciB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuICAgICY6OmJlZm9yZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZCk7XG4gICAgfVxuICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "7xsR":
    /*!******************************************!*\
      !*** ./src/app/pages/item/Item-Model.ts ***!
      \******************************************/

    /*! exports provided: Item */

    /***/
    function xsR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Item", function () {
        return Item;
      });

      var Item = function Item() {
        _classCallCheck(this, Item);
      };
      /***/

    },

    /***/
    "A0kb":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/show-hide-password/show-hide-password.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ShowHidePasswordComponent */

    /***/
    function A0kb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowHidePasswordComponent", function () {
        return ShowHidePasswordComponent;
      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var ShowHidePasswordComponent = /*#__PURE__*/function () {
        function ShowHidePasswordComponent() {
          _classCallCheck(this, ShowHidePasswordComponent);

          this.showPassword = false;
        }

        _createClass(ShowHidePasswordComponent, [{
          key: "toggleShow",
          value: function toggleShow() {
            this.showPassword = !this.showPassword;
            this.input.type = this.showPassword ? 'text' : 'password';
          }
        }]);

        return ShowHidePasswordComponent;
      }();

      ShowHidePasswordComponent.ɵfac = function ShowHidePasswordComponent_Factory(t) {
        return new (t || ShowHidePasswordComponent)();
      };

      ShowHidePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ShowHidePasswordComponent,
        selectors: [["app-show-hide-password"]],
        contentQueries: function ShowHidePasswordComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonInput"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
          }
        },
        ngContentSelectors: _c0,
        decls: 4,
        vars: 2,
        consts: [[1, "type-toggle", 3, "click"], ["name", "eye-off-outline", 1, "show-option", 3, "hidden"], ["name", "eye-outline", 1, "hide-option", 3, "hidden"]],
        template: function ShowHidePasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowHidePasswordComponent_Template_a_click_1_listener() {
              return ctx.toggleShow();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.showPassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.showPassword);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%] {\n  -webkit-padding-start: 0.5rem;\n          padding-inline-start: 0.5rem;\n}\n[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .show-option[_ngcontent-%COMP%], [_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .hide-option[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  display: block;\n}\n[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .show-option[_ngcontent-%COMP%]:not(ion-icon), [_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .hide-option[_ngcontent-%COMP%]:not(ion-icon) {\n  text-transform: uppercase;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Nob3ctaGlkZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsNkJBQUE7VUFBQSw0QkFBQTtBQUNKO0FBQ0k7O0VBRUUsaUJBQUE7RUFDQSxjQUFBO0FBQ047QUFFTTs7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFDUiIsImZpbGUiOiJzaG93LWhpZGUtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC50eXBlLXRvZ2dsZSB7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAuNXJlbTtcblxuICAgIC5zaG93LW9wdGlvbixcbiAgICAuaGlkZS1vcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgLy8gSW4gY2FzZSB5b3Ugd2FudCB0byB1c2UgdGV4dCBpbnN0ZWFkIG9mIGljb25zXG4gICAgICAmOm5vdChpb24taWNvbikge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false,
        firebase: {
          apiKey: 'AIzaSyBOcpPSg7MS5KR-JDkDEbsy1kZmTfHOdrc',
          authDomain: 'red-market1.firebaseapp.com',
          databaseURL: 'https://red-market1.firebaseio.com',
          projectId: 'red-market1',
          storageBucket: 'red-market1.appspot.com'
        },
        appShellConfig: {
          debug: false,
          networkDelay: 500
        }
      };
      /*
       * In development mode, to ignore zone related error stack frames such as
       * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
       * import the following file, but please comment it out in production mode
       * because it will have performance impact when throw error
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "B7gC":
    /*!**************************************************************!*\
      !*** ./src/app/shell/aspect-ratio/aspect-ratio.component.ts ***!
      \**************************************************************/

    /*! exports provided: AspectRatioComponent */

    /***/
    function B7gC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AspectRatioComponent", function () {
        return AspectRatioComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var AspectRatioComponent = /*#__PURE__*/function () {
        function AspectRatioComponent() {
          _classCallCheck(this, AspectRatioComponent);

          this.ratioPadding = '0px';
        }

        _createClass(AspectRatioComponent, [{
          key: "ratio",
          set: function set(ratio) {
            ratio = ratio !== undefined && ratio !== null ? ratio : {
              w: 1,
              h: 1
            };
            var heightRatio = ratio.h / ratio.w * 100 + '%'; // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)

            this.ratioPadding = '0px 0px ' + heightRatio + ' 0px';
          }
        }]);

        return AspectRatioComponent;
      }();

      AspectRatioComponent.ɵfac = function AspectRatioComponent_Factory(t) {
        return new (t || AspectRatioComponent)();
      };

      AspectRatioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AspectRatioComponent,
        selectors: [["app-aspect-ratio"]],
        hostVars: 2,
        hostBindings: function AspectRatioComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding", ctx.ratioPadding);
          }
        },
        inputs: {
          ratio: "ratio"
        },
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "content-wrapper"]],
        template: function AspectRatioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n[_nghost-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FzcGVjdC1yYXRpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJhc3BlY3QtcmF0aW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5jb250ZW50LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "KVHT":
    /*!**********************************************!*\
      !*** ./src/app/pages/item/item.component.ts ***!
      \**********************************************/

    /*! exports provided: ItemComponent */

    /***/
    function KVHT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemComponent", function () {
        return ItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "tAfe");
      /* harmony import */


      var _Item_Model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./Item-Model */
      "7xsR");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _Item_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./Item-service */
      "xkf5");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["fileInput"];

      function ItemComponent_ion_slides_9_img_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 43);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.images[0] ? "url(" + ctx_r3.images[0] + ")" : "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function ItemComponent_ion_slides_9_ion_col_42_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemComponent_ion_slides_9_ion_col_42_Template_ion_card_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r6.imgEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", image_r5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function ItemComponent_ion_slides_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-toggle", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemComponent_ion_slides_9_Template_ion_toggle_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.item.postType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "What is your post for");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-card", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemComponent_ion_slides_9_Template_ion_card_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r10.selectSaleType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "For Sale");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-col", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-card", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemComponent_ion_slides_9_Template_ion_card_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.selectRentType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "For Rent");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Add Item Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-col", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemComponent_ion_slides_9_Template_ion_card_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r12.pickSinglemage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ItemComponent_ion_slides_9_img_28_Template, 1, 1, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "ion-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Add cover image");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-col", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-card", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemComponent_ion_slides_9_Template_ion_card_click_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.pickMultipleImages();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "ion-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Add photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Add up to 6 photos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-row", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, ItemComponent_ion_slides_9_ion_col_42_Template, 3, 1, "ion-col", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Item Detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-item", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ion-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Itenm Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemComponent_ion_slides_9_Template_ion_input_ngModelChange_52_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r14.item.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ion-item", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemComponent_ion_slides_9_Template_ion_select_ngModelChange_57_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r15.item.cat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ion-select-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Brown");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "ion-select-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Blonde");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ion-select-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Black");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ion-select-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Red");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "ion-item", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "ion-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "SubCategory");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "ion-select", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemComponent_ion_slides_9_Template_ion_select_ngModelChange_70_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r16.item.SubCategory = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "ion-select-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Brown");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "ion-select-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Blonde");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "ion-select-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Black");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "ion-select-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Red");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "ion-item", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "ion-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Condition");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "ion-select", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemComponent_ion_slides_9_Template_ion_select_ngModelChange_83_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r17.item.condtion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "ion-select-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Brown");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "ion-select-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Blonde");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "ion-select-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Black");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "ion-select-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Red");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "ion-select-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Brown");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "ion-select-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Blonde");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "ion-select-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Black");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "ion-select-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Red");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "ion-select-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Brown");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "ion-select-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Blonde");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "ion-select-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Black");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "ion-select-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Red");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "ion-select-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Brown");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "ion-select-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Blonde");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "ion-select-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Black");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "ion-select-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Red");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "ion-select-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Brown");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "ion-select-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Blonde");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "ion-select-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Black");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "ion-select-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Red");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "ion-item", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "ion-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Detail Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "ion-textarea", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemComponent_ion_slides_9_Template_ion_textarea_ngModelChange_128_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r18.item.desc = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "ion-item", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "ion-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Brand");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "ion-input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemComponent_ion_slides_9_Template_ion_input_ngModelChange_133_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r19.item.brand = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "ion-item", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "ion-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "ion-input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemComponent_ion_slides_9_Template_ion_input_ngModelChange_138_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r20.item.size = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "ion-item", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "ion-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Color");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "ion-select", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemComponent_ion_slides_9_Template_ion_select_ngModelChange_143_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r21.item.color = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "ion-select-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Brown");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "ion-select-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Blonde");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "ion-select-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Black");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "ion-select-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Red");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "ion-item", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "ion-input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemComponent_ion_slides_9_Template_ion_input_ngModelChange_159_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r22.item.price = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "ion-item", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Firm on Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "ion-toggle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemComponent_ion_slides_9_Template_ion_toggle_ngModelChange_164_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.item.firmOnPrice = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Item address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "ion-label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "item address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "ion-input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemComponent_ion_slides_9_Template_ion_input_ngModelChange_174_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r24.item.address = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "ion-item", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Do you deliver the item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "ion-toggle", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ItemComponent_ion_slides_9_Template_ion_toggle_ngModelChange_179_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r25.item.canDeliber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.slidesOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.item.postType);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r0.item.postType == 1 ? "primary" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r0.item.postType == 0 ? "primary" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.coverImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r0.forRent ? "primary" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.base64Images);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.item.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.item.cat);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.item.SubCategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.item.condtion);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.item.desc);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.item.brand);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.item.size);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.item.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.item.price);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.item.firmOnPrice);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.item.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.item.canDeliber);
        }
      }

      function ItemComponent_ion_col_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemComponent_ion_col_12_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r26.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Next ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ItemComponent_ion_col_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemComponent_ion_col_13_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r28.saveItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Post ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var ItemComponent = /*#__PURE__*/function () {
        function ItemComponent(modalController, actionSheetController, plt, imagePicker, loadingCtrl, itemService, formBuilder, toastCtrl, alertCtrl) {
          _classCallCheck(this, ItemComponent);

          this.modalController = modalController;
          this.actionSheetController = actionSheetController;
          this.plt = plt;
          this.imagePicker = imagePicker;
          this.loadingCtrl = loadingCtrl;
          this.itemService = itemService;
          this.formBuilder = formBuilder;
          this.toastCtrl = toastCtrl;
          this.alertCtrl = alertCtrl;
          this.viewEntered = false;
          this.coverImage = null;
          this.images = [];
          this.imageUrls = [];
          this.showError = false;
          this.formFinish = false;
          this.errorMsg = "";
          this.currentUser = null;
          this.base64Images = [];
          this.slidesOptions = {
            slidesPerView: 1,
            zoom: {
              toggle: false // Disable zooming to prevent weird double tap zomming on slide images

            }
          };
        }

        _createClass(ItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.itemService.getCurrentUser().subscribe(function (user) {
              console.log('CURRRRRRENT USER ************' + JSON.stringify(user));
              _this3.currentUser = user;
            });
            this.itemForm = this.formBuilder.group({
              postType: [''],
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              cat: [''],
              subCat: [''],
              condition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              desc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              firmOnPrice: [''],
              address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              brand: [''],
              color: [''],
              size: [''],
              madeIn: [''],
              canDeliver: ['']
            });
            this.item = new _Item_Model__WEBPACK_IMPORTED_MODULE_5__["Item"]();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.viewEntered = true;
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            var _this4 = this;

            if (this.modalController) {
              this.modalController.dismiss().then(function () {
                _this4.modalController = null;
              });
            }
          }
        }, {
          key: "urlEventHander",
          value: function urlEventHander($evnt) {
            this.imageUrls.push = $evnt;
            console.log("::::::::::Event Emitted ::::::::: " + $evnt);
          }
        }, {
          key: "next",
          value: function next() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.slides.getActiveIndex().then(function (index) {
                        console.log(index);

                        if (index == 3) {
                          _this5.formFinish = true;
                        }
                      });
                      this.slides.slideNext();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "selectSaleType",
          value: function selectSaleType() {
            this.item.postType = 1;
          }
        }, {
          key: "selectRentType",
          value: function selectRentType() {
            this.item.postType = 0;
          }
        }, {
          key: "selectCoverPhoto",
          value: function selectCoverPhoto() {}
        }, {
          key: "selectImageSource",
          value: function selectImageSource() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this6 = this;

              var buttons, actionSheet;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      buttons = [{
                        text: 'Take Photo',
                        icon: 'camera',
                        handler: function handler() {
                          _this6.addImage(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera);
                        }
                      }, {
                        text: 'Choose From Photos',
                        icon: 'image',
                        handler: function handler() {
                          _this6.addImage(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Photos);
                        }
                      }]; // Only allow file selection inside a browser

                      if (!this.plt.is('hybrid')) {
                        buttons.push({
                          text: 'Choose a File',
                          icon: 'attach',
                          handler: function handler() {
                            _this6.fileInput.nativeElement.click();
                          }
                        });
                      }

                      _context2.next = 4;
                      return this.actionSheetController.create({
                        header: 'Select Image Source',
                        buttons: buttons
                      });

                    case 4:
                      actionSheet = _context2.sent;
                      _context2.next = 7;
                      return actionSheet.present();

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "pickSinglemage",
          value: function pickSinglemage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this7 = this;

              var options;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      options = {
                        outputType: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["OutputType"].DATA_URL
                      };
                      this.imagePicker.getPictures(options).then(function (result) {
                        _this7.coverImage = 'data:image/jpeg;base64,' + result;

                        _this7.images[0].push(_this7.coverImage);
                      }, function (err) {
                        console.log(err);
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "addImage",
          value: function addImage(source) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this8 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
                        quality: 60,
                        allowEditing: true,
                        resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl,
                        source: source
                      }).then(function (result) {
                        _this8.coverImage = 'data:image/jpeg;base64,' + result;

                        _this8.itemForm.patchValue({
                          coverImg: result
                        });
                      }, function (err) {
                        console.log(err);
                      });

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
          }
        }, {
          key: "showErrorMsg",
          value: function showErrorMsg(msg, show) {
            this.showError = true;
            this.errorMsg = msg;
          }
        }, {
          key: "b64toBlob",
          value: function b64toBlob(b64Data) {
            var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
              var slice = byteCharacters.slice(offset, offset + sliceSize);
              var byteNumbers = new Array(slice.length);

              for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
              }

              var byteArray = new Uint8Array(byteNumbers);
              byteArrays.push(byteArray);
            }

            var blob = new Blob(byteArrays, {
              type: contentType
            });
            return blob;
          }
        }, {
          key: "pickMultipleImages",
          value: function pickMultipleImages() {
            var _this9 = this;

            var options = {
              maximumImagesCount: 6,
              outputType: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["OutputType"].DATA_URL
            };
            this.imagePicker.getPictures(options).then(function (results) {
              for (var i = 0; i < results.length; i++) {
                //let filename = results[i].
                var base64Image = 'data:image/jpeg;base64,' + results[i];

                _this9.base64Images.push(base64Image);

                _this9.images.push(results[i]);
              }
            }, function (err) {});
          }
        }, {
          key: "imgEdit",
          value: function imgEdit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var buttons, actionSheet;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      buttons = [{
                        text: 'Set as cover photo',
                        handler: function handler() {//this.addImage(CameraSource.Camera);
                        }
                      }, {
                        text: 'Edit',
                        handler: function handler() {}
                      }, {
                        text: 'Delete',
                        handler: function handler() {}
                      }, {
                        text: 'Cancel',
                        handler: function handler() {}
                      }];
                      _context5.next = 3;
                      return this.actionSheetController.create({
                        buttons: buttons
                      });

                    case 3:
                      actionSheet = _context5.sent;
                      _context5.next = 6;
                      return actionSheet.present();

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "saveItem",
          value: function saveItem() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this10 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.loadingCtrl.create({
                        message: "loading..."
                      });

                    case 2:
                      loading = _context8.sent;
                      _context8.next = 5;
                      return loading.present();

                    case 5:
                      this.itemService.addNewItem(this.currentUser, this.itemForm.value, this.images).then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                          var toast;
                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) {
                              switch (_context6.prev = _context6.next) {
                                case 0:
                                  loading.dismiss();
                                  _context6.next = 3;
                                  return this.toastCtrl.create({
                                    duration: 3000,
                                    message: "Successfully Posted new Item!"
                                  });

                                case 3:
                                  toast = _context6.sent;
                                  toast.present();
                                  console.log("finished: ", res);

                                case 6:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          }, _callee6, this);
                        }));
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                          var alert;
                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) {
                              switch (_context7.prev = _context7.next) {
                                case 0:
                                  _context7.next = 2;
                                  return loading.dismiss();

                                case 2:
                                  _context7.next = 4;
                                  return this.alertCtrl.create({
                                    header: "Error",
                                    message: err.message,
                                    buttons: ["OK"]
                                  });

                                case 4:
                                  alert = _context7.sent;
                                  alert.present();

                                case 6:
                                case "end":
                                  return _context7.stop();
                              }
                            }
                          }, _callee7, this);
                        }));
                      });

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return ItemComponent;
      }();

      ItemComponent.ɵfac = function ItemComponent_Factory(t) {
        return new (t || ItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["ImagePicker"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Item_service__WEBPACK_IMPORTED_MODULE_7__["ItemFireStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]));
      };

      ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ItemComponent,
        selectors: [["app-item"]],
        viewQuery: function ItemComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.slides = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
          }
        },
        decls: 14,
        vars: 4,
        consts: [[1, "ion-no-border"], ["slot", "start"], ["mode", "ios", 3, "click"], ["name", "close", "color", "primary", 1, "ion-icon-close"], [3, "formGroup"], ["pager", "false", 3, "options", 4, "ngIf"], ["size", "12", 4, "ngIf"], ["pager", "false", 3, "options"], ["formControlName", "postType", "hidden", "true", 3, "ngModel", "ngModelChange"], ["size", "12"], ["size", "6"], ["button", "", "ion-activatable", "", "ripple-parent", "", "mode", "ios", 1, "step1-ion-card", 3, "color", "click"], [1, "post-type"], ["size", "6", "ion-activatable", "", "ripple-parent", ""], ["mode", "ios", "button", "", 1, "step1-ion-card", 3, "color", "click"], ["mode", "ios", "color", "primary", "button", "", "ion-activatable", "", "ripple-parent", "", 1, "step2-ion-card", 3, "click"], ["class", "cover-img", 3, "src", 4, "ngIf"], [1, "content"], ["name", "camera-outline", 1, "ion-icon-camera"], ["mode", "ios", "button", "", 1, "step2-ion-card", 3, "color", "click"], ["name", "add", 1, "ion-icon-camera"], [1, "img-row"], ["size", "3", 4, "ngFor", "ngForOf"], [1, "input-item"], ["color", "primary", "position", "floating"], ["type", "text", "required", "", "formControlName", "title", 3, "ngModel", "ngModelChange"], ["interface", "action-sheet", "formControlName", "cat", 1, "custom-options", 3, "ngModel", "ngModelChange"], ["value", "brown"], ["value", "blonde"], ["value", "black"], ["value", "red"], ["interface", "action-sheet", "formControlName", "subCat", 1, "custom-options", 3, "ngModel", "ngModelChange"], ["interface", "action-sheet", "formControlName", "condition", 1, "custom-options", 3, "ngModel", "ngModelChange"], ["rows", "4", "cols", "20", "requred", "true", "formControlName", "desc", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "brand", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "size", 3, "ngModel", "ngModelChange"], ["interface", "action-sheet", "formControlName", "color", 1, "custom-options", 3, "ngModel", "ngModelChange"], ["lines", "none"], ["formControlName", "price", "hint", "decimal", "type", "number", "inputmode", "decimal", "clearOnEdit", "true", "clear-input", "true", 1, "price-ion-input", 3, "ngModel", "ngModelChange"], ["slot", "end", "formControlName", "firmOnPrice", 3, "ngModel", "ngModelChange"], ["position", "stacked"], ["formControlName", "address", "type", "text", "clear-input", "true", "value", "Richardson TX", 3, "ngModel", "ngModelChange"], ["slot", "end", "formControlName", "canDeliver", 3, "ngModel", "ngModelChange"], [1, "cover-img", 3, "src"], ["size", "3"], ["ion-activatable", "", "ripple-parent", "", "button", "", 1, "imgs-ion-card", 3, "click"], ["alt", "image", 3, "src"], ["color", "primary", "expand", "block", 3, "click"]],
        template: function ItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Post an Item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemComponent_Template_ion_button_click_5_listener() {
              return ctx.dismissModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ItemComponent_ion_slides_9_Template, 180, 19, "ion-slides", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ItemComponent_ion_col_12_Template, 3, 0, "ion-col", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ItemComponent_ion_col_13_Template, 3, 0, "ion-col", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.itemForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewEntered);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.formFinish);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formFinish);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NumericValueAccessor"]],
        styles: [".input-item[_ngcontent-%COMP%] {\n  --padding-start: 4px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.ion-icon-close[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  padding: 5px;\n}\n\n.ion-icon-camera[_ngcontent-%COMP%] {\n  font-size: 88px;\n  --ionicon-stroke-width: 18px;\n}\n\nion-chip[_ngcontent-%COMP%] {\n  height: 25px;\n}\n\nion-chip[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n}\n\n.price-ion-input[_ngcontent-%COMP%] {\n  border: solid 1px var(--ion-color-primary);\n  --padding-end: 12px;\n  height: 75px;\n  border-radius: 20px;\n  margin-top: 20px;\n  font-weight: 800;\n  font-size: 30px;\n  text-align: center;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  font-size: 20px;\n  font-weight: 700;\n  padding: 10px;\n}\n\n.imgs-ion-card[_ngcontent-%COMP%] {\n  margin-left: -15px;\n  height: 90px;\n  margin: 0px;\n  align-items: center;\n}\n\n.imgs-ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 90px;\n  width: 100%;\n  background-color: var(--ion-color-white);\n  background-size: cover;\n  background-position: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: relative;\n}\n\n.img-row[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.img-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 1px;\n}\n\n.step1-ion-card[_ngcontent-%COMP%] {\n  height: 160px;\n  align-items: center;\n  margin: 6px;\n}\n\n.step1-ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  align-items: center;\n  margin: 0 auto;\n}\n\n.step1-ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  font-size: 25px;\n  font-weight: 800;\n}\n\n.step1-ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-white);\n  background-size: cover;\n  background-position: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: relative;\n}\n\n.step2-ion-card[_ngcontent-%COMP%] {\n  height: 130px;\n  margin: 5px;\n  align-items: center;\n}\n\n.step2-ion-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  align-items: center;\n  margin: 0 auto;\n}\n\n.step2-ion-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: -10px;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.step2-ion-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 10px;\n  font-weight: 400;\n}\n\n.step-ion-col[_ngcontent-%COMP%] {\n  padding: 1px;\n  margin-right: -20px;\n}\n\nion-slides[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2l0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQUZKOztBQUlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7QUFESjs7QUFJQTtFQUVFLFlBQUE7QUFGRjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBRUUsMENBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBREY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFJSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Ysd0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBTUE7RUFJRSxjQUFBO0FBTkY7O0FBR0U7RUFDQSxZQUFBO0FBREY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBSEY7O0FBSUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRE47O0FBSUk7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFHQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFRQTtFQUNFLGFBQUE7RUFDRixXQUFBO0VBQ0UsbUJBQUE7QUFMRjs7QUFNRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUpKOztBQUtJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFITjs7QUFNRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFRQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUxGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0FBSkYiLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbiAgLmlucHV0LWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIH1cbiAgLmlvbi1pY29uLWNsb3Nle1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cblxuICAuaW9uLWljb24tY2FtZXJhe1xuICAgIGZvbnQtc2l6ZTogODhweDtcbiAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiAxOHB4O1xuICB9XG5cbmlvbi1jaGlwIHtcblxuICBoZWlnaHQ6IDI1cHg7XG4gIGlvbi1sYWJlbHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cbi5wcmljZS1pb24taW5wdXR7IFxuICAgIFxuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gIGhlaWdodDogNzVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxufVxuaDR7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cblxuXG4uaW1ncy1pb24tY2FyZHtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGltZ3tcbiAgICAgIGhlaWdodDogOTBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbn1cbi5pbWctcm93e1xuICBpb24tY29se1xuICBwYWRkaW5nOiAxcHg7XG4gIH1cbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zdGVwMS1pb24tY2FyZHtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA2cHg7XG4gIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBoMntcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgIH1cbiAgfVxuICAgIGltZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcbiAgICAvLyAgIHdpZHRoOiB2YXIoLS1pbWFnZS13aWR0aCwgMTAwJSk7XG4gICAgLy8gICBoZWlnaHQ6IHZhcigtLWltYWdlLWhlaWdodCwgMTIwcHgpO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbn1cbi5zdGVwMi1pb24tY2FyZHtcbiAgaGVpZ2h0OiAxMzBweDtcbm1hcmdpbjogNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuY29udGVudHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHB7XG4gICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxuICBwe1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuXG59XG4uc3RlcC1pb24tY29se1xuICBwYWRkaW5nOiAxcHg7XG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XG59XG5pb24tc2xpZGVze1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcblxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "O2zu":
    /*!************************************************!*\
      !*** ./src/app/utils/transfer-state-helper.ts ***!
      \************************************************/

    /*! exports provided: ImageShellState, TransferStateHelper */

    /***/
    function O2zu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageShellState", function () {
        return ImageShellState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransferStateHelper", function () {
        return TransferStateHelper;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ImageShellState;

      (function (ImageShellState) {
        ImageShellState["SSR"] = "ssr-loaded";
        ImageShellState["BROWSER_FROM_SSR"] = "browser-loaded-from-ssr";
        ImageShellState["NOT_FOUND"] = "not-found";
      })(ImageShellState || (ImageShellState = {}));

      var TransferStateHelper = /*#__PURE__*/function () {
        function TransferStateHelper(platformId, state) {
          _classCallCheck(this, TransferStateHelper);

          this.platformId = platformId;
          this.state = state;
        } // Method with generic param


        _createClass(TransferStateHelper, [{
          key: "checkDataSourceState",
          value: function checkDataSourceState(stateKey, dataSource) {
            var _this11 = this;

            var dataKey = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["makeStateKey"])(stateKey);

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
              // When loading resource in the server, store the result in the TransferState
              // to use when transitioning to the browser from the SSR rendered app
              return dataSource.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
                _this11.state.set(dataKey, data);
              }));
            } else {
              // Check if we have data in the TransferState
              if (this.state.hasKey(dataKey)) {
                var stateData = this.state.get(dataKey, null);

                if (stateData && stateData !== null) {
                  var cachedDataSource = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(stateData); // After using it, remove data from state
                  // this.state.remove(dataKey);
                  // Set a flag to track if the dataSource is being cached in the server state or not

                  Object.assign(cachedDataSource, {
                    ssr_state: true
                  });
                  return cachedDataSource;
                } else {
                  return dataSource;
                }
              } else {
                return dataSource;
              }
            }
          } // This method checks if a specific image was previously handled in the server

        }, {
          key: "checkImageShellState",
          value: function checkImageShellState(stateKey, imageSource) {
            var imageState = ImageShellState.NOT_FOUND; // Make sure we are not dealing with empty image sources

            if (imageSource !== '') {
              // We will store a collection of image sources in the state
              var dataKey = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["makeStateKey"])(stateKey);

              if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
                // When loading resource in the server, store the result in the TransferState
                // to use when transitioning to the browser from the SSR rendered app
                var stateImages = this.state.get(dataKey, []);
                stateImages.push(imageSource);
                this.state.set(dataKey, stateImages); // Running in the server, in this execution the image is set in the transfer state for the first time

                imageState = ImageShellState.SSR;
              } else {
                // Check if we have data in the TransferState
                if (this.state.hasKey(dataKey)) {
                  var stateData = this.state.get(dataKey, []); // Check if the image was previously loaded in the server

                  if (stateData.includes(imageSource)) {
                    imageState = ImageShellState.BROWSER_FROM_SSR;
                  }
                }
              }
            }

            return imageState;
          }
        }]);

        return TransferStateHelper;
      }();

      TransferStateHelper.ɵfac = function TransferStateHelper_Factory(t) {
        return new (t || TransferStateHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"]));
      };

      TransferStateHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TransferStateHelper,
        factory: TransferStateHelper.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _utils_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./utils/seo/seo.service */
      "yrgz");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _utils_history_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./utils/history-helper.service */
      "1oPy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var SplashScreen = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["Plugins"].SplashScreen;

      var AppComponent = /*#__PURE__*/function () {
        // Inject HistoryHelperService in the app.components.ts so its available app-wide
        function AppComponent(translate, historyHelper, seoService) {
          _classCallCheck(this, AppComponent);

          this.translate = translate;
          this.historyHelper = historyHelper;
          this.seoService = seoService;
          this.appPages = [{
            title: 'Categories',
            url: '/app/categories',
            ionicIcon: 'list-outline'
          }, {
            title: 'Profile',
            url: '/app/user',
            ionicIcon: 'person-outline'
          }, {
            title: 'Contact Card',
            url: '/contact-card',
            customIcon: './assets/custom-icons/side-menu/contact-card.svg'
          }, {
            title: 'Notifications',
            url: '/app/notifications',
            ionicIcon: 'notifications-outline'
          }];
          this.accountPages = [{
            title: 'Log In',
            url: '/auth/login',
            ionicIcon: 'log-in-outline'
          }, {
            title: 'Sign Up',
            url: '/auth/signup',
            ionicIcon: 'person-add-outline'
          }, {
            title: 'Tutorial',
            url: '/walkthrough',
            ionicIcon: 'school-outline'
          }, {
            title: 'Getting Started',
            url: '/getting-started',
            ionicIcon: 'rocket-outline'
          }, {
            title: '404 page',
            url: '/page-not-found',
            ionicIcon: 'alert-circle-outline'
          }];
          this.textDir = 'ltr';
          this.initializeApp();
          this.setLanguage();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.prev = 0;
                      _context9.next = 3;
                      return SplashScreen.hide();

                    case 3:
                      _context9.next = 8;
                      break;

                    case 5:
                      _context9.prev = 5;
                      _context9.t0 = _context9["catch"](0);
                      console.log('This is normal in a browser', _context9.t0);

                    case 8:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, null, [[0, 5]]);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setLanguage",
          value: function setLanguage() {
            // this language will be used as a fallback when a translation isn't found in the current language
            this.translate.setDefaultLang('en'); // the lang to use, if the lang isn't available, it will use the current loader to get them

            this.translate.use('en'); // this is to determine the text direction depending on the selected language
            // for the purpose of this example we determine that only arabic and hebrew are RTL.
            // this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            //   this.textDir = (event.lang === 'ar' || event.lang === 'iw') ? 'rtl' : 'ltr';
            // });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_utils_history_helper_service__WEBPACK_IMPORTED_MODULE_4__["HistoryHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_utils_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-app");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRouterOutlet"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "TA0h":
    /*!*****************************************!*\
      !*** ./src/app/pages/tabs/tabs.page.ts ***!
      \*****************************************/

    /*! exports provided: TabsPage */

    /***/
    function TA0h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../item/item.component */
      "KVHT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TabsPage = /*#__PURE__*/function () {
        function TabsPage(modalController, router) {
          _classCallCheck(this, TabsPage);

          this.modalController = modalController;
          this.router = router;
          this.currentModal = null;
        }

        _createClass(TabsPage, [{
          key: "createItemModal",
          value: function createItemModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var modal;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.modalController.create({
                        component: _item_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"],
                        animated: true,
                        mode: 'ios',
                        swipeToClose: true
                      });

                    case 2:
                      modal = _context10.sent;
                      _context10.next = 5;
                      return modal.present();

                    case 5:
                      this.currentModal = modal;

                    case 6:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "profileClick",
          value: function profileClick() {
            this.router.navigateByUrl('redmarket/profile');
          }
        }, {
          key: "chatsClicked",
          value: function chatsClicked() {
            this.router.navigateByUrl('/chats');
          }
        }]);

        return TabsPage;
      }();

      TabsPage.ɵfac = function TabsPage_Factory(t) {
        return new (t || TabsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      TabsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: TabsPage,
        selectors: [["app-tabs"]],
        decls: 20,
        vars: 1,
        consts: [["slot", "bottom", 3, "translucent"], ["tab", "items", "layout", "icon-top"], ["name", "home"], ["layout", "icon-top", "tab", "chat"], ["name", "chatbubble-ellipses-outline"], [3, "click"], ["name", "camera-outline"], ["tab", "selling", "layout", "icon-top"], ["name", "pricetags-outline"], ["layout", "icon-top", 3, "click"], ["name", "person"]],
        template: function TabsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-tabs");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-tab-bar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-tab-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-tab-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ion-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Inbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-fab-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TabsPage_Template_ion_fab_button_click_10_listener() {
              return ctx.createItemModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "ion-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-tab-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "ion-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Selling");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-tab-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TabsPage_Template_ion_tab_button_click_16_listener() {
              return ctx.profileClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "ion-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("translucent", true);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFabButton"]],
        styles: [".custom-tabs[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  color: #000;\n  --ion-color-base: var(--ion-color-primary);\n  background-color: var(--ion-color-primary);\n  border-radius: 50%;\n  max-width: 15px;\n  height: 15px;\n  margin-bottom: 6px;\n  box-shadow: 0 10px 6px -6px var(--ion-color-light);\n}\n.custom-tabs[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: black;\n}\nion-tab-bar[_ngcontent-%COMP%] {\n  padding-bottom: 25px;\n  padding-top: 5px;\n  --background:var(--ion-color-step-100);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  border: none;\n}\nion-tab-bar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  width: 25px;\n}\nion-fab-button[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n}\nion-fab-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBS0UsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtBQUxKO0FBTkk7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQVFOO0FBSUU7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7QUFESjtBQUVJO0VBQ0UsV0FBQTtBQUFOO0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQURKO0FBRUk7RUFDRSxVQUFBO0FBQU4iLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAuY3VzdG9tLXRhYnMgaW9uLWZhYi1idXR0b24ge1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgY29sb3I6IGJsYWNrXG4gICAgfVxuICAgIGNvbG9yOiAjMDAwO1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1heC13aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG4gIH1cbiAgaW9uLXRhYi1iYXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBpb24taWNvbntcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgIH1cblxuICB9XG4gIGlvbi1mYWItYnV0dG9uIHtcbiAgICB3aWR0aDogNDZweDtcbiAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgaW9uLWljb257XG4gICAgICBzaXplOiAyMHB4O1xuICAgIH1cbiAgfSJdfQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: createTranslateLoader, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/service-worker */
      "Jho9");
      /* harmony import */


      var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nguniversal/express-engine/tokens */
      "a4Kx");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/components.module */
      "j1ZV");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "tAfe");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _pages_item_Item_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./pages/item/Item-service */
      "xkf5");

      function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__["Geolocation"], _pages_item_Item_service__WEBPACK_IMPORTED_MODULE_19__["ItemFireStore"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"]
        }, _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_17__["ImagePicker"], {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
          useFactory: function useFactory(platformId, response) {
            return function () {
              // In the server.ts we added a custom response header with information about the device requesting the app
              if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformServer"])(platformId)) {
                if (response && response !== null) {
                  // Get custom header from the response sent from the server.ts
                  var mobileDeviceHeader = response.get('mobile-device'); // Set Ionic config mode?
                }
              }
            };
          },
          deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_5__["RESPONSE"]]],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({
          appId: 'serverApp'
        }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('/ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production
        }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZpN7":
    /*!***************************************!*\
      !*** ./src/app/shell/shell.module.ts ***!
      \***************************************/

    /*! exports provided: ShellModule */

    /***/
    function ZpN7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShellModule", function () {
        return ShellModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./aspect-ratio/aspect-ratio.component */
      "B7gC");
      /* harmony import */


      var _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./image-shell/image-shell.component */
      "2gss");
      /* harmony import */


      var _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./text-shell/text-shell.component */
      "zK/y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ShellModule = function ShellModule() {
        _classCallCheck(this, ShellModule);
      };

      ShellModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: ShellModule
      });
      ShellModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function ShellModule_Factory(t) {
          return new (t || ShellModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ShellModule, {
          declarations: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_2__["AspectRatioComponent"], _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_3__["ImageShellComponent"], _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_4__["TextShellComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"]],
          exports: [_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_2__["AspectRatioComponent"], _image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_3__["ImageShellComponent"], _text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_4__["TextShellComponent"]]
        });
      })();
      /***/

    },

    /***/
    "aSMC":
    /*!***************************************************************!*\
      !*** ./src/app/components/google-map/google-map.component.ts ***!
      \***************************************************************/

    /*! exports provided: GoogleMapComponent */

    /***/
    function aSMC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleMapComponent", function () {
        return GoogleMapComponent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GoogleMapComponent = /*#__PURE__*/function () {
        function GoogleMapComponent(_elementRef, platformId) {
          _classCallCheck(this, GoogleMapComponent);

          this._elementRef = _elementRef;
          this.platformId = platformId;
          this.$mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._mapIdledOnce = false;
        }

        _createClass(GoogleMapComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // there are some issues with maps in server side
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
              this.initMap();
            }
          }
        }, {
          key: "initMap",
          value: function initMap() {
            var _this12 = this;

            this._el = this._elementRef.nativeElement;
            this._map = new google.maps.Map(this._el, this.mapOptions); // Workarround for init method: try to catch the first idle event after the map creation
            // (this._mapIdledOnce). The following idle events don't matter.

            var _ready_listener = this._map.addListener('idle', function () {
              console.log('mapReady - IDLE');

              if (!_this12._mapIdledOnce) {
                _this12.$mapReady.emit(_this12._map);

                _this12._mapIdledOnce = true; // Stop listening to event, the map is ready

                google.maps.event.removeListener(_ready_listener);
              }
            });
          }
        }]);

        return GoogleMapComponent;
      }();

      GoogleMapComponent.ɵfac = function GoogleMapComponent_Factory(t) {
        return new (t || GoogleMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]));
      };

      GoogleMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GoogleMapComponent,
        selectors: [["google-map"]],
        inputs: {
          mapOptions: "mapOptions"
        },
        decls: 0,
        vars: 0,
        template: function GoogleMapComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
      /***/
    },

    /***/
    "dAQS":
    /*!*************************************************************************!*\
      !*** ./src/app/components/countdown-timer/countdown-timer.component.ts ***!
      \*************************************************************************/

    /*! exports provided: CountdownTimerComponent */

    /***/
    function dAQS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountdownTimerComponent", function () {
        return CountdownTimerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! dayjs */
      "Wgwc");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      function CountdownTimerComponent_ion_col_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0._daysLeft);
        }
      }

      function CountdownTimerComponent_ion_col_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "H");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1._hoursLeft);
        }
      }

      function CountdownTimerComponent_ion_col_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2._minutesLeft);
        }
      }

      function CountdownTimerComponent_ion_col_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "S");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3._secondsLeft);
        }
      }

      var CountdownTimerComponent = /*#__PURE__*/function () {
        function CountdownTimerComponent(platformId) {
          var _this13 = this;

          _classCallCheck(this, CountdownTimerComponent);

          this.platformId = platformId;
          this._initialUnit = 'hour';
          this._endingUnit = 'second';
          this._updateInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
          this._unsubscribeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // DIVISORS
          // 60 seconds * 60 (minutes) * 24 (hours) = 86400 seconds = 1 day

          this._dayDivisor = 60 * 60 * 24; // 60 seconds * 60 (minutes) = 3600 seconds = 1 hour

          this._hourDivisor = 60 * 60; // 60 seconds = 1 minute

          this._minuteDivisor = 60;
          this._secondDivisor = 1; // MODULUS
          // Neutral modulus

          this._dayModulus = function (secondsLeft) {
            return secondsLeft;
          }; // The modulus operator (%) returns the division remainder.
          // To figure out how many hours are left after taking in consideration the days, we should do:
          //    (secondsLeft % hourModulus) / hourDivisor
          // In 1 day there are 86400 seconds, and in 1 hour 3600 seconds. 1 day + 1 hour = 90000 seconds
          //    (90000s % 86400s) / 3600s = 1h


          this._hourModulus = function (secondsLeft) {
            return secondsLeft % _this13._dayDivisor;
          };

          this._minuteModulus = function (secondsLeft) {
            return secondsLeft % _this13._hourDivisor;
          };

          this._secondModulus = function (secondsLeft) {
            return secondsLeft % _this13._minuteDivisor;
          };
        }

        _createClass(CountdownTimerComponent, [{
          key: "end",
          set: function set(endingTime) {
            this._endingTime = endingTime !== undefined && endingTime !== null ? dayjs__WEBPACK_IMPORTED_MODULE_4__(endingTime) : dayjs__WEBPACK_IMPORTED_MODULE_4__();
          }
        }, {
          key: "units",
          set: function set(units) {
            // 'day', 'hour, 'minute', 'second'
            this._initialUnit = units !== undefined && units.from !== undefined && units.from !== null ? units.from : 'hour';
            this._endingUnit = units !== undefined && units.to !== undefined && units.to !== null ? units.to : 'second'; // For 'day' unit, use the default modulus
            // Adjust modulus depending on the unit

            if (this._initialUnit === 'hour') {
              // Cancelation modulus
              this._dayModulus = function (secondsLeft) {
                return 1;
              }; // Neutral modulus


              this._hourModulus = function (secondsLeft) {
                return secondsLeft;
              };
            }

            if (this._initialUnit === 'minute') {
              // Cancelation modulus
              this._dayModulus = function (secondsLeft) {
                return 1;
              };

              this._hourModulus = function (secondsLeft) {
                return 1;
              }; // Neutral modulus


              this._minuteModulus = function (secondsLeft) {
                return secondsLeft;
              };
            }

            if (this._initialUnit === 'second') {
              // Cancelation modulus
              this._dayModulus = function (secondsLeft) {
                return 1;
              };

              this._hourModulus = function (secondsLeft) {
                return 1;
              };

              this._minuteModulus = function (secondsLeft) {
                return 1;
              }; // Neutral modulus


              this._secondModulus = function (secondsLeft) {
                return secondsLeft;
              };
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            // I believe if we run this on SSR, it won't ever trigger the change detection and thus the server will be stuck loading
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
              this._updateInterval.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeSubject)).subscribe(function (val) {
                _this14.updateValues();
              }, function (error) {
                return console.error(error);
              }, function () {
                return console.log('[takeUntil] complete');
              });
            } else {
              this.updateValues();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._unsubscribeSubject.next();

            this._unsubscribeSubject.complete();
          }
        }, {
          key: "updateValues",
          value: function updateValues() {
            var secondsLeft = this._endingTime.diff(dayjs__WEBPACK_IMPORTED_MODULE_4__(), 'second');

            this._daysLeft = Math.floor(this._dayModulus(secondsLeft) / this._dayDivisor);
            this._hoursLeft = Math.floor(this._hourModulus(secondsLeft) / this._hourDivisor);
            this._minutesLeft = Math.floor(this._minuteModulus(secondsLeft) / this._minuteDivisor);
            this._secondsLeft = Math.floor(this._secondModulus(secondsLeft) / this._secondDivisor);
          }
        }]);

        return CountdownTimerComponent;
      }();

      CountdownTimerComponent.ɵfac = function CountdownTimerComponent_Factory(t) {
        return new (t || CountdownTimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      CountdownTimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CountdownTimerComponent,
        selectors: [["app-countdown-timer"]],
        inputs: {
          end: "end",
          units: "units"
        },
        decls: 5,
        vars: 4,
        consts: [[1, "countdown"], ["class", "time", 4, "ngIf"], [1, "time"], [1, "time-unit"], [1, "inner-time"], [1, "time-value"]],
        template: function CountdownTimerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CountdownTimerComponent_ion_col_1_Template, 6, 1, "ion-col", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CountdownTimerComponent_ion_col_2_Template, 6, 1, "ion-col", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CountdownTimerComponent_ion_col_3_Template, 6, 1, "ion-col", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CountdownTimerComponent_ion_col_4_Template, 6, 1, "ion-col", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._initialUnit === "day");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._initialUnit === "day" && ctx._endingUnit !== "day" || ctx._initialUnit === "hour" || ctx._endingUnit === "hour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._initialUnit === "day" && ctx._endingUnit !== "day" && ctx._endingUnit !== "hour" || ctx._initialUnit === "hour" && ctx._endingUnit !== "hour" || ctx._initialUnit === "minute");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._endingUnit === "second");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"]],
        styles: ["[_nghost-%COMP%] {\n  --countdown-margin: 0px;\n  --countdown-padding: 0px;\n  --countdown-time-margin: 0px;\n  --countdown-time-padding: 0px;\n  --countdown-inner-time-margin: 2px;\n  --countdown-inner-time-padding: 0px;\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: 0px;\n  --countdown-fill-background: transparent;\n  --countdown-fill-shadow: none;\n  --countdown-value-color: #CCC;\n  --countdown-unit-color: #CCC;\n  --countdown-time-flex-direction: row-reverse;\n  display: block;\n}\n[_nghost-%COMP%]   .countdown[_ngcontent-%COMP%] {\n  margin: var(--countdown-margin);\n  padding: var(--countdown-padding);\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n[_nghost-%COMP%]   .time[_ngcontent-%COMP%] {\n  padding: var(--countdown-time-padding);\n  margin: var(--countdown-time-margin);\n  display: flex;\n  flex-direction: var(--countdown-time-flex-direction);\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .time[_ngcontent-%COMP%]   .time-unit[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--countdown-unit-color);\n  font-size: 0.7em;\n  text-align: center;\n  text-transform: uppercase;\n  width: 2ex;\n}\n[_nghost-%COMP%]   .time[_ngcontent-%COMP%]   .time-value[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--countdown-value-color);\n  text-align: center;\n  font-size: 1em;\n  line-height: 1em;\n  min-height: 1em;\n  min-width: 2.2ex;\n  min-width: 2.1ch;\n}\n[_nghost-%COMP%]   .inner-time[_ngcontent-%COMP%] {\n  margin: var(--countdown-inner-time-margin);\n  padding: var(--countdown-inner-time-padding);\n}\n[fill=countdown][_nghost-%COMP%]   .countdown[_ngcontent-%COMP%] {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n[fill=time][_nghost-%COMP%]   .time[_ngcontent-%COMP%] {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n[fill=inner-time][_nghost-%COMP%]   .inner-time[_ngcontent-%COMP%] {\n  border: var(--countdown-fill-border);\n  border-radius: var(--countdown-fill-border-radius);\n  background-color: var(--countdown-fill-background);\n  box-shadow: var(--countdown-fill-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvdW50ZG93bi10aW1lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDZCQUFBO0VBRUEsNkJBQUE7RUFDQSw0QkFBQTtFQUVBLDRDQUFBO0VBRUEsY0FBQTtBQVZGO0FBWUU7RUFDRSwrQkFBQTtFQUNBLGlDQUFBO0VBRUEsdUJBQUE7RUFDQSxpQkFBQTtBQVhKO0FBY0U7RUFDRSxzQ0FBQTtFQUNBLG9DQUFBO0VBRUEsYUFBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWJKO0FBZUk7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBYk47QUFnQkk7RUFDRSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFLQSxnQkFBQTtFQUNBLGdCQUFBO0FBbEJOO0FBc0JFO0VBQ0UsMENBQUE7RUFDQSw0Q0FBQTtBQXBCSjtBQXlCRTtFQTNFQSxvQ0FBQTtFQUNBLGtEQUFBO0VBQ0Esa0RBQUE7RUFDQSx3Q0FBQTtBQXNERjtBQXdCRTtFQWpGQSxvQ0FBQTtFQUNBLGtEQUFBO0VBQ0Esa0RBQUE7RUFDQSx3Q0FBQTtBQTZERjtBQXVCRTtFQXZGQSxvQ0FBQTtFQUNBLGtEQUFBO0VBQ0Esa0RBQUE7RUFDQSx3Q0FBQTtBQW9FRiIsImZpbGUiOiJjb3VudGRvd24tdGltZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gZmlsbC1jb250YWluZXIoKXtcbiAgYm9yZGVyOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGRvd24tZmlsbC1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY291bnRkb3duLWZpbGwtYmFja2dyb3VuZCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNvdW50ZG93bi1maWxsLXNoYWRvdyk7XG59XG5cbjpob3N0IHtcbiAgLS1jb3VudGRvd24tbWFyZ2luOiAwcHg7XG4gIC0tY291bnRkb3duLXBhZGRpbmc6IDBweDtcbiAgLS1jb3VudGRvd24tdGltZS1tYXJnaW46IDBweDtcbiAgLS1jb3VudGRvd24tdGltZS1wYWRkaW5nOiAwcHg7XG4gIC0tY291bnRkb3duLWlubmVyLXRpbWUtbWFyZ2luOiAycHg7XG4gIC0tY291bnRkb3duLWlubmVyLXRpbWUtcGFkZGluZzogMHB4O1xuXG4gIC0tY291bnRkb3duLWZpbGwtYm9yZGVyOiBub25lO1xuICAtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgLS1jb3VudGRvd24tZmlsbC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb3VudGRvd24tZmlsbC1zaGFkb3c6IG5vbmU7XG5cbiAgLS1jb3VudGRvd24tdmFsdWUtY29sb3I6ICNDQ0M7XG4gIC0tY291bnRkb3duLXVuaXQtY29sb3I6ICNDQ0M7XG5cbiAgLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLmNvdW50ZG93biB7XG4gICAgbWFyZ2luOiB2YXIoLS1jb3VudGRvd24tbWFyZ2luKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1jb3VudGRvd24tcGFkZGluZyk7XG5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgfVxuXG4gIC50aW1lIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1jb3VudGRvd24tdGltZS1wYWRkaW5nKTtcbiAgICBtYXJnaW46IHZhcigtLWNvdW50ZG93bi10aW1lLW1hcmdpbik7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiB2YXIoLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC50aW1lLXVuaXQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogdmFyKC0tY291bnRkb3duLXVuaXQtY29sb3IpO1xuICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB3aWR0aDogMmV4O1xuICAgIH1cblxuICAgIC50aW1lLXZhbHVlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29sb3I6IHZhcigtLWNvdW50ZG93bi12YWx1ZS1jb2xvcik7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICBtaW4taGVpZ2h0OiAxZW07XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBhbHdheXMgaGF2ZSBzcGFjZSBmb3IgdHdvIGNoYXJhY3RlcnNcbiAgICAgIC8vIEFzIGNoICh3aWR0aCBvZiB0aGUgY2hhcmFjdGVyICcwJykgdW5pdCBpcyBub3QgMTAwJSBzdXBwb3J0ZWQsIHdlIHdpbGwgdXNlIGV4IChoZWlnaHQgb2YgdGhlICd4JyBjaGFyYWN0ZXIpIGFzIGEgZmFsbGJhY2tcbiAgICAgIC8vIFNlZTogaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvY3NzL3VuaXRzLXZhbHVlcy9cbiAgICAgIG1pbi13aWR0aDogMi4yZXg7IC8vIFRoZSAneCcgY2hhcmFjdGVyIGlzIHNlbWktc3F1YXJlIGNoYXIsIHRoYXQncyB3aHkgd2Ugc2V0IDIuMmV4XG4gICAgICBtaW4td2lkdGg6IDIuMWNoOyAvLyBjaCBpcyB0aGUgb25seSBmb250IHVuaXQgYmFzZWQgb24gdGhlIHdpZHRoIG9mIGNoYXJhY3RlcnNcbiAgICB9XG4gIH1cblxuICAuaW5uZXItdGltZSB7XG4gICAgbWFyZ2luOiB2YXIoLS1jb3VudGRvd24taW5uZXItdGltZS1tYXJnaW4pO1xuICAgIHBhZGRpbmc6IHZhcigtLWNvdW50ZG93bi1pbm5lci10aW1lLXBhZGRpbmcpO1xuICB9XG59XG5cbjpob3N0KFtmaWxsPVwiY291bnRkb3duXCJdKSB7XG4gIC5jb3VudGRvd24ge1xuICAgIEBpbmNsdWRlIGZpbGwtY29udGFpbmVyKCk7XG4gIH1cbn1cblxuOmhvc3QoW2ZpbGw9XCJ0aW1lXCJdKSB7XG4gIC50aW1lIHtcbiAgICBAaW5jbHVkZSBmaWxsLWNvbnRhaW5lcigpO1xuICB9XG59XG5cbjpob3N0KFtmaWxsPVwiaW5uZXItdGltZVwiXSkge1xuICAuaW5uZXItdGltZSB7XG4gICAgQGluY2x1ZGUgZmlsbC1jb250YWluZXIoKTtcbiAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "diig":
    /*!*********************************************!*\
      !*** ./src/app/utils/seo/seo-data.model.ts ***!
      \*********************************************/

    /*! exports provided: SeoDataModel */

    /***/
    function diig(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeoDataModel", function () {
        return SeoDataModel;
      });

      var SeoDataModel = function SeoDataModel() {
        _classCallCheck(this, SeoDataModel);
      };
      /***/

    },

    /***/
    "fpyr":
    /*!***************************************************************************!*\
      !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ts ***!
      \***************************************************************************/

    /*! exports provided: CheckboxWrapperComponent */

    /***/
    function fpyr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxWrapperComponent", function () {
        return CheckboxWrapperComponent;
      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // Reference to the @ionic/angular Components List:
      // https://github.com/ionic-team/ionic/blob/master/angular/src/directives/proxies.ts


      var _c0 = ["*"];

      var CheckboxWrapperComponent = /*#__PURE__*/function () {
        function CheckboxWrapperComponent() {
          _classCallCheck(this, CheckboxWrapperComponent);
        }

        _createClass(CheckboxWrapperComponent, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this15 = this;

            // ContentChild is set
            this.isChecked = this.checkbox.checked; // Subscribe to changes

            this.checkbox.ionChange.subscribe(function (changes) {
              _this15.isChecked = changes.detail.checked;
            });
          }
        }]);

        return CheckboxWrapperComponent;
      }();

      CheckboxWrapperComponent.ɵfac = function CheckboxWrapperComponent_Factory(t) {
        return new (t || CheckboxWrapperComponent)();
      };

      CheckboxWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CheckboxWrapperComponent,
        selectors: [["app-checkbox-wrapper"]],
        contentQueries: function CheckboxWrapperComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCheckbox"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.checkbox = _t.first);
          }
        },
        hostVars: 2,
        hostBindings: function CheckboxWrapperComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("checkbox-checked", ctx.isChecked);
          }
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function CheckboxWrapperComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "gLxg":
    /*!*******************************************************************!*\
      !*** ./src/app/components/rating-input/rating-input.component.ts ***!
      \*******************************************************************/

    /*! exports provided: RatingInputComponent */

    /***/
    function gLxg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatingInputComponent", function () {
        return RatingInputComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      function RatingInputComponent_ion_button_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingInputComponent_ion_button_0_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.rate(i_r2 + 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var r_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r0.value === undefined ? r_r1 === 1 ? "star" : r_r1 === 2 ? "star-half" : "star-outline" : ctx_r0.value > i_r2 ? ctx_r0.value < i_r2 + 1 ? "star-half" : "star" : "star-outline");
        }
      }

      var RatingInputComponent = /*#__PURE__*/function () {
        function RatingInputComponent() {
          _classCallCheck(this, RatingInputComponent);

          this.max = 5;
          this.readOnly = false;

          this.propagateChange = function () {}; // Noop function

        }

        _createClass(RatingInputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var states = [];

            for (var i = 0; i < this.max; i++) {
              if (this.innerValue > i && this.innerValue < i + 1) {
                states[i] = 2;
              } else if (this.innerValue > i) {
                states[i] = 1;
              } else {
                states[i] = 0;
              }
            }

            this.range = states;
          }
        }, {
          key: "value",
          get: function get() {
            return this.innerValue;
          },
          set: function set(val) {
            if (val !== this.innerValue) {
              this.innerValue = val;
              this.propagateChange(val);
            }
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (value !== this.innerValue) {
              this.innerValue = value;
            }
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.propagateChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched() {}
        }, {
          key: "rate",
          value: function rate(amount) {
            if (!this.readOnly && amount >= 0 && amount <= this.range.length) {
              this.value = amount;
            }
          }
        }]);

        return RatingInputComponent;
      }();

      RatingInputComponent.ɵfac = function RatingInputComponent_Factory(t) {
        return new (t || RatingInputComponent)();
      };

      RatingInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RatingInputComponent,
        selectors: [["app-rating-input"]],
        inputs: {
          max: "max",
          readOnly: "readOnly"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return RatingInputComponent;
          }),
          multi: true
        }])],
        decls: 1,
        vars: 1,
        consts: [["class", "rating-icon", "fill", "clear", "shape", "round", 3, "click", 4, "ngFor", "ngForOf"], ["fill", "clear", "shape", "round", 1, "rating-icon", 3, "click"], ["slot", "icon-only", 3, "name"]],
        template: function RatingInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RatingInputComponent_ion_button_0_Template, 2, 1, "ion-button", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.range);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"]],
        styles: ["app-rating-input {\n  --rating-background: transparent;\n  --rating-color: #000;\n  --rating-size: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\napp-rating-input ion-button.rating-icon {\n  --background: var(--rating-background);\n  --color: var(--rating-color);\n  --color-activated: var(--rating-color);\n  --box-shadow: none;\n  --padding-bottom: 0px;\n  --padding-end: 4px;\n  --padding-start: 4px;\n  --padding-top: 0px;\n  margin: 0px;\n  flex: 1;\n  width: var(--rating-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhdGluZy1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQUY7QUFFQztFQUNHLHNDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0YsT0FBQTtFQUNDLHlCQUFBO0FBREgiLCJmaWxlIjoicmF0aW5nLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXJhdGluZy1pbnB1dCB7XG4gIC0tcmF0aW5nLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLXJhdGluZy1jb2xvcjogIzAwMDtcbiAgLS1yYXRpbmctc2l6ZTogMzJweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG5cdGlvbi1idXR0b24ucmF0aW5nLWljb24ge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcmF0aW5nLWJhY2tncm91bmQpO1xuICAgIC0tY29sb3I6IHZhcigtLXJhdGluZy1jb2xvcik7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6IHZhcigtLXJhdGluZy1jb2xvcik7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuXG4gICAgbWFyZ2luOiAwcHg7XG5cdFx0ZmxleDogMTtcblx0ICB3aWR0aDogdmFyKC0tcmF0aW5nLXNpemUpO1xuXHR9XG59XG4iXX0= */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "j1ZV":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function j1ZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shell_shell_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shell/shell.module */
      "ZpN7");
      /* harmony import */


      var _checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./checkbox-wrapper/checkbox-wrapper.component */
      "fpyr");
      /* harmony import */


      var _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./show-hide-password/show-hide-password.component */
      "A0kb");
      /* harmony import */


      var _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./countdown-timer/countdown-timer.component */
      "dAQS");
      /* harmony import */


      var _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./counter-input/counter-input.component */
      "lfmG");
      /* harmony import */


      var _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./rating-input/rating-input.component */
      "gLxg");
      /* harmony import */


      var _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./google-map/google-map.component */
      "aSMC");
      /* harmony import */


      var _upload_task_upload_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./upload-task/upload-task.component */
      "kah8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: ComponentsModule
      });
      ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        factory: function ComponentsModule_Factory(t) {
          return new (t || ComponentsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_3__["ShellModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]], _shell_shell_module__WEBPACK_IMPORTED_MODULE_3__["ShellModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ComponentsModule, {
          declarations: [_checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxWrapperComponent"], _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_5__["ShowHidePasswordComponent"], _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_6__["CountdownTimerComponent"], _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_7__["CounterInputComponent"], _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_8__["RatingInputComponent"], _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_9__["GoogleMapComponent"], _upload_task_upload_task_component__WEBPACK_IMPORTED_MODULE_10__["UploadTaskComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_3__["ShellModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
          exports: [_shell_shell_module__WEBPACK_IMPORTED_MODULE_3__["ShellModule"], _checkbox_wrapper_checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxWrapperComponent"], _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_5__["ShowHidePasswordComponent"], _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_6__["CountdownTimerComponent"], _counter_input_counter_input_component__WEBPACK_IMPORTED_MODULE_7__["CounterInputComponent"], _rating_input_rating_input_component__WEBPACK_IMPORTED_MODULE_8__["RatingInputComponent"], _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_9__["GoogleMapComponent"], _upload_task_upload_task_component__WEBPACK_IMPORTED_MODULE_10__["UploadTaskComponent"]]
        });
      })();
      /***/

    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "kah8":
    /*!*****************************************************************!*\
      !*** ./src/app/components/upload-task/upload-task.component.ts ***!
      \*****************************************************************/

    /*! exports provided: UploadTaskComponent */

    /***/
    function kah8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadTaskComponent", function () {
        return UploadTaskComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/internal/operators/finalize */
      "44p1");
      /* harmony import */


      var rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/internal/operators/tap */
      "pWCv");
      /* harmony import */


      var rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      function UploadTaskComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-progress", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pct_r3 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pct_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, pct_r3), "%\n");
        }
      }

      function UploadTaskComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var snap_r4 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", snap_r4.bytesTransferred, " of ", snap_r4.totalBytes, " ");
        }
      }

      function UploadTaskComponent_img_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 4);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      var UploadTaskComponent = /*#__PURE__*/function () {
        function UploadTaskComponent(storage, db) {
          _classCallCheck(this, UploadTaskComponent);

          this.storage = storage;
          this.db = db;
          this.urlEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(UploadTaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.startUpload();
          }
        }, {
          key: "onUrlChange",
          value: function onUrlChange() {
            this.urlEventEmitter.emit(this.downloadURL);
            console.log("::::::::::on url change called" + this.downloadURL);
          }
        }, {
          key: "startUpload",
          value: function startUpload() {
            var _this16 = this;

            console.log("::::::::::on file from parent  is " + this.file); // The storage path

            var path = "items/".concat(Date.now()); // Reference to storage bucket

            var ref = this.storage.ref(path); // The main task
            //const uploadTask = storageRef.putString(coverImg, 'base64', { contentType: 'image/png'});

            this.task = ref.putString(this.file, 'base64', {
              contentType: 'image/png'
            }); // Progress monitoring

            this.percentage = this.task.percentageChanges();
            this.snapshot = this.task.snapshotChanges().pipe(Object(rxjs_internal_operators_tap__WEBPACK_IMPORTED_MODULE_5__["tap"])(console.log), // The file's download URL
            Object(rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        _context11.next = 2;
                        return ref.getDownloadURL().toPromise();

                      case 2:
                        this.downloadURL = _context11.sent;
                        this.onUrlChange();
                        this.db.collection('files').add({
                          downloadURL: this.downloadURL,
                          path: path
                        });

                      case 5:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, this);
              }));
            }));
          }
        }, {
          key: "isActive",
          value: function isActive(snapshot) {
            return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
          }
        }]);

        return UploadTaskComponent;
      }();

      UploadTaskComponent.ɵfac = function UploadTaskComponent_Factory(t) {
        return new (t || UploadTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]));
      };

      UploadTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: UploadTaskComponent,
        selectors: [["upload-task"]],
        inputs: {
          file: "file"
        },
        outputs: {
          urlEventEmitter: "urlEventEmitter"
        },
        decls: 7,
        vars: 7,
        consts: [[4, "ngIf"], ["ion-activatable", "", "ripple-parent", "", "button", "", 1, "imgs-ion-card"], ["alt", "image", 3, "src", 4, "ngIf"], ["max", "100", 3, "value"], ["alt", "image", 3, "src"]],
        template: function UploadTaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UploadTaskComponent_div_0_Template, 4, 4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UploadTaskComponent_div_2_Template, 2, 2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UploadTaskComponent_img_6_Template, 1, 1, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, ctx.percentage));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, ctx.snapshot));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.downloadURL);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCard"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]],
        styles: [".imgs-ion-card[_ngcontent-%COMP%] {\n  margin-left: -15px;\n  height: 90px;\n  margin: 0px;\n  align-items: center;\n}\n.imgs-ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 90px;\n  width: 100%;\n  background-color: var(--ion-color-white);\n  background-size: cover;\n  background-position: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VwbG9hZC10YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Ysd0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FBRU4iLCJmaWxlIjoidXBsb2FkLXRhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1ncy1pb24tY2FyZHtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBpbWd7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgXG4gIH0iXX0= */"]
      });
      /***/
    },

    /***/
    "lfmG":
    /*!*********************************************************************!*\
      !*** ./src/app/components/counter-input/counter-input.component.ts ***!
      \*********************************************************************/

    /*! exports provided: counterRangeValidator, CounterInputComponent */

    /***/
    function lfmG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "counterRangeValidator", function () {
        return counterRangeValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CounterInputComponent", function () {
        return CounterInputComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      function counterRangeValidator(minValue, maxValue) {
        return function (c) {
          var err = {
            rangeError: {
              given: c.value,
              min: minValue || 0,
              max: maxValue || 10
            }
          };
          return c.value > +maxValue || c.value < +minValue ? err : null;
        };
      }

      var CounterInputComponent = /*#__PURE__*/function () {
        function CounterInputComponent() {
          _classCallCheck(this, CounterInputComponent);

          // tslint:disable-next-line:no-input-rename
          this._counterValue = 0;

          this.propagateChange = function () {}; // Noop function


          this.validateFn = function () {}; // Noop function

        }

        _createClass(CounterInputComponent, [{
          key: "counterValue",
          get: function get() {
            return this._counterValue;
          },
          set: function set(val) {
            this._counterValue = val;
            this.propagateChange(val);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(inputs) {
            if (inputs.counterRangeMax || inputs.counterRangeMin) {
              this.validateFn = counterRangeValidator(this.counterRangeMin, this.counterRangeMax);
            }
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (value) {
              this.counterValue = value;
            }
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.propagateChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched() {}
        }, {
          key: "increase",
          value: function increase() {
            this.counterValue++;
          }
        }, {
          key: "decrease",
          value: function decrease() {
            this.counterValue--;
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validateFn(c);
          }
        }]);

        return CounterInputComponent;
      }();

      CounterInputComponent.ɵfac = function CounterInputComponent_Factory(t) {
        return new (t || CounterInputComponent)();
      };

      CounterInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CounterInputComponent,
        selectors: [["app-counter-input"]],
        inputs: {
          _counterValue: ["counterValue", "_counterValue"],
          counterRangeMax: ["max", "counterRangeMax"],
          counterRangeMin: ["min", "counterRangeMin"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return CounterInputComponent;
          }),
          multi: true
        }, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return CounterInputComponent;
          }),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 10,
        vars: 1,
        consts: [[1, "button-outer"], [1, "button-wrapper"], [1, "counter-icon", 3, "click"], ["slot", "icon-only", "name", "remove"], [1, "counter-value"], ["slot", "icon-only", "name", "add"]],
        template: function CounterInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CounterInputComponent_Template_ion_button_click_2_listener() {
              return ctx.decrease();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CounterInputComponent_Template_ion_button_click_8_listener() {
              return ctx.increase();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ion-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._counterValue);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]],
        styles: ["app-counter-input {\n  --counter-background: #000;\n  --counter-color: #FFF;\n  --counter-color-activated: #FFF;\n  --counter-border-color: #000;\n  --counter-border-radius-outer: 50%;\n  --counter-border-radius-inner: 50%;\n  --counter-size: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\napp-counter-input ion-button.counter-icon {\n  margin: 0px;\n}\napp-counter-input ion-button.counter-icon.button-solid {\n  --background: var(--counter-background);\n  --background-activated: var(--counter-color);\n  --color: var(--counter-color);\n  --color-activated: var(--counter-color-activated);\n  --border-width: 1px;\n  --border-style: solid;\n  --border-color: var(--counter-border-color);\n  --box-shadow: none;\n  --border-radius: var(--counter-border-radius-outer) var(--counter-border-radius-inner) var(--counter-border-radius-inner) var(--counter-border-radius-outer);\n  --padding-bottom: 3px;\n  --padding-end: 3px;\n  --padding-start: 3px;\n  --padding-top: 3px;\n}\napp-counter-input .counter-value {\n  color: var(--counter-color);\n  margin: 0px 10px;\n  width: 2.2ch;\n  text-align: center;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\napp-counter-input:not([basic]) .button-outer {\n  width: var(--counter-size);\n}\napp-counter-input:not([basic]) .button-outer .button-wrapper {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  padding-bottom: 100%;\n}\napp-counter-input:not([basic]) .button-outer .button-wrapper .counter-icon {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  height: auto;\n  width: 100%;\n}\napp-counter-input[basic] {\n  --counter-border-radius-outer: 12px;\n  --counter-border-radius-inner: 0px;\n}\napp-counter-input[basic] .counter-value {\n  display: none;\n}\napp-counter-input[basic] .button-outer:first-child ion-button.counter-icon {\n  --border-radius: var(--counter-border-radius-outer) var(--counter-border-radius-inner) var(--counter-border-radius-inner) var(--counter-border-radius-outer);\n}\napp-counter-input[basic] .button-outer:last-child {\n  margin-left: -1px;\n}\napp-counter-input[basic] .button-outer:last-child ion-button.counter-icon {\n  --border-radius: var(--counter-border-radius-inner) var(--counter-border-radius-outer) var(--counter-border-radius-outer) var(--counter-border-radius-inner);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvdW50ZXItaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQUY7QUFFRTtFQWlCRSxXQUFBO0FBaEJKO0FBQUk7RUFDRSx1Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEpBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUVOO0FBSUU7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtBQUZKO0FBT0k7RUFDRSwwQkFBQTtBQUxOO0FBT007RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUxSO0FBT1E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUxWO0FBV0U7RUFDRSxtQ0FBQTtFQUNBLGtDQUFBO0FBVEo7QUFXSTtFQUNFLGFBQUE7QUFUTjtBQWNRO0VBQ0UsNEpBQUE7QUFaVjtBQWdCTTtFQUVFLGlCQUFBO0FBZlI7QUFpQlE7RUFDRSw0SkFBQTtBQWZWIiwiZmlsZSI6ImNvdW50ZXItaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtY291bnRlci1pbnB1dCB7XG4gIC0tY291bnRlci1iYWNrZ3JvdW5kOiAjMDAwO1xuICAtLWNvdW50ZXItY29sb3I6ICNGRkY7XG4gIC0tY291bnRlci1jb2xvci1hY3RpdmF0ZWQ6ICNGRkY7XG4gIC0tY291bnRlci1ib3JkZXItY29sb3I6ICMwMDA7XG4gIC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyOiA1MCU7XG4gIC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyOiA1MCU7XG4gIC0tY291bnRlci1zaXplOiAzMHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgaW9uLWJ1dHRvbi5jb3VudGVyLWljb24ge1xuICAgICYuYnV0dG9uLXNvbGlkIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tY291bnRlci1iYWNrZ3JvdW5kKTtcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWNvdW50ZXItY29sb3IpO1xuICAgICAgLS1jb2xvcjogdmFyKC0tY291bnRlci1jb2xvcik7XG4gICAgICAtLWNvbG9yLWFjdGl2YXRlZDogdmFyKC0tY291bnRlci1jb2xvci1hY3RpdmF0ZWQpO1xuICAgICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1jb3VudGVyLWJvcmRlci1jb2xvcik7XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcik7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAzcHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDNweDtcbiAgICAgIC0tcGFkZGluZy10b3A6IDNweDtcbiAgICB9XG5cbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG4gIC5jb3VudGVyLXZhbHVlIHtcbiAgICBjb2xvcjogdmFyKC0tY291bnRlci1jb2xvcik7XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICB3aWR0aDogMi4yY2g7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ3RudW0nO1xuICAgIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG4gIH1cblxuICAmOm5vdChbYmFzaWNdKSB7XG4gICAgLy8gRm9yY2UgZWFjaCBjb3VudGVyIGJ1dHRvbiB0byBoYXZlIGEgMToxIGFzcGVjdCByYXRpb1xuICAgIC5idXR0b24tb3V0ZXIge1xuICAgICAgd2lkdGg6IHZhcigtLWNvdW50ZXItc2l6ZSk7XG5cbiAgICAgIC5idXR0b24td3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcblxuICAgICAgICAuY291bnRlci1pY29uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJltiYXNpY10ge1xuICAgIC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyOiAxMnB4O1xuICAgIC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyOiAwcHg7XG5cbiAgICAuY291bnRlci12YWx1ZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5idXR0b24tb3V0ZXIge1xuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGlvbi1idXR0b24uY291bnRlci1pY29uIHtcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLWlubmVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgLy8gVG8gYXZvaWQgZG91YmxlIGJvcmRlclxuICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcblxuICAgICAgICBpb24tYnV0dG9uLmNvdW50ZXItaWNvbiB7XG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpIHZhcigtLWNvdW50ZXItYm9yZGVyLXJhZGl1cy1vdXRlcikgdmFyKC0tY291bnRlci1ib3JkZXItcmFkaXVzLW91dGVyKSB2YXIoLS1jb3VudGVyLWJvcmRlci1yYWRpdXMtaW5uZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _pages_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/tabs/tabs.page */
      "TA0h");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // Firebase guard to redirect logged in users to profile


      var redirectLoggedInToProfile = function redirectLoggedInToProfile(next) {
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
          // when queryParams['auth-redirect'] don't redirect because we want
          // the component to handle the redirection
          if (user !== null && !next.queryParams['auth-redirect']) {
            return ['redmarket/items'];
          } else {
            return true;
          }
        });
      };

      var routes = [{
        path: 'redmarket',
        component: _pages_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_2__["TabsPage"],
        children: [{
          path: 'home',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-tab1-tab1-module */
              "default~pages-tab1-tab1-module~pages-tabs-tabs-module").then(__webpack_require__.bind(null,
              /*! ./pages/tab1/tab1.module */
              "uMfO")).then(function (m) {
                return m.Tab1PageModule;
              });
            }
          }]
        }, {
          path: 'items',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-tab1-tab1-module */
              "default~pages-tab1-tab1-module~pages-tabs-tabs-module").then(__webpack_require__.bind(null,
              /*! ./pages/tab1/tab1.module */
              "uMfO")).then(function (m) {
                return m.Tab1PageModule;
              });
            }
          }, {
            path: 'list',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-tabs-tabs-module */
              [__webpack_require__.e("default~app-firebase-auth-profile-firebase-profile-module~app-firebase-auth-sign-up-firebase-sign-up~fd912ae4"), __webpack_require__.e("default~app-firebase-auth-profile-firebase-profile-module~app-firebase-auth-sign-up-firebase-sign-up~059a90f4"), __webpack_require__.e("default~pages-tab1-tab1-module~pages-tabs-tabs-module"), __webpack_require__.e("pages-tabs-tabs-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/tabs/tabs.module */
              "qiIP")).then(function (m) {
                return m.TabsPageModule;
              });
            }
          }, {
            path: 'detail/:id',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-item-detail-item-detail-module */
              "pages-item-detail-item-detail-module").then(__webpack_require__.bind(null,
              /*! ./pages/item-detail/item-detail.module */
              "x8RI")).then(function (m) {
                return m.ItemDetailPageModule;
              });
            }
          }, {
            path: '',
            redirectTo: 'redmarket/items',
            pathMatch: 'full'
          }]
        }, {
          path: 'chat',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-chat-list-chat-list-module */
              [__webpack_require__.e("default~pages-chat-detail-chat-detail-module~pages-chat-list-chat-list-module"), __webpack_require__.e("pages-chat-list-chat-list-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/chat-list/chat-list.module */
              "2OCj")).then(function (m) {
                return m.ChatListPageModule;
              });
            }
          }, {
            path: 'list',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-chat-list-chat-list-module */
              [__webpack_require__.e("default~pages-chat-detail-chat-detail-module~pages-chat-list-chat-list-module"), __webpack_require__.e("pages-chat-list-chat-list-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/chat-list/chat-list.module */
              "2OCj")).then(function (m) {
                return m.ChatListPageModule;
              });
            }
          }, {
            path: ':id',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-chat-detail-chat-detail-module */
              [__webpack_require__.e("default~pages-chat-detail-chat-detail-module~pages-chat-list-chat-list-module"), __webpack_require__.e("default~chat-detail-chat-detail-module~pages-chat-detail-chat-detail-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/chat-detail/chat-detail.module */
              "xDaC")).then(function (m) {
                return m.ChatDetailPageModule;
              });
            }
          }, {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          }]
        }, {
          path: 'selling',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-selling-selling-module */
              "pages-selling-selling-module").then(__webpack_require__.bind(null,
              /*! ./pages/selling/selling.module */
              "+tXc")).then(function (m) {
                return m.SellingPageModule;
              });
            }
          }, {
            path: 'list',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-selling-selling-module */
              "pages-selling-selling-module").then(__webpack_require__.bind(null,
              /*! ./pages/selling/selling.module */
              "+tXc")).then(function (m) {
                return m.SellingPageModule;
              });
            }
          }, {
            path: ':id',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-selling-item-selling-item-module */
              [__webpack_require__.e("default~pages-selling-item-selling-item-module~selling-item-selling-item-module"), __webpack_require__.e("pages-selling-item-selling-item-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/selling-item/selling-item.module */
              "sZbN")).then(function (m) {
                return m.SellingItemPageModule;
              });
            }
          }, {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          }]
        }, {
          path: 'profile',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | pages-profile-home-profile-home-module */
              [__webpack_require__.e("default~app-firebase-auth-profile-firebase-profile-module~app-firebase-auth-sign-up-firebase-sign-up~fd912ae4"), __webpack_require__.e("default~app-firebase-auth-profile-firebase-profile-module~app-firebase-auth-sign-up-firebase-sign-up~059a90f4"), __webpack_require__.e("pages-profile-home-profile-home-module")]).then(__webpack_require__.bind(null,
              /*! ./pages/profile-home/profile-home.module */
              "UzRt")).then(function (m) {
                return m.ProfileHomePageModule;
              });
            }
          }, {
            path: 'auth',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | firebase-auth-firebase-auth-module */
              [__webpack_require__.e("default~app-firebase-auth-profile-firebase-profile-module~app-firebase-auth-sign-up-firebase-sign-up~fd912ae4"), __webpack_require__.e("default~app-firebase-auth-profile-firebase-profile-module~app-firebase-auth-sign-up-firebase-sign-up~059a90f4"), __webpack_require__.e("firebase-auth-firebase-auth-module")]).then(__webpack_require__.bind(null,
              /*! ./firebase/auth/firebase-auth.module */
              "duP/")).then(function (m) {
                return m.FirebaseAuthModule;
              });
            }
          }, {
            path: 'sign-up',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | app-firebase-auth-sign-up-firebase-sign-up-module */
              [__webpack_require__.e("default~app-firebase-auth-profile-firebase-profile-module~app-firebase-auth-sign-up-firebase-sign-up~fd912ae4"), __webpack_require__.e("default~app-firebase-auth-profile-firebase-profile-module~app-firebase-auth-sign-up-firebase-sign-up~059a90f4"), __webpack_require__.e("default~app-firebase-auth-sign-up-firebase-sign-up-module~sign-up-firebase-sign-up-module")]).then(__webpack_require__.bind(null,
              /*! ../app/firebase/auth/sign-up/firebase-sign-up.module */
              "RMgo")).then(function (m) {
                return m.FirebaseSignUpPageModule;
              });
            }
          }, {
            path: 'user',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | app-firebase-auth-profile-firebase-profile-module */
              [__webpack_require__.e("default~app-firebase-auth-profile-firebase-profile-module~app-firebase-auth-sign-up-firebase-sign-up~fd912ae4"), __webpack_require__.e("default~app-firebase-auth-profile-firebase-profile-module~app-firebase-auth-sign-up-firebase-sign-up~059a90f4"), __webpack_require__.e("default~app-firebase-auth-profile-firebase-profile-module~profile-firebase-profile-module")]).then(__webpack_require__.bind(null,
              /*! ../app/firebase/auth/profile/firebase-profile.module */
              "iNMq")).then(function (m) {
                return m.FirebaseProfilePageModule;
              });
            }
          }, {
            path: 'public',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-public-profile-public-profile-module */
              "pages-public-profile-public-profile-module").then(__webpack_require__.bind(null,
              /*! ./pages/public-profile/public-profile.module */
              "VVA+")).then(function (m) {
                return m.PublicProfilePageModule;
              });
            }
          }, {
            path: 'settings',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | pages-account-setting-account-setting-module */
              "pages-account-setting-account-setting-module").then(__webpack_require__.bind(null,
              /*! ./pages/account-setting/account-setting.module */
              "kEEI")).then(function (m) {
                return m.AccountSettingPageModule;
              });
            }
          }]
        }]
      }, {
        path: '',
        redirectTo: '/redmarket/items',
        pathMatch: 'full'
      }, {
        path: 'onboarding',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-onboarding-onboarding-module */
          [__webpack_require__.e("default~app-firebase-auth-profile-firebase-profile-module~app-firebase-auth-sign-up-firebase-sign-up~fd912ae4"), __webpack_require__.e("default~app-firebase-auth-profile-firebase-profile-module~app-firebase-auth-sign-up-firebase-sign-up~059a90f4"), __webpack_require__.e("default~pages-onboarding-onboarding-module~sign-in-firebase-sign-in-module"), __webpack_require__.e("pages-onboarding-onboarding-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/onboarding/onboarding.module */
          "L7Uo")).then(function (m) {
            return m.OnboardingPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"]
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "xkf5":
    /*!********************************************!*\
      !*** ./src/app/pages/item/Item-service.ts ***!
      \********************************************/

    /*! exports provided: ItemFireStore */

    /***/
    function xkf5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemFireStore", function () {
        return ItemFireStore;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! firebase/app */
      "Wcq6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/internal/operators/map */
      "q3Kh");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/internal/operators/switchMap */
      "6aLS");
      /* harmony import */


      var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/internal/observable/of */
      "I65S");
      /* harmony import */


      var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ItemFireStore = /*#__PURE__*/function () {
        function ItemFireStore(afs, afAuth, storage) {
          _classCallCheck(this, ItemFireStore);

          this.afs = afs;
          this.afAuth = afAuth;
          this.storage = storage;
          this.user = null;
        }

        _createClass(ItemFireStore, [{
          key: "addNewItem",
          value: function addNewItem(user, item, imagesUrl) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this17 = this;

              var documentId;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      item.poster = user;
                      item.images = [];
                      item.likes = [];
                      item.prices = [];
                      item.offers = [];
                      documentId = null;
                      return _context12.abrupt("return", this.afs.collection('items').add(item).then(function (ref) {
                        documentId = ref.id;

                        for (var i = 0; i < imagesUrl.length; i++) {
                          _this17.imageUpload(imagesUrl[i], documentId, i);
                        }
                      }));

                    case 7:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            var _this18 = this;

            this.user = this.afAuth.authState.pipe(Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) {
              if (user) {
                return _this18.afs.doc("users/".concat(user.uid)).valueChanges({
                  idField: "uid"
                });
              } else {
                return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
              }
            }));
            return this.user;
          }
        }, {
          key: "imageUpload",
          value: function imageUpload(file, docId, index) {
            var _this19 = this;

            //storageRef = this.storage.ref(`items/${documentId}_${index}`);
            //this.task = storageRef.putString(img, 'base64', { contentType: 'image/png'});
            var storageRef = this.storage.ref("items/".concat(docId, "/").concat(index)); // [START storage_monitor_upload]

            var uploadTask = storageRef.putString(file, 'base64', {
              contentType: 'image/png'
            }).task; // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion

            uploadTask.on('state_changed', function (snapshot) {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
              console.log('Upload is ' + progress + '% done');

              switch (snapshot.state) {
                case firebase_app__WEBPACK_IMPORTED_MODULE_4__["storage"].TaskState.PAUSED:
                  // or 'paused'
                  console.log('Upload is paused');
                  break;

                case firebase_app__WEBPACK_IMPORTED_MODULE_4__["storage"].TaskState.RUNNING:
                  // or 'running'
                  console.log('Upload is running');
                  break;
              }
            }, function (error) {// Handle unsuccessful uploads
            }, function () {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                _this19.afs.doc("items/".concat(docId)).update({
                  images: firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.arrayUnion(downloadURL)
                });
              });
            }); // [END storage_monitor_upload]
          }
        }, {
          key: "getAllItems",
          value: function getAllItems() {
            return this.afs.collection('items').snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                console.log("ITEMS OF COLL" + JSON.stringify(Object.assign(id, data)));
                return Object.assign(id, data);
              });
            }));
          }
        }, {
          key: "getOneItem",
          value: function getOneItem(id) {
            return this.afs.doc("items/".concat(id)).valueChanges();
          }
        }]);

        return ItemFireStore;
      }();

      ItemFireStore.ɵfac = function ItemFireStore_Factory(t) {
        return new (t || ItemFireStore)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]));
      };

      ItemFireStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
        token: ItemFireStore,
        factory: ItemFireStore.ɵfac
      });
      /***/
    },

    /***/
    "yrgz":
    /*!******************************************!*\
      !*** ./src/app/utils/seo/seo.service.ts ***!
      \******************************************/

    /*! exports provided: SeoService */

    /***/
    function yrgz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeoService", function () {
        return SeoService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _seo_data_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./seo-data.model */
      "diig");
      /* harmony import */


      var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @nguniversal/express-engine/tokens */
      "a4Kx");

      var SeoService = /*#__PURE__*/function () {
        function SeoService(activatedRoute, router, meta, title, document, platformId, request, baseHref, platformLocation) {
          var _this20 = this;

          _classCallCheck(this, SeoService);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.meta = meta;
          this.title = title;
          this.document = document;
          this.platformId = platformId;
          this.request = request;
          this.baseHref = baseHref;
          this.platformLocation = platformLocation;
          this.canonicalUrl = 'https://YOUR-CANONICAL-URL.com';
          this._routerSubscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return _this20.activatedRoute;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
            while (route.firstChild) {
              route = route.firstChild;
            }

            return route;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (route) {
            return route.outlet === 'primary';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (route) {
            return route.data;
          })).subscribe(function (event) {
            // tslint:disable-next-line:no-string-literal
            var routeData = event['data'];
            var currentRouteSeoData = new _seo_data_model__WEBPACK_IMPORTED_MODULE_5__["SeoDataModel"]();

            if (routeData && routeData.seo) {
              routeData.seo.subscribe(function (seoData) {
                currentRouteSeoData.title = seoData.title;
                currentRouteSeoData.description = seoData.description;
                currentRouteSeoData.keywords = seoData.keywords;
                currentRouteSeoData.image = seoData.image;

                _this20.setSeoMetaTags(currentRouteSeoData);
              });
            } else {
              // Set default SEO values here
              currentRouteSeoData.title = 'Ionic Full Starter App';
              currentRouteSeoData.description = 'Ionic 5 Full Starter App Template - by IonicThemes';
              currentRouteSeoData.keywords = '';
              currentRouteSeoData.image = 'https://s3-us-west-2.amazonaws.com/ionicthemes/imgs/logofacebook.png';

              _this20.setSeoMetaTags(currentRouteSeoData);
            } // Set Canonical URL
            // * Note: This is an advanced use case. If you want to set canonical URL un-comment the following line
            // this.updateCanonicalUrl(this.getCurrentUrl(this.platformLocation));

          });
        }

        _createClass(SeoService, [{
          key: "setSeoMetaTags",
          value: function setSeoMetaTags(seoData) {
            this.title.setTitle(seoData.title);
            this.meta.updateTag({
              name: 'description',
              content: seoData.description
            }, 'name="description"');
            this.meta.updateTag({
              name: 'keywords',
              content: seoData.keywords
            }, 'name="keywords"');
            this.meta.updateTag({
              name: 'twitter:title',
              content: seoData.title
            }, 'name="twitter:title"');
            this.meta.updateTag({
              name: 'twitter:description',
              content: seoData.description
            }, 'name="twitter:description"');
            this.meta.updateTag({
              name: 'twitter:image',
              content: seoData.image
            }, 'name="twitter:image"');
            this.meta.updateTag({
              name: 'DC.title',
              content: seoData.title
            }, 'name="DC.title"');
            this.meta.updateTag({
              name: 'DC.description',
              content: seoData.description
            }, 'name="DC.description"');
            this.meta.updateTag({
              property: 'og:title',
              content: seoData.title
            }, 'property="og:title"');
            this.meta.updateTag({
              property: 'og:description',
              content: seoData.description
            }, 'property="og:description"');
            this.meta.updateTag({
              property: 'og:image',
              content: seoData.image
            }, 'property="og:image"'); // You can add more tags here if you need.
          }
        }, {
          key: "updateCanonicalUrl",
          value: function updateCanonicalUrl(url) {
            var head = this.document.getElementsByTagName('head')[0];
            var element = this.document.querySelector("link[rel='canonical']") || null;

            if (element == null) {
              element = this.document.createElement('link');
              head.appendChild(element);
            }

            element.setAttribute('rel', 'canonical');
            element.setAttribute('href', url);
          }
        }, {
          key: "getCurrentUrl",
          value: function getCurrentUrl(platformLocation) {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
              return this.canonicalUrl + platformLocation.location.pathname;
            } else {
              return this.canonicalUrl + this.baseHref + this.request['path'];
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._routerSubscription.unsubscribe();
          }
        }]);

        return SeoService;
      }();

      SeoService.ɵfac = function SeoService_Factory(t) {
        return new (t || SeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_6__["REQUEST"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["PlatformLocation"]));
      };

      SeoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SeoService,
        factory: SeoService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "zK/y":
    /*!**********************************************************!*\
      !*** ./src/app/shell/text-shell/text-shell.component.ts ***!
      \**********************************************************/

    /*! exports provided: TextShellComponent */

    /***/
    function zKY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextShellComponent", function () {
        return TextShellComponent;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TextShellComponent = /*#__PURE__*/function () {
        function TextShellComponent() {
          _classCallCheck(this, TextShellComponent);

          // To debug shell styles, change configuration in the environment file
          this.debugMode = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appShellConfig && _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appShellConfig.debug ? _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appShellConfig.debug : false;
          this.textLoaded = false;
        }

        _createClass(TextShellComponent, [{
          key: "data",
          set: function set(val) {
            if (!this.debugMode) {
              this._data = val !== undefined && val !== null ? val : '';
            }

            if (this._data && this._data !== '') {
              this.textLoaded = true;
            } else {
              this.textLoaded = false;
            }
          }
        }]);

        return TextShellComponent;
      }();

      TextShellComponent.ɵfac = function TextShellComponent_Factory(t) {
        return new (t || TextShellComponent)();
      };

      TextShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TextShellComponent,
        selectors: [["app-text-shell"]],
        hostVars: 2,
        hostBindings: function TextShellComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-loaded", ctx.textLoaded);
          }
        },
        inputs: {
          data: "data"
        },
        decls: 2,
        vars: 1,
        template: function TextShellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._data);
          }
        },
        styles: ["[_nghost-%COMP%] {\n  --text-shell-background: transparent;\n  --text-shell-line-color: #EEE;\n  --text-shell-line-height: 16px;\n  --text-shell-line-gutter: 3px;\n  display: block;\n  position: relative;\n  color: transparent;\n  background-color: var(--text-shell-background);\n  transform-style: preserve-3d;\n  background-clip: content-box;\n}\n\n[_nghost-%COMP%]:not([animation]) {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation])[lines=\"1\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 85% , var(--text-shell-background, #FFF) 85%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation])[lines=\"2\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 89% , var(--text-shell-background, #FFF) 89%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 32% , var(--text-shell-background, #FFF) 32%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation])[lines=\"3\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 39% , var(--text-shell-background, #FFF) 39%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation])[lines=\"4\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 63% , var(--text-shell-background, #FFF) 63%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 47% , var(--text-shell-background, #FFF) 47%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation])[lines=\"5\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 66% , var(--text-shell-background, #FFF) 66%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 68% , var(--text-shell-background, #FFF) 68%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 42% , var(--text-shell-background, #FFF) 42%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation])[lines=\"6\"] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 76% , var(--text-shell-background, #FFF) 76%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 70% , var(--text-shell-background, #FFF) 70%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 62% , var(--text-shell-background, #FFF) 62%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 62% , var(--text-shell-background, #FFF) 62%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 37% , var(--text-shell-background, #FFF) 37%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n[_nghost-%COMP%]:not([animation]).text-loaded {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n\n[animation=bouncing][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: animateLine;\n          animation-name: animateLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@-webkit-keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n@keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n[animation=bouncing][lines=\"1\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-name: animateLine;\n          animation-name: animateLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px);\n  }\n}\n\n[animation=bouncing][lines=\"2\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 45% , var(--text-shell-background, #FFF) 45%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@-webkit-keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n[animation=bouncing][lines=\"3\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 87% , var(--text-shell-background, #FFF) 87%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 69% , var(--text-shell-background, #FFF) 69%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 37% , var(--text-shell-background, #FFF) 37%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n[animation=bouncing][lines=\"4\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 91% , var(--text-shell-background, #FFF) 91%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 72% , var(--text-shell-background, #FFF) 72%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 33% , var(--text-shell-background, #FFF) 33%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n[animation=bouncing][lines=\"5\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 79% , var(--text-shell-background, #FFF) 79%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 67% , var(--text-shell-background, #FFF) 67%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 72% , var(--text-shell-background, #FFF) 72%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 37% , var(--text-shell-background, #FFF) 37%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n[animation=bouncing][lines=\"6\"][_nghost-%COMP%] {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 95% , var(--text-shell-background, #FFF) 95%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 80% , var(--text-shell-background, #FFF) 80%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 65% , var(--text-shell-background, #FFF) 65%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 73% , var(--text-shell-background, #FFF) 73%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 80% , var(--text-shell-background, #FFF) 80%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 31% , var(--text-shell-background, #FFF) 31%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  animation-direction: alternate-reverse;\n  -webkit-animation-name: animateMultiLine;\n          animation-name: animateMultiLine;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n}\n\n@keyframes animateMultiLine {\n  0% {\n    background-size: 85% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  75% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  55% var(--text-shell-line-height, 16px);\n  }\n  100% {\n    background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  }\n}\n\n[animation=bouncing].text-loaded[_nghost-%COMP%] {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n  -webkit-animation: 0;\n          animation: 0;\n}\n\n[animation=gradient][_nghost-%COMP%] {\n  --text-shell-background: #FFF;\n  --text-shell-line-color: transparent !important;\n  --text-shell-animation-background: #EEE;\n  --text-shell-animation-color: #DDD;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n[animation=gradient][_nghost-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(to right, var(--text-shell-animation-background) 8%, var(--text-shell-animation-color) 18%, var(--text-shell-animation-background) 33%);\n  background-size: 800px 104px;\n  -webkit-animation: animateBackground 2s ease-in-out infinite;\n          animation: animateBackground 2s ease-in-out infinite;\n}\n\n@-webkit-keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n@keyframes animateBackground {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\n[animation=gradient][_nghost-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n[animation=gradient][lines=\"1\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n[animation=gradient][lines=\"1\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 94% , var(--text-shell-background, #FFF) 94%);\n  background-position: 0 0px;\n  background-size: 100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 1) + (var(--text-shell-line-gutter, 3px) * (1 - 1)));\n}\n\n[animation=gradient][lines=\"2\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n[animation=gradient][lines=\"2\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 93% , var(--text-shell-background, #FFF) 93%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 46% , var(--text-shell-background, #FFF) 46%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 2) + (var(--text-shell-line-gutter, 3px) * (2 - 1)));\n}\n\n[animation=gradient][lines=\"3\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n[animation=gradient][lines=\"3\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 90% , var(--text-shell-background, #FFF) 90%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 70% , var(--text-shell-background, #FFF) 70%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 43% , var(--text-shell-background, #FFF) 43%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 3) + (var(--text-shell-line-gutter, 3px) * (3 - 1)));\n}\n\n[animation=gradient][lines=\"4\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n[animation=gradient][lines=\"4\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 78% , var(--text-shell-background, #FFF) 78%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 69% , var(--text-shell-background, #FFF) 69%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 37% , var(--text-shell-background, #FFF) 37%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 4) + (var(--text-shell-line-gutter, 3px) * (4 - 1)));\n}\n\n[animation=gradient][lines=\"5\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n[animation=gradient][lines=\"5\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 92% , var(--text-shell-background, #FFF) 92%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 75% , var(--text-shell-background, #FFF) 75%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 80% , var(--text-shell-background, #FFF) 80%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 67% , var(--text-shell-background, #FFF) 67%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 33% , var(--text-shell-background, #FFF) 33%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 5) + (var(--text-shell-line-gutter, 3px) * (5 - 1)));\n}\n\n[animation=gradient][lines=\"6\"][_nghost-%COMP%] {\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n[animation=gradient][lines=\"6\"][_nghost-%COMP%]::after {\n  background-image: linear-gradient(to right, var(--text-shell-line-color, #CCC) 88% , var(--text-shell-background, #FFF) 88%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 69% , var(--text-shell-background, #FFF) 69%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 74% , var(--text-shell-background, #FFF) 74%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 62% , var(--text-shell-background, #FFF) 62%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 71% , var(--text-shell-background, #FFF) 71%),  linear-gradient(to right, var(--text-shell-background, #FFF) 100%, var(--text-shell-background, #FFF) 100%),  linear-gradient(to right, var(--text-shell-line-color, #CCC) 47% , var(--text-shell-background, #FFF) 47%);\n  background-position: 0 0px,  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (2 - 1)) + (var(--text-shell-line-gutter, 3px) * (2 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (3 - 1)) + (var(--text-shell-line-gutter, 3px) * (3 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (4 - 1)) + (var(--text-shell-line-gutter, 3px) * (4 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (5 - 1)) + (var(--text-shell-line-gutter, 3px) * (5 - 1))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 2))),  0 calc((var(--text-shell-line-height, 16px) * (6 - 1)) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n  background-size: 100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px),  100% var(--text-shell-line-gutter, 3px),  100% var(--text-shell-line-height, 16px);\n  background-repeat: no-repeat;\n  min-height: calc((var(--text-shell-line-height, 16px) * 6) + (var(--text-shell-line-gutter, 3px) * (6 - 1)));\n}\n\n[animation=gradient].text-loaded[_nghost-%COMP%] {\n  background: none;\n  min-height: inherit;\n  color: inherit;\n}\n\n[animation=gradient].text-loaded[_nghost-%COMP%]::before, [animation=gradient].text-loaded[_nghost-%COMP%]::after {\n  background: none;\n  -webkit-animation: 0;\n          animation: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RleHQtc2hlbGwuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9taXhpbnMvbWFza2VkLWxpbmVzLWJhY2tncm91bmQuc2NzcyIsIi4uLy4uLy4uLy4uL21peGlucy9iYWNrZ3JvdW5kLWhlaWdodC5zY3NzIiwiLi4vLi4vLi4vLi4vbWl4aW5zL2JvdW5jaW5nLWxpbmVzLWJhY2tncm91bmQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLDRCQUFBO0VBR0EsNEJBQUE7QUFSRjs7QUFZQTtFQ1BJLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VDZkYsNEdBQUE7QUZlRjs7QUFVSTtFQ2JBLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VDZkYsNEdBQUE7QUZzQkY7O0FBR0k7RUNnQkEsdVZBQUE7RUFDQSxnUEFBQTtFQUNBLDhJQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUY2QkY7O0FBSkk7RUNnQkEsa2pCQUFBO0VBQ0Esc2NBQUE7RUFDQSxtT0FBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGb0NGOztBQVhJO0VDZ0JBLDZ3QkFBQTtFQUNBLDRwQkFBQTtFQUNBLHdUQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUYyQ0Y7O0FBbEJJO0VDZ0JBLHcrQkFBQTtFQUNBLGszQkFBQTtFQUNBLDZZQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUZrREY7O0FBekJJO0VDZ0JBLG1zQ0FBQTtFQUNBLHdrQ0FBQTtFQUNBLGtlQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUZ5REY7O0FBM0JFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUE2Qko7O0FBeEJBO0VHekJJLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7VUFBQSw4QkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RURuQkYsNEdBQUE7RUNtRkEscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBSFZGOztBR3ZESTtFQUNFO0lBQ0Usd0RBQUE7RUh5RE47RUd0REk7SUFDRSx5REFBQTtFSHdETjtBQUNGOztBRy9ESTtFQUNFO0lBQ0Usd0RBQUE7RUh5RE47RUd0REk7SUFDRSx5REFBQTtFSHdETjtBQUNGOztBQXhDSTtFRy9CQSw0SEFBQTtFQUNBLDBCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VEbkJGLDRHQUFBO0VDbUZBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUhXRjs7QUc1RUk7RUFDRTtJQUNFLHdEQUFBO0VIOEVOO0VHM0VJO0lBQ0UseURBQUE7RUg2RU47QUFDRjs7QUE3REk7RUdrQkEsdVZBQUE7RUFDQSxnUEFBQTtFQUNBLDhJQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RURwRUYsNEdBQUE7RUNtRkEscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBSGdDRjs7QUdoREk7RUFDRTtJQUNFLDRJQUFBO0VIa0ROO0VHL0NJO0lBQ0UsOElBQUE7RUhpRE47QUFDRjs7QUd4REk7RUFDRTtJQUNFLDRJQUFBO0VIa0ROO0VHL0NJO0lBQ0UsOElBQUE7RUhpRE47QUFDRjs7QUFsRkk7RUdrQkEsa2pCQUFBO0VBQ0Esc2NBQUE7RUFDQSxtT0FBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VEcEVGLDRHQUFBO0VDbUZBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUhxREY7O0FHckVJO0VBQ0U7SUFDRSxnT0FBQTtFSHVFTjtFR3BFSTtJQUNFLG1PQUFBO0VIc0VOO0FBQ0Y7O0FBdkdJO0VHa0JBLDZ3QkFBQTtFQUNBLDRwQkFBQTtFQUNBLHdUQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQ0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RURwRUYsNEdBQUE7RUNtRkEscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBSDBFRjs7QUcxRkk7RUFDRTtJQUNFLG9UQUFBO0VINEZOO0VHekZJO0lBQ0Usd1RBQUE7RUgyRk47QUFDRjs7QUE1SEk7RUdrQkEsdytCQUFBO0VBQ0EsazNCQUFBO0VBQ0EsNllBQUE7RUFDQSw0QkFBQTtFQUVBLHNDQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFRHBFRiw0R0FBQTtFQ21GQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FIK0ZGOztBRy9HSTtFQUNFO0lBQ0Usd1lBQUE7RUhpSE47RUc5R0k7SUFDRSw2WUFBQTtFSGdITjtBQUNGOztBQWpKSTtFR2tCQSxtc0NBQUE7RUFDQSx3a0NBQUE7RUFDQSxrZUFBQTtFQUNBLDRCQUFBO0VBRUEsc0NBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VEcEVGLDRHQUFBO0VDbUZBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUhvSEY7O0FHcElJO0VBQ0U7SUFDRSw0ZEFBQTtFSHNJTjtFR25JSTtJQUNFLGtlQUFBO0VIcUlOO0FBQ0Y7O0FBaktFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxvQkFBQTtVQUFBLFlBQUE7QUFrS0o7O0FBN0pBO0VBQ0UsNkJBQUE7RUFDQSwrQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0NBQUE7RUUvREEsNEdBQUE7QUZnT0Y7O0FBMUpFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1LQUNFO0VBQ0YsNEJBQUE7RUFDQSw0REFBQTtVQUFBLG9EQUFBO0FBMkpKOztBQXhKRTtFQUNFO0lBQ0UsNkJBQUE7RUEwSko7RUF2SkU7SUFDRSw0QkFBQTtFQXlKSjtBQUNGOztBQWhLRTtFQUNFO0lBQ0UsNkJBQUE7RUEwSko7RUF2SkU7SUFDRSw0QkFBQTtFQXlKSjtBQUNGOztBQXJKRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUN4RkEsNEhBQUE7RUFDQSwwQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUNmRiw0R0FBQTtBRmdRRjs7QUFwSkk7RUU1R0YsNEdBQUE7QUZtUUY7O0FBbkpNO0VDcEdGLDRIQUFBO0VBQ0EsMEJBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VDZkYsNEdBQUE7QUYwUUY7O0FBOUpJO0VFNUdGLDRHQUFBO0FGNlFGOztBQTdKTTtFQ3ZFRix1VkFBQTtFQUNBLGdQQUFBO0VBQ0EsOElBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRm9SRjs7QUF4S0k7RUU1R0YsNEdBQUE7QUZ1UkY7O0FBdktNO0VDdkVGLGtqQkFBQTtFQUNBLHNjQUFBO0VBQ0EsbU9BQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRjhSRjs7QUFsTEk7RUU1R0YsNEdBQUE7QUZpU0Y7O0FBakxNO0VDdkVGLDZ3QkFBQTtFQUNBLDRwQkFBQTtFQUNBLHdUQUFBO0VBQ0EsNEJBQUE7RUM1Q0YsNEdBQUE7QUZ3U0Y7O0FBNUxJO0VFNUdGLDRHQUFBO0FGMlNGOztBQTNMTTtFQ3ZFRix3K0JBQUE7RUFDQSxrM0JBQUE7RUFDQSw2WUFBQTtFQUNBLDRCQUFBO0VDNUNGLDRHQUFBO0FGa1RGOztBQXRNSTtFRTVHRiw0R0FBQTtBRnFURjs7QUFyTU07RUN2RUYsbXNDQUFBO0VBQ0Esd2tDQUFBO0VBQ0Esa2VBQUE7RUFDQSw0QkFBQTtFQzVDRiw0R0FBQTtBRjRURjs7QUF0TUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQXdNSjs7QUF0TUk7RUFFRSxnQkFBQTtFQUNBLG9CQUFBO1VBQUEsWUFBQTtBQXVNTiIsImZpbGUiOiJ0ZXh0LXNoZWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vbWl4aW5zL2JhY2tncm91bmQtaGVpZ2h0XCI7XG5AaW1wb3J0IFwiLi9taXhpbnMvbWFza2VkLWxpbmVzLWJhY2tncm91bmRcIjtcbkBpbXBvcnQgXCIuL21peGlucy9ib3VuY2luZy1saW5lcy1iYWNrZ3JvdW5kXCI7XG5cbiRtYXgtbGluZXMtY291bnQ6IDY7XG5cbjpob3N0IHtcbiAgLS10ZXh0LXNoZWxsLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogI0VFRTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICAtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXI6IDNweDtcblxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCk7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC8vIFRvIGZpeCAxcHggbGluZSBtaXNhbGlnbm1lbnQgaW4gY2hyb21lOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2dyb3VuZC1jbGlwXG4gIC8vIChJIGFsc28gbm90aWNlZCB0aGF0IGlmIEkgc2V0IHRoZSBjb2xvciB0byBhIHNvbGlkIGNvbG9yIGluc3RlYWQgb2YgaGF2aW5nIG9wYWNpdHksIHRoZSBpc3N1ZSBkb2Vzbid0IGhhcHBlbilcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcbn1cblxuLy8gRGVmYXVsdCBzdHlsZXMuIFdoZW4gbm8gYW5pbWF0aW9uIGF0dHJpYnV0ZSBpcyBwcm92aWRlZFxuOmhvc3QoOm5vdChbYW5pbWF0aW9uXSkpIHtcbiAgLy8gRGVmYXVsdCBvbmUgbGluZSB0ZXh0LXNoZWxsXG4gIEBpbmNsdWRlIG1hc2tlZC1saW5lcy1iYWNrZ3JvdW5kKDEpO1xuXG4gIC8vIFN1cHBvcnQgZm9yIFtsaW5lc10gYXR0cmlidXRlXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJG1heC1saW5lcy1jb3VudCB7XG4gICAgJltsaW5lcz1cIiN7ICRpIH1cIl0ge1xuICAgICAgQGluY2x1ZGUgbWFza2VkLWxpbmVzLWJhY2tncm91bmQoJGkpO1xuICAgIH1cbiAgfVxuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxufVxuXG4vLyBCb3VuY2luZyBsaW5lIGxvYWRpbmcgYW5pbWF0aW9uXG46aG9zdChbYW5pbWF0aW9uPVwiYm91bmNpbmdcIl0pIHtcbiAgLy8gRGVmYXVsdCBvbmUgbGluZSB0ZXh0LXNoZWxsXG4gIEBpbmNsdWRlIGJvdW5jaW5nLWxpbmVzLWJhY2tncm91bmQoMSk7XG5cbiAgLy8gU3VwcG9ydCBmb3IgW2xpbmVzXSBhdHRyaWJ1dGVcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4LWxpbmVzLWNvdW50IHtcbiAgICAmW2xpbmVzPVwiI3sgJGkgfVwiXSB7XG4gICAgICBAaW5jbHVkZSBib3VuY2luZy1saW5lcy1iYWNrZ3JvdW5kKCRpKTtcbiAgICB9XG4gIH1cblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgLy8gMCBpcyB0aGUgZGVmYXVsdCB2YWx1ZSAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTU5NjMwNDQvMTExNjk1OSlcbiAgICBhbmltYXRpb246IDA7XG4gIH1cbn1cblxuLy8gQmFja2dyb3VuZCBncmFkaWVudCBiZW5lYXRoIG1hc2tlZCBsaW5lc1xuOmhvc3QoW2FuaW1hdGlvbj1cImdyYWRpZW50XCJdKSB7XG4gIC0tdGV4dC1zaGVsbC1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiAjRUVFO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiAjREREO1xuXG5cbiAgLy8gQ2FsY3VsYXRlIGRlZmF1bHQgaGVpZ2h0IGZvciAxIGxpbmVcbiAgQGluY2x1ZGUgYmFja2dyb3VuZC1oZWlnaHQobWluLWhlaWdodCwgMSk7XG5cbiAgLy8gVGhlIGFuaW1hdGlvbiB0aGF0IGdvZXMgYmVuZWF0aCB0aGUgbWFza3NcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDpcbiAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZCkgOCUsIHZhcigtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yKSAxOCUsIHZhcigtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQpIDMzJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDRweDtcbiAgICBhbmltYXRpb246IGFuaW1hdGVCYWNrZ3JvdW5kIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG5cbiAgQGtleWZyYW1lcyBhbmltYXRlQmFja2dyb3VuZCB7XG4gICAgMCV7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMFxuICAgIH1cblxuICAgIDEwMCV7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwXG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIG1hc2tzXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICAvLyBEZWZhdWx0IG9uZSBsaW5lIHRleHQtc2hlbGxcbiAgICBAaW5jbHVkZSBtYXNrZWQtbGluZXMtYmFja2dyb3VuZCgxKTtcbiAgfVxuXG4gIC8vIFN1cHBvcnQgZm9yIFtsaW5lc10gYXR0cmlidXRlXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJG1heC1saW5lcy1jb3VudCB7XG4gICAgJltsaW5lcz1cIiN7ICRpIH1cIl0ge1xuICAgICAgLy8gQ2FsY3VsYXRlIGRlZmF1bHQgaGVpZ2h0IGZvciAkaSBsaW5lc1xuICAgICAgQGluY2x1ZGUgYmFja2dyb3VuZC1oZWlnaHQobWluLWhlaWdodCwgJGkpO1xuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIG1hc2tlZC1saW5lcy1iYWNrZ3JvdW5kKCRpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGFuaW1hdGlvbjogMDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuL3V0aWxzXCI7XG5AaW1wb3J0IFwiLi9iYWNrZ3JvdW5kLWhlaWdodFwiO1xuXG5AbWl4aW4gbWFza2VkLWxpbmVzLWJhY2tncm91bmQoJGxpbmVzOiAxKSB7XG4gICRsaW5lLWhlaWdodDogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gICRsaW5lLXNwYWNpbmc6IHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCk7XG4gICRiZy1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKTtcbiAgJG1hc2stY29sb3I6IHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRik7XG4gICRsaW5lLWJnLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpO1xuICAkYmcteS1wb3M6IDBweDtcbiAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDg1LCA5NSl9O1xuICAkYmctaW1hZ2U6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICcgKyAkYmctY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclICwgJyArICRtYXNrLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSknO1xuICAkYmctcG9zaXRpb246ICcwICcgKyAkYmcteS1wb3M7XG4gICRiZy1zaXplOiAnMTAwJSAnICsgJGxpbmUtaGVpZ2h0O1xuXG4gIEBpZiAoJGxpbmVzID09IDEpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAjeyRiZy1pbWFnZX07XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogI3skYmctcG9zaXRpb259O1xuICAgIGJhY2tncm91bmQtc2l6ZTogI3skYmctc2l6ZX07XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfSBAZWxzZSB7XG4gICAgQGZvciAkaSBmcm9tIDIgdGhyb3VnaCAkbGluZXMge1xuICAgICAgLy8gQWRkIHNlcGFyYXRvciBiZXR3ZWVuIGxpbmVzXG4gICAgICAkYmctaW1hZ2U6IGFwcGVuZCgkYmctaW1hZ2UsIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI3skbGluZS1iZy1jb2xvcn0gMTAwJSwgI3skbGluZS1iZy1jb2xvcn0gMTAwJSkpO1xuICAgICAgLy8gVGhpcyBsaW5lYXItZ3JhZGllbnQgYXMgc2VwYXJhdG9yIHN0YXJ0cyBiZWxvdyB0aGUgbGFzdCBsaW5lLFxuICAgICAgLy8gc28gd2UgaGF2ZSB0byBhZGQgJGxpbmUtaGVpZ2h0IHRvIG91ciB5LXBvcyBwb2ludGVyXG4gICAgICAkYmcteS1wb3M6IGNhbGMoKCN7JGxpbmUtaGVpZ2h0fSAqICgjeyRpfSAtIDEpKSArICgjeyRsaW5lLXNwYWNpbmd9ICogKCN7JGl9IC0gMikpKTtcbiAgICAgICRiZy1wb3NpdGlvbjogYXBwZW5kKCRiZy1wb3NpdGlvbiwgJzAgJyArICRiZy15LXBvcyk7XG4gICAgICAkYmctc2l6ZTogYXBwZW5kKCRiZy1zaXplLCAnMTAwJSAnICsgJGxpbmUtc3BhY2luZyk7XG5cbiAgICAgIC8vIEFkZCBuZXcgbGluZVxuICAgICAgLy8gVGhlIGxhc3QgbGluZSBzaG91bGQgYmUgbmFycm93IHRoYW4gdGhlIG90aGVyc1xuICAgICAgQGlmICgkaSA9PSAkbGluZXMpIHtcbiAgICAgICAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDMwLCA1MCl9O1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSg2MCwgODApfTtcbiAgICAgIH1cbiAgICAgICRiZy1pbWFnZTogYXBwZW5kKCRiZy1pbWFnZSwgJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgJyArICRiZy1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUgLCAnICsgJG1hc2stY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclKScpO1xuICAgICAgLy8gVGhpcyBuZXcgbGluZSBzdGFydHMgYmVsb3cgdGhlIHBydmlvdXNseSBhZGRlZCBzZXBhcmF0b3IsXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGFkZCAkbGluZS1zcGFjaW5nIHRvIG91ciB5LXBvcyBwb2ludGVyXG4gICAgICAkYmcteS1wb3M6IGNhbGMoKCN7JGxpbmUtaGVpZ2h0fSAqICgjeyRpfSAtIDEpKSArICgjeyRsaW5lLXNwYWNpbmd9ICogKCN7JGl9IC0gMSkpKTtcbiAgICAgICRiZy1wb3NpdGlvbjogYXBwZW5kKCRiZy1wb3NpdGlvbiwgJzAgJyArICRiZy15LXBvcyk7XG4gICAgICAkYmctc2l6ZTogYXBwZW5kKCRiZy1zaXplLCAnMTAwJSAnICsgJGxpbmUtaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAje3RvLXN0cmluZygkYmctaW1hZ2UsICcsICcpfTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAje3RvLXN0cmluZygkYmctcG9zaXRpb24sICcsICcpfTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICN7dG8tc3RyaW5nKCRiZy1zaXplLCAnLCAnKX07XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxuXG4gIEBpbmNsdWRlIGJhY2tncm91bmQtaGVpZ2h0KG1pbi1oZWlnaHQsICRsaW5lcyk7XG59XG4iLCJAbWl4aW4gYmFja2dyb3VuZC1oZWlnaHQoJHByb3BlcnR5LCAkbGluZXM6IDEpIHtcbiAgJGxpbmUtaGVpZ2h0OiB2YXIoLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0LCAxNnB4KTtcbiAgJGxpbmUtc3BhY2luZzogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWd1dHRlciwgM3B4KTtcblxuICAjeyRwcm9wZXJ0eX06IGNhbGMoKCN7JGxpbmUtaGVpZ2h0fSAqICN7JGxpbmVzfSkgKyAoI3skbGluZS1zcGFjaW5nfSAqICgjeyRsaW5lc30gLSAxKSkpO1xufVxuIiwiQGltcG9ydCBcIi4vdXRpbHNcIjtcblxuQG1peGluIGJvdW5jaW5nLWxpbmVzLWJhY2tncm91bmQoJGxpbmVzOiAxKSB7XG4gICRsaW5lLWhlaWdodDogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodCwgMTZweCk7XG4gICRsaW5lLXNwYWNpbmc6IHZhcigtLXRleHQtc2hlbGwtbGluZS1ndXR0ZXIsIDNweCk7XG4gICRiZy1jb2xvcjogdmFyKC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yLCAjQ0NDKTtcbiAgJG1hc2stY29sb3I6IHZhcigtLXRleHQtc2hlbGwtYmFja2dyb3VuZCwgI0ZGRik7XG4gICRsaW5lLWJnLWNvbG9yOiB2YXIoLS10ZXh0LXNoZWxsLWJhY2tncm91bmQsICNGRkYpO1xuICAkYmcteS1wb3M6IDBweDtcbiAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDg1LCA5NSl9O1xuICAkYmctaW1hZ2U6ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICcgKyAkYmctY29sb3IgKyAnICcgKyAkcmFuZC13aWR0aCArICclICwgJyArICRtYXNrLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSknO1xuICAkYmctcG9zaXRpb246ICcwICcgKyAkYmcteS1wb3M7XG4gICRiZy1zaXplOiAnMTAwJSAnICsgJGxpbmUtaGVpZ2h0O1xuICAkYmctc2l6ZS1hbmltYXRpb24tZnJvbTogJzg1JSAnICsgJGxpbmUtaGVpZ2h0O1xuICAkYmctc2l6ZS1hbmltYXRpb24tdG86ICcxMDAlICcgKyAkbGluZS1oZWlnaHQ7XG5cbiAgQGlmICgkbGluZXMgPT0gMSkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICN7JGJnLWltYWdlfTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAjeyRiZy1wb3NpdGlvbn07XG4gICAgYmFja2dyb3VuZC1zaXplOiAjeyRiZy1zaXplfTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlTGluZTtcblxuICAgIEBrZXlmcmFtZXMgYW5pbWF0ZUxpbmUge1xuICAgICAgMCV7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogI3skYmctc2l6ZS1hbmltYXRpb24tZnJvbX07XG4gICAgICB9XG5cbiAgICAgIDEwMCV7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogI3skYmctc2l6ZS1hbmltYXRpb24tdG99O1xuICAgICAgfVxuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGZvciAkaSBmcm9tIDIgdGhyb3VnaCAkbGluZXMge1xuICAgICAgLy8gQWRkIHNlcGFyYXRvciBiZXR3ZWVuIGxpbmVzXG4gICAgICAkYmctaW1hZ2U6IGFwcGVuZCgkYmctaW1hZ2UsIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI3skbGluZS1iZy1jb2xvcn0gMTAwJSwgI3skbGluZS1iZy1jb2xvcn0gMTAwJSkpO1xuICAgICAgLy8gVGhpcyBsaW5lYXItZ3JhZGllbnQgYXMgc2VwYXJhdG9yIHN0YXJ0cyBiZWxvdyB0aGUgbGFzdCBsaW5lLFxuICAgICAgLy8gc28gd2UgaGF2ZSB0byBhZGQgJGxpbmUtaGVpZ2h0IHRvIG91ciB5LXBvcyBwb2ludGVyXG4gICAgICAkYmcteS1wb3M6IGNhbGMoKCN7JGxpbmUtaGVpZ2h0fSAqICgjeyRpfSAtIDEpKSArICgjeyRsaW5lLXNwYWNpbmd9ICogKCN7JGl9IC0gMikpKTtcbiAgICAgICRiZy1wb3NpdGlvbjogYXBwZW5kKCRiZy1wb3NpdGlvbiwgJzAgJyArICRiZy15LXBvcyk7XG4gICAgICAkYmctc2l6ZTogYXBwZW5kKCRiZy1zaXplLCAnMTAwJSAnICsgJGxpbmUtc3BhY2luZyk7XG4gICAgICAvLyBzZXBhcmF0b3IgbGluZXMgaGF2ZSB0aGUgc2FtZSBpbml0aWFsIGFuZCBlbmQgc3RhdGUsIHRodXMgbm8gYW5pbWF0aW9uIG9jY3Vyc1xuICAgICAgJGJnLXNpemUtYW5pbWF0aW9uLWZyb206IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tZnJvbSwgJzEwMCUgJyArICRsaW5lLXNwYWNpbmcpO1xuICAgICAgJGJnLXNpemUtYW5pbWF0aW9uLXRvOiBhcHBlbmQoJGJnLXNpemUtYW5pbWF0aW9uLXRvLCAnMTAwJSAnICsgJGxpbmUtc3BhY2luZyk7XG5cbiAgICAgIC8vIEFkZCBuZXcgbGluZVxuICAgICAgLy8gVGhlIGxhc3QgbGluZSBzaG91bGQgYmUgbmFycm93IHRoYW4gdGhlIG90aGVyc1xuICAgICAgQGlmICgkaSA9PSAkbGluZXMpIHtcbiAgICAgICAgJHJhbmQtd2lkdGg6ICN7cmFuZG9tTnVtKDMwLCA1MCl9O1xuICAgICAgICAkYmctc2l6ZS1hbmltYXRpb24tZnJvbTogYXBwZW5kKCRiZy1zaXplLWFuaW1hdGlvbi1mcm9tLCAnNTUlICcgKyAkbGluZS1oZWlnaHQpO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgICRyYW5kLXdpZHRoOiAje3JhbmRvbU51bSg2MCwgODApfTtcbiAgICAgICAgJGJnLXNpemUtYW5pbWF0aW9uLWZyb206IGFwcGVuZCgkYmctc2l6ZS1hbmltYXRpb24tZnJvbSwgJzc1JSAnICsgJGxpbmUtaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgJGJnLWltYWdlOiBhcHBlbmQoJGJnLWltYWdlLCAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAnICsgJGJnLWNvbG9yICsgJyAnICsgJHJhbmQtd2lkdGggKyAnJSAsICcgKyAkbWFzay1jb2xvciArICcgJyArICRyYW5kLXdpZHRoICsgJyUpJyk7XG4gICAgICAvLyBUaGlzIG5ldyBsaW5lIHN0YXJ0cyBiZWxvdyB0aGUgcHJ2aW91c2x5IGFkZGVkIHNlcGFyYXRvcixcbiAgICAgIC8vIHNvIHdlIGhhdmUgdG8gYWRkICRsaW5lLXNwYWNpbmcgdG8gb3VyIHktcG9zIHBvaW50ZXJcbiAgICAgICRiZy15LXBvczogY2FsYygoI3skbGluZS1oZWlnaHR9ICogKCN7JGl9IC0gMSkpICsgKCN7JGxpbmUtc3BhY2luZ30gKiAoI3skaX0gLSAxKSkpO1xuICAgICAgJGJnLXBvc2l0aW9uOiBhcHBlbmQoJGJnLXBvc2l0aW9uLCAnMCAnICsgJGJnLXktcG9zKTtcbiAgICAgICRiZy1zaXplOiBhcHBlbmQoJGJnLXNpemUsICcxMDAlICcgKyAkbGluZS1oZWlnaHQpO1xuICAgICAgJGJnLXNpemUtYW5pbWF0aW9uLXRvOiBhcHBlbmQoJGJnLXNpemUtYW5pbWF0aW9uLXRvLCAnMTAwJSAnICsgJGxpbmUtaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAje3RvLXN0cmluZygkYmctaW1hZ2UsICcsICcpfTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAje3RvLXN0cmluZygkYmctcG9zaXRpb24sICcsICcpfTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICN7dG8tc3RyaW5nKCRiZy1zaXplLCAnLCAnKX07XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZS1yZXZlcnNlO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlTXVsdGlMaW5lO1xuXG4gICAgQGtleWZyYW1lcyBhbmltYXRlTXVsdGlMaW5lIHtcbiAgICAgIDAle1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICN7dG8tc3RyaW5nKCRiZy1zaXplLWFuaW1hdGlvbi1mcm9tLCAnLCAnKX07XG4gICAgICB9XG5cbiAgICAgIDEwMCV7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogI3t0by1zdHJpbmcoJGJnLXNpemUtYW5pbWF0aW9uLXRvLCAnLCAnKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgYmFja2dyb3VuZC1oZWlnaHQobWluLWhlaWdodCwgJGxpbmVzKTtcblxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      document.addEventListener('DOMContentLoaded', function () {
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
          return console.log(err);
        });
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map