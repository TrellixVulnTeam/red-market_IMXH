(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-detail-item-detail-module"], {
    /***/
    "AxfY":
    /*!************************************************!*\
      !*** ./src/app/pages/offer/offer.component.ts ***!
      \************************************************/

    /*! exports provided: OfferComponent */

    /***/
    function AxfY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OfferComponent", function () {
        return OfferComponent;
      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OfferComponent = /*#__PURE__*/function () {
        function OfferComponent(modalController) {
          _classCallCheck(this, OfferComponent);

          this.modalController = modalController;
        }

        _createClass(OfferComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            var _this = this;

            if (this.modalController) {
              this.modalController.dismiss().then(function () {
                _this.modalController = null;
              });
            }
          }
        }, {
          key: "makeOffer",
          value: function makeOffer() {}
        }]);

        return OfferComponent;
      }();

      OfferComponent.ɵfac = function OfferComponent_Factory(t) {
        return new (t || OfferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]));
      };

      OfferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: OfferComponent,
        selectors: [["app-offer"]],
        decls: 25,
        vars: 0,
        consts: [[1, "ion-no-border"], ["slot", "end"], [3, "click"], ["name", "close"], ["size", "12"], ["hint", "decimal", "type", "number", "inputmode", "decimal", "value", "333", "clearOnEdit", "true"], ["detail", ""], ["size", "3"], ["src", "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"], ["size", "9"], [1, "details-purchase-options-row"], ["color", "primary", "expand", "block", 3, "click"]],
        template: function OfferComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Enter your Offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferComponent_Template_ion_button_click_5_listener() {
              return ctx.dismissModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-col", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-col", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-avatar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-col", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Item description goes here ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-row", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OfferComponent_Template_ion_button_click_23_listener() {
              return ctx.makeOffer();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Make offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["NumericValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonFooter"]],
        styles: ["input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\nion-input[_ngcontent-%COMP%] {\n  border: solid 1px var(--ion-color-primary);\n  --padding-end: 12px;\n  height: 75px;\n  border-radius: 20px;\n  margin-top: 20px;\n  font-weight: 800;\n  font-size: 30px;\n  text-align: center;\n}\n\n.currency[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 900;\n}\n\nion-row[_ngcontent-%COMP%] {\n  align-items: center;\n  margin: 0 auto;\n  padding: 10px;\n}\n\nion-input[_ngcontent-%COMP%]:focus {\n  background-color: var(--ion-color-primary);\n}\n\nion-item[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  margin-left: 15px;\n  border-radius: 16px;\n}\n\nion-title[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29mZmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLHdCQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7QUFDSjs7QUFFQTtFQUVJLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFFSjs7QUFBQTtFQUNFLDBDQUFBO0FBR0Y7O0FBREE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGRTtFQUNJLDRCQUFBO0FBS04iLCJmaWxlIjoib2ZmZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHsgXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBcbiAgICBtYXJnaW46IDA7IFxufVxuXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAgIC1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7XG59XG5cbmlvbi1pbnB1dHsgXG4gICAgXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxufVxuLmN1cnJlbmN5e1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuaW9uLXJvd3tcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5pb24taW5wdXQ6Zm9jdXN7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1pdGVtIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgfVxuICBpb24tdGl0bGV7XG4gICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB9Il19 */"]
      });
      /***/
    },

    /***/
    "BSaU":
    /*!*******************************************************!*\
      !*** ./src/app/pages/item-detail/item-detail.page.ts ***!
      \*******************************************************/

    /*! exports provided: ItemDetailPage */

    /***/
    function BSaU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailPage", function () {
        return ItemDetailPage;
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


      var _item_Item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../item/Item-service */
      "xkf5");
      /* harmony import */


      var _offer_offer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../offer/offer.component */
      "AxfY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shell/text-shell/text-shell.component */
      "zK/y");
      /* harmony import */


      var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shell/image-shell/image-shell.component */
      "2gss");
      /* harmony import */


      var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shell/aspect-ratio/aspect-ratio.component */
      "B7gC");

      var _c0 = function _c0(a0, a1) {
        return {
          "centered-image": a0,
          "fill-image": a1
        };
      };

      var _c1 = function _c1() {
        return {
          w: 64,
          h: 50
        };
      };

      function ItemDetailPage_ion_slide_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-row", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "app-image-shell", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-aspect-ratio", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("display", "cover")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c0, image_r3.type === "square", image_r3.type === "fill"))("src", image_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c1));
        }
      }

      function ItemDetailPage_ion_col_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-card", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-ripple-effect");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", item_r5 == null ? null : item_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        }
      }

      function ItemDetailPage_ion_footer_64_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-footer", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-row", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemDetailPage_ion_footer_64_Template_ion_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r6.chat();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Ask");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemDetailPage_ion_footer_64_Template_ion_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r8.createModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Make offer");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _c2 = function _c2() {
        return ["/public-profile"];
      };

      var ItemDetailPage = /*#__PURE__*/function () {
        function ItemDetailPage(itemService, modalController, router, routerOutlet, route) {
          _classCallCheck(this, ItemDetailPage);

          this.itemService = itemService;
          this.modalController = modalController;
          this.router = router;
          this.routerOutlet = routerOutlet;
          this.route = route;
          this.itemId = null;
          this.showToolbar = false;
          this.showFooter = false;
          this.btnBgColor = '--ion-color-step-150';
          this.heartType = "heart-outline";
          this.transition = false;
          this.slidesOptions = {
            zoom: {
              toggle: false // Disable zooming to prevent weird double tap zomming on slide images

            }
          };
          this.currentModal = null;
          this.itemId = this.route.snapshot.paramMap.get('id');
        }

        _createClass(ItemDetailPage, [{
          key: "isShell",
          get: function get() {
            return this.details && this.details.isShell ? true : false;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.itemId = this.route.snapshot.paramMap.get("id");
            console.log("item ID ngoninit " + this.itemId);
            this.itemService.getOneItem(this.itemId).subscribe(function (item) {
              console.log(JSON.stringify(item));
              _this2.details = item;
              console.log('ITEM DETAIL +++++ ' + JSON.stringify(_this2.details));
            });
          }
        }, {
          key: "createModal",
          value: function createModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _offer_offer_component__WEBPACK_IMPORTED_MODULE_4__["OfferComponent"],
                        animated: true,
                        backdropDismiss: true,
                        showBackdrop: true,
                        swipeToClose: true,
                        presentingElement: this.routerOutlet.nativeEl,
                        mode: 'ios'
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      this.currentModal = modal;

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onScroll",
          value: function onScroll($event) {
            if ($event && $event.detail && $event.detail.scrollTop) {
              var scrollTop = $event.detail.scrollTop;
              this.transition = true;
              this.showToolbar = scrollTop >= 250;
              this.showFooter = scrollTop >= 590;
            } else {
              this.transition = false;
            }
          }
        }, {
          key: "backClicked",
          value: function backClicked() {
            this.router.navigateByUrl("redmarket/items");
          }
        }, {
          key: "getPublicProfile",
          value: function getPublicProfile() {
            this.router.navigateByUrl("/public-profile");
          }
        }, {
          key: "chat",
          value: function chat() {
            var _a;

            this.router.navigate(["/redmarket/chat/detail", {
              id: this.itemId,
              saler: JSON.stringify((_a = this.details) === null || _a === void 0 ? void 0 : _a.poster),
              itemImg: this.details.images[0],
              price: this.details.price
            }]);
          }
        }]);

        return ItemDetailPage;
      }();

      ItemDetailPage.ɵfac = function ItemDetailPage_Factory(t) {
        return new (t || ItemDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_item_Item_service__WEBPACK_IMPORTED_MODULE_3__["ItemFireStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      ItemDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: ItemDetailPage,
        selectors: [["app-item-detail"]],
        hostVars: 2,
        hostBindings: function ItemDetailPage_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-shell", ctx.isShell);
          }
        },
        decls: 65,
        vars: 25,
        consts: [[1, "header-ion-toolbar"], ["slot", "start", "fill", "clear", 1, "action-btn", 3, "click"], ["name", "arrow-back-outline", "color", "primary"], ["slot", "end", "fill", "clear", 1, "action-btn", "action-btn-mid"], ["slot", "icon-only", "color", "primary", 3, "name"], ["slot", "end", "fill", "clear", 1, "action-btn"], ["slot", "icon-only", "name", "ellipsis-vertical-outline", "color", "primary", 1, "btn-icon"], ["crollY", "false", "forceOverscroll", "false", "no-padding", "", "fullscreen", "", 1, "fashion-details-content", 3, "scrollEvents", "ionScroll"], [1, "slider-row"], ["pager", "true", 1, "details-slides", 3, "options"], [4, "ngFor", "ngForOf"], [1, "details-description-wrapper"], [1, "details-name"], ["animation", "gradient", 3, "data"], [1, "details-price"], [1, "details-description"], ["size", "6"], ["color", "medium", "expand", "block", "fill", "outline", 1, "select-variant-btn", 3, "click"], ["color", "primary", "expand", "block", 3, "click"], [1, "detail-title"], ["animation", "gradient", "lines", "5", 3, "data"], ["animation", "gradient", "lines", "3", 3, "data"], ["lines", "none", "button", "", "detail", "", "ion-activatable", "", "ripple-parent", "", 3, "routerLink"], ["size", "3"], ["src", "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"], ["size", "9"], [1, "similar-items"], ["size-xs", "6", "size-sm", "4", "size-lg", "3", 4, "ngFor", "ngForOf"], ["class", "footer-tool-bar ion-no-border", 4, "ngIf"], [1, "slide-inner-row"], ["animation", "spinner", 1, "showcase-image", 3, "display", "ngClass", "src"], ["img", ""], [3, "ratio"], ["size-xs", "6", "size-sm", "4", "size-lg", "3"], ["ion-activatable", "", "ripple-parent", "", "mode", "ios", "routerLink", "/item-detail", 1, "shadow", "ion-no-margin", "ion-margin-bottom"], [1, "cover-img", 3, "src"], [1, "footer-tool-bar", "ion-no-border"], [1, "details-purchase-options-row"]],
        template: function ItemDetailPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemDetailPage_Template_ion_button_click_2_listener() {
              return ctx.backClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-content", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionScroll", function ItemDetailPage_Template_ion_content_ionScroll_8_listener($event) {
              return ctx.onScroll($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-row", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-slides", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ItemDetailPage_ion_slide_11_Template, 5, 8, "ion-slide", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "h5", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "app-text-shell", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "app-text-shell", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "ion-col", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "ion-button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemDetailPage_Template_ion_button_click_26_listener() {
              return ctx.chat();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Ask");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "ion-col", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ion-button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemDetailPage_Template_ion_button_click_29_listener() {
              return ctx.createModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Make offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "h3", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Detail");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "p", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "app-text-shell", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "h3", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Looking after me");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "p", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "app-text-shell", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "h3", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Meet the seller");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "ion-item", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "ion-col", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "ion-avatar");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "ion-col", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "app-text-shell", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "h3", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "p", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "h3", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Similar items");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, ItemDetailPage_ion_col_63_Template, 4, 1, "ion-col", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, ItemDetailPage_ion_footer_64_Template, 9, 0, "ion-footer", 28);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("show-background", ctx.showToolbar);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", ctx.heartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("transition", ctx.transition);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("scrollEvents", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.slidesOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.details == null ? null : ctx.details.images);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 22, ctx.details == null ? null : ctx.details.price));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Posted ", ctx.details == null ? null : ctx.details.postDate, " in ", ctx.details == null ? null : ctx.details.address, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx.details == null ? null : ctx.details.cat, " - ", ctx.details == null ? null : ctx.details.subCat, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Condition: ", ctx.details == null ? null : ctx.details.condition, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.brand);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.careInstructions);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](24, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.details == null ? null : ctx.details.poster);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.desc, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showFooter);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_7__["TextShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_8__["ImageShellComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_9__["AspectRatioComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRippleEffect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
        styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-swiper-pagination-space: 30px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-options-gutter: calc(var(--page-margin) / 2);\n  --page-related-items-gutter: calc(var(--page-margin) / 2);\n}\n\napp-image-shell.showcase-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%] {\n  height: 450px;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .details-slides[_ngcontent-%COMP%] {\n  --bullet-background: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.27);\n  height: 100%;\n  width: 100%;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .details-slides[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  padding-bottom: var(--page-swiper-pagination-space);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .showcase-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .showcase-image.centered-image[_ngcontent-%COMP%] {\n  background-size: auto;\n  background-position: center;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .details-purchase-options-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: var(--page-options-gutter);\n  padding-top: 0px;\n  padding-left: calc(var(--page-margin) - var(--page-options-gutter));\n  padding-right: calc(var(--page-margin) - var(--page-options-gutter));\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .details-purchase-options-row[_ngcontent-%COMP%]   .aux-action-col[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .details-purchase-options-row[_ngcontent-%COMP%]   .aux-action-col[_ngcontent-%COMP%]   .size-chart-btn[_ngcontent-%COMP%] {\n  margin: 0px;\n  height: 25px;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .details-purchase-options-row[_ngcontent-%COMP%]   .main-call-to-action-col[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .details-purchase-options-row[_ngcontent-%COMP%]   .select-variant-btn[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .details-purchase-options-row[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-top: var(--page-margin);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .details-description-wrapper[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  padding-left: var(--page-margin);\n  padding-right: var(--page-margin);\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .details-description-wrapper[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%] {\n  margin: 0px;\n  line-height: 1.6;\n  font-size: 18px;\n}\n\n.fashion-details-content[_ngcontent-%COMP%]   .details-description-wrapper[_ngcontent-%COMP%]   .details-price[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0px;\n  padding-bottom: 2px;\n  display: inline-block;\n}\n\n[_nghost-%COMP%]     .details-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2);\n}\n\n[_nghost-%COMP%]     .details-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n\n  .variant-alert {\n  --select-alert-color: #000;\n  --select-alert-background: #FFF;\n  --select-alert-margin: 16px;\n  --select-alert-color: var(--ion-color-lightest);\n  --select-alert-background: var(--ion-color-primary);\n  --select-alert-margin: var(--app-fair-margin);\n}\n\n  .variant-alert .alert-head {\n  padding-top: calc((var(--select-alert-margin) / 4) * 3);\n  padding-bottom: calc((var(--select-alert-margin) / 4) * 3);\n  -webkit-padding-start: var(--select-alert-margin);\n          padding-inline-start: var(--select-alert-margin);\n  -webkit-padding-end: var(--select-alert-margin);\n          padding-inline-end: var(--select-alert-margin);\n}\n\n  .variant-alert .alert-title {\n  color: var(--select-alert-color);\n}\n\n  .variant-alert .alert-head,   .variant-alert .alert-message {\n  background-color: var(--select-alert-background);\n}\n\n  .variant-alert .alert-wrapper.sc-ion-alert-ios .alert-title {\n  margin: 0px;\n}\n\n  .variant-alert .alert-wrapper.sc-ion-alert-md .alert-title {\n  font-size: 18px;\n  font-weight: 400;\n}\n\n  .variant-alert .alert-wrapper.sc-ion-alert-md .alert-button {\n  --padding-top: 0;\n  --padding-start: 0.9em;\n  --padding-end: 0.9em;\n  --padding-bottom: 0;\n  height: 2.1em;\n  font-size: 13px;\n}\n\n  .variant-alert .alert-message {\n  display: none;\n}\n\n.footer-tool-bar[_ngcontent-%COMP%] {\n  height: 85px;\n  --background: var(--ion-toolbar-background);\n}\n\n.footer-tool-bar[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  height: 90px;\n  --background: var(--ion-toolbar-background);\n}\n\nion-item[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  border-radius: 16px;\n}\n\nion-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 60px;\n  width: 65px;\n  height: 65px;\n  margin-top: 5px;\n  margin-left: -5px;\n}\n\n\n\n.show-background[_ngcontent-%COMP%] {\n  height: 90px;\n  border-style: none;\n  animation: fadein 1s;\n  -moz-animation: fadein 1s;\n  \n  -webkit-animation: fadein 1s;\n  \n  -o-animation: fadein 1s;\n  \n  --background: var(--ion-toolbar-background);\n}\n\n.show-background[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  --border-radius: 50%;\n  --padding-start: 2px;\n  --padding-end: 2px;\n  --background: transparent;\n  margin-left: 6px;\n  margin-right: 7px;\n  width: 45px;\n  height: 45px;\n  margin-left: 6px;\n  margin-right: 7px;\n}\n\n.show-background[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n\n.show-background[_ngcontent-%COMP%]   .action-btn-mid[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadein {\n  \n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent no-repeat fixed center;\n  position: absolute;\n}\n\nion-toolbar[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  --border-radius: 50%;\n  --padding-start: 2px;\n  --padding-end: 2px;\n  --background: rgba(var( --ion-background-color-rgb, 0, 0, 0), 0.40);\n  width: 45px;\n  height: 45px;\n  margin-left: 6px;\n  margin-right: 7px;\n}\n\nion-toolbar[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n\nion-toolbar[_ngcontent-%COMP%]   .action-btn-mid[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n\n\n.header-md[_ngcontent-%COMP%]::after {\n  background-image: none;\n}\n\n\n\n.header-ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:last-child {\n  --border-width: 0;\n}\n\nion-card[_ngcontent-%COMP%] {\n  margin-top: -20px;\n}\n\nion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.similar-items[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n  border-radius: 6px;\n}\n\n.similar-items[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .cover-img[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-white);\n  background-size: cover;\n  background-position: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: relative;\n}\n\n.similar-items[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: var(--content-padding, 8px) !important;\n}\n\n.similar-items[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  width: calc(100% - 5px);\n  margin: 0 auto;\n}\n\n.similar-items[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2l0ZW0tZGV0YWlsLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvc2VsZWN0LWFsZXJ0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxxQ0FBQTtFQUdBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUVBLG1EQUFBO0VBQ0EseURBQUE7QUFORjs7QUFVQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7QUFQRjs7QUFhRTtFQUNFLGFBQUE7QUFWSjs7QUFXSTtFQUNFLG1FQUFBO0VBR0EsWUFBQTtFQUNBLFdBQUE7QUFYTjs7QUFhTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLG1EQUFBO0FBWlI7O0FBZ0JJO0VBQ0UsV0FBQTtBQWROOztBQWdCTTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7QUFkUjs7QUFtQkU7RUFDRSxxREFBQTtFQUVBLGdCQUFBO0VBQ0EsbUVBQUE7RUFDQSxvRUFBQTtFQUNBLDRDQUFBO0FBbEJKOztBQW9CSTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFsQk47O0FBb0JNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFsQlI7O0FBc0JJO0VBQ0UsbUJBQUE7QUFwQk47O0FBdUJJO0VBQ0UsV0FBQTtBQXJCTjs7QUF3Qkk7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7QUF0Qk47O0FBMEJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0FBeEJKOztBQTJCRTtFQUNFLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDRDQUFBO0FBekJKOztBQTJCSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUF6Qk47O0FBNEJJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUExQk47O0FBb0NFO0VBQ0UsNENBQUE7RUFDQSxjQUFBO0VBRUEsK0ZBQUE7QUFsQ0o7O0FBb0NJO0VBQ0UseUNBQUE7RUFDQSwwQ0FBQTtBQWxDTjs7QUF5Q0E7RUN0SUUsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VEd0lBLCtDQUFBO0VBQ0EsbURBQUE7RUFDQSw2Q0FBQTtBQXRDRjs7QUNsR0U7RUFDRSx1REFBQTtFQUNBLDBEQUFBO0VBQ0EsaURBQUE7VUFBQSxnREFBQTtFQUNBLCtDQUFBO1VBQUEsOENBQUE7QURvR0o7O0FDakdFO0VBQ0UsZ0NBQUE7QURtR0o7O0FDaEdFOztFQUVFLGdEQUFBO0FEa0dKOztBQzdGSTtFQUNFLFdBQUE7QUQrRk47O0FDekZJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FEMkZOOztBQ3hGSTtFQUVFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7QUR3Rk47O0FBWUU7RUFDRSxhQUFBO0FBVko7O0FBYUE7RUFDRSxZQUFBO0VBQ0EsMkNBQUE7QUFWRjs7QUFXRTtFQUNBLFlBQUE7RUFDRSwyQ0FBQTtBQVRKOztBQWFBO0VBU0UsZ0JBQUE7RUFDRSxtQkFBQTtBQWxCSjs7QUFVRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVJKOztBQWNBLHVDQUFBOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUEyQixZQUFBO0VBQzNCLDRCQUFBO0VBQThCLHNCQUFBO0VBQzlCLHVCQUFBO0VBQXlCLFVBQUE7RUFDekIsMkNBQUE7QUFSRjs7QUFTRTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVBKOztBQVFJO0VBQ0UsZUFBQTtBQU5OOztBQVNFO0VBQ0MsaUJBQUE7QUFQSDs7QUFXQTtFQUNFO0lBQ0UsVUFBQTtFQVJGO0VBVUE7SUFDRSxVQUFBO0VBUkY7QUFDRjs7QUFtQkE7RUFDRSxzQkFBQTtFQUNBO0lBQ0UsVUFBQTtFQVJGO0VBVUE7SUFDRSxVQUFBO0VBUkY7QUFDRjs7QUFVQTtFQUNFLGdEQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFTRTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1FQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBUEo7O0FBUUk7RUFDRSxlQUFBO0FBTk47O0FBU0U7RUFDQyxpQkFBQTtBQVBIOztBQVdBLCtCQUFBOztBQUNBO0VBQ0Usc0JBQUE7QUFSRjs7QUFVQSxnQ0FBQTs7QUFDQTtFQUNFLGlCQUFBO0FBUEY7O0FBVUE7RUFJQyxpQkFBQTtBQVZEOztBQU9DO0VBQ0UsWUFBQTtBQUxIOztBQVlFO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQVRKOztBQVdJO0VBQ0Usd0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FBVE47O0FBYUU7RUFDRSwrQ0FBQTtBQVhKOztBQWFFO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0FBWEo7O0FBYUk7RUFDRSxZQUFBO0FBWE4iLCJmaWxlIjoiaXRlbS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInRoZW1lL21peGlucy9pbnB1dHMvc2VsZWN0LWFsZXJ0XCI7XG5cbi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuIC8vIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG5cbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlOiAzMHB4O1xuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0OiAxOHB4O1xuICAtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZTogMTBweDtcblxuICAtLXBhZ2Utb3B0aW9ucy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFnZS1yZWxhdGVkLWl0ZW1zLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuIC8vIC0tcGFnZS1jb2xvcjogI2NiMzI4Zjtcbn1cbmFwcC1pbWFnZS1zaGVsbC5zaG93Y2FzZS1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQge1xuICAvLy0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAuc2xpZGVyLXJvdyB7XG4gICAgaGVpZ2h0OiA0NTBweDtcbiAgICAuZGV0YWlscy1zbGlkZXMge1xuICAgICAgLS1idWxsZXQtYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjI3KTtcbiAgICAgIC8vLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuXG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgLy8gLnN3aXBlci1wYWdpbmF0aW9uIHNwYWNlXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2hvd2Nhc2UtaW1hZ2Uge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICYuY2VudGVyZWQtaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZGV0YWlscy1wdXJjaGFzZS1vcHRpb25zLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogdmFyKC0tcGFnZS1vcHRpb25zLWd1dHRlcik7XG5cbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLW9wdGlvbnMtZ3V0dGVyKSk7XG4gICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLW9wdGlvbnMtZ3V0dGVyKSk7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAuYXV4LWFjdGlvbi1jb2wge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcblxuICAgICAgLnNpemUtY2hhcnQtYnRuIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWFpbi1jYWxsLXRvLWFjdGlvbi1jb2wge1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICB9XG5cbiAgICAuc2VsZWN0LXZhcmlhbnQtYnRuIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgIC5hZGQtdG8tY2FydC1idG4ge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgfVxuXG4gIC5kZXRhaWxzLWRlc2NyaXB0aW9uLXdyYXBwZXIge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLmRldGFpbHMtZGVzY3JpcHRpb24ge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgIC5kZXRhaWxzLXByaWNlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICB9XG59XG5cblxuLy8gSVNTVUU6IC5zd2lwZXItcGFnZ2luYXRpb24gZ2V0cyByZW5kZXJlZCBkeW5hbWljYWxseS4gVGhhdCBwcmV2ZW50cyBzdHlsaW5nIHRoZSBlbGVtZW50cyB3aGVuIHVzaW5nIHRoZSBkZWZhdWx0IEFuZ3VsYXIgVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxuLy8gICAgICAgIChBbmd1bGFyIGRvZXNuJ3QgYWRkIGFuICdfbmdjb250ZW50JyBhdHRyaWJ1dGUgdG8gdGhlIC5zd2lwZXItcGFnZ2luYXRpb24gYmVjYXVzZSBpdCdzIGR5bmFtaWNhbGx5IHJlbmRlcmVkKVxuLy8gRklYOiAgIFNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM2MjY1MDcyLzExMTY5NTlcbjpob3N0IDo6bmctZGVlcCAuZGV0YWlscy1zbGlkZXMge1xuICAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICAgIGhlaWdodDogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIC8vIC5zd2lwZXItcGFnaW5hdGlvbiBpcyAxOHB4IGhlaWdodCwgLnNsaWRlLWlubmVyLXJvdyBoYXMgNDBweCBvZiBwYWRkaW5nLWJvdHRvbSA9PiBib3R0b20gPSAoNDBweCAtIDE4cHgpLzIgPSAxMXB4XG4gICAgYm90dG9tOiBjYWxjKCh2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKSAtIHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KSApIC8gMik7XG5cbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICAgIHdpZHRoOiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xuICAgICAgaGVpZ2h0OiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBbGVydHMgYW5kIGluIGdlbmVyYWwgYWxsIG92ZXJsYXlzIGFyZSBhdHRhY2hlZCB0byB0aGUgYm9keSBvciBpb24tYXBwIGRpcmVjdGx5XG4vLyBXZSBuZWVkIHRvIHVzZSA6Om5nLWRlZXAgdG8gYWNjZXNzIGl0IGZyb20gaGVyZVxuOjpuZy1kZWVwIC52YXJpYW50LWFsZXJ0IHtcbiAgQGluY2x1ZGUgc2VsZWN0LWFsZXJ0KCk7XG5cbiAgLy8gVmFyaWFibGVzIHNob3VsZCBiZSBpbiBhIGRlZXBlciBzZWxlY3RvciBvciBhZnRlciB0aGUgbWl4aW4gaW5jbHVkZSB0byBvdmVycmlkZSBkZWZhdWx0IHZhbHVlc1xuICAtLXNlbGVjdC1hbGVydC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1zZWxlY3QtYWxlcnQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLXNlbGVjdC1hbGVydC1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG5cbiAgLmFsZXJ0LW1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5mb290ZXItdG9vbC1iYXJ7XG4gIGhlaWdodDogODVweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kKTtcbiAgaW9uLXRvb2xiYXJ7XG4gIGhlaWdodDogOTBweDtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQpO1xuICB9XG59XG5cbmlvbi1pdGVte1xuXG4gIGltZ3tcbiAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgfVxuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICBcbn1cbi8qIFNob3cgYmFja2dyb3VuZCBpZiBjbGFzcyBpcyBhY3RpdmUgKi9cbi5zaG93LWJhY2tncm91bmQge1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMXM7IC8qIEZpcmVmb3ggKi9cbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAxczsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMXM7IC8qIE9wZXJhICovXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLXRvb2xiYXItYmFja2dyb3VuZCk7XG4gIC5hY3Rpb24tYnRuIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDJweDtcbiAgICAtLXBhZGRpbmctZW5kOiAycHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgIC5idG4taWNvbiB7XG4gICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgfVxuICB9XG4gIC5hY3Rpb24tYnRuLW1pZHtcbiAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XG4gIC8qIEZpcmVmb3ggKi9cbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XG4gIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBuby1yZXBlYXQgZml4ZWQgY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC5hY3Rpb24tYnRuIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDJweDtcbiAgICAtLXBhZGRpbmctZW5kOiAycHg7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhciggLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjQwKTtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICAuYnRuLWljb24ge1xuICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgIH1cbiAgfVxuICAuYWN0aW9uLWJ0bi1taWR7XG4gICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxufVxuXG4vKiBSZW1vdmUgYm90dG9tIGJvcmRlciBvbiBtZCAqL1xuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuLyogUmVtb3ZlIGJvdHRvbSBib3JkZXIgb24gaW9zICovXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5cbmlvbi1jYXJke1xuIGltZ3tcbiAgIHBhZGRpbmc6IDVweDtcbiB9XG4gbWFyZ2luLXRvcDogLTIwcHg7XG5cbn1cblxuLnNpbWlsYXItaXRlbXN7XG4gIGlvbi1jYXJkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBcbiAgICAuY292ZXItaW1nIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZzogdmFyKC0tY29udGVudC1wYWRkaW5nLCA4cHgpICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLXJvdyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDVweCk7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIFxuICAgIGlvbi1jb2wge1xuICAgICAgcGFkZGluZzogM3B4O1xuICAgIH1cbiAgfVxufSIsIkBtaXhpbiBzZWxlY3QtYWxlcnQoKSB7XG4gIC8vIERlZmF1bHQgdmFsdWVzXG4gIC0tc2VsZWN0LWFsZXJ0LWNvbG9yOiAjMDAwO1xuICAtLXNlbGVjdC1hbGVydC1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLXNlbGVjdC1hbGVydC1tYXJnaW46IDE2cHg7XG5cbiAgLmFsZXJ0LWhlYWQge1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKCh2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKSAvIDQpICogMyk7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGMoKHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pIC8gNCkgKiAzKTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbik7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKTtcbiAgfVxuXG4gIC5hbGVydC10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLXNlbGVjdC1hbGVydC1jb2xvcik7XG4gIH1cblxuICAuYWxlcnQtaGVhZCxcbiAgLmFsZXJ0LW1lc3NhZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdC1hbGVydC1iYWNrZ3JvdW5kKTtcbiAgfVxuXG4gIC8vIGlPUyBzdHlsZXNcbiAgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgLmFsZXJ0LXRpdGxlIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC8vIE1hdGVyaWFsIHN0eWxlc1xuICAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtbWQge1xuICAgIC5hbGVydC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cblxuICAgIC5hbGVydC1idXR0b24ge1xuICAgICAgLy8gVmFsdWVzIHRha2VuIGZyb20gSW9uaWMgc21hbGwgYnV0dG9uIHByZXNldFxuICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMC45ZW07XG4gICAgICAtLXBhZGRpbmctZW5kOiAwLjllbTtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG5cbiAgICAgIGhlaWdodDogMi4xZW07XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "LCrz":
    /*!***************************************************!*\
      !*** ./src/app/pages/chat-detail/chat-service.ts ***!
      \***************************************************/

    /*! exports provided: ChatService */

    /***/
    function LCrz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatService", function () {
        return ChatService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChatService = /*#__PURE__*/function () {
        function ChatService(afs, afAuth) {
          _classCallCheck(this, ChatService);

          this.afs = afs;
          this.afAuth = afAuth;
          this.user = null;
        }

        _createClass(ChatService, [{
          key: "sendMsg",
          value: function sendMsg(docId, txt, itemSaler, buyer, chatid) {
            var _this3 = this;

            var msg = new Object();
            var chatId = chatid == null ? itemSaler.uid + "_" + buyer.uid + "_" + docId.id : chatid;
            msg.chatID = chatId;
            msg.item = docId.id;
            var createdDate = firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.serverTimestamp();
            msg.created = createdDate;
            msg.sender = buyer;
            msg.txt = txt.txtMsg;
            var msgArray = [];
            console.log("chat message " + JSON.stringify(msg));
            var documentId = null;
            this.afs.collection("messages").add(msg).then(function (ref) {
              documentId = ref.id;
              msgArray.push(documentId);

              _this3.afs.doc("chats/".concat(chatId)).get().subscribe(function (result) {
                if (result.exists) {
                  _this3.afs.collection("chats").doc(chatId).update({
                    lmsg: txt.txtMsg,
                    created: createdDate
                  });
                } else {
                  _this3.afs.collection("chats").doc(chatId).set({
                    chatId: chatId,
                    sender: buyer,
                    receiver: itemSaler,
                    item: docId,
                    lmsg: txt.txtMsg,
                    created: createdDate
                  });
                }
              });
            });
          } //this.afs.doc(`chats/${docId}`).update({messages: firebase.firestore.FieldValue.arrayUnion({sender: sender ,created:firebase.firestore.FieldValue.serverTimestamp(),txt:txt}) });

        }, {
          key: "getAllReceiveMsgs",
          value: function getAllReceiveMsgs(user) {
            var received = this.afs.collection("chats", function (ref) {
              return ref.where("receiver.uid", "==", user).orderBy("created", "desc");
            }).valueChanges();
            var sent = this.afs.collection("chats", function (ref) {
              return ref.where("sender.uid", "==", user).orderBy("created", "desc");
            }).valueChanges();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])(received, sent).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(function (arr) {
              return arr.reduce(function (acc, cur) {
                return acc.concat(cur);
              });
            }));
          }
        }, {
          key: "getAllSentMsgs",
          value: function getAllSentMsgs(user) {
            console.log("UUUUUUUUUSER" + user);
            return this.afs.collection("chats", function (ref) {
              return ref.where("sender.uid", "==", user).orderBy("created", "desc");
            }).valueChanges();
          }
        }, {
          key: "chatListGetMsgs",
          value: function chatListGetMsgs(chat_Id) {
            var _this4 = this;

            console.log("MSGGGGGG DATA " + chat_Id);
            return this.afs.collection("chats", function (ref) {
              return ref.where("chatId", "==", chat_Id);
            }).snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                console.log("########## Chat ############# =" + JSON.stringify(data));
                return _this4.afs.collection("messages", function (ref) {
                  return ref.where("chatID", "==", id).orderBy("created", "asc");
                }).valueChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(function (msgs) {
                  console.log("+++++++++++++++++  message List +++++++++++++++ " + JSON.stringify(Object.assign({
                    id: id,
                    msgs: msgs
                  }, data)));
                  return Object.assign(Object.assign({
                    id: id,
                    msgs: msgs
                  }, data));
                }));
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(function (posts) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])(posts);
            }));
          }
        }, {
          key: "getMsgs",
          value: function getMsgs(item, sender) {
            var _this5 = this;

            console.log(""); //let sender = (await this.afAuth.currentUser).uid;

            var chatId = item.poster.uid + "_" + sender + "_" + item.id;
            console.log("MSGGGGGG DATA " + chatId);
            return this.afs.collection("chats", function (ref) {
              return ref.where("chatId", "==", chatId);
            }).snapshotChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
              return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                console.log("########## Chat ############# =" + JSON.stringify(data));
                return _this5.afs.collection("messages", function (ref) {
                  return ref.where("chatID", "==", id).orderBy("created", "asc");
                }).valueChanges().pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(function (msgs) {
                  console.log("+++++++++++++++++  message List +++++++++++++++ " + JSON.stringify(Object.assign({
                    id: id,
                    msgs: msgs
                  }, data)));
                  return Object.assign(Object.assign({
                    id: id,
                    msgs: msgs
                  }, data));
                }));
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(function (posts) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])(posts);
            }));
          }
        }, {
          key: "getAllReceiveMessages",
          value: function getAllReceiveMessages() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var sender;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.afAuth.currentUser;

                    case 2:
                      sender = _context2.sent.uid;
                      return _context2.abrupt("return", this.afs.collection("chats").ref.where("receiver.uid", "==", sender));

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getOneItem",
          value: function getOneItem(id) {
            return this.afs.doc("items/".concat(id)).valueChanges();
          }
        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            var _this6 = this;

            this.user = this.afAuth.authState.pipe(Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) {
              if (user) {
                return _this6.afs.doc("users/".concat(user.uid)).valueChanges({
                  idField: "uid"
                });
              } else {
                return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
              }
            }));
            return this.user;
          }
        }, {
          key: "addNewMsg",
          value: function addNewMsg(item, imagesUrl) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var documentId;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.afAuth.currentUser;

                    case 2:
                      item.poster = _context3.sent.uid;
                      item.images = [];
                      item.likes = [];
                      item.prices = [];
                      item.offers = [];
                      documentId = null;
                      return _context3.abrupt("return", this.afs.collection("messages").add(item).then(function (ref) {
                        documentId = ref.id;
                      }));

                    case 9:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return ChatService;
      }();

      ChatService.ɵfac = function ChatService_Factory(t) {
        return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]));
      };

      ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
        token: ChatService,
        factory: ChatService.ɵfac
      });
      /***/
    },

    /***/
    "gkt9":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/item-detail/item-detail-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ItemDetailPageRoutingModule */

    /***/
    function gkt9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailPageRoutingModule", function () {
        return ItemDetailPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _item_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./item-detail.page */
      "BSaU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _item_detail_page__WEBPACK_IMPORTED_MODULE_1__["ItemDetailPage"]
      }];

      var ItemDetailPageRoutingModule = function ItemDetailPageRoutingModule() {
        _classCallCheck(this, ItemDetailPageRoutingModule);
      };

      ItemDetailPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: ItemDetailPageRoutingModule
      });
      ItemDetailPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function ItemDetailPageRoutingModule_Factory(t) {
          return new (t || ItemDetailPageRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ItemDetailPageRoutingModule, {
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
    "x8RI":
    /*!*********************************************************!*\
      !*** ./src/app/pages/item-detail/item-detail.module.ts ***!
      \*********************************************************/

    /*! exports provided: ItemDetailPageModule */

    /***/
    function x8RI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailPageModule", function () {
        return ItemDetailPageModule;
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


      var _item_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./item-detail-routing.module */
      "gkt9");
      /* harmony import */


      var _item_detail_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./item-detail.page */
      "BSaU");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _Services_account_item_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../Services/account/item-service */
      "n6XZ");
      /* harmony import */


      var _offer_offer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../offer/offer.component */
      "AxfY");
      /* harmony import */


      var _item_Item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../item/Item-service */
      "xkf5");
      /* harmony import */


      var _chat_detail_chat_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../chat-detail/chat-service */
      "LCrz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ItemDetailPageModule = function ItemDetailPageModule() {
        _classCallCheck(this, ItemDetailPageModule);
      };

      ItemDetailPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: ItemDetailPageModule
      });
      ItemDetailPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        factory: function ItemDetailPageModule_Factory(t) {
          return new (t || ItemDetailPageModule)();
        },
        providers: [_Services_account_item_service__WEBPACK_IMPORTED_MODULE_6__["ItemService"], _item_Item_service__WEBPACK_IMPORTED_MODULE_8__["ItemFireStore"], _chat_detail_chat_service__WEBPACK_IMPORTED_MODULE_9__["ChatService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _item_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["ItemDetailPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ItemDetailPageModule, {
          declarations: [_item_detail_page__WEBPACK_IMPORTED_MODULE_4__["ItemDetailPage"], _offer_offer_component__WEBPACK_IMPORTED_MODULE_7__["OfferComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _item_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["ItemDetailPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]],
          exports: [_offer_offer_component__WEBPACK_IMPORTED_MODULE_7__["OfferComponent"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-item-detail-item-detail-module-es5.js.map