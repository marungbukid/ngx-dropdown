"use strict";
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var import0 = require("./DropdownNotClosableZone");
var import1 = require("@angular/core/src/change_detection/change_detection_util");
var import3 = require("@angular/core/src/linker/view_utils");
var Wrapper_DropdownNotClosableZone = /** @class */ (function () {
    function Wrapper_DropdownNotClosableZone(p0) {
        this._changed = false;
        this.context = new import0.DropdownNotClosableZone(p0);
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_DropdownNotClosableZone.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_DropdownNotClosableZone.prototype.ngOnDestroy = function () {
    };
    Wrapper_DropdownNotClosableZone.prototype.check_dropdownNotClosabledZone = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.dropdownNotClosabledZone = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_DropdownNotClosableZone.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_DropdownNotClosableZone.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_DropdownNotClosableZone.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_DropdownNotClosableZone.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_DropdownNotClosableZone;
}());
exports.Wrapper_DropdownNotClosableZone = Wrapper_DropdownNotClosableZone;
//# sourceMappingURL=DropdownNotClosableZone.ngfactory.js.map