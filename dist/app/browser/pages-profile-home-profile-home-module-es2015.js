(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-home-profile-home-module"],{

/***/ "1DCv":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/profile-home/profile-setting/profile-setting.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProfileSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingComponent", function() { return ProfileSettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _firebase_crud_user_firebase_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../firebase/crud/user/firebase-user.model */ "pXCI");
/* harmony import */ var _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../validators/checkbox-checked.validator */ "ypRl");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shell/aspect-ratio/aspect-ratio.component */ "B7gC");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shell/image-shell/image-shell.component */ "2gss");












const _c0 = function () { return { w: 1, h: 1 }; };
class ProfileSettingComponent {
    constructor(modalController, alertController, router, ngZone) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.router = router;
        this.ngZone = ngZone;
        this.headerTitle = "";
        this.userData = new _firebase_crud_user_firebase_user_model__WEBPACK_IMPORTED_MODULE_4__["FirebaseUserModel"]();
    }
    ngOnInit() {
        // default image
        this.userData.avatar = 'https://s3-us-west-2.amazonaws.com/ionicthemes/otros/avatar-placeholder.png';
        this.createUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([], _validators_checkbox_checked_validator__WEBPACK_IMPORTED_MODULE_5__["CheckboxCheckedValidator"].minSelectedCheckboxes(1)),
            spanish: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            english: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            french: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    changeUserImage() {
    }
    createUser() {
    }
    dismissModal() {
        if (this.modalController) {
            this.modalController.dismiss().then(() => { this.modalController = null; });
        }
    }
}
ProfileSettingComponent.ɵfac = function ProfileSettingComponent_Factory(t) { return new (t || ProfileSettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
ProfileSettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileSettingComponent, selectors: [["app-profile-setting"]], decls: 42, vars: 6, consts: [[1, "create-user-form", "ion-page", 3, "formGroup", "ngSubmit"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "close"], [1, "create-user-content"], [1, "select-user-image-row"], ["size", "5", 1, "user-image-col"], [3, "ratio"], ["animation", "spinner", 1, "user-image", 3, "display", "src", "alt"], ["color", "primary", 1, "change-image-btn", 3, "click"], ["slot", "icon-only", "name", "camera", 1, "btn-icon"], ["lines", "full", 1, "inputs-list"], [1, "input-item"], ["color", "primary", "position", "floating"], ["type", "text", "formControlName", "name", "required", ""], ["type", "text", "formControlName", "lastname", "required", ""], ["display-format", "DD/MM/YYYY", "picker-format", "DD MMMM YYYY", "formControlName", "birthdate", "required", ""], ["type", "tel", "formControlName", "phone", "required", ""], ["type", "email", "formControlName", "email", "required", ""], [1, "details-purchase-options-row"], ["color", "primary", "expand", "block"]], template: function ProfileSettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileSettingComponent_Template_form_ngSubmit_0_listener() { return ctx.createUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSettingComponent_Template_ion_button_click_4_listener() { return ctx.dismissModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-row", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-aspect-ratio", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-image-shell", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileSettingComponent_Template_ion_button_click_13_listener() { return ctx.changeUserImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ion-input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ion-input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Date of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ion-datetime", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "ion-input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "ion-input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ion-row", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ion-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Make offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createUserForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", "cover")("src", ctx.userData.avatar)("alt", "user image");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__["AspectRatioComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__["ImageShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFooter"]], styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-tags-gutter: 5px;\n}\n\n.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  position: relative;\n}\n\n.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: solid 3px var(--ion-color-lightest);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .change-image-btn[_ngcontent-%COMP%] {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  position: absolute;\n  right: 0px;\n  bottom: var(--page-margin);\n  z-index: 3;\n  width: 4ch;\n  height: 4ch;\n  margin: 0px;\n}\n\n.create-user-content[_ngcontent-%COMP%]   .select-user-image-row[_ngcontent-%COMP%]   .change-image-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\n.create-user-content[_ngcontent-%COMP%]   .fields-section[_ngcontent-%COMP%] {\n  padding: var(--page-margin) 0px;\n  border-bottom: calc(var(--page-margin) * 2) solid var(--page-background-shade);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .fields-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin);\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%] {\n  padding: 0px var(--page-margin);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .user-details-fields[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n  --background: none;\n}\n\n.create-user-content[_ngcontent-%COMP%]   .form-actions-wrapper[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: calc(var(--page-margin) / 2);\n  padding: calc(var(--page-margin) / 2);\n}\n\n.create-user-content[_ngcontent-%COMP%]   .form-actions-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2ZpbGUtc2V0dGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBR0EsdUJBQUE7QUFIRjs7QUFRRTtFQUNFLDhCQUFBO0VBQ0EsMkJBQUE7QUFMSjs7QUFPSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFMTjs7QUFPTTtFQUNFLGtCQUFBO0VBQ0EsMkNBQUE7QUFMUjs7QUFTSTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVJOOztBQVVNO0VBQ0UsZUFBQTtBQVJSOztBQWFFO0VBQ0UsK0JBQUE7RUFDQSw4RUFBQTtBQVhKOztBQWFJO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFYTjs7QUFnQkk7RUFDRSwrQkFBQTtBQWROOztBQWlCSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFmTjs7QUFtQkE7RUFDRSx1REFBQTtFQUNBLHFDQUFBO0FBakJGOztBQWtCRTtFQUNFLFdBQUE7QUFoQkoiLCJmaWxlIjoicHJvZmlsZS1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInRoZW1lL21peGlucy9pbnB1dHMvY2hlY2tib3gtdGFnXCI7XG5cbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLy8tLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAvLy0tcGFnZS1iYWNrZ3JvdW5kLXNoYWRlOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNXB4O1xufVxuXG4uY3JlYXRlLXVzZXItY29udGVudCB7XG5cbiAgLnNlbGVjdC11c2VyLWltYWdlLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC51c2VyLWltYWdlLWNvbCB7XG4gICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAudXNlci1pbWFnZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hhbmdlLWltYWdlLWJ0biB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMHB4O1xuICAgICAgYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICB6LWluZGV4OiAzO1xuICAgICAgd2lkdGg6IDRjaDtcbiAgICAgIGhlaWdodDogNGNoO1xuICAgICAgbWFyZ2luOiAwcHg7XG5cbiAgICAgIC5idG4taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZmllbGRzLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSBzb2xpZCB2YXIoLS1wYWdlLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgfVxuICB9XG5cbiAgLnVzZXItZGV0YWlscy1maWVsZHMge1xuICAgIC5pbnB1dHMtbGlzdCB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIH1cblxuICAgIC5pbnB1dC1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAtLWJhY2tncm91bmQgOiBub25lO1xuICAgIH1cbiAgfVxuXG4uZm9ybS1hY3Rpb25zLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAuc3VibWl0LWJ0biB7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbn1cbn0iXX0= */"] });


/***/ }),

