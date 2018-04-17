"use strict";
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var import0 = require("./Dropdown");
var import1 = require("@angular/core/src/change_detection/change_detection_util");
var import3 = require("@angular/core/src/linker/view_utils");
var Wrapper_Dropdown = /** @class */ (function () {
    function Wrapper_Dropdown(p0) {
        this._changed = false;
        this.context = new import0.Dropdown(p0);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
    }
    Wrapper_Dropdown.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Dropdown.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
        (this.subscription1 && this.subscription1.unsubscribe());
    };
    Wrapper_Dropdown.prototype.check_toggleClick = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.toggleClick = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_Dropdown.prototype.check_activateOnFocus = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.activateOnFocus = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_Dropdown.prototype.check_dropdownDisabled = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.dropdownDisabled = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_Dropdown.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_Dropdown.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_Dropdown.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_Dropdown.prototype.subscribe = function (view, _eventHandler, emit0, emit1) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.onOpen.subscribe(_eventHandler.bind(view, 'onOpen')));
        }
        if (emit1) {
            (this.subscription1 = this.context.onClose.subscribe(_eventHandler.bind(view, 'onClose')));
        }
    };
    return Wrapper_Dropdown;
}());
exports.Wrapper_Dropdown = Wrapper_Dropdown;
//# sourceMappingURL=Dropdown.ngfactory.js.map