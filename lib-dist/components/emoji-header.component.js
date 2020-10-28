import { Component, EventEmitter, Output, Input } from '@angular/core';
var EmojiHeaderComponent = (function () {
    function EmojiHeaderComponent() {
        this.categorySelection = new EventEmitter();
        this.searchEmitter = new EventEmitter();
    }
    return EmojiHeaderComponent;
}());
export { EmojiHeaderComponent };
EmojiHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-header',
                styles: [":host{display:block;border-bottom:1px solid #f9f9f9;border-radius:3px 3px 0 0;padding:10px;background:#fcfcfc}"],
                template: "\n  <emoji-categories [emojisCategories]=\"emojisCategories\" (categorySelection)=\"categorySelection.emit($event)\"></emoji-categories>\n  <emoji-search (search)=\"searchEmitter.emit($event)\" [inputAutofocus]=\"inputAutofocus\"></emoji-search>\n  "
            },] },
];
/** @nocollapse */
EmojiHeaderComponent.ctorParameters = function () { return []; };
EmojiHeaderComponent.propDecorators = {
    'emojisCategories': [{ type: Input, args: ['emojisCategories',] },],
    'inputAutofocus': [{ type: Input, args: ['inputAutofocus',] },],
    'categorySelection': [{ type: Output, args: ['categorySelection',] },],
    'searchEmitter': [{ type: Output, args: ['search',] },],
};
//# sourceMappingURL=emoji-header.component.js.map