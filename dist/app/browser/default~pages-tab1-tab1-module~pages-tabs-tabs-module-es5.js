(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-tab1-tab1-module~pages-tabs-tabs-module"], {
    /***/
    "HGan":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/explore-container/explore-container.module.ts ***!
      \*********************************************************************/

    /*! exports provided: ExploreContainerComponentModule */

    /***/
    function HGan(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function () {
        return ExploreContainerComponentModule;
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


      var _explore_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./explore-container.component */
      "XnsX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ExploreContainerComponentModule = function ExploreContainerComponentModule() {
        _classCallCheck(this, ExploreContainerComponentModule);
      };

      ExploreContainerComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: ExploreContainerComponentModule
      });
      ExploreContainerComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function ExploreContainerComponentModule_Factory(t) {
          return new (t || ExploreContainerComponentModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ExploreContainerComponentModule, {
          declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_3__["ExploreContainerComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
          exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_3__["ExploreContainerComponent"]]
        });
      })();
      /***/

    },

    /***/
    "LhMw":
    /*!*****************************************!*\
      !*** ./src/app/pages/tab1/tab1.page.ts ***!
      \*****************************************/

    /*! exports provided: Tab1Page */

    /***/
    function LhMw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _Services_account_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../Services/account/item-service */
      "n6XZ");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _HomePage_Service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./HomePage-Service */
      "P1M/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function Tab1Page_ion_col_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Tab1Page_ion_col_5_Template_ion_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r5.showAgeFilter = !ctx_r5.showAgeFilter;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function Tab1Page_ion_col_6_ion_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Tab1Page_ion_col_6_ion_button_1_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r8.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function Tab1Page_ion_col_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, Tab1Page_ion_col_6_ion_button_1_Template, 2, 0, "ion-button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.searchClicked);
        }
      }

      function Tab1Page_ion_toolbar_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-segment", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-segment-button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "All");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-segment-button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Sale");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ion-segment-button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Rent");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ion-segment-button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "ion-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function Tab1Page_ion_content_20_ion_row_5_ion_slides_2_ion_slide_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-card", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Tab1Page_ion_content_20_ion_row_5_ion_slides_2_ion_slide_1_Template_ion_card_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);

            return ctx_r15.categoryClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ion-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cat_r14 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", ctx_r13.category_bg)("color", ctx_r13.forSale ? "primary" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](cat_r14);
        }
      }

      function Tab1Page_ion_content_20_ion_row_5_ion_slides_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-slides", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, Tab1Page_ion_content_20_ion_row_5_ion_slides_2_ion_slide_1_Template, 10, 3, "ion-slide", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx_r12.slidesOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r12.categories);
        }
      }

      function Tab1Page_ion_content_20_ion_row_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, Tab1Page_ion_content_20_ion_row_5_ion_slides_2_Template, 2, 2, "ion-slides", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r10.viewEntered);
        }
      }

      function Tab1Page_ion_content_20_ion_col_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-col", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-card", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ion-ripple-effect");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("routerLink", "detail/", item_r17 == null ? null : item_r17.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", item_r17 == null ? null : item_r17.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r17 == null ? null : item_r17.price, " ");
        }
      }

      function Tab1Page_ion_content_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-content", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Top category");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, Tab1Page_ion_content_20_ion_row_5_Template, 3, 1, "ion-row", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-row", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, Tab1Page_ion_content_20_ion_col_8_Template, 6, 3, "ion-col", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fullscreen", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 3, ctx_r3.items));
        }
      }

      function Tab1Page_ion_content_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-list", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-item", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "ion-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-item", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ion-label", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "running machin");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ion-button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "ion-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-item", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ion-label", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "washer");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "ion-button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "ion-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ion-item", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "ion-label", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "tv");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ion-button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "ion-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      var Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(itemService, router, loadingController, homePageService) {
          _classCallCheck(this, Tab1Page);

          this.itemService = itemService;
          this.router = router;
          this.loadingController = loadingController;
          this.homePageService = homePageService;
          this.showAgeFilter = false;
          this.viewEntered = false;
          this.categories = [];
          this.category_bg = '';
          this.searchClicked = false;
          this.slidesOptions = {
            slidesPerView: 4.5,
            freeMode: true,
            zoom: {
              toggle: false
            }
          };
          this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
          this.searchFiltersObservable = this.searchSubject.asObservable();
        }

        _createClass(Tab1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.categories.push('Electronics');
            this.categories.push('Mobile');
            this.categories.push('Furniture');
            this.categories.push('House Hold');
            this.categories.push('Shose&Closing');
            this.categories.push('Baby&Kids');
            this.categories.push('Car');
            this.categories.push('Toys&Games');
            this.categories.push('Sport&outdoor');
            this.categories.push('House&Aps');
            this.categories.push('Indoor out door decorations');
            this.searchQuery = "";
            this.rangeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
              dual: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]({
                lower: 1,
                upper: 100
              })
            });
            this.items = this.homePageService.getAllItems();
            this.homePageService.getAllItems().subscribe(function (item) {
              console.log("ITEMS ARE " + item);
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.viewEntered = true;
          }
        }, {
          key: "searchList",
          value: function searchList() {
            this.searchSubject.next({
              lower: this.rangeForm.controls.dual.value.lower,
              upper: this.rangeForm.controls.dual.value.upper,
              query: this.searchQuery
            });
          }
        }, {
          key: "getItemDetail",
          value: function getItemDetail() {
            this.router.navigateByUrl("/item-detail");
          }
        }, {
          key: "categoryClicked",
          value: function categoryClicked() {
            this.category_bg = 'primary';
          }
        }, {
          key: "itemDetail",
          value: function itemDetail(id) {
            this.router.navigate(["redmarket/items/".concat(id)]);
          }
        }, {
          key: "close",
          value: function close() {
            this.searchClicked = false;
          }
        }, {
          key: "searchClick",
          value: function searchClick() {
            this.searchClicked = true;
          }
        }]);

        return Tab1Page;
      }();

      Tab1Page.ɵfac = function Tab1Page_Factory(t) {
        return new (t || Tab1Page)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_Services_account_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_HomePage_Service__WEBPACK_IMPORTED_MODULE_5__["HomePageService"]));
      };

      Tab1Page.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: Tab1Page,
        selectors: [["app-tab1"]],
        viewQuery: function Tab1Page_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSearchbar"], 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.searchBar = _t.first);
          }
        },
        decls: 22,
        vars: 12,
        consts: [[1, "ion-no-border", 3, "translucent"], [1, "filters-toolbar"], ["align-items-center", "", 1, "searchbar-row"], [3, "size"], ["autofocus", "true", "animated", "", "placeholder", "Filter by name...", 1, "items-searchbar", 3, "ngModel", "click", "ngModelChange", "ionChange"], ["size", "2", "class", "call-to-action-col", 4, "ngIf"], ["size", "3", "class", "call-to-action-col", 4, "ngIf"], [3, "formGroup", "hidden"], [1, "range-item-row"], ["size", "12"], [1, "range-header"], [1, "range-value"], [1, "range-label"], ["formControlName", "dual", "color", "secondary", "pin", "true", "dualKnobs", "true", "min", "1", "max", "100", "step", "1", "debounce", "400", 1, "range-control", 3, "ionChange"], [4, "ngIf"], [3, "fullscreen", 4, "ngIf"], ["size", "2", 1, "call-to-action-col"], ["mode", "ios", "fill", "clear", 1, "filters-btn", 3, "click"], ["slot", "icon-only", "name", "grid-outline"], ["size", "3", 1, "call-to-action-col"], ["fill", "clear", "color", "primary", "class", "filters-btn", 3, "click", 4, "ngIf"], ["fill", "clear", "color", "primary", 1, "filters-btn", 3, "click"], ["mode", "md"], ["value", "All"], ["value", "Sale"], ["value", "Rent"], ["value", "filter"], ["name", "options"], [3, "fullscreen"], [1, "item-ion-row"], ["size-xs", "4", "size-sm", "3", "size-lg", "2", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mode", "ios", "pager", "false", "class", "cat-ion-slides", 3, "options", 4, "ngIf"], ["mode", "ios", "pager", "false", 1, "cat-ion-slides", 3, "options"], [4, "ngFor", "ngForOf"], [1, "single-cat"], [1, "pic"], ["button", "", 1, "step1-ion-card", 3, "color", "click"], ["name", "bed-outline"], [1, "desc"], [1, "post-type"], ["size-xs", "4", "size-sm", "3", "size-lg", "2", 3, "routerLink"], ["ion-activatable", "", "ripple-parent", "", "tap", "", "tappable", "", 1, "shadow", "ion-no-margin", "ion-margin-bottom", "item-ion-card"], [1, "cover-img", 3, "src"], [1, "bottom-left"], ["lines", "full", 1, "inputs-list"], [1, "input-item"], ["slot", "start", "color", "primary"], ["slot", "end", "fill", "clear"], ["name", "close"], ["color", "primary"], ["mode", "ios", "slot", "end", "fill", "clear"]],
        template: function Tab1Page_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-row", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-col", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-searchbar", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Tab1Page_Template_ion_searchbar_click_4_listener() {
              return ctx.searchClick();
            })("ngModelChange", function Tab1Page_Template_ion_searchbar_ngModelChange_4_listener($event) {
              return ctx.searchQuery = $event;
            })("ionChange", function Tab1Page_Template_ion_searchbar_ionChange_4_listener() {
              return ctx.searchList();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, Tab1Page_ion_col_5_Template, 3, 0, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, Tab1Page_ion_col_6_Template, 2, 1, "ion-col", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ion-row", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-col", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Filter by age");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ion-col", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "ion-range", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionChange", function Tab1Page_Template_ion_range_ionChange_18_listener() {
              return ctx.searchList();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, Tab1Page_ion_toolbar_19_Template, 13, 0, "ion-toolbar", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, Tab1Page_ion_content_20_Template, 10, 5, "ion-content", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, Tab1Page_ion_content_21_Template, 22, 0, "ion-content", 14);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("translucent", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("size", ctx.searchClicked ? 9 : 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchQuery);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.searchClicked);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searchClicked);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.rangeForm)("hidden", !ctx.showAgeFilter);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.rangeForm.controls.dual.value.lower);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.rangeForm.controls.dual.value.upper);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.searchClicked);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.searchClicked);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searchClicked);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRange"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRippleEffect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
        styles: [".filters-toolbar[_ngcontent-%COMP%] {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n.filters-toolbar[_ngcontent-%COMP%]   .sc-ion-searchbar-md-h[_ngcontent-%COMP%] {\n  --background: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);\n  --border-radius: 20px;\n  --box-shadow: none;\n}\n.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  margin: 15px;\n}\n.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   ion-searchbar.items-searchbar[_ngcontent-%COMP%] {\n  padding: 0px;\n  height: 100%;\n  contain: content;\n}\n.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%] {\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-shrink: 0;\n  flex-grow: 0;\n  display: flex;\n  justify-content: flex-end;\n}\n.filters-toolbar[_ngcontent-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .filters-btn[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  margin-left: 3px;\n  margin: 0px;\n  font-size: 18px;\n  text-transform: none;\n  height: initial;\n}\n.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: var(--page-margin);\n  padding-top: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-value[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-header[_ngcontent-%COMP%]   .range-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n.filters-toolbar[_ngcontent-%COMP%]   .range-item-row[_ngcontent-%COMP%]   .range-control[_ngcontent-%COMP%] {\n  --ion-text-color: var(--ion-color-medium);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.bottom-left[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #fff;\n  padding: 5px;\n  height: 25px;\n  align-content: center;\n  bottom: 5px;\n  align-items: center;\n  margin-left: 5px;\n  font-weight: 500;\n  font-size: 12px;\n  background: rgba(0, 0, 0, 0.4);\n}\n.item-ion-card[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n  border-radius: 8px;\n  max-height: 150px;\n  min-height: 120px;\n}\n.item-ion-card[_ngcontent-%COMP%]   .cover-img[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-white);\n  background-size: cover;\n  background-position: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: relative;\n}\nh5[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  font-size: 20px;\n  font-weight: 700;\n  padding: 10px;\n  margin-left: 5px;\n  padding-bottom: 0px;\n}\nion-card-content[_ngcontent-%COMP%] {\n  padding: var(--content-padding, 8px) !important;\n}\n.item-ion-row[_ngcontent-%COMP%] {\n  width: calc(100% - 5px);\n  margin: 0 auto;\n}\n.item-ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n.cat-ion-slides[_ngcontent-%COMP%] {\n  margin-bottom: -20px;\n  margin-top: -23px;\n}\n.cat-ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .single-cat[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.cat-ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .single-cat[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n}\n.cat-ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .single-cat[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n}\n.cat-ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .single-cat[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  --ionicon-stroke-width: 16px;\n}\n.cat-ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .single-cat[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7QUFBRjtBQUVFO0VBQ0UsNERBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFRTtFQUNFLDhCQUFBO0VBQ0MsWUFBQTtBQUFMO0FBQ0k7RUFDRSxZQUFBO0VBRUEsWUFBQTtFQUVBLGdCQUFBO0FBRE47QUFJSTtFQUNFLHlDQUFBO1VBQUEsd0NBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUZOO0FBSU07RUFDRSxvQkFBQTtFQUVBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUVBLGVBQUE7QUFKUjtBQVdFO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUVBLHlEQUFBO0FBVko7QUFZSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0FBVk47QUFZTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFWUjtBQWFNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQVhSO0FBZUk7RUFFRSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFkTjtBQW9CQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0QsZUFBQTtFQUNBLDhCQUFBO0FBakJIO0FBbUJBO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNGLGlCQUFBO0VBQ0EsaUJBQUE7QUFoQkE7QUFpQkU7RUFDRSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFHQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUFqQko7QUFvQkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFqQkY7QUFvQkE7RUFDRSwrQ0FBQTtBQWpCRjtBQW1CQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtBQWhCRjtBQWtCRTtFQUNFLFlBQUE7QUFoQko7QUFvQkE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0FBakJGO0FBbUJJO0VBQ0UsbUJBQUE7QUFqQk47QUFtQlE7RUFDRSxrQkFBQTtFQVNBLFlBQUE7RUFDQSxXQUFBO0FBekJWO0FBZ0JVO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQWRaO0FBZ0JVO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0FBZFo7QUFvQk07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFsQlIiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidGhlbWUvbWl4aW5zL3Njcm9sbGJhcnNcIjtcbi5maWx0ZXJzLXRvb2xiYXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAuc2MtaW9uLXNlYXJjaGJhci1tZC1oIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4wNyk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAuc2VhcmNoYmFyLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICAgICBtYXJnaW46IDE1cHg7XG4gICAgaW9uLXNlYXJjaGJhci5pdGVtcy1zZWFyY2hiYXIge1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgLy8gb3ZlcnJpZGUgSW9uaWMgZml4ZWQgaGVpZ2h0XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAvLyBMZWFybiBtb3JlIGFib3V0IENTUyBjb250YWluIHByb3BlcnR5IGhlcmU6IGh0dHBzOi8vdGVybXZhZGVyLmdpdGh1Yi5pby9jc3MtY29udGFpbi9cbiAgICAgIGNvbnRhaW46IGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgIC5maWx0ZXJzLWJ0biB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAvLy0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIC8vb3ZlcnJpZGUgSW9uaWMgZml4ZWQgaGVpZ2h0XG4gICAgICAgIGhlaWdodDogaW5pdGlhbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG5cblxuICAucmFuZ2UtaXRlbS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgLy8gYm94LXNoYWRvdyBhdCB0aGUgdG9wXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCA2cHggM3B4IC04cHggdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuXG4gICAgLnJhbmdlLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgIC5yYW5nZS12YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICB9XG5cbiAgICAgIC5yYW5nZS1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJhbmdlLWNvbnRyb2wge1xuICAgICAgLy8gb3ZlcnJpZGUgdGhlIHBpbiBjb2xvclxuICAgICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICB9XG4gIH1cbn1cblxuXG4uYm90dG9tLWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGJvdHRvbTogNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgZm9udC1zaXplOiAgMTJweDtcbiAgIGJhY2tncm91bmQ6IHJnYmEoYmxhY2ssIDAuNCk7XG59XG4uaXRlbS1pb24tY2FyZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbm1heC1oZWlnaHQ6IDE1MHB4O1xubWluLWhlaWdodDogMTIwcHg7XG4gIC5jb3Zlci1pbWcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xuICAgIC8vICAgd2lkdGg6IHZhcigtLWltYWdlLXdpZHRoLCAxMDAlKTtcbiAgICAvLyAgIGhlaWdodDogdmFyKC0taW1hZ2UtaGVpZ2h0LCAxMjBweCk7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5oNSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiB2YXIoLS1jb250ZW50LXBhZGRpbmcsIDhweCkgIWltcG9ydGFudDtcbn1cbi5pdGVtLWlvbi1yb3cge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNXB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIC8vaGVpZ2h0OiAxMzBweDtcbiAgfVxufVxuLmNhdC1pb24tc2xpZGVzIHtcbiAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG4gIG1hcmdpbi10b3A6IC0yM3B4O1xuICBpb24tc2xpZGUge1xuICAgIC5zaW5nbGUtY2F0IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAucGljIHtcbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmRlc2Mge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgfVxuICAgIH1cblxuICB9XG59XG4iXX0= */", ".ios[_nghost-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%] {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n.ios[_nghost-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   ion-searchbar.items-searchbar[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .searchbar-row[_ngcontent-%COMP%]   ion-searchbar.items-searchbar[_ngcontent-%COMP%] {\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n}\n.searchbar-input.sc-ion-searchbar-md[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  background-position: left 8px center;\n  height: auto;\n  font-size: 1.1rem;\n  font-weight: 400;\n  color: #7f8490;\n  box-shadow: 0 8px 14px rgba(0, 0, 0, 0.1) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlYXJjaC1pb3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNFLGlEQUFBO1VBQUEsZ0RBQUE7QUFGTjtBQU9JO0VBQ0UsK0JBQUE7RUFDQSxxQ0FBQTtBQUxOO0FBU0E7RUFDRSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBR0Esb0RBQUE7QUFQRiIsImZpbGUiOiJzZWFyY2gtaW9zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5pb3MpIHtcbiAgLy8gQ3VzdG9tIHBsYXRmb3JtIHN0eWxlcyBoZXJlXG4gIC5saXN0LWl0ZW0ge1xuICAgIC51c2VyLWRhdGEtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgfVxuICB9XG5cbiAgLnNlYXJjaGJhci1yb3cge1xuICAgIGlvbi1zZWFyY2hiYXIuaXRlbXMtc2VhcmNoYmFyIHtcbiAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1wYWRkaW5nLXRvcCk7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZy1ib3R0b20pO1xuICAgIH1cbiAgfVxufVxuLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCA4cHggY2VudGVyO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzdmODQ5MDtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDhweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "P1M/":
    /*!************************************************!*\
      !*** ./src/app/pages/tab1/HomePage-Service.ts ***!
      \************************************************/

    /*! exports provided: HomePageService */

    /***/
    function P1M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageService", function () {
        return HomePageService;
      });
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/internal/operators/map */
      "q3Kh");
      /* harmony import */


      var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomePageService = /*#__PURE__*/function () {
        function HomePageService(afs, afAuth, storage) {
          _classCallCheck(this, HomePageService);

          this.afs = afs;
          this.afAuth = afAuth;
          this.storage = storage;
        }

        _createClass(HomePageService, [{
          key: "getAllItems",
          value: function getAllItems() {
            return this.afs.collection('items').snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                console.log("OBJECT RETURNED IS ::::: " + JSON.stringify(Object.assign({
                  id: id
                }, data)));
                return Object.assign({
                  id: id
                }, data);
              });
            }));
          }
        }]);

        return HomePageService;
      }();

      HomePageService.ɵfac = function HomePageService_Factory(t) {
        return new (t || HomePageService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]));
      };

      HomePageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: HomePageService,
        factory: HomePageService.ɵfac
      });
      /***/
    },

    /***/
    "XnsX":
    /*!************************************************************************!*\
      !*** ./src/app/pages/explore-container/explore-container.component.ts ***!
      \************************************************************************/

    /*! exports provided: ExploreContainerComponent */

    /***/
    function XnsX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function () {
        return ExploreContainerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ExploreContainerComponent = /*#__PURE__*/function () {
        function ExploreContainerComponent() {
          _classCallCheck(this, ExploreContainerComponent);
        }

        _createClass(ExploreContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExploreContainerComponent;
      }();

      ExploreContainerComponent.ɵfac = function ExploreContainerComponent_Factory(t) {
        return new (t || ExploreContainerComponent)();
      };

      ExploreContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExploreContainerComponent,
        selectors: [["app-explore-container"]],
        inputs: {
          name: "name"
        },
        decls: 7,
        vars: 1,
        consts: [["id", "container"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://ionicframework.com/docs/components"]],
        template: function ExploreContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Explore ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "UI Components");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
          }
        },
        styles: ["#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2V4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */"]
      });
      /***/
    },

    /***/
    "mV/h":
    /*!***************************************************!*\
      !*** ./src/app/pages/tab1/tab1-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function mVH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tab1.page */
      "LhMw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_1__["Tab1Page"],
        children: [{
          path: ':id',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-item-detail-item-detail-module */
            "pages-item-detail-item-detail-module").then(__webpack_require__.bind(null,
            /*! ./../../pages/item-detail/item-detail.module */
            "x8RI")).then(function (m) {
              return m.ItemDetailPageModule;
            });
          }
        }]
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: Tab1PageRoutingModule
      });
      Tab1PageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function Tab1PageRoutingModule_Factory(t) {
          return new (t || Tab1PageRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](Tab1PageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "n6XZ":
    /*!**************************************************!*\
      !*** ./src/app/Services/account/item-service.ts ***!
      \**************************************************/

    /*! exports provided: ItemService */

    /***/
    function n6XZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemService", function () {
        return ItemService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ItemService = /*#__PURE__*/function () {
        function ItemService(http) {
          _classCallCheck(this, ItemService);

          this.http = http;
        }

        _createClass(ItemService, [{
          key: "getItems",
          value: function getItems() {
            return this.http.get('./assets/sample-data/item/items.json');
          }
        }, {
          key: "getSellerItems",
          value: function getSellerItems() {
            return this.http.get('./assets/sample-data/item/items.json');
          }
        }, {
          key: "getOneItem",
          value: function getOneItem() {
            return this.http.get('./assets/sample-data/item/single-item.json');
          }
        }]);

        return ItemService;
      }();

      ItemService.ɵfac = function ItemService_Factory(t) {
        return new (t || ItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      ItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ItemService,
        factory: ItemService.ɵfac
      });
      /***/
    },

    /***/
    "uMfO":
    /*!*******************************************!*\
      !*** ./src/app/pages/tab1/tab1.module.ts ***!
      \*******************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function uMfO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab1.page */
      "LhMw");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "HGan");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "mV/h");
      /* harmony import */


      var _Services_account_item_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../Services/account/item-service */
      "n6XZ");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _item_Item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../item/Item-service */
      "xkf5");
      /* harmony import */


      var _HomePage_Service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./HomePage-Service */
      "P1M/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: Tab1PageModule
      });
      Tab1PageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        factory: function Tab1PageModule_Factory(t) {
          return new (t || Tab1PageModule)();
        },
        providers: [_Services_account_item_service__WEBPACK_IMPORTED_MODULE_6__["ItemService"], _HomePage_Service__WEBPACK_IMPORTED_MODULE_9__["HomePageService"], _item_Item_service__WEBPACK_IMPORTED_MODULE_8__["ItemFireStore"]],
        imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_4__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab1PageRoutingModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](Tab1PageModule, {
          declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]],
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_4__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab1PageRoutingModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~pages-tab1-tab1-module~pages-tabs-tabs-module-es5.js.map