/***/ "EMwN":
/*!**************************************************!*\
  !*** ./src/app/Services/account/user.service.ts ***!
  \**************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");
/* harmony import */ var _model_user_profile_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../model/user-profile.model */ "sKAJ");
/* harmony import */ var _utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/transfer-state-helper */ "O2zu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");










class UserService {
    constructor(platformId, transferStateHelper, http) {
        this.platformId = platformId;
        this.transferStateHelper = transferStateHelper;
        this.http = http;
    }
    getProfileDataSource() {
        const rawDataSource = this.http.get('./assets/sample-data/user/user-profile.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const profile = new _model_user_profile_model__WEBPACK_IMPORTED_MODULE_4__["UserProfileModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. profile = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(profile, data);
            return profile;
        }));
        // This method tapps into the raw data source and stores the resolved data in the TransferState, then when
        // transitioning from the server rendered view to the browser, checks if we already loaded the data in the server to prevent
        // duplicate http requests.
        const cachedDataSource = this.transferStateHelper.checkDataSourceState('profile-state', rawDataSource);
        return cachedDataSource;
    }
    getProfileStore(dataSource) {
        // Use cache if available
        if (!this.profileDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _model_user_profile_model__WEBPACK_IMPORTED_MODULE_4__["UserProfileModel"]();
            this.profileDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel);
            // If running in the server, then don't add shell to the Data Store
            // If we already loaded the Data Source in the server, then don't show a shell when transitioning back to the broswer from the server
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformServer"])(this.platformId) || dataSource['ssr_state']) {
                // Trigger loading mechanism with 0 delay (this will prevent the shell to be shown)
                this.profileDataStore.load(dataSource, 0);
            }
            else { // On browser transitions
                // Trigger the loading mechanism (with shell)
                this.profileDataStore.load(dataSource);
            }
        }
        return this.profileDataStore;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_transfer_state_helper__WEBPACK_IMPORTED_MODULE_5__["TransferStateHelper"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });


