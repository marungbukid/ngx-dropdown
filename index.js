"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var DropdownNotClosableZone_1 = require("./DropdownNotClosableZone");
var Dropdown_1 = require("./Dropdown");
var DropdownOpen_1 = require("./DropdownOpen");
__export(require("./DropdownNotClosableZone"));
__export(require("./Dropdown"));
__export(require("./DropdownOpen"));
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    DropdownModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                DropdownNotClosableZone_1.DropdownNotClosableZone,
                Dropdown_1.Dropdown,
                DropdownOpen_1.DropdownOpen,
            ],
            exports: [
                DropdownNotClosableZone_1.DropdownNotClosableZone,
                Dropdown_1.Dropdown,
                DropdownOpen_1.DropdownOpen,
            ]
        })
    ], DropdownModule);
    return DropdownModule;
}());
exports.DropdownModule = DropdownModule;
//# sourceMappingURL=index.js.map