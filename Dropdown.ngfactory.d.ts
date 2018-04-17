/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from './Dropdown';
import * as import2 from '@angular/core/src/linker/view';
export declare class Wrapper_Dropdown {
    _eventHandler: Function;
    context: import0.Dropdown;
    _changed: boolean;
    _expr_0: any;
    _expr_1: any;
    _expr_2: any;
    subscription0: any;
    subscription1: any;
    constructor(p0: any);
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    check_toggleClick(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_activateOnFocus(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_dropdownDisabled(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any, emit0: boolean, emit1: boolean): void;
}
