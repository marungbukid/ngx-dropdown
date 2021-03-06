"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DropdownNotClosableZone_1 = require("./DropdownNotClosableZone");
var Dropdown = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function Dropdown(elementRef) {
        this.elementRef = elementRef;
        // -------------------------------------------------------------------------
        // Inputs / Outputs
        // -------------------------------------------------------------------------
        this.toggleClick = true;
        this.activateOnFocus = false;
        this.dropdownDisabled = false;
        this.onOpen = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    Dropdown.prototype.open = function () {
        if (!this.dropdownDisabled) {
            var element = this.elementRef.nativeElement;
            element.classList.add("open");
            this.onOpen.emit(undefined);
        }
    };
    Dropdown.prototype.close = function () {
        var element = this.elementRef.nativeElement;
        element.classList.remove("open");
        this.onClose.emit(undefined);
    };
    Dropdown.prototype.isOpened = function () {
        var element = this.elementRef.nativeElement;
        return element.classList.contains("open");
    };
    Dropdown.prototype.isInClosableZone = function (element) {
        if (!this.notClosableZone)
            return false;
        return this.notClosableZone.contains(element);
    };
    __decorate([
        core_1.Input("dropdownToggle"),
        __metadata("design:type", Object)
    ], Dropdown.prototype, "toggleClick", void 0);
    __decorate([
        core_1.Input("dropdownFocusActivate"),
        __metadata("design:type", Object)
    ], Dropdown.prototype, "activateOnFocus", void 0);
    __decorate([
        core_1.Input("dropdownDisabled"),
        __metadata("design:type", Object)
    ], Dropdown.prototype, "dropdownDisabled", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], Dropdown.prototype, "onOpen", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], Dropdown.prototype, "onClose", void 0);
    __decorate([
        core_1.ContentChild(DropdownNotClosableZone_1.DropdownNotClosableZone),
        __metadata("design:type", DropdownNotClosableZone_1.DropdownNotClosableZone)
    ], Dropdown.prototype, "notClosableZone", void 0);
    Dropdown = __decorate([
        core_1.Directive({
            selector: "[dropdown]",
            exportAs: "dropdown"
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], Dropdown);
    return Dropdown;
}());
exports.Dropdown = Dropdown;
//# sourceMappingURL=Dropdown.js.map