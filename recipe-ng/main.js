(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_new_recipe_new_recipe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/new-recipe/new-recipe.component */ "./src/app/pages/new-recipe/new-recipe.component.ts");
/* harmony import */ var _pages_edit_recipe_edit_recipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/edit-recipe/edit-recipe.component */ "./src/app/pages/edit-recipe/edit-recipe.component.ts");
/* harmony import */ var _pages_show_recipe_show_recipe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/show-recipe/show-recipe.component */ "./src/app/pages/show-recipe/show-recipe.component.ts");







var routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'recipes', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'recipes/new', component: _pages_new_recipe_new_recipe_component__WEBPACK_IMPORTED_MODULE_4__["NewRecipeComponent"] },
    { path: 'recipes/edit/:id', component: _pages_edit_recipe_edit_recipe_component__WEBPACK_IMPORTED_MODULE_5__["EditRecipeComponent"] },
    { path: 'recipes/:id', component: _pages_show_recipe_show_recipe_component__WEBPACK_IMPORTED_MODULE_6__["ShowRecipeComponent"] },
    { path: '**', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_edit_recipe_edit_recipe_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/edit-recipe/edit-recipe.component */ "./src/app/pages/edit-recipe/edit-recipe.component.ts");
/* harmony import */ var _pages_new_recipe_new_recipe_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/new-recipe/new-recipe.component */ "./src/app/pages/new-recipe/new-recipe.component.ts");
/* harmony import */ var _pages_show_recipe_show_recipe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/show-recipe/show-recipe.component */ "./src/app/pages/show-recipe/show-recipe.component.ts");





// Services

