import { Component, EventEmitter, Output, ViewChild, Renderer, Input } from '@angular/core';
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/throttleTime";
import "rxjs/add/operator/takeUntil";
var EmojiSearchComponent = (function () {
    function EmojiSearchComponent(_renderer) {
        var _this = this;
        this._renderer = _renderer;
        this.searchEmitter = new EventEmitter();
        this._searchValue = new Subject();
        this._destroyed = new Subject();
        this._searchValue
            .takeUntil(this._destroyed)
            .subscribe(function (value) {
            _this.searchEmitter.emit(value);
        });
    }
    EmojiSearchComponent.prototype.ngAfterViewInit = function () {
        if (this.inputAutofocus) {
            this._renderer.invokeElementMethod(this.input.nativeElement, 'focus');
        }
    };
    EmojiSearchComponent.prototype.handleInputChange = function (event) {
        this._searchValue.next(event);
    };
    EmojiSearchComponent.prototype.ngOnDestroy = function () {
        this._destroyed.next(true);
    };
    return EmojiSearchComponent;
}());
export { EmojiSearchComponent };
EmojiSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-search',
                styles: ["input{width:100%;padding:5px 10px;border:1px solid #f0f0f0;outline:0;font-size:14px;font-weight:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}input:focus{border-color:#d7d7d7}"],
                template: "\n  <input type=\"text\" autocomplete=\"off\" #input (input)=\"handleInputChange($event.target.value)\" placeholder=\"Search\"/>\n  "
            },] },
];
/** @nocollapse */
EmojiSearchComponent.ctorParameters = function () { return [
    { type: Renderer, },
]; };
EmojiSearchComponent.propDecorators = {
    'inputAutofocus': [{ type: Input, args: ['inputAutofocus',] },],
    'searchEmitter': [{ type: Output, args: ['search',] },],
    'input': [{ type: ViewChild, args: ['input',] },],
};
//# sourceMappingURL=emoji-search.component.js.map