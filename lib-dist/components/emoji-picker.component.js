import { Component, EventEmitter, Output, ElementRef, Renderer } from '@angular/core';
import { DIRECTIONS } from "../lib/picker-directions";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/takeUntil';
var EmojiPickerComponent = (function () {
    function EmojiPickerComponent(_renderer, _el) {
        var _this = this;
        this._renderer = _renderer;
        this._el = _el;
        this.selectionEmitter = new EventEmitter();
        this.pickerCloseEmitter = new EventEmitter();
        this._windowResize = new Subject();
        this._destroyed = new Subject();
        this._windowResize
            .takeUntil(this._destroyed)
            .debounceTime(100)
            .subscribe(function (event) {
            _this.setPosition(_this._currentTarget, _this._currentDirection);
        });
    }
    EmojiPickerComponent.prototype.setPosition = function (target, directionCode) {
        if (directionCode === void 0) { directionCode = DIRECTIONS.bottom; }
        if (!target) {
            return console.error('Emoji-Picker: positioning failed due to missing target element or direction code');
        }
        this._renderer.setElementStyle(this._el.nativeElement, 'transform', '');
        /** Store anchor and direction */
        this._currentTarget = target;
        this._currentDirection = directionCode;
        var targetBorders = target.nativeElement.getBoundingClientRect(), thisBorders = this._el.nativeElement.getBoundingClientRect();
        var heightCorrection = 0, widthCorrection = 0;
        /** Setting up centering of picker for all cases */
        switch (this._currentDirection) {
            case DIRECTIONS.top:
            case DIRECTIONS.bottom:
                widthCorrection = targetBorders.left - thisBorders.left + (targetBorders.width - thisBorders.width) / 2;
                break;
            case DIRECTIONS.left:
            case DIRECTIONS.right:
                heightCorrection = targetBorders.top - thisBorders.top + (targetBorders.height - thisBorders.height) / 2;
                break;
        }
        /** Setting up relative positioning for all cases */
        switch (this._currentDirection) {
            case DIRECTIONS.top:
                heightCorrection = targetBorders.top - thisBorders.bottom;
                break;
            case DIRECTIONS.left:
                widthCorrection = targetBorders.left - thisBorders.right;
                break;
            case DIRECTIONS.right:
                widthCorrection = targetBorders.right - thisBorders.left;
                break;
            case DIRECTIONS.bottom:
                heightCorrection = targetBorders.bottom - thisBorders.top;
                break;
        }
        /** Correcting positioning due to overflow problems */
        if (thisBorders.bottom + heightCorrection > window.innerHeight) {
            heightCorrection += window.innerHeight - (thisBorders.bottom + heightCorrection);
        }
        if (thisBorders.top + heightCorrection < 0) {
            heightCorrection -= (thisBorders.top + heightCorrection);
        }
        if (thisBorders.right + widthCorrection > window.innerWidth) {
            widthCorrection += window.innerWidth - (thisBorders.right + widthCorrection);
        }
        if (thisBorders.left + widthCorrection < 0) {
            widthCorrection -= (thisBorders.left + widthCorrection);
        }
        /** set the position adjustments to the emoji picker element */
        this._renderer.setElementStyle(this._el.nativeElement, 'transform', "translate(" + widthCorrection + "px," + heightCorrection + "px)");
    };
    EmojiPickerComponent.prototype.setAutofocus = function (value) {
        this.emojiPickerAutofocus = value;
    };
    EmojiPickerComponent.prototype.onBackground = function (event) {
        /** internal mousedowns are ignored */
        if (event === this._lastHostMousedownEvent || event.emojiPickerExempt) {
            return;
        }
        this.pickerCloseEmitter.emit(event);
    };
    EmojiPickerComponent.prototype.ngOnDestroy = function () {
        this._destroyed.next(true);
    };
    return EmojiPickerComponent;
}());
export { EmojiPickerComponent };
EmojiPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-picker',
                styles: [':host { position: absolute; z-index: 9999; }'],
                template: "\n  <emoji-content (emoji-selection)=\"selectionEmitter.emit($event)\" [inputAutofocus]=\"emojiPickerAutofocus\"></emoji-content>\n  ",
                host: {
                    '(document:mousedown)': 'onBackground($event)',
                    '(mousedown)': '_lastHostMousedownEvent = $event',
                    '(window:resize)': '_windowResize.next($event)'
                }
            },] },
];
/** @nocollapse */
EmojiPickerComponent.ctorParameters = function () { return [
    { type: Renderer, },
    { type: ElementRef, },
]; };
EmojiPickerComponent.propDecorators = {
    'selectionEmitter': [{ type: Output, args: ['emoji-select',] },],
    'pickerCloseEmitter': [{ type: Output, args: ['picker-close',] },],
};
//# sourceMappingURL=emoji-picker.component.js.map