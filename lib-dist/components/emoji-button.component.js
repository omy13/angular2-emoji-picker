import { Component, Input, EventEmitter, Output } from '@angular/core';
import { EmojiPickerOptions } from "../services";
var EmojiButtonComponent = (function () {
    function EmojiButtonComponent(emojiPickerOptions) {
        this.emojiPickerOptions = emojiPickerOptions;
        this.selectionEmitter = new EventEmitter();
    }
    return EmojiButtonComponent;
}());
export { EmojiButtonComponent };
EmojiButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-button',
                styles: [":host{display:inline-block}.emoji-button{padding:0;outline:0;background:0 0;cursor:pointer;width:34px;height:34px;border:5px solid transparent;border-radius:3px;font-size:24px;line-height:1.1;-webkit-transition:all .2s;transition:all .2s}.emoji-button-from-sheet-enclosure:focus,.emoji-button-from-sheet-enclosure:hover,.emoji-button:focus,.emoji-button:hover{background:#f1f1f1;border-color:#f1f1f1}.emoji-button-from-sheet{padding:0;border:0;outline:0;display:inline-block;background-repeat:no-repeat;-webkit-box-shadow:0 0 1px 1px #fff inset;box-shadow:0 0 1px 1px #fff inset;background-size:1225px;width:25px;height:25px}.emoji-button-from-sheet-enclosure{display:inline-block;cursor:pointer;line-height:0;padding:4.5px;border-radius:3px}.emoji-button-from-sheet-enclosure:focus .emoji-button-from-sheet,.emoji-button-from-sheet-enclosure:hover .emoji-button-from-sheet{-webkit-box-shadow:0 0 1px 1px #f1f1f1 inset;box-shadow:0 0 1px 1px #f1f1f1 inset}"],
                template: "\n<button\n  *ngIf=\"!emojiPickerOptions.options.sheet; else sheetButton\"\n  class=\"emoji-button\"\n  (click)=\"selectionEmitter.emit(dataToEmit || emoji)\">\n  {{emoji[0]}}\n</button>\n<ng-template #sheetButton>\n  <span class=\"emoji-button-from-sheet-enclosure\" \n      (click)=\"selectionEmitter.emit(dataToEmit || emoji)\">\n    <span\n      class=\"emoji-button-from-sheet\"\n      [style.backgroundImage]=\"'url(' + emojiPickerOptions.options.sheet.url + ')'\"\n      [style.backgroundPositionX]=\"-emojiPickerOptions.options.sheet.locator(emoji[1]).x * 25 + 'px'\"\n      [style.backgroundPositionY]=\"-emojiPickerOptions.options.sheet.locator(emoji[1]).y * 25 + 'px'\">\n    </span>\n  </span>\n</ng-template>\n  "
            },] },
];
/** @nocollapse */
EmojiButtonComponent.ctorParameters = function () { return [
    { type: EmojiPickerOptions, },
]; };
EmojiButtonComponent.propDecorators = {
    'emoji': [{ type: Input, args: ['emoji',] },],
    'dataToEmit': [{ type: Input, args: ['dataToEmit',] },],
    'options': [{ type: Input, args: ['options',] },],
    'fitzpatrick': [{ type: Input, args: ['fitzpatrick',] },],
    'selectionEmitter': [{ type: Output, args: ['selection',] },],
};
//# sourceMappingURL=emoji-button.component.js.map