import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, ElementRef, EventEmitter, Output } from '@angular/core';
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/distinctUntilChanged';
import { EmojiPickerComponent } from './../components';
import { DIRECTIONS } from '../lib/picker-directions';
import { EmojiEvent } from "../";
var EmojiPickerApiDirective = (function () {
    function EmojiPickerApiDirective(_cfr, _vcr, _el) {
        var _this = this;
        this._cfr = _cfr;
        this._vcr = _vcr;
        this._el = _el;
        this._directionCode = DIRECTIONS.bottom;
        this.emojiPickerIfEmitter = new EventEmitter();
        /** (emojiPickerSelect)="eventHandler($event)" // emits emoji picking event */
        this.selectEmitter = new EventEmitter();
        this._emojiPickerOpenState = new Subject();
        this._destroyed = new Subject();
        this._emojiSubs = [];
        this._emojiPickerOpenState
            .takeUntil(this._destroyed)
            .distinctUntilChanged()
            .subscribe(function (value) {
            if (value) {
                _this.openPicker();
            }
            else {
                _this.closePicker();
            }
        });
    }
    Object.defineProperty(EmojiPickerApiDirective.prototype, "emojiPickerDirection", {
        /** [emojiPickerDirection]="'top' || 'bottom' || 'left' || 'right'" defaults to 'bottom' */
        set: function (direction) {
            if (DIRECTIONS[direction] === undefined) {
                console.error("Emoji-Picker: direction '" + direction + "' passed as input does not exist in DIRECTIONS table, defaulting to 'bottom'");
                this._directionCode = DIRECTIONS.bottom;
            }
            else {
                this._directionCode = DIRECTIONS[direction];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmojiPickerApiDirective.prototype, "emojiPickerIf", {
        /** [(emojiPickerIf)]="true || false" opens up or closes the picker */
        set: function (condition) {
            this._emojiPickerOpenState.next(condition);
        },
        enumerable: true,
        configurable: true
    });
    EmojiPickerApiDirective.prototype.openPicker = function () {
        var _this = this;
        this._emojiPickerFactory = this._emojiPickerFactory || this._cfr.resolveComponentFactory(EmojiPickerComponent);
        this._emojiPickerRef = this._emojiPickerRef || this._vcr.createComponent(this._emojiPickerFactory);
        this.recordSelection();
        this._emojiPickerRef.instance.setPosition(this._el, this._directionCode);
        this._emojiPickerRef.instance.setAutofocus(this.emojiPickerAutofocus);
        this._emojiSubs.push(this._emojiPickerRef.instance.pickerCloseEmitter.subscribe(function (event) { return _this.emojiPickerIfEmitter.emit(false); }), this._emojiPickerRef.instance.selectionEmitter.subscribe(function (event) { return _this.selectEmitter.emit(EmojiEvent.fromArray(event)); }));
        this.restoreSelection();
    };
    EmojiPickerApiDirective.prototype.closePicker = function () {
        if (!this._emojiPickerRef || !this._emojiPickerRef.destroy) {
            return;
        }
        this._emojiSubs.forEach(function (subscription) { return subscription.unsubscribe(); });
        this._emojiPickerRef.destroy();
        this._emojiSubs = [];
        delete this._emojiPickerRef;
    };
    EmojiPickerApiDirective.prototype.recordSelection = function () {
        if (!this.emojiPickerPreserveSelection) {
            return;
        }
        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                return this._recordedSelection = sel.getRangeAt(0);
            }
        }
        else if (document['selection'] && document['selection'].createRange) {
            return this._recordedSelection = document['selection'].createRange();
        }
    };
    EmojiPickerApiDirective.prototype.restoreSelection = function () {
        if (!this.emojiPickerPreserveSelection || !this._recordedSelection) {
            return;
        }
        if (window.getSelection) {
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(this._recordedSelection);
        }
        else if (document['selection'] && this._recordedSelection.select) {
            this._recordedSelection.select();
        }
    };
    EmojiPickerApiDirective.prototype.ngOnDestroy = function () {
        this._destroyed.next(true);
    };
    return EmojiPickerApiDirective;
}());
export { EmojiPickerApiDirective };
EmojiPickerApiDirective.decorators = [
    { type: Directive, args: [{
                selector: '[emojiPickerIf]',
                host: {
                    '(mousedown)': '$event.emojiPickerExempt = true' // marking off event listening on anchor
                }
            },] },
];
/** @nocollapse */
EmojiPickerApiDirective.ctorParameters = function () { return [
    { type: ComponentFactoryResolver, },
    { type: ViewContainerRef, },
    { type: ElementRef, },
]; };
EmojiPickerApiDirective.propDecorators = {
    'emojiPickerDirection': [{ type: Input, args: ['emojiPickerDirection',] },],
    'emojiPickerPreserveSelection': [{ type: Input, args: ['emojiPickerPreserveSelection',] },],
    'emojiPickerIf': [{ type: Input, args: ['emojiPickerIf',] },],
    'emojiPickerIfEmitter': [{ type: Output, args: ['emojiPickerIfChange',] },],
    'selectEmitter': [{ type: Output, args: ['emojiPickerSelect',] },],
    'emojiPickerAutofocus': [{ type: Input, args: ['emojiPickerAutofocus',] },],
};
//# sourceMappingURL=emoji-picker-api.directive.js.map