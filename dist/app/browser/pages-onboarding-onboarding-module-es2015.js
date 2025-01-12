(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-onboarding-onboarding-module"],{

/***/ "Fxwi":
/*!*****************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.page.ts ***!
  \*****************************************************/
/*! exports provided: OnboardingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPage", function() { return OnboardingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_utils_history_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app/utils/history-helper.service */ "1oPy");
/* harmony import */ var _firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../firebase/auth/firebase-auth.service */ "T7tK");














const _c0 = function () { return ["/tabs"]; };
class OnboardingPage {
    constructor(router, route, authService, ngZone, loadingController, location, historyHelper) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.ngZone = ngZone;
        this.loadingController = loadingController;
        this.location = location;
        this.historyHelper = historyHelper;
        this.slidesOptions = {
            zoom: {
                toggle: false // Disable zooming to prevent weird double tap zomming on slide images
            }
        };
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 6 characters long.' }
            ]
        };
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]))
        });
        // Get firebase authentication redirect result invoken when using signInWithRedirect()
        // signInWithRedirect() is only used when client is in web but not desktop
        this.authRedirectResult = this.authService.getRedirectResult()
            .subscribe(result => {
            if (result.error) {
                this.manageAuthWithProvidersErrors(result.error);
            }
            else {
                this.redirectLoggedUserToProfilePage();
            }
        });
        // Check if url contains our custom 'auth-redirect' param, then show a loader while we receive the getRedirectResult notification
        this.route.queryParams.subscribe(params => {
            const authProvider = params['auth-redirect'];
            if (authProvider) {
                this.presentLoading(authProvider);
            }
        });
    }
    ngOnDestroy() {
        this.dismissLoading();
    }
    ngAfterViewInit() {
        this.didInit = true;
    }
    firebaseLoginPage() {
        this.router.navigateByUrl("/login/firebase");
    }
    // Once the auth provider finished the authentication flow, and the auth redirect completes,
    // hide the loader and redirect the user to the profile page
    redirectLoggedUserToProfilePage() {
        this.dismissLoading();
        // As we are calling the Angular router navigation inside a subscribe method, the navigation will be triggered outside Angular zone.
        // That's why we need to wrap the router navigation call inside an ngZone wrapper
        this.ngZone.run(() => {
            // Get previous URL from our custom History Helper
            // If there's no previous page, then redirect to profile
            // const previousUrl = this.historyHelper.previousUrl || 'firebase/auth/profile';
            const previousUrl = 'redmarket';
            // No need to store in the navigation history the sign-in page with redirect params (it's justa a mandatory mid-step)
            // Navigate to profile and replace current url with profile
            this.router.navigate([previousUrl], { replaceUrl: true });
        });
    }
    presentLoading(authProvider) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const authProviderCapitalized = authProvider[0].toUpperCase() + authProvider.slice(1);
            this.loadingController.create({
                message: authProvider ? 'Signing in with ' + authProviderCapitalized : 'Signin in ...',
                duration: 4000
            }).then((loader) => {
                const currentUrl = this.location.path();
                if (currentUrl.includes('auth-redirect')) {
                    this.redirectLoader = loader;
                    this.redirectLoader.present();
                }
            });
        });
    }
    dismissLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.redirectLoader) {
                yield this.redirectLoader.dismiss();
            }
        });
    }
    // Before invoking auth provider redirect flow, present a loading indicator and add a flag to the path.
    // The precense of the flag in the path indicates we should wait for the auth redirect to complete.
    prepareForAuthWithProvidersRedirection(authProvider) {
        this.presentLoading(authProvider);
        this.location.replaceState(this.location.path(), 'auth-redirect=' + authProvider, this.location.getState());
    }
    manageAuthWithProvidersErrors(errorMessage) {
        this.submitError = errorMessage;
        // remove auth-redirect param from url
        this.location.replaceState(this.router.url.split('?')[0], '');
        this.dismissLoading();
    }
    resetSubmitError() {
        this.submitError = null;
    }
    signInWithEmail() {
        this.resetSubmitError();
        this.authService.signInWithEmail(this.loginForm.value['email'], this.loginForm.value['password'])
            .then(user => {
            // navigate to user profile
            this.redirectLoggedUserToProfilePage();
        })
            .catch(error => {
            this.submitError = error.message;
            this.dismissLoading();
        });
    }
    doFacebookLogin() {
        this.resetSubmitError();
        this.prepareForAuthWithProvidersRedirection('facebook');
        this.authService.signInWithFacebook()
            .subscribe((result) => {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            // const token = result.credential.accessToken;
            this.redirectLoggedUserToProfilePage();
        }, (error) => {
            this.manageAuthWithProvidersErrors(error.message);
        });
    }
    doGoogleLogin() {
        this.resetSubmitError();
        this.prepareForAuthWithProvidersRedirection('google');
        this.authService.signInWithGoogle()
            .subscribe((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // var token = result.credential.accessToken;
            this.redirectLoggedUserToProfilePage();
        }, (error) => {
            console.log(error);
            this.manageAuthWithProvidersErrors(error.message);
        });
    }
    doTwitterLogin() {
        this.resetSubmitError();
        this.prepareForAuthWithProvidersRedirection('twitter');
        this.authService.signInWithTwitter()
            .subscribe((result) => {
            // This gives you a Twitter Access Token. You can use it to access the Twitter API.
            // var token = result.credential.accessToken;
            this.redirectLoggedUserToProfilePage();
        }, (error) => {
            console.log(error);
            this.manageAuthWithProvidersErrors(error.message);
        });
    }
    next() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.slides.slideNext();
        });
    }
    finish() {
        this.router.navigateByUrl('/login');
    }
}
OnboardingPage.ɵfac = function OnboardingPage_Factory(t) { return new (t || OnboardingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_utils_history_helper_service__WEBPACK_IMPORTED_MODULE_6__["HistoryHelperService"])); };
OnboardingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OnboardingPage, selectors: [["app-onboarding"]], viewQuery: function OnboardingPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.slides = _t.first);
    } }, decls: 70, vars: 3, consts: [["fullscreen", "", "scroll-y", "false", 1, "content", "ion-padding"], ["pager", "false", 3, "options"], [1, "slide"], ["src", "../../../assets/imgs/wender.svg"], ["shape", "round", 3, "click"], ["slot", "end", "name", "arrow-forward"], ["src", "../../../assets/imgs/search.svg"], ["lines", "none", 1, "alt-call-to-action-row"], [1, "cta-leading-text"], ["fill", "clear", 1, "login-button", 3, "routerLink"], ["src", "../../../assets/imgs/social.svg"], ["shape", "round", 1, "fb-btn", 3, "click"], ["name", "logo-facebook"], ["fill", "outline", "shape", "round", 1, "email-btn", 3, "click"], ["name", "mail"], ["shape", "round", 1, "google-btn", 3, "click"], ["name", "logo-google"], ["type", "email", "placeholder", "email"], ["type", "password", "placeholder", "password"]], template: function OnboardingPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-slides", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "ionic conference app");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " is a practical preview of the ionic framework in action, and a demonstration of proper code use.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OnboardingPage_Template_ion_button_click_12_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "What is Ionic?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Ionic Framework");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OnboardingPage_Template_ion_button_click_24_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Lets Get Started !");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Ionic Framework");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OnboardingPage_Template_ion_button_click_36_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Get Started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ion-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Already have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " Login here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "ion-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Let's Create your Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Continue with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OnboardingPage_Template_ion_button_click_51_listener() { return ctx.finish(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Continue with FaceBook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "ion-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OnboardingPage_Template_ion_button_click_54_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, " Continue with Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "ion-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OnboardingPage_Template_ion_button_click_57_listener() { return ctx.firebaseLoginPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "ion-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " Continue with Google ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "ion-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Almost There , Lets create your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "ion-input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "ion-input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.slidesOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"]], styles: ["ion-slides[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.swiper-slide[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.swiper-slide[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 2.8rem;\n}\n\n.swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\n\nb[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\np[_ngcontent-%COMP%] {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n}\n\nhtml[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\nion-input[_ngcontent-%COMP%] {\n  font-size: x-large;\n  font-weight: 700;\n  --ion-text-color: #000 !important;\n}\n\n.form-item[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-primary, #ffce00);\n  --background:linear-gradient(135deg, #ebeece 0%,#efefef 100%);\n  --ion-text-color: #000 !important;\n}\n\nion-button[_ngcontent-%COMP%] {\n  text-transform: none;\n  --box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  --ion-text-color: #000 !important;\n  color: #fff;\n  text-transform: none;\n  text-align: center;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  margin: 0px;\n  background-color: #fff;\n}\n\n.google-btn[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n  --box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  color: #fff;\n  width: 260px;\n}\n\n.google-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  padding-right: 10px;\n}\n\n.fb-btn[_ngcontent-%COMP%] {\n  --background: #3C5A99;\n  --box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  color: #fff;\n  width: 260px;\n}\n\n.fb-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  padding-right: 10px;\n}\n\n.email-btn[_ngcontent-%COMP%] {\n  --box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  color: var(--ion-color-medium);\n  width: 260px;\n}\n\n.email-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\nion-radio-group[_ngcontent-%COMP%] {\n  --background:linear-gradient(135deg, #ebeece 0%,#efefef 100%);\n}\n\n.cta-leading-text[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  font-size: 14px;\n  padding-left: 22px;\n  padding-right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29uYm9hcmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtBQURKOztBQUlFO0VBQ0UsY0FBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQURKOztBQUlFO0VBQ0UsZ0JBQUE7QUFESjs7QUFJRTtFQUNFLGdCQUFBO0FBREo7O0FBR0U7RUFDRSxnQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVFO0VBQ0Usc0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQUNKOztBQUNFO0VBQ0UsaURBQUE7RUFDQSw2REFBQTtFQUNBLGlDQUFBO0FBRUo7O0FBQ0U7RUFDRSxvQkFBQTtFQUNBLDRDQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNFO0VBQ0UsK0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFBRTtFQUNFLHNDQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdKOztBQUZJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBSU47O0FBQUU7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHSjs7QUFGSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUlOOztBQUFFO0VBQ0UsNENBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFHSjs7QUFGSTtFQUNFLG1CQUFBO0FBSU47O0FBREU7RUFDRSw2REFBQTtBQUlKOztBQUZFO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUtKIiwiZmlsZSI6Im9uYm9hcmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmlvbi1zbGlkZXMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5zd2lwZXItc2xpZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnN3aXBlci1zbGlkZSBoMiB7XG4gICAgbWFyZ2luLXRvcDogMi44cmVtO1xuICB9XG5cbiAgLnN3aXBlci1zbGlkZSBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDUwJTtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDYwcHggMCA0MHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgYiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIGgye1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgaDN7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIHAge1xuICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuICBodG1se1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cblxuICBpb24taW5wdXQge1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIC0taW9uLXRleHQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgfVxuICAuZm9ybS1pdGVtIHtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICNmZmNlMDApO1xuICAgIC0tYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZWJlZWNlIDAlLCNlZmVmZWYgMTAwJSk7XG4gICAgLS1pb24tdGV4dC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgLS1ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgLS1pb24tdGV4dC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5sb2dpbi1idXR0b24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICAuZ29vZ2xlLWJ0biB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgLS1ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDI2MHB4O1xuICAgIGlvbi1pY29ue1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBwYWRkaW5nLXJpZ2h0OjEwcHhcbiAgICB9XG4gIH1cblxuICAuZmItYnRuIHtcbiAgICAtLWJhY2tncm91bmQ6ICMzQzVBOTk7XG4gICAgLS1ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDI2MHB4O1xuICAgIGlvbi1pY29ue1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XG5cbiAgICB9XG4gIH1cbiAgLmVtYWlsLWJ0biB7XG4gICAgLS1ib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIHdpZHRoOiAyNjBweDtcbiAgICBpb24taWNvbntcbiAgICAgIHBhZGRpbmctcmlnaHQ6MTBweFxuICAgIH1cbiAgfVxuICBpb24tcmFkaW8tZ3JvdXB7XG4gICAgLS1iYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlYmVlY2UgMCUsI2VmZWZlZiAxMDAlKTtcbiAgfVxuICAuY3RhLWxlYWRpbmctdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIycHg7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICB9XG4iXX0= */"] });