// Components






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _pages_edit_recipe_edit_recipe_component__WEBPACK_IMPORTED_MODULE_9__["EditRecipeComponent"],
                _pages_new_recipe_new_recipe_component__WEBPACK_IMPORTED_MODULE_10__["NewRecipeComponent"],
                _pages_show_recipe_show_recipe_component__WEBPACK_IMPORTED_MODULE_11__["ShowRecipeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [
                _services_recipe_service__WEBPACK_IMPORTED_MODULE_5__["RecipeService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/recipe.ts":
/*!***********************************!*\
  !*** ./src/app/classes/recipe.ts ***!
  \***********************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe(_a) {
        var id = _a.id, title = _a.title, description = _a.description, serves = _a.serves, imageUrl = _a.imageUrl, ingredients = _a.ingredients, instructions = _a.instructions;
        this.id = id;
        this.title = title;
        this.description = description;
        this.serves = serves;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
    return Recipe;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a routerLink=\"\" class=\"navbar-brand\">\n    Tacos and More\n  </a>\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav ml-auto mt-2\">\n      <li class=\"nav-item active\">\n        <a routerLink=\"/recipes/new\" class=\"nav-link\">Add recipe</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit-recipe/edit-recipe.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/edit-recipe/edit-recipe.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<img src=\"{{ recipe.imageUrl }}\" alt=\"{{ recipe.title }}\" class=\"header-image\" />\n\n<div class=\"container\">\n  <div class=\"row d-flex justify-content-center\">\n    <div class=\"col-1\"></div>\n    <div class=\"col-6\">\n      <h1 class=\"text-center\">Edit recipe</h1>\n    </div>\n  </div>\n\n  <form [formGroup]=\"recipeForm\" novalidate>\n    <div class=\"row\">\n      <div class=\"form-group w-100 title d-flex justify-content-center\">\n        <div class=\"col-2 d-flex justify-content-end align-items-center\">\n          <label class=\"mb-0\"><h4 class=\"mb-0\">Title:</h4></label>\n        </div>\n        <div class=\"col-6\">\n          <input type=\"text\" class=\"form-control w-100\" placeholder=\"Title...\" formControlName=\"title\" />\n        </div>\n        <div class=\"col-1\"></div>\n      </div>\n      <div class=\"form-group w-100 description d-flex justify-content-center\">\n        <div class=\"col-2 d-flex justify-content-end align-items-center\">\n          <label class=\"mb-0\"><h4 class=\"mb-0\">Description:</h4></label>\n        </div>\n        <div class=\"col-6\">\n          <input type=\"text\" class=\"form-control w-100\" placeholder=\"description...\" formControlName=\"description\" />\n        </div>\n        <div class=\"col-1\"></div>\n      </div>\n      <div class=\"form-group w-100 serves d-flex justify-content-center\">\n        <div class=\"col-2 d-flex justify-content-end align-items-center\">\n          <label class=\"mb-0\"><h4 class=\"mb-0\">Serves:</h4></label>\n        </div>\n        <div class=\"col-6\">\n          <input type=\"text\" class=\"form-control w-100\" placeholder=\"serves...\" formControlName=\"serves\" />\n        </div>\n        <div class=\"col-1\"></div>\n      </div>\n      <div class=\"form-group w-100 imageUrl d-flex justify-content-center\">\n        <div class=\"col-2 d-flex justify-content-end align-items-center\">\n          <label class=\"mb-0\"><h4 class=\"mb-0\">Image link:</h4></label>\n        </div>\n        <div class=\"col-6\">\n          <input type=\"text\" class=\"form-control w-100\" placeholder=\"imageUrl...\" formControlName=\"imageUrl\" />\n        </div>\n        <div class=\"col-1\"></div>\n      </div>\n    </div>\n    <div formArrayName=\"instructions\">\n      <div class=\"row d-flex justify-content-center\">\n        <div class=\"col-1\"></div>\n        <div class=\"col-6\">\n          <h2 class=\"text-center\">Instructions</h2>\n        </div>\n      </div>\n      <div *ngFor=\"let control of recipeForm.get('instructions').controls; let i = index\">\n        <div [formGroupName]=\"i\" class=\"form-group w-100 title d-flex justify-content-center\">\n          <div class=\"col-2 d-flex justify-content-end align-items-center\">\n            <label class=\"mb-0\"><h4 class=\"mb-0\">{{ i + 1 }}:</h4></label>\n          </div>\n          <div class=\"col-6 d-flex align-items-center\">\n            <input type=\"text\" class=\"form-control w-100\" placeholder=\"add an instruction\" formControlName=\"step\" />\n          </div>\n          <div class=\"col-1 d-flex align-items-center\">\n            <button class=\"btn btn-danger\" (click)=\"deleteInstruction(i)\">Delete</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"w-100 d-flex justify-content-center\">\n        <div class=\"col-1\"></div>\n        <div class=\"col-6\">\n          <button class=\"btn btn-success w-100\" (click)=\"addInstruction()\">Add</button>\n        </div>\n      </div>\n    </div>\n    <div formArrayName=\"ingredients\">\n      <div class=\"row d-flex justify-content-center\">\n        <div class=\"col-1\"></div>\n        <div class=\"col-6\">\n          <h2 class=\"text-center\">Ingredients</h2>\n        </div>\n      </div>\n      <div *ngFor=\"let control of recipeForm.get('ingredients').controls; let i = index\">\n        <div [formGroupName]=\"i\" class=\"form-group w-100 title d-flex justify-content-center\">\n          <div class=\"col-2 d-flex justify-content-end align-items-center\">\n            <label class=\"mb-0\"><h4 class=\"mb-0\">{{ i + 1 }}:</h4></label>\n          </div>\n          <div class=\"col-3\">\n            <input type=\"text\" class=\"form-control w-100\" placeholder=\"amount...\" formControlName=\"amount\" />\n          </div>\n          <div class=\"col-3\">\n            <input type=\"text\" class=\"form-control w-100\" placeholder=\"name...\" formControlName=\"name\" />\n          </div>\n          <div class=\"col-1 d-flex align-items-center\">\n            <button class=\"btn btn-danger\" (click)=\"deleteIngredient(i)\">Delete</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"w-100 d-flex justify-content-center\">\n        <div class=\"col-1\"></div>\n        <div class=\"col-6\">\n          <button class=\"btn btn-success w-100\" (click)=\"addIngredient()\">Add</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"row d-flex justify-content-center back-and-save\">\n      <div class=\"col-1\"></div>\n      <div class=\"col-6 d-flex justify-content-center\">\n        <button class=\"btn btn-primary\" (click)=\"back()\">Back</button>\n        <button class=\"btn btn-primary\" (click)=\"submitForm()\">Save</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/edit-recipe/edit-recipe.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/edit-recipe/edit-recipe.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-image {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\nh1 {\n  margin-top: 1em;\n  text-decoration: underline; }\n\nh2 {\n  margin-top: 2em;\n  margin-bottom: 1em; }\n\n.main {\n  background-color: #cecece;\n  padding: 1em;\n  margin-top: 2em; }\n\nbutton {\n  margin-right: 1em;\n  min-width: 100px; }\n\nbutton:last-child {\n    margin-right: 0; }\n\nform {\n  margin-top: 1em; }\n\n.back-and-save {\n  margin-top: 2em;\n  margin-bottom: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC1yZWNpcGUvQzpcXFVzZXJzXFxiYWdpb1xcUHJvamVjdHNcXHJlY2lwZS1uZy9zcmNcXGFwcFxccGFnZXNcXGVkaXQtcmVjaXBlXFxlZGl0LXJlY2lwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWU7RUFDZiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUZsQjtJQUtJLGVBQWUsRUFBQTs7QUFJbkI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdC1yZWNpcGUvZWRpdC1yZWNpcGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgbWFyZ2luLXRvcDogMmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcblxyXG4uYmFjay1hbmQtc2F2ZSB7XHJcbiAgbWFyZ2luLXRvcDogMmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/edit-recipe/edit-recipe.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/edit-recipe/edit-recipe.component.ts ***!
  \************************************************************/
/*! exports provided: EditRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRecipeComponent", function() { return EditRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _classes_recipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/recipe */ "./src/app/classes/recipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var EditRecipeComponent = /** @class */ (function () {
    function EditRecipeComponent(route, recipeService, location, fb, router) {
        this.route = route;
        this.recipeService = recipeService;
        this.location = location;
        this.fb = fb;
        this.router = router;
        this.subscriptions = [];
    }
    EditRecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.route.paramMap.subscribe(function (params) {
            var recipeId = params.get('id');
            _this.recipe = _this.recipeService.getRecipeById(parseInt(recipeId));
            _this.createForm();
        }));
    };
    EditRecipeComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    EditRecipeComponent.prototype.createForm = function () {
        var _this = this;
        this.recipeForm = this.fb.group({
            title: [this.recipe.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            description: [this.recipe.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            serves: [this.recipe.serves, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            imageUrl: [this.recipe.imageUrl, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            instructions: this.fb.array([]),
            ingredients: this.fb.array([])
        });
        this.instructions = this.recipeForm.get('instructions');
        this.ingredients = this.recipeForm.get('ingredients');
        this.recipe.instructions.forEach(function (instruction) {
            _this.instructions.push(_this.createInstruction(instruction));
        });
        this.recipe.ingredients.forEach(function (ingredient) {
            _this.ingredients.push(_this.createIngredient(ingredient.amount, ingredient.name));
        });
    };
    EditRecipeComponent.prototype.createInstruction = function (step) {
        return this.fb.group({
            step: [step, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    EditRecipeComponent.prototype.createIngredient = function (amount, name) {
        return this.fb.group({
            amount: [amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            name: [name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    EditRecipeComponent.prototype.addIngredient = function () {
        this.ingredients.push(this.createIngredient('', ''));
    };
    EditRecipeComponent.prototype.addInstruction = function () {
        this.instructions.push(this.createInstruction(''));
    };
    EditRecipeComponent.prototype.deleteInstruction = function (index) {
        var arrayControl = this.recipeForm.controls['instructions'];
        arrayControl.removeAt(index);
    };
    EditRecipeComponent.prototype.deleteIngredient = function (index) {
        var arrayControl = this.recipeForm.controls['ingredients'];
        arrayControl.removeAt(index);
    };
    EditRecipeComponent.prototype.submitForm = function () {
        if (this.recipeForm.valid) {
            var _a = this.recipeForm.value, title = _a.title, description = _a.description, serves = _a.serves, imageUrl = _a.imageUrl, ingredients = _a.ingredients, instructions = _a.instructions;
            var filteredInstructions = instructions.map(function (item) { return item.step; });
            this.recipeService.updateRecipe(new _classes_recipe__WEBPACK_IMPORTED_MODULE_2__["Recipe"]({
                id: this.recipe.id,
                title: title,
                description: description,
                serves: serves,
                imageUrl: imageUrl,
                ingredients: ingredients,
                instructions: filteredInstructions
            }));
            this.router.navigate(["/recipes/" + this.recipe.id]);
        }
        else {
            // show alert
            console.log("Form error");
        }
    };
    EditRecipeComponent.prototype.back = function () {
        this.location.back();
    };
    EditRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-edit-recipe',
            template: __webpack_require__(/*! ./edit-recipe.component.html */ "./src/app/pages/edit-recipe/edit-recipe.component.html"),
            styles: [__webpack_require__(/*! ./edit-recipe.component.scss */ "./src/app/pages/edit-recipe/edit-recipe.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EditRecipeComponent);
    return EditRecipeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<section class=\"jumbotron text-center\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading\">Tacos and More</h1>\n    <div class=\"d-flex justify-content-center\">\n      <p class=\"lead w-50\">\n        A collection of super recipes and muvh more..\n      </p>\n    </div>\n\n    <p>\n      <a routerLink=\"/recipes/new\" class=\"btn btn-primary\">Add new recipe</a>\n    </p>\n  </div>\n</section>\n\n<section class=\"container\">\n  <div class=\"row\">\n    <ng-container *ngFor=\"let recipe of recipeService.getRecipes()\">\n      <div class=\"col d-flex justify-content-center\">\n        <div class=\"card\">\n          <img [src]=\"recipe.imageUrl\" alt=\"{{recipe.title}}\" class=\"card-img-top\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">\n              {{ recipe.title }}\n            </h5>\n            <p class=\"card-text\">\n              {{ recipe.description }}\n            </p>\n            <a routerLink=\"/recipes/{{ recipe.id }}\" class=\"btn btn-primary\">View</a>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background: url(\"/assets/dinner.jpg\");\n  background-size: cover;\n  border-radius: 0; }\n\n.jumbotron-heading, p.lead {\n  color: white;\n  text-shadow: 2px 2px 5px black; }\n\n.card {\n  margin-bottom: 2em;\n  width: 18em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXGJhZ2lvXFxQcm9qZWN0c1xccmVjaXBlLW5nL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFxQztFQUNyQyxzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsWUFBWTtFQUNaLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGtCQUFrQjtFQUNsQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvZGlubmVyLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLmp1bWJvdHJvbi1oZWFkaW5nLCBwLmxlYWQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgd2lkdGg6IDE4ZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/recipe.service */ "./src/app/services/recipe.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(recipeService) {
        this.recipeService = recipeService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/new-recipe/new-recipe.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/new-recipe/new-recipe.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n  <div class=\"row d-flex justify-content-center\">\n    <div class=\"col-1\"></div>\n    <div class=\"col-6\">\n      <h1 class=\"text-center\">New recipe</h1>\n    </div>\n  </div>\n\n  <form [formGroup]=\"recipeForm\" novalidate>\n    <div class=\"row\">\n      <div class=\"form-group w-100 title d-flex justify-content-center\">\n        <div class=\"col-2 d-flex justify-content-end align-items-center\">\n          <label class=\"mb-0\"><h4 class=\"mb-0\">Title:</h4></label>\n        </div>\n        <div class=\"col-6\">\n          <input type=\"text\" class=\"form-control w-100\" placeholder=\"Title...\" formControlName=\"title\" />\n        </div>\n        <div class=\"col-1\"></div>\n      </div>\n      <div class=\"form-group w-100 description d-flex justify-content-center\">\n        <div class=\"col-2 d-flex justify-content-end align-items-center\">\n          <label class=\"mb-0\"><h4 class=\"mb-0\">Description:</h4></label>\n        </div>\n        <div class=\"col-6\">\n          <input type=\"text\" class=\"form-control w-100\" placeholder=\"description...\" formControlName=\"description\" />\n        </div>\n        <div class=\"col-1\"></div>\n      </div>\n      <div class=\"form-group w-100 serves d-flex justify-content-center\">\n        <div class=\"col-2 d-flex justify-content-end align-items-center\">\n          <label class=\"mb-0\"><h4 class=\"mb-0\">Serves:</h4></label>\n        </div>\n        <div class=\"col-6\">\n          <input type=\"text\" class=\"form-control w-100\" placeholder=\"serves...\" formControlName=\"serves\" />\n        </div>\n        <div class=\"col-1\"></div>\n      </div>\n      <div class=\"form-group w-100 imageUrl d-flex justify-content-center\">\n        <div class=\"col-2 d-flex justify-content-end align-items-center\">\n          <label class=\"mb-0\"><h4 class=\"mb-0\">Image link:</h4></label>\n        </div>\n        <div class=\"col-6\">\n          <input type=\"text\" class=\"form-control w-100\" placeholder=\"imageUrl...\" formControlName=\"imageUrl\" />\n        </div>\n        <div class=\"col-1\"></div>\n      </div>\n    </div>\n    <div formArrayName=\"instructions\">\n      <div class=\"row d-flex justify-content-center\">\n        <div class=\"col-1\"></div>\n        <div class=\"col-6\">\n          <h2 class=\"text-center\">Instructions</h2>\n        </div>\n      </div>\n      <div *ngFor=\"let control of recipeForm.get('instructions').controls; let i = index\">\n        <div [formGroupName]=\"i\" class=\"form-group w-100 title d-flex justify-content-center\">\n          <div class=\"col-2 d-flex justify-content-end align-items-center\">\n            <label class=\"mb-0\"><h4 class=\"mb-0\">{{ i + 1 }}:</h4></label>\n          </div>\n          <div class=\"col-6 d-flex align-items-center\">\n            <input type=\"text\" class=\"form-control w-100\" placeholder=\"add an instruction\" formControlName=\"step\" />\n          </div>\n          <div class=\"col-1 d-flex align-items-center\">\n            <button class=\"btn btn-danger\" (click)=\"deleteInstruction(i)\">Delete</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"w-100 d-flex justify-content-center\">\n        <div class=\"col-1\"></div>\n        <div class=\"col-6\">\n          <button class=\"btn btn-success w-100\" (click)=\"addInstruction()\">Add</button>\n        </div>\n      </div>\n    </div>\n    <div formArrayName=\"ingredients\">\n      <div class=\"row d-flex justify-content-center\">\n        <div class=\"col-1\"></div>\n        <div class=\"col-6\">\n          <h2 class=\"text-center\">Ingredients</h2>\n        </div>\n      </div>\n      <div *ngFor=\"let control of recipeForm.get('ingredients').controls; let i = index\">\n        <div [formGroupName]=\"i\" class=\"form-group w-100 title d-flex justify-content-center\">\n          <div class=\"col-2 d-flex justify-content-end align-items-center\">\n            <label class=\"mb-0\"><h4 class=\"mb-0\">{{ i + 1 }}:</h4></label>\n          </div>\n          <div class=\"col-3\">\n            <input type=\"text\" class=\"form-control w-100\" placeholder=\"amount...\" formControlName=\"amount\" />\n          </div>\n          <div class=\"col-3\">\n            <input type=\"text\" class=\"form-control w-100\" placeholder=\"name...\" formControlName=\"name\" />\n          </div>\n          <div class=\"col-1 d-flex align-items-center\">\n            <button class=\"btn btn-danger\" (click)=\"deleteIngredient(i)\">Delete</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"w-100 d-flex justify-content-center\">\n        <div class=\"col-1\"></div>\n        <div class=\"col-6\">\n          <button class=\"btn btn-success w-100\" (click)=\"addIngredient()\">Add</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"row d-flex justify-content-center back-and-save\">\n      <div class=\"col-1\"></div>\n      <div class=\"col-6 d-flex justify-content-center\">\n        <button class=\"btn btn-primary\" (click)=\"back()\">Back</button>\n        <button class=\"btn btn-primary\" (click)=\"submitForm()\">Save</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/new-recipe/new-recipe.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/new-recipe/new-recipe.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-image {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\nh1 {\n  margin-top: 1em;\n  text-decoration: underline; }\n\nh2 {\n  margin-top: 2em;\n  margin-bottom: 1em; }\n\n.main {\n  background-color: #cecece;\n  padding: 1em;\n  margin-top: 2em; }\n\nbutton {\n  margin-right: 1em;\n  min-width: 100px; }\n\nbutton:last-child {\n    margin-right: 0; }\n\nform {\n  margin-top: 1em; }\n\n.back-and-save {\n  margin-top: 2em;\n  margin-bottom: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3LXJlY2lwZS9DOlxcVXNlcnNcXGJhZ2lvXFxQcm9qZWN0c1xccmVjaXBlLW5nL3NyY1xcYXBwXFxwYWdlc1xcbmV3LXJlY2lwZVxcbmV3LXJlY2lwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWU7RUFDZiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUZsQjtJQUtJLGVBQWUsRUFBQTs7QUFJbkI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV3LXJlY2lwZS9uZXctcmVjaXBlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuaDIge1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG5cclxuLmJhY2stYW5kLXNhdmUge1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/new-recipe/new-recipe.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/new-recipe/new-recipe.component.ts ***!
  \**********************************************************/
/*! exports provided: NewRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRecipeComponent", function() { return NewRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var NewRecipeComponent = /** @class */ (function () {
    function NewRecipeComponent(route, recipeService, location, fb, router) {
        this.route = route;
        this.recipeService = recipeService;
        this.location = location;
        this.fb = fb;
        this.router = router;
        this.subscriptions = [];
    }
    NewRecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.route.paramMap.subscribe(function (params) {
            var recipeId = params.get('id');
            _this.recipe = _this.recipeService.getRecipeById(parseInt(recipeId));
            _this.createForm();
        }));
    };
    NewRecipeComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    NewRecipeComponent.prototype.createForm = function () {
        this.recipeForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            serves: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            imageUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            instructions: this.fb.array([]),
            ingredients: this.fb.array([])
        });
        this.instructions = this.recipeForm.get('instructions');
        this.ingredients = this.recipeForm.get('ingredients');
        this.addInstruction();
        this.addIngredient();
    };
    NewRecipeComponent.prototype.createInstruction = function (step) {
        return this.fb.group({
            step: [step, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    };
    NewRecipeComponent.prototype.createIngredient = function (amount, name) {
        return this.fb.group({
            amount: [amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            name: [name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    };
    NewRecipeComponent.prototype.addIngredient = function () {
        this.ingredients.push(this.createIngredient('', ''));
    };
    NewRecipeComponent.prototype.addInstruction = function () {
        this.instructions.push(this.createInstruction(''));
    };
    NewRecipeComponent.prototype.deleteInstruction = function (index) {
        var arrayControl = this.recipeForm.controls['instructions'];
        arrayControl.removeAt(index);
    };
    NewRecipeComponent.prototype.deleteIngredient = function (index) {
        var arrayControl = this.recipeForm.controls['ingredients'];
        arrayControl.removeAt(index);
    };
    NewRecipeComponent.prototype.submitForm = function () {
        if (this.recipeForm.valid) {
            var _a = this.recipeForm.value, title = _a.title, description = _a.description, serves = _a.serves, imageUrl = _a.imageUrl, ingredients = _a.ingredients, instructions = _a.instructions;
            var filteredInstructions = instructions.map(function (item) { return item.step; });
            var newRecipe = this.recipeService.createRecipe(title, description, serves, imageUrl, ingredients, filteredInstructions);
            this.router.navigate(["/recipes/" + newRecipe.id]);
        }
        else {
            // show alert
            console.log("Form error");
        }
    };
    NewRecipeComponent.prototype.back = function () {
        this.location.back();
    };
    NewRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-new-recipe',
            template: __webpack_require__(/*! ./new-recipe.component.html */ "./src/app/pages/new-recipe/new-recipe.component.html"),
            styles: [__webpack_require__(/*! ./new-recipe.component.scss */ "./src/app/pages/new-recipe/new-recipe.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewRecipeComponent);
    return NewRecipeComponent;
}());



/***/ }),

/***/ "./src/app/pages/show-recipe/show-recipe.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/show-recipe/show-recipe.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<img src=\"{{ recipe.imageUrl }}\" alt=\"{{ recipe.title }}\" class=\"header-image\">\n<div class=\"container\">\n  <div class=\"row w-100 d-flex justify-content-end\">\n    <button class=\"btn btn-danger\" (click)=\"deleteRecipe()\">\n      Delete\n    </button>\n  </div>\n  <div class=\"row d-flex justify-content-center\">\n    <div class=\"col-6\">\n      <h1 class=\"text-center\">{{ recipe.title }}</h1>\n      <p class=\"text-center\">{{ recipe.description }}</p>\n    </div>\n  </div>\n  <div class=\"main\">\n    <div class=\"row d-flex justify-content-center\">\n      <div class=\"col-12 text-center\">\n        <h3>Serves: <span class=\"serves\">{{ recipe.serves }}</span></h3>\n        <hr />\n      </div>\n    </div>\n      <div class=\"row d-flex justify-content-center\">\n        <div class=\"col-4 text-center\">\n          <h3>Ingredients</h3>\n          <div *ngFor=\"let ingredient of recipe.ingredients\">\n            {{ ingredient.amount }} - {{ ingredient.name }}\n          </div>\n        </div>\n      <div class=\"col-6\">\n        <h3 class=\"text-center\">Instructions</h3>\n        <ol>\n          <li *ngFor=\"let instruction of recipe.instructions\">\n            {{ instruction }}\n          </li>\n        </ol>\n      </div>\n    </div>\n  </div>\n  <div class=\"row back-and-edit d-flex justify-content-center\">\n    <button class=\"btn btn-primary\" (click)=\"back()\">Back</button>\n    <button class=\"btn btn-primary\" routerLink=\"/recipes/edit/{{ recipe.id }}\">Edit</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/show-recipe/show-recipe.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/show-recipe/show-recipe.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-image {\n  width: 100%;\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\nh1 {\n  margin-top: 1em;\n  text-decoration: underline; }\n\nh2 {\n  margin-bottom: 1em; }\n\n.main {\n  background-color: #ececec;\n  padding: 1em;\n  margin-top: 2em; }\n\nbutton {\n  margin-top: 1em;\n  margin-right: 1em;\n  min-width: 100px; }\n\n.back-and-edit {\n  margin-bottom: 2em; }\n\n.container {\n  margin-bottom: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvdy1yZWNpcGUvQzpcXFVzZXJzXFxiYWdpb1xcUHJvamVjdHNcXHJlY2lwZS1uZy9zcmNcXGFwcFxccGFnZXNcXHNob3ctcmVjaXBlXFxzaG93LXJlY2lwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWU7RUFDZiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hvdy1yZWNpcGUvc2hvdy1yZWNpcGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgbWFyZ2luLXRvcDogMmVtO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uYmFjay1hbmQtZWRpdCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/show-recipe/show-recipe.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/show-recipe/show-recipe.component.ts ***!
  \************************************************************/
/*! exports provided: ShowRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowRecipeComponent", function() { return ShowRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var ShowRecipeComponent = /** @class */ (function () {
    function ShowRecipeComponent(route, router, recipeService, location) {
        this.route = route;
        this.router = router;
        this.recipeService = recipeService;
        this.location = location;
        this.subscriptions = [];
    }
    ShowRecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.route.paramMap.subscribe(function (params) {
            var recipeId = params.get('id');
            _this.recipe = _this.recipeService.getRecipeById(parseInt(recipeId));
        }));
    };
    ShowRecipeComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    ShowRecipeComponent.prototype.back = function () {
        this.location.back();
    };
    ShowRecipeComponent.prototype.deleteRecipe = function () {
        this.recipeService.deleteRecipe(this.recipe.id);
        this.router.navigate(['']);
    };
    ShowRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-recipe',
            template: __webpack_require__(/*! ./show-recipe.component.html */ "./src/app/pages/show-recipe/show-recipe.component.html"),
            styles: [__webpack_require__(/*! ./show-recipe.component.scss */ "./src/app/pages/show-recipe/show-recipe.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ShowRecipeComponent);
    return ShowRecipeComponent;
}());



/***/ }),

/***/ "./src/app/services/recipe.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/recipe.service.ts ***!
  \********************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/recipe */ "./src/app/classes/recipe.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.json */ "./src/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data.json */ "./src/data.json", 1);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var RecipeService = /** @class */ (function () {
    function RecipeService() {
        var _this = this;
        this.recipes = [];
        _data_json__WEBPACK_IMPORTED_MODULE_3__["recipes"].forEach(function (recipe) {
            _this.recipes.push(new _classes_recipe__WEBPACK_IMPORTED_MODULE_1__["Recipe"](recipe));
        });
    }
    RecipeService.prototype.getRecipes = function () {
        return this.recipes;
    };
    RecipeService.prototype.getRecipeById = function (id) {
        return lodash__WEBPACK_IMPORTED_MODULE_4__["find"](this.recipes, function (recipe) { return recipe.id === id; });
    };
    RecipeService.prototype.createRecipe = function (title, description, serves, imageUrl, ingredients, instructions) {
        var newRecipeData = {
            id: this.getNextId(),
            title: title,
            description: description,
            serves: serves,
            imageUrl: imageUrl,
            ingredients: ingredients.slice(),
            instructions: instructions.slice()
        };
        var newRecipe = new _classes_recipe__WEBPACK_IMPORTED_MODULE_1__["Recipe"](newRecipeData);
        this.recipes.push(newRecipe);
        return newRecipe;
    };
    RecipeService.prototype.updateRecipe = function (recipe) {
        var recipeIndex = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.recipes, function (r) { return r.id === recipe.id; });
        this.recipes[recipeIndex] = recipe;
        return recipe;
    };
    RecipeService.prototype.deleteRecipe = function (id) {
        var recipeIndex = lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"](this.recipes, function (r) { return r.id === id; });
        if (recipeIndex !== -1) {
            this.recipes.splice(recipeIndex, 1);
        }
    };
    RecipeService.prototype.getNextId = function () {
        var max = lodash__WEBPACK_IMPORTED_MODULE_4__["maxBy"](this.recipes, function (recipe) { return recipe.id; }).id;
        return max + 1;
    };
    RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/*! exports provided: recipes, default */
/***/ (function(module) {

module.exports = {"recipes":[{"id":1,"title":"Best Beff","description":"It is Beef. Delicious beff.","serves":"2 people","imageUrl":"assets/beef.jpg","ingredients":[{"amount":"1 head","name":"BEFF"},{"amount":"12","name":"sauce"},{"amount":"2 tps","name":"onions"}],"instructions":["cook beff","add onions","profit"]},{"id":2,"title":"Best Taaco","description":"It is Taco. Delicious beff.","serves":"2 people","imageUrl":"assets/burrito.jpg","ingredients":[{"amount":"1 head","name":"BEFF"},{"amount":"12","name":"sauce"},{"amount":"2 tps","name":"onions"}],"instructions":["cook beff","add onions","profit"]},{"id":3,"title":"Bread Beff","description":"It is bread. Delicious bread.","serves":"2 people","imageUrl":"assets/bread.jpg","ingredients":[{"amount":"1 head","name":"BEFF"},{"amount":"12","name":"sauce"},{"amount":"2 tps","name":"onions"}],"instructions":["cook beff","add onions","profit"]}]};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bagio\Projects\recipe-ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map