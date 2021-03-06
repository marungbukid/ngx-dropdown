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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Dropdown_1 = require("./Dropdown");
var DropdownOpen = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function DropdownOpen(dropdown, elementRef) {
        this.dropdown = dropdown;
        this.elementRef = elementRef;
        // -------------------------------------------------------------------------
        // Private Properties
        // -------------------------------------------------------------------------
        /**
         * This hack is needed for dropdown not to open and instantly closed
         */
        this.openedByFocus = false;
        var _this = this;
        this.closeDropdownOnOutsideClick = function closeDropdownOnOutsideClick(event) {
            _this.closeIfInClosableZone(event);
        };
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    DropdownOpen.prototype.toggle = function () {
        if (this.dropdown.isOpened()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    DropdownOpen.prototype.open = function () {
        if (this.dropdown.isOpened())
            return;
        this.dropdown.open();
        document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
    };
    DropdownOpen.prototype.close = function () {
        if (!this.dropdown.isOpened())
            return;
        this.dropdown.close();
        document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
    };
    DropdownOpen.prototype.openDropdown = function () {
        if (this.dropdown.activateOnFocus && this.openedByFocus) {
            this.openedByFocus = false;
            return;
        }
        if (this.dropdown.isOpened() && this.dropdown.toggleClick) {
            this.close();
        }
        else {
            this.open();
        }
    };
    DropdownOpen.prototype.dropdownKeydown = function (event) {
        if (event.keyCode === 40) { // down
            this.openDropdown();
        }
    };
    DropdownOpen.prototype.onFocus = function () {
        if (!this.dropdown.activateOnFocus)
            return;
        this.openedByFocus = true;
        this.dropdown.open();
        document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
    };
    DropdownOpen.prototype.onBlur = function (event) {
        if (!this.dropdown.activateOnFocus)
            return;
        if (event.relatedTarget &&
            !this.dropdown.isInClosableZone(event.relatedTarget) &&
            event.relatedTarget !== this.elementRef.nativeElement) {
            this.dropdown.close();
            document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
        }
    };
    // -------------------------------------------------------------------------
    // Lifecycle Methods
    // -------------------------------------------------------------------------
    DropdownOpen.prototype.ngOnDestroy = function () {
        document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    DropdownOpen.prototype.closeIfInClosableZone = function (event) {
        if (!this.dropdown.isInClosableZone(event.target)
            && event.target !== this.elementRef.nativeElement
            && !this.elementRef.nativeElement.contains(event.target)) {
            this.dropdown.close();
            document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
        }
    };
    __decorate([
        core_1.HostListener("click"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownOpen.prototype, "openDropdown", null);
    __decorate([
        core_1.HostListener("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], DropdownOpen.prototype, "dropdownKeydown", null);
    __decorate([
        core_1.HostListener("focus"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownOpen.prototype, "onFocus", null);
    __decorate([
        core_1.HostListener("blur", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [FocusEvent]),
        __metadata("design:returntype", void 0)
    ], DropdownOpen.prototype, "onBlur", null);
    DropdownOpen = __decorate([
        core_1.Directive({
            selector: "[dropdown-open]",
            exportAs: "dropdownOpen"
        }),
        __param(0, core_1.Host()),
        __metadata("design:paramtypes", [Dropdown_1.Dropdown,
            core_1.ElementRef])
    ], DropdownOpen);
    return DropdownOpen;
}());
exports.DropdownOpen = DropdownOpen;
//# sourceMappingURL=DropdownOpen.js.map