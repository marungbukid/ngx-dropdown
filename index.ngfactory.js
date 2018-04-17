"use strict";
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var import0 = require("@angular/core/src/linker/ng_module_factory");
var import1 = require("./index");
var import2 = require("@angular/common/src/common_module");
var import3 = require("@angular/common/src/localization");
var import5 = require("@angular/core/src/i18n/tokens");
var DropdownModuleInjector = /** @class */ (function (_super) {
    __extends(DropdownModuleInjector, _super);
    function DropdownModuleInjector(parent) {
        return _super.call(this, parent, [], []) || this;
    }
    Object.defineProperty(DropdownModuleInjector.prototype, "_NgLocalization_2", {
        get: function () {
            if ((this.__NgLocalization_2 == null)) {
                (this.__NgLocalization_2 = new import3.NgLocaleLocalization(this.parent.get(import5.LOCALE_ID)));
            }
            return this.__NgLocalization_2;
        },
        enumerable: true,
        configurable: true
    });
    DropdownModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._DropdownModule_1 = new import1.DropdownModule();
        return this._DropdownModule_1;
    };
    DropdownModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import1.DropdownModule)) {
            return this._DropdownModule_1;
        }
        if ((token === import3.NgLocalization)) {
            return this._NgLocalization_2;
        }
        return notFoundResult;
    };
    DropdownModuleInjector.prototype.destroyInternal = function () {
    };
    return DropdownModuleInjector;
}(import0.NgModuleInjector));
exports.DropdownModuleNgFactory = new import0.NgModuleFactory(DropdownModuleInjector, import1.DropdownModule);
//# sourceMappingURL=index.ngfactory.js.map