/***/ }),

/***/ "L7Uo":
/*!*******************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.module.ts ***!
  \*******************************************************/
/*! exports provided: OnboardingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function() { return OnboardingPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboarding-routing.module */ "NPBV");
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onboarding.page */ "Fxwi");
/* harmony import */ var _firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase/auth/firebase-auth.service */ "T7tK");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _firebase_auth_sign_in_firebase_sign_in_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../firebase/auth/sign-in/firebase-sign-in.page */ "axc3");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");
















// Firebase guard to redirect logged in users to profile
const redirectLoggedInToProfile = (next) => Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(user => {
    // when queryParams['auth-redirect'] don't redirect because we want
    // the component to handle the redirection
    if (user !== null && !next.queryParams['auth-redirect']) {
        return ['redmarket/'];
    }
    else {
        return true;
    }
});
const routes = [
    {
        path: '',
        component: _firebase_auth_sign_in_firebase_sign_in_page__WEBPACK_IMPORTED_MODULE_9__["FirebaseSignInPage"],
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthGuard"]],
        data: { authGuardPipe: redirectLoggedInToProfile }
    }
];
class OnboardingPageModule {
}
OnboardingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: OnboardingPageModule });
OnboardingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function OnboardingPageModule_Factory(t) { return new (t || OnboardingPageModule)(); }, providers: [_firebase_auth_firebase_auth_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAuthService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forChild(routes),
            _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_3__["OnboardingPageRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](OnboardingPageModule, { declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_4__["OnboardingPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_3__["OnboardingPageRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"]] }); })();


/***/ }),

/***/ "NPBV":
/*!***************************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OnboardingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageRoutingModule", function() { return OnboardingPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding.page */ "Fxwi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _onboarding_page__WEBPACK_IMPORTED_MODULE_1__["OnboardingPage"]
    }
];
class OnboardingPageRoutingModule {
}
OnboardingPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: OnboardingPageRoutingModule });
OnboardingPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function OnboardingPageRoutingModule_Factory(t) { return new (t || OnboardingPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OnboardingPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-onboarding-onboarding-module-es2015.js.map