/***/ }),

/***/ "EqPc":
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile-home/profile-home-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileHomePageRoutingModule", function() { return ProfileHomePageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-home.page */ "UvEM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _profile_home_page__WEBPACK_IMPORTED_MODULE_2__["ProfileHomePage"]
    }
];
class ProfileHomePageRoutingModule {
}
ProfileHomePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProfileHomePageRoutingModule });
ProfileHomePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ProfileHomePageRoutingModule_Factory(t) { return new (t || ProfileHomePageRoutingModule)(); }, imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProfileHomePageRoutingModule, { imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "N/Om":
/*!*************************************************!*\
  !*** ./src/app/Services/theme/theme.service.ts ***!
  \*************************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ThemeService {
    constructor() {
        this.dark = false;
        this.messageEmmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.messageEmmiter.emit(false);
    }
    changeTheme() {
        document.body.classList.add('dark');
        this.dark = this.dark ? false : true;
        if (this.dark) {
            document.body.classList.add('dark');
        }
        else {
            document.body.classList.remove('dark');
        }
        this.messageEmmiter.emit(this.dark);
        console.log(this.dark);
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "UvEM":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile-home/profile-home.page.ts ***!
  \*********************************************************/
/*! exports provided: ProfileHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileHomePage", function() { return ProfileHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Services_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/theme/theme.service */ "N/Om");
/* harmony import */ var _firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase/auth/firebase-auth.service */ "T7tK");
/* harmony import */ var _Services_account_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/account/user.service */ "EMwN");
/* harmony import */ var _profile_setting_profile_setting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-setting/profile-setting.component */ "1DCv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shell/aspect-ratio/aspect-ratio.component */ "B7gC");
/* harmony import */ var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shell/image-shell/image-shell.component */ "2gss");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shell/text-shell/text-shell.component */ "zK/y");
















const _c0 = function () { return { w: 1, h: 1 }; };
const _c1 = function () { return ["/settings"]; };
const _c2 = function () { return ["/"]; };
class ProfileHomePage {
    constructor(route, alertController, userService, authService, router, routerOutlet, modalController, themeSwitcher) {
        this.route = route;
        this.alertController = alertController;
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.routerOutlet = routerOutlet;
        this.modalController = modalController;
        this.themeSwitcher = themeSwitcher;
        this.available_languages = [];
        this.currentModal = null;
    }
    get isShell() {
        return (this.profile && this.profile.isShell) ? true : false;
    }
    ngOnInit() {
        this.subscriptions = this.userService.getProfileDataSource()
            .subscribe((state) => {
            this.profile = state;
        }, (error) => console.log(error));
    }
    // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
    // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
    ionViewWillLeave() {
        this.subscriptions.unsubscribe();
    }
    profileClick() {
    }
    signOut() {
        this.authService.signOut().subscribe(() => {
            // Sign-out successful.
            // Replace state as we are no longer authorized to access profile page.
            this.router.navigate(['redmarket/profile/auth/sign-in'], { replaceUrl: true });
        }, (error) => {
            console.log('signout error', error);
        });
    }
    ThemeSwitcher() {
        this.themeSwitcher.changeTheme();
    }
    createModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _profile_setting_profile_setting_component__WEBPACK_IMPORTED_MODULE_6__["ProfileSettingComponent"],
                animated: true,
                backdropDismiss: true,
                showBackdrop: true,
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl,
                mode: 'ios'
            });
            yield modal.present();
            this.currentModal = modal;
        });
    }
}
ProfileHomePage.ɵfac = function ProfileHomePage_Factory(t) { return new (t || ProfileHomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_Services_account_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_Services_theme_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"])); };
ProfileHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ProfileHomePage, selectors: [["app-profile-home"]], hostVars: 2, hostBindings: function ProfileHomePage_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("is-shell", ctx.isShell);
    } }, decls: 100, vars: 23, consts: [[1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/redmarket/items", "mode", "md"], ["slot", "end"], ["name", "settings-outline"], [1, "user-content"], [1, "user-info-row"], ["size", "5", 1, "user-image-col"], ["slot", "start", "color", "primary"], [3, "ratio"], ["animation", "spinner", 1, "user-image", 3, "display", "src", "alt"], ["size", "12", 1, "user-details-col"], [1, "user-name"], ["animation", "bouncing", 3, "data"], [1, "user-age"], [1, "user-stat"], ["color", "primary"], ["color", "secondary"], ["size", "12", 1, "actions-col"], ["size", "3"], ["color", "secondary", 1, "action-btn"], ["slot", "icon-only", "name", "mail", 1, "btn-icon"], ["slot", "icon-only", "name", "call", 1, "btn-icon"], ["slot", "icon-only", "name", "videocam", 1, "btn-icon"], ["slot", "icon-only", "name", "text", 1, "btn-icon"], [1, "content-section", "user-languages-wrapper"], [1, "language-item-row"], [1, "language-item"], ["lines", "none", "mode", "ios"], ["button", "", 3, "click"], ["slot", "start", "name", "person-outline"], [3, "routerLink"], ["slot", "start", "name", "people-outline"], ["detail", "", 3, "click"], ["slot", "start", "name", "color-fill-outline", "detail", ""], ["slot", "start", "name", "heart-outline", "detail", ""], ["slot", "start", "name", "pricetag-outline", "detail", ""], ["slot", "start", "name", "notifications-outline", "detail", ""], ["slot", "start", "name", "information-circle-outline", "detail", ""], ["slot", "start", "name", "bag-add-outline", "detail", ""], [3, "click"], ["slot", "start", "name", "log-out-outline", "detail", ""], [1, "last-section"], [1, "app-version"]], template: function ProfileHomePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ion-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ion-badge", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "app-aspect-ratio", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-image-shell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "ion-col", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "app-text-shell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "app-text-shell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "ion-badge", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "100 Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "ion-badge", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "10 Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "ion-col", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "ion-col", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "ion-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "ion-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "ion-col", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "ion-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "ion-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "ion-col", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "ion-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "ion-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "ion-col", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "ion-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "ion-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "ion-row", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "ion-col", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "ion-list", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "ion-item", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfileHomePage_Template_ion_item_click_42_listener() { return ctx.createModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "ion-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "ion-item", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "ion-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "ion-item", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfileHomePage_Template_ion_item_click_52_listener() { return ctx.ThemeSwitcher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](53, "ion-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "ion-item", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "ion-icon", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "Saved Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "ion-item", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "ion-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "Community");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "ion-item", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](68, "ion-icon", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, "Deals");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "ion-item", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](73, "ion-icon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "ion-item", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](78, "ion-icon", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "ion-item", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](83, "ion-icon", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "Help Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "ion-item", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](88, "ion-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91, "Terms & Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "ion-item", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfileHomePage_Template_ion_item_click_92_listener() { return ctx.signOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](93, "ion-icon", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, " Version 0.0.1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("display", "cover")("src", ctx.profile == null ? null : ctx.profile.userImage)("alt", "item image");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.profile == null ? null : ctx.profile.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.profile == null ? null : ctx.profile.job);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](15, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](16, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](18, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](19, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](20, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](21, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](22, _c1));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBadge"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_8__["AspectRatioComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_9__["ImageShellComponent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_10__["TextShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-related-users-gutter: calc(var(--page-margin) / 2);\n}\n\n.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n}\n\n.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-image-col[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-stat[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  font-size: small;\n  margin-top: 5px;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-details-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-details-col[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  min-width: 40%;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .user-details-col[_ngcontent-%COMP%]   .user-age[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  min-width: 60%;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .actions-col[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: var(--page-margin);\n}\n\n.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .actions-col[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  width: 4ch;\n  height: 4ch;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-info-row[_ngcontent-%COMP%]   .actions-col[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.user-content[_ngcontent-%COMP%]   .bar-header[_ngcontent-%COMP%] {\n  border: 0px !important;\n  border-bottom-color: transparent !important;\n  background-image: none !important;\n  border-bottom: none !important;\n}\n\n.user-content[_ngcontent-%COMP%]   .content-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.user-content[_ngcontent-%COMP%]   .user-languages-wrapper[_ngcontent-%COMP%]   .language-item-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-content[_ngcontent-%COMP%]   .user-languages-wrapper[_ngcontent-%COMP%]   .language-item-row[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%] {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-languages-wrapper[_ngcontent-%COMP%]   .language-item-row[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%]   .language-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: 300;\n  margin-bottom: calc(var(--page-margin) / 3);\n}\n\n.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%] {\n  --min-height: initial;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]:not(:last-child) {\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-list-icon[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-right: calc(var(--page-margin) / 2);\n}\n\n.user-content[_ngcontent-%COMP%]   .user-experience-wrapper[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]   .experience-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.user-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  padding-top: 5px;\n}\n\n.user-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  --detail-icon-font-size: 22px;\n  height: 60px;\n}\n\n.user-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: medium;\n  color: var(--ion-text-color);\n}\n\n.user-content[_ngcontent-%COMP%]   .last-section[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-left: 40%;\n  margin-bottom: 50px;\n}\n\n.user-content[_ngcontent-%COMP%]   .last-section[_ngcontent-%COMP%]   .app-version[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  align-items: center;\n  font-size: 14px;\n  font-weight: lighter;\n}\n\n.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%] {\n  --ion-grid-columns: 7;\n  --ion-grid-column-padding: 0px;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  will-change: scroll-position;\n  margin-left: calc(var(--page-margin) * -1);\n  margin-right: calc(var(--page-margin) * -1);\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]::before, .user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]::after {\n  content: \"\";\n  flex: 0 0 calc(var(--page-margin) - var(--page-related-users-gutter));\n}\n\n.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]   .related-user-item[_ngcontent-%COMP%] {\n  padding: 0px var(--page-related-users-gutter);\n  --col-item-width: 2;\n  flex: 0 0 calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);\n  width: calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);\n  max-width: calc(calc(var(--col-item-width) / var(--ion-grid-columns, 12)) * 100%);\n}\n\n.user-content[_ngcontent-%COMP%]   .related-users-wrapper[_ngcontent-%COMP%]   .related-users-row[_ngcontent-%COMP%]   .related-user-item[_ngcontent-%COMP%]   .related-user-name[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-top: calc(var(--page-margin) / 2);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ZpcmViYXNlLXVzZXItZGV0YWlscy5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvc2Nyb2xsYmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UscUNBQUE7RUFDQSx5REFBQTtBQUhGOztBQVNFO0VBQ0UsOEJBQUE7RUFFQSwyQkFBQTtBQVBKOztBQVNJO0VBQ0UsZ0JBQUE7RUFDQSwyQ0FBQTtBQVBOOztBQVNNO0VBQ0Usa0JBQUE7QUFQUjs7QUFXSTtFQUVFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBVk47O0FBWUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBVk47O0FBWU07RUFDRSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxjQUFBO0FBVlI7O0FBYU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBWFI7O0FBZUk7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0FBYk47O0FBZU07RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtBQWRSOztBQWdCUTtFQUNFLGVBQUE7QUFkVjs7QUFvQkU7RUFDRSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtBQWxCSjs7QUFzQkk7RUFDRSxlQUFBO0VBQ0EsaUNBQUE7QUFwQk47O0FBeUJJO0VBQ0UsOEJBQUE7RUFFQSwyQ0FBQTtBQXhCTjs7QUEwQk07RUFDRSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQXhCUjs7QUEwQlE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUF4QlY7O0FBK0JJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUE3Qk47O0FBK0JNO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQTdCUjs7QUErQlE7RUFDRSw0Q0FBQTtBQTdCVjs7QUFnQ1E7RUFDRSxXQUFBO0VBQ0EsMENBQUE7QUE5QlY7O0FBaUNRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQS9CVjs7QUFvQ0U7RUFFRSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFuQ0o7O0FBcUNFO0VBQ0UsaUJBQUE7RUFNRSw2QkFBQTtFQUVBLFlBQUE7QUF6Q047O0FBa0NNO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FBaENSOztBQXdDRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQU9BLG1CQUFBO0FBNUNKOztBQXNDSTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQXBDTjs7QUF5Q0k7RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtFQzFLSix3QkFBQTtFQUdBLDhCQUFBO0VBQ0EscUJBQUE7QURpSUY7O0FDOUhFO0VBQ0UsYUFBQTtBRGdJSjs7QUFzQ007RUFFRSxXQUFBO0VBQ0EscUVBQUE7QUFyQ1I7O0FBd0NNO0VBQ0UsNkNBQUE7RUFDQSxtQkFBQTtFQUVBLGdGQUFBO0VBQ0EsNkVBQUE7RUFDQSxpRkFBQTtBQXZDUjs7QUF5Q1E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7QUF2Q1YiLCJmaWxlIjoiZmlyZWJhc2UtdXNlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ0aGVtZS9taXhpbnMvc2Nyb2xsYmFyc1wiO1xuXG4vLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLXJlbGF0ZWQtdXNlcnMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi51c2VyLWNvbnRlbnQge1xuXG4gIC51c2VyLWluZm8tcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAudXNlci1pbWFnZS1jb2wge1xuICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgIC51c2VyLWltYWdlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC51c2VyLXN0YXR7XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbiAgICAudXNlci1kZXRhaWxzLWNvbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgbWluLXdpZHRoOiA0MCU7XG4gICAgICB9XG5cbiAgICAgIC51c2VyLWFnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbWluLXdpZHRoOiA2MCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFjdGlvbnMtY29sIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgICAgLmFjdGlvbi1idG4ge1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcblxuICAgICAgICB3aWR0aDogNGNoO1xuICAgICAgICBoZWlnaHQ6IDRjaDtcblxuICAgICAgICAuYnRuLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5iYXItaGVhZGVyIHtcbiAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cbiAgLmNvbnRlbnQtc2VjdGlvbiB7XG4gICAgLy9wYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG4gIH1cblxuICAudXNlci1sYW5ndWFnZXMtd3JhcHBlciB7XG4gICAgLmxhbmd1YWdlLWl0ZW0tcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgICAgIC8vbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgICAgLmxhbmd1YWdlLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcblxuICAgICAgICAubGFuZ3VhZ2UtbmFtZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC51c2VyLWV4cGVyaWVuY2Utd3JhcHBlciB7XG4gICAgLmV4cGVyaWVuY2UtbGlzdCB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcblxuICAgICAgLmV4cGVyaWVuY2UtaXRlbSB7XG4gICAgICAgIC0tbWluLWhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmV4cGVyaWVuY2UtbGlzdC1pY29uIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICAuZXhwZXJpZW5jZS1sYWJlbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW9uLWxpc3R7XG4gICAgXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgLy8gcGFkZGluZzogNXB4O1xuICBpb24taXRlbSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICBwe1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC0tZGV0YWlsLWljb24tZm9udC1zaXplIDogMjJweDtcbiAgXG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAvL2JvcmRlci1yYWRpdXM6IDE2cHg7XG4gIH1cbn1cbiAgLmxhc3Qtc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgICAuYXBwLXZlcnNpb257XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICB9XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuICAucmVsYXRlZC11c2Vycy13cmFwcGVyIHtcbiAgICAucmVsYXRlZC11c2Vycy1yb3cge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW5zOiA3OyAvLyBXZSB3YW50IHRvIHNob3cgdGhyZWUgdXNlcnMgYW5kIGEgaGFsZi4gRWFjaCB1c2VyIGZpbGxzIDIgY29scyA9PiAoMy41ICogMiA9IDcgY29scylcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICB3aWxsLWNoYW5nZTogc2Nyb2xsLXBvc2l0aW9uO1xuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKTtcblxuICAgICAgQGluY2x1ZGUgaGlkZS1zY3JvbGxiYXJzKCk7XG5cbiAgICAgICY6OmJlZm9yZSxcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGZsZXg6IDAgMCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtcmVsYXRlZC11c2Vycy1ndXR0ZXIpKTtcbiAgICAgIH1cblxuICAgICAgLnJlbGF0ZWQtdXNlci1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtcmVsYXRlZC11c2Vycy1ndXR0ZXIpO1xuICAgICAgICAtLWNvbC1pdGVtLXdpZHRoOiAyO1xuICAgICAgICAvLyBTU1IgZml4OiBPdmVycmlkZSBpb24tY29sIHN0eWxlc1xuICAgICAgICBmbGV4OiAwIDAgY2FsYyhjYWxjKHZhcigtLWNvbC1pdGVtLXdpZHRoKSAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKTtcbiAgICAgICAgd2lkdGg6IGNhbGMoY2FsYyh2YXIoLS1jb2wtaXRlbS13aWR0aCkgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSk7XG4gICAgICAgIG1heC13aWR0aDogY2FsYyhjYWxjKHZhcigtLWNvbC1pdGVtLXdpZHRoKSAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKTtcblxuICAgICAgICAucmVsYXRlZC11c2VyLW5hbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gSGlkZSBzY3JvbGxiYXJzOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzg5OTQ4MzcvMTExNjk1OVxuQG1peGluIGhpZGUtc2Nyb2xsYmFycygpIHtcbiAgLy8gSUUgMTArXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcblxuICAvLyBGaXJlZm94XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuXG4gIC8vIFNhZmFyaSBhbmQgQ2hyb21lXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */", "app-image-shell.user-image[_ngcontent-%COMP%] {\n  --image-shell-border-radius: 50%;\n}\n\n.user-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 24px;\n}\n\n.user-age[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n}\n\n.experience-label[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 16px;\n  max-width: 40%;\n}\n\n.experience-label[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\napp-image-shell.related-user-picture[_ngcontent-%COMP%] {\n  --image-shell-border-radius: var(--app-fair-radius);\n}\n\n.related-user-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n  max-width: 80%;\n}\n\n.related-user-name[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ZpcmViYXNlLXVzZXItZGV0YWlscy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxrQkFBQTtBQUNKOztBQUdBO0VBQ0UsbURBQUE7QUFBRjs7QUFHQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUVFO0VBQ0Usa0JBQUE7QUFBSiIsImZpbGUiOiJmaXJlYmFzZS11c2VyLWRldGFpbHMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMjRweDtcbn1cblxuLnVzZXItYWdlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5leHBlcmllbmNlLWxhYmVsID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogNDAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwucmVsYXRlZC11c2VyLXBpY3R1cmUge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG59XG5cbi5yZWxhdGVkLXVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDgwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "UzRt":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile-home/profile-home.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfileHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileHomePageModule", function() { return ProfileHomePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-home-routing.module */ "EqPc");
/* harmony import */ var _profile_home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-home.page */ "UvEM");
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shell/shell.module */ "ZpN7");
/* harmony import */ var _Services_account_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/account/user.service */ "EMwN");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../firebase/auth/firebase-auth.service */ "T7tK");
/* harmony import */ var _profile_setting_profile_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile-setting/profile-setting.component */ "1DCv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class ProfileHomePageModule {
}
ProfileHomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: ProfileHomePageModule });
ProfileHomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function ProfileHomePageModule_Factory(t) { return new (t || ProfileHomePageModule)(); }, providers: [
        _Services_account_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseAuthService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _profile_home_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileHomePageRoutingModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_5__["ShellModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ProfileHomePageModule, { declarations: [_profile_home_page__WEBPACK_IMPORTED_MODULE_4__["ProfileHomePage"], _profile_setting_profile_setting_component__WEBPACK_IMPORTED_MODULE_9__["ProfileSettingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        _profile_home_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileHomePageRoutingModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_5__["ShellModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]], exports: [_profile_setting_profile_setting_component__WEBPACK_IMPORTED_MODULE_9__["ProfileSettingComponent"]] }); })();


/***/ }),

/***/ "pXCI":
/*!***********************************************************!*\
  !*** ./src/app/firebase/crud/user/firebase-user.model.ts ***!
  \***********************************************************/
/*! exports provided: FirebaseSkillModel, FirebaseUserModel, FirebaseCombinedUserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseSkillModel", function() { return FirebaseSkillModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUserModel", function() { return FirebaseUserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseCombinedUserModel", function() { return FirebaseCombinedUserModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shell/data-store */ "f/Ol");

class FirebaseSkillModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class FirebaseUserModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.skills = [
            '',
            '',
            ''
        ];
        this.languages = {
            spanish: 0,
            english: 0,
            french: 0
        };
    }
}
class FirebaseCombinedUserModel extends FirebaseUserModel {
    constructor() {
        super();
        this.skills = [
            new FirebaseSkillModel(),
            new FirebaseSkillModel(),
            new FirebaseSkillModel()
        ];
    }
}


/***/ }),

/***/ "sKAJ":
/*!*********************************************!*\
  !*** ./src/app/model/user-profile.model.ts ***!
  \*********************************************/
/*! exports provided: UserProfileModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModel", function() { return UserProfileModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");

class UserProfileModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.friends = [
            {
                image: '',
                name: ''
            },
            {
                image: '',
                name: ''
            },
            {
                image: '',
                name: ''
            },
            {
                image: '',
                name: ''
            }
        ];
        this.photos = [
            '',
            '',
            '',
            ''
        ];
    }
}


/***/ }),

/***/ "ypRl":
/*!**********************************************************!*\
  !*** ./src/app/validators/checkbox-checked.validator.ts ***!
  \**********************************************************/
/*! exports provided: CheckboxCheckedValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxCheckedValidator", function() { return CheckboxCheckedValidator; });
class CheckboxCheckedValidator {
    static minSelectedCheckboxes(min) {
        const validator = (formArray) => {
            const totalSelected = formArray.controls
                // get a list of checkbox values (boolean)
                .map(control => control.value)
                // total up the number of checked checkboxes
                .reduce((prev, next) => next ? prev + next : prev, 0);
            // if the total is not greater than the minimum, return the error message
            return totalSelected >= min ? null : { required: true };
        };
        return validator;
    }
}


/***/ })

}]);
//# sourceMappingURL=pages-profile-home-profile-home-module-es2015.